import { useState } from 'react';
import { motion } from 'framer-motion';

const NOCODB_URL = import.meta.env.VITE_NOCODB_URL;
const API_TOKEN = import.meta.env.VITE_NOCODB_TOKEN;

export default function EvaluacionForm({ onRegistroCreado }) {
  const [estudiante, setEstudiante] = useState('');
  const [actividad, setActividad] = useState('');
  const [puntaje, setPuntaje] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setMensaje(null);
    setError(null);

    if (!estudiante.trim() || !actividad.trim()) {
      setError('Completa el nombre del estudiante y la actividad.');
      return;
    }

    try {
      setEnviando(true);

      // Ajusta las claves del objeto si en tu tabla de NocoDB se llaman distinto
      const payload = {
        estudiante: estudiante.trim(),
        actividad: actividad.trim(),
        puntaje: puntaje === '' ? 0 : Number(puntaje),
      };

      const respuesta = await fetch(NOCODB_URL, {
        method: 'POST',
        headers: {
          'xc-token': API_TOKEN,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al guardar en NocoDB`);
      }

      const data = await respuesta.json();
      setEstudiante('');
      setActividad('');
      setPuntaje('');
      setMensaje('Registro guardado correctamente en NocoDB.');

      if (onRegistroCreado) {
        onRegistroCreado(data);
      }
    } catch (err) {
      setError(`No se pudo guardar: ${err.message}`);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <motion.section
      aria-label="Formulario de evaluación"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Registro de Evaluación</h2>

      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="estudiante">Estudiante:</label>
          <input
            id="estudiante"
            type="text"
            value={estudiante}
            onChange={(e) => setEstudiante(e.target.value)}
            placeholder="Ej. Ana López"
          />
        </div>

        <div>
          <label htmlFor="actividad">Actividad o tema TIC:</label>
          <input
            id="actividad"
            type="text"
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
            placeholder="Ej. Estructura HTML y CSS"
          />
        </div>

        <div>
          <label htmlFor="puntaje">Puntaje:</label>
          <input
            id="puntaje"
            type="number"
            min="0"
            max="100"
            value={puntaje}
            onChange={(e) => setPuntaje(e.target.value)}
            placeholder="Ej. 20"
          />
        </div>

        <motion.button
          type="submit"
          disabled={enviando}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {enviando ? 'Guardando...' : 'Guardar evaluación'}
        </motion.button>
      </form>

      {mensaje && <p>{mensaje}</p>}
      {error && <p>{error}</p>}
    </motion.section>
  );
}
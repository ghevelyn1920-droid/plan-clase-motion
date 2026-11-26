import { useState } from 'react';
import { motion } from 'framer-motion';

const NOCODB_URL = import.meta.env.VITE_NOCODB_URL || 'https://app.nocodb.com/api/v2/tables/m1lgc0ac9gclb1v/records';
const API_TOKEN = import.meta.env.VITE_NOCODB_TOKEN || 'nc_pat_qj3iqFKJJsinuv4T146FBVznvSgMwTAVqdrf0Tqf';

export default function EvaluacionForm({ onRegistroCreado }) {
  const [nombre, setNombre] = useState('');
  const [seccion, setSeccion] = useState('');
  const [respuestaTexto, setRespuestaTexto] = useState('');
  const [puntaje, setPuntaje] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setMensaje(null);
    setError(null);

    if (!nombre.trim() || !seccion.trim() || !respuestaTexto.trim()) {
      setError('Completa el nombre, la sección y la respuesta.');
      return;
    }

    try {
      setEnviando(true);

      const payload = {
        Nombre: nombre.trim(),
        Seccion: seccion.trim(),
        Respuesta: respuestaTexto.trim(),
        Puntaje: puntaje === '' ? 0 : Number(puntaje),
        Fecha: new Date().toLocaleDateString('es-GT'),
      };

      const res = await fetch(NOCODB_URL, {
        method: 'POST',
        headers: {
          'xc-token': API_TOKEN,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status} al guardar en NocoDB`);
      }

      const data = await res.json();
      setNombre('');
      setSeccion('');
      setRespuestaTexto('');
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
      <h2>Registro de Evaluación — Condicionales (if/else)</h2>

      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="nombre">Nombre del estudiante:</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Ana López"
          />
        </div>

        <div>
          <label htmlFor="seccion">Sección:</label>
          <input
            id="seccion"
            type="text"
            value={seccion}
            onChange={(e) => setSeccion(e.target.value)}
            placeholder="Ej. 3ro Básico A"
          />
        </div>

        <div>
          <label htmlFor="respuesta">Respuesta / Filtro de acceso (if/else):</label>
          <textarea
            id="respuesta"
            value={respuestaTexto}
            onChange={(e) => setRespuestaTexto(e.target.value)}
            placeholder="Escribe tu condición o respuesta..."
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
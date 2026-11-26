import { motion, MotionConfig } from "framer-motion";
import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivoCard";
import ActividadItem from "./components/ActividadItem";
import ListaActividades from "./components/ListaActividades";

const actividadesIniciales = [
  {
    id: 1,
    titulo: "Exploración guiada del concepto",
    duracion: "10 min",
    contenido:
      "Observa cómo cambia la interfaz al activar o desactivar el estado. Identifica qué elemento cambia primero y qué condición dispara el cambio."
  },
  {
    id: 2,
    titulo: "Práctica en equipo con ejemplos cotidianos",
    duracion: "20 min",
    contenido:
      "En pareja, redacten dos ejemplos cotidianos con condicionales (si se cumple X, pasa Y; si no, pasa Z) y expliquen cómo se representan en lógica."
  },
  {
    id: 3,
    titulo: "Puesta en común y cierre reflexivo",
    duracion: "10 min",
    contenido:
      "Compartan una duda de la práctica y comenten cómo una animación breve ayuda a entender mejor el comportamiento de la aplicación."
  }
];

import EvaluacionForm from './components/EvaluacionForm';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main
        style={{
          maxWidth: "820px",
          margin: "2rem auto",
          padding: "0 1rem",
          display: "grid",
          gap: "1.25rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <HeaderClase
          tema="Secuencia didáctica interactiva"
          titulo="Plan de Clase en Movimiento"
          subtitulo="Integración de componentes animados con Framer Motion"
        />

        <ObjetivosCard
          objetivos={[
            "Comprender cómo el estado local actualiza la interfaz de forma clara.",
            "Aplicar animaciones breves con sentido pedagógico sin saturar al estudiante.",
            "Explicar el código en pareja conectando técnica y didáctica.",
          ]}
        />

        <section style={{ display: "grid", gap: "0.75rem" }}>
          <h2 style={{ color: "#14213d", margin: 0 }}>Actividades de la sesión</h2>
          <motion.div layout style={{ display: "grid", gap: "0.6rem" }}>
            {actividadesIniciales.map((act) => (
              <ActividadItem
                key={act.id}
                titulo={act.titulo}
                duracion={act.duracion}
              />
            ))}
          </motion.div>
        </section>
        <ListaActividades />
        
<EvaluacionForm />
        
      </main>
    
    </MotionConfig>
  );
}

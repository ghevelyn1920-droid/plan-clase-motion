import { motion, MotionConfig } from "framer-motion";
import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivosCard";
import ActividadItem from "./components/ActividadItem";

const actividadesIniciales = [
  { id: 1, titulo: "Exploración guiada del concepto", duracion: "10 min" },
  { id: 2, titulo: "Práctica en equipo con ejemplos cotidianos", duracion: "20 min" },
  { id: 3, titulo: "Puesta en común y cierre reflexivo", duracion: "10 min" },
];

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
      </main>
    </MotionConfig>
  );
}

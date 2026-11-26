import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ActividadItem({ titulo, duracion, contenido, completada }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setCompletada((prev) => !prev)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.9rem 1rem",
        borderRadius: "10px",
        cursor: "pointer",
        backgroundColor: completada ? "#eef6ee" : "#f8fafc",
        border: completada ? "1px solid #2e7d32" : "1px solid #cbd5e1",
      }}
    >
      <div>
        <strong
          style={{
            textDecoration: completada ? "line-through" : "none",
            color: completada ? "#2e7d32" : "#14213d",
          }}
        >
          {titulo}
        </strong>
        <div style={{ fontSize: "0.85rem", color: "#475569" }}>
          Duración estimada: {duracion}
        </div>
      </div>

      <span
        style={{
          fontSize: "0.85rem",
          fontWeight: "bold",
          color: completada ? "#2e7d32" : "#14213d",
        }}
      >
        {completada ? "✓ Completada" : "Marcar"}
      </span>
      <div style={{ marginTop: "0.5rem" }}>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setAbierto((prev) => !prev);
          }}
          style={{
            padding: "0.25rem 0.65rem",
            fontSize: "0.8rem",
            cursor: "pointer"
          }}
        >
          {abierto ? "Ocultar guía" : "Ver guía"}
        </button>

        <AnimatePresence initial={false}>
          {abierto && contenido && (
            <motion.div
              key="guia"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                marginTop: "0.5rem",
                paddingTop: "0.5rem",
                borderTop: "1px solid #cbd5e1",
                fontSize: "0.9rem"
              }}
            >
              {contenido}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
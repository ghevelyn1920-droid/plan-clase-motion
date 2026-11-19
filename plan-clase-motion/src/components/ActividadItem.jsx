import { useState } from "react";
import { motion } from "framer-motion";

export default function ActividadItem({ titulo, duracion }) {
  const [completada, setCompletada] = useState(false);

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
    </motion.div>
  );
}
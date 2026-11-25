import { motion } from "framer-motion";

export default function HeaderClase({ etiqueta, titulo, subtitulo }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#f8fafc",
        padding: "1.75rem",
        borderRadius: "16px",
        border: "1px solid #334155",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.25)",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontSize: "0.75rem",
          fontWeight: "600",
          letterSpacing: "0.08em",
          padding: "0.3rem 0.75rem",
          borderRadius: "999px",
          textTransform: "uppercase",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          color: "#e2e8f0",
        }}
      >
        {etiqueta}
      </span>

      <h1
        style={{
          margin: "0.75rem 0 0.4rem",
          fontSize: "1.85rem",
          color: "#ffffff",
          fontWeight: "700",
        }}
      >
        {titulo}
      </h1>

      <p style={{ margin: 0, color: "#cbd5e1", fontSize: "0.95rem" }}>
        {subtitulo}
      </p>
    </motion.header>
  );
}


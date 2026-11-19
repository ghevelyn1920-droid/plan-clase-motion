import { motion } from "framer-motion";

export default function HeaderClase({ titulo, subtitulo, tema }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundColor: "#14213d",
        color: "#ffffff",
        padding: "1.5rem",
        borderRadius: "12px",
        borderBottom: "4px solid #fca311",
      }}
    >
      <span style={{ color: "#fca311", fontWeight: "bold", fontSize: "0.9rem" }}>
        {tema}
      </span>
      <h1 style={{ margin: "0.35rem 0" }}>{titulo}</h1>
      <p style={{ margin: 0, opacity: 0.9 }}>{subtitulo}</p>
    </motion.header>
  );
}

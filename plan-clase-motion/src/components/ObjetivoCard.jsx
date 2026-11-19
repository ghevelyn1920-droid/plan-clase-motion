import { motion } from "framer-motion";

export default function ObjetivoCard({ objetivos = [] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #d9e2ec",
        borderRadius: "12px",
        padding: "1.25rem",
        boxShadow: "0 4px 12px rgba(20, 33, 61, 0.08)",
      }}
    >
      <h2 style={{ color: "#14213d", marginTop: 0 }}>Objetivos de aprendizaje</h2>
      <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: 1.6 }}>
        {objetivos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.section>
  );
}

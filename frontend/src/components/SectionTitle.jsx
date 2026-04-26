import React from "react";
import { motion } from "framer-motion";

export const SectionTitle = ({ eyebrow, title, color = "navy", align = "left" }) => {
  const titleColor = color === "gold" ? "text-gold" : color === "cream" ? "text-cream" : "text-navy";
  const eyebrowColor = color === "gold" ? "text-cream/80" : "text-red";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`font-ui text-sm ${eyebrowColor}`}>{eyebrow}</div>
      )}
      <h2
        className={`font-display ${titleColor}`}
        style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1 }}
      >
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;

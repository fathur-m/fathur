import React from "react";
import { motion } from "framer-motion";
import "./Button.css";

const Button = ({ onClick, children, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`default-btn ${className}`}
      whileTap={{ scale: 1.1 }}
      type="submit"
    >
      {children}
    </motion.button>
  );
};

export default Button;

import React from "react";
import { motion } from "framer-motion";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <motion.div
      className="loading-page"
      animate={{ scale: 0 }}
      transition={{ duration: 0.5, delay: 6.7 }}
    >
      <div className="text-hello">
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1, delay: 1 }}
        >
          H
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1, delay: 2 }}
        >
          E
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1, delay: 3 }}
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1, delay: 4 }}
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1, delay: 5 }}
        >
          0
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default LoadingPage;

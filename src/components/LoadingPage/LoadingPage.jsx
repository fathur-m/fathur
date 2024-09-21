import React from "react";
import { motion } from "framer-motion";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <motion.div
      className="loading-page"
      animate={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: 4 }}
    >
      <div className="text-hello">
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          H
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          E
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          0
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default LoadingPage;

import React from "react";
import { motion } from "framer-motion";
import pageVariants from "../../components/Animate";
import "./Work.css";

const Work = () => {
  return (
    <motion.div
      className="work body-w"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <p className="light-48 work-title">
        I'm too lazy to make this, wait until I update this page
        <span role="img" aria-label="gig">
          😁
        </span>
      </p>
    </motion.div>
  );
};

export default Work;

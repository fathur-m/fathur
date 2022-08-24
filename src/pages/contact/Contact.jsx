import React from "react";
import { motion } from "framer-motion";
import pageVariants from "../../components/Animate";
import "./Contact.css";
import Form from "../../components/Form/Form";

const Contact = () => {
  return (
    <motion.div
      className="contact body-w"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <h1 className="c-title light-48">
        Say hello to Fathur{" "}
        <span role="img" aria-label="hi">
          👋
        </span>
      </h1>
      <Form />
    </motion.div>
  );
};

export default Contact;

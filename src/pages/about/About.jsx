import React, { useRef } from "react";
import { motion } from "framer-motion";
import pageVariants from "../../components/Animate";
import "./About.css";
import ImgAbout from "../../assets/img/roundpic.png";
import Button from "../../components/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import AboutSection from "./AboutSection";
import Social from "../../components/Social/Social";

const About = () => {
  const scrollref = useRef();
  const workBtn = () => {
    scrollref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.div
      className="about-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="about">
        <h1 className="light-64 a-title">About me</h1>
        <div className="a-content">
          <h1 className="hi-mobile light-24">
            Hi, I'm Fathur
            <span role="img" aria-label="hi">
              👋
            </span>
          </h1>
          <div className="a-left">
            <img src={ImgAbout} alt="/" />
            <Social className="a-social" />
          </div>
          <div className="a-right">
            <h1 className="hi-ftr light-24">
              Hi, I'm Fathur
              <span role="img" aria-label="hi">
                👋
              </span>
            </h1>
            <h1 className="light-24">
              I’m a UI Designer and Front End Developer
            </h1>
            <h1 className="light-24">I also design a Brand Logo</h1>
            <h1 className="light-24">And develop iOS apps with SwiftUI</h1>
            <Button className="work-btn" onClick={workBtn}>
              I Work With <BsArrowRight className="arrow" />
            </Button>
          </div>
        </div>
      </div>
      <AboutSection scrollref={scrollref} />
    </motion.div>
  );
};

export default About;

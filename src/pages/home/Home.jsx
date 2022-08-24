import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import FathurImg from "../../assets/img/imglight.png";
import ImgVector from "../../assets/img/imgvector.png";
import { Link } from "react-router-dom";
import Social from "../../components/Social/Social";
import pageVariants from "../../components/Animate";
import Button from "../../components/Button/Button";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <motion.div
      className="home body-w"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="h-left">
        <div className="text-type">
          <TypeAnimation
            sequence={[
              "Hello", // Types 'One'
              500, // Waits 1s
              "Hello I'm", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              "Hello I'm Fathur 👋", // Types 'Three' without deleting 'Two'
              3000,
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="light-96 h-title"
          />
        </div>
        <h1 className="light-24">Front End Developer</h1>
        <h1 className="light-24">UI Designer</h1>
        <h1 className="light-24">iOS Development (SwiftUI)</h1>
        <Link to="/about">
          <Button className="home-btn">About me</Button>
        </Link>
      </div>
      <div className="h-right">
        <img src={FathurImg} alt="/" />
        <img className="h-vector" src={ImgVector} alt="/" />
      </div>
      <Social className="h-social" />
      <h1 className="text-bg-top light-96">I CODE & DESIGN</h1>
      <h1 className="text-bg-bot light-96">I BUILD & DEPLOY</h1>
    </motion.div>
  );
};

export default Home;

import React, { useRef, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Cssimg from "../../assets/img/cardimg/cssimg.png";
import FirebaseImg from "../../assets/img/cardimg/firebaseimg.png";
import GithubImg from "../../assets/img/cardimg/githubimg.png";
import HtmlImg from "../../assets/img/cardimg/htmlimg.png";
import ReactImg from "../../assets/img/cardimg/reactimg.png";
import SwiftImg from "../../assets/img/cardimg/swiftimg.png";
import SwiftUiImg from "../../assets/img/cardimg/swiftuiimg.png";

const Carousel = () => {
  const [windowSize] = useState(getWindowSize());
  const carousel = useRef(0);
  const nextBtn = () => {
    const nextValue = windowSize.innerWidth - 42;
    carousel.current.scrollBy({ top: 0, left: nextValue, behavior: "smooth" });
    console.log(nextValue);
  };
  const prevBtn = () => {
    const nextValue = windowSize.innerWidth - 42;
    carousel.current.scrollBy({ top: 0, left: -nextValue, behavior: "smooth" });
  };

  return (
    <>
      <div className="mobile-slide" ref={carousel}>
        <div className="card react mobile">
          <img src={ReactImg} alt="/" />
        </div>
        <div className="card firebase mobile">
          <img src={FirebaseImg} alt="/" />
        </div>
        <div className="card html mobile">
          <img src={HtmlImg} alt="/" />
        </div>
        <div className="card css mobile">
          <img src={Cssimg} alt="/" />
        </div>
        <div className="card swift mobile">
          <img src={SwiftImg} alt="/" />
        </div>
        <div className="card swiftui mobile">
          <img src={SwiftUiImg} alt="/" />
        </div>
        <div className="card github mobile">
          <img src={GithubImg} alt="/" />
        </div>
      </div>
      <div className="slide-btn">
        <motion.span whileTap={{ scale: 1.2 }} onClick={prevBtn}>
          <FaLongArrowAltLeft />
        </motion.span>
        <motion.span whileTap={{ scale: 1.2 }} onClick={nextBtn}>
          <FaLongArrowAltRight />
        </motion.span>
      </div>
    </>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Carousel;

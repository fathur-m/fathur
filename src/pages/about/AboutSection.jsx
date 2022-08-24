import React from "react";
import "./Section.css";
import Xcode from "../../assets/img/cardimg/xcodeimg.png";
import VscImg from "../../assets/img/cardimg/vscimg.png";
import AiImg from "../../assets/img/cardimg/aiimg.png";
import Cssimg from "../../assets/img/cardimg/cssimg.png";
import FigmaImg from "../../assets/img/cardimg/figmaimg.png";
import FirebaseImg from "../../assets/img/cardimg/firebaseimg.png";
import GithubImg from "../../assets/img/cardimg/githubimg.png";
import HtmlImg from "../../assets/img/cardimg/htmlimg.png";
import PsImg from "../../assets/img/cardimg/psimg.png";
import ReactImg from "../../assets/img/cardimg/reactimg.png";
import SwiftImg from "../../assets/img/cardimg/swiftimg.png";
import SwiftUiImg from "../../assets/img/cardimg/swiftuiimg.png";
import XdImg from "../../assets/img/cardimg/xdimg.png";
import JsImg from "../../assets/img/cardimg/jsimg.png";
import Carousel from "../../components/Carousel/Carousel";

const AboutSection = ({ scrollref }) => {
  return (
    <div className="a-section" ref={scrollref}>
      <div className="section-hero">
        <h1 className="light-64 title-section">
          I have experience working with
        </h1>
        <div className="img-hero">
          <img className="xcode" src={Xcode} alt="/" />
          <img className="vsc" src={VscImg} alt="/" />
        </div>
      </div>
      <div className="card-container">
        <div className="card js js-web">
          <img src={JsImg} alt="/" />
        </div>
        <div className="card react web">
          <img src={ReactImg} alt="/" />
        </div>
        <div className="card html web">
          <img src={HtmlImg} alt="/" />
        </div>
        <div className="card css web">
          <img src={Cssimg} alt="/" />
        </div>
        <div className="card swift web">
          <img src={SwiftImg} alt="/" />
        </div>
        <div className="card swiftui web">
          <img src={SwiftUiImg} alt="/" />
        </div>
        <div className="card firebase web">
          <img src={FirebaseImg} alt="/" />
        </div>
        <div className="card github web">
          <img src={GithubImg} alt="/" />
        </div>
        <Carousel />
        <div className="card ps">
          <img src={PsImg} alt="/" />
        </div>
        <div className="card ai">
          <img src={AiImg} alt="/" />
        </div>
        <div className="card xd">
          <img src={XdImg} alt="/" />
        </div>
        <div className="card figma">
          <img src={FigmaImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

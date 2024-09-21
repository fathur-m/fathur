import React from "react";
import "./Social.css";
import Ig from "../../assets/img/ig.png";
import Github from "../../assets/img/github.png";
import Linkedin from "../../assets/img/linkedin.png";
import openInNewTab from "../OpenLink";

const Social = ({ className = "" }) => {
  const openLink = (url) => {
    return () => openInNewTab(url);
  };

  return (
    <div className={`social ${className}`}>
      <img
        onClick={openLink("https://www.instagram.com/ftrmd3/")}
        src={Ig}
        alt="/"
      />
      <img
        onClick={openLink("https://github.com/fathur-m")}
        src={Github}
        alt="/"
      />
      <img
        onClick={openLink(
          "https://www.linkedin.com"
        )}
        src={Linkedin}
        alt="/"
      />
    </div>
  );
};

export default Social;

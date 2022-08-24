import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Nlogo from "../../assets/img/logo.png";
import navOpen from "../../assets/img/navopen.png";
import navClose from "../../assets/img/navclose.png";
import { motion } from "framer-motion";

const variants = {
  open: { right: 0 },
  closed: { right: "-100%" },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [nav]);
  return (
    <div className="nav">
      <nav>
        <div className="n-logo">
          <Link to="/">
            <img src={Nlogo} alt="fathur logo" />
          </Link>
        </div>
        <ul className="n-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mywork">My Work</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <li className="n-ctc">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <motion.ul
          className="n-list-mobile"
          animate={nav ? "open" : "closed"}
          variants={variants}
          transition={{ type: "tween", duration: 0.5 }}
          onClick={() => setNav(!nav)}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mywork">My Work</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </motion.ul>
        <div className="navbtn" onClick={() => setNav(!nav)}>
          <motion.img
            whileTap={{ scale: 1.2 }}
            src={nav ? navClose : navOpen}
            alt="/"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

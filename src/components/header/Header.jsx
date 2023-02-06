import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";
import CTA from "../header/CTA";
import BrandImage from "../../assets/me-1.png";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Front-end Developer",
      "Web Developer",
      "React Developer",
      "UI/UX Designer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -50,
          scale: .1,
          blur: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          blur: 0,
          transition: {
            duration: 1.5,
          },
        }}
        id="home"
      >
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Nikhil Ranjan Kumar</h1>
          <h5 className="text-light text">
            {text}
            <Cursor cursorColor="#9e9e" />{" "}
          </h5>
          <CTA />
          <HeaderSocial />
          <div className="brand__image">
            <img src={BrandImage} alt="Niku-ME" />
          </div>
          <a href="#about" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </motion.header>
    </>
  );
};

export default Header;

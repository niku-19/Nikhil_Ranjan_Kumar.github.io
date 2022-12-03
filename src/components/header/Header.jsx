import React from "react";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";
import CTA from "../header/CTA";
import BrandImage from "../../assets/me-1.png";

const Header = () => {
  return (
    <>
      <header id="home">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Nikhil Ranjan Kumar</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA />
          <HeaderSocial />
          <div className="brand__image">
            <img src={BrandImage} alt="Niku-ME" />
          </div>
          <a href="#about" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;

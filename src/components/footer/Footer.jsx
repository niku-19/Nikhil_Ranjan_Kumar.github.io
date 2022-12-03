import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <a href="#" className="footer__logo">
          Nikhil Ranjan Kumar
        </a>

        <ul className="permalinks">
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#experience"> Experience </a>
          </li>
          <li>
            <a href="#services"> Services </a>
          </li>
          <li>
            <a href="#project"> Projects </a>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://github.com/niku-19" target="_blank">
            {<FaGithub />}
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-ranjan-kumar-594856193/"
            target="_blank"
          >
            {<BsLinkedin />}
          </a>
          <a href="https://www.instagram.com/14_nikhil_kumar/" target="_blank">
            {<FaInstagram />}
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Nikhil Ranjan Kumar, All Right Reserved</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;

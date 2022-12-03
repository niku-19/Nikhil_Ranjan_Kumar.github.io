import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  const [footer, setFooter] = useState("");
  const onClickHomeHandler = () => {
    setFooter("home");
  };
  const onClickAboutHandler = () => {
    setFooter("about");
  };
  const onClickContactHandler = () => {
    setFooter("contact");
  };
  const onClickServicesHandler = () => {
    setFooter("services");
  };
  const onClickExperienceHandler = () => {
    setFooter("experience");
  };
  const onClickProjectHandler = () => {
    setFooter("project");
  };

  return (
    <>
      <footer>
        <a href={`#${footer}`} className="footer__logo">
          Nikhil Ranjan Kumar
        </a>

        <ul className="permalinks">
          <li>
            <a href={`#${footer}`} onClick={onClickHomeHandler}>
              Home
            </a>
          </li>
          <li>
            <a href={`#${footer}`} onClick={onClickAboutHandler}>
              About
            </a>
          </li>
          <li>
            <a href={`#${footer}`} onClick={onClickExperienceHandler}>
              Experience
            </a>
          </li>
          <li>
            <a href={`#${footer}`} onClick={onClickServicesHandler}>
              Services
            </a>
          </li>
          <li>
            <a href={`#${footer}`} onClick={onClickProjectHandler}>
              Projects
            </a>
          </li>
          <li>
            <a href={`#${footer}`} onClick={onClickContactHandler}>
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/niku-19"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaGithub />}
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-ranjan-kumar-594856193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<BsLinkedin />}
          </a>
          <a
            href="https://www.instagram.com/14_nikhil_kumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
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

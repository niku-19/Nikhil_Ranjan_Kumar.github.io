import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <>
      <div className="header__social">
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
    </>
  );
};

export default HeaderSocial;

import React, { useReducer } from "react";
import "./NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiContactsBookLine } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { MdFeedback } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

const reducer = (state, action) => {
  switch (action.type) {
    case "Home":
      return { type: "Home" };
    case "About":
      return { type: "About" };
    case "Contact":
      return { type: "Contact" };
    case "Services":
      return { type: "Services" };
    case "Experience":
      return { type: "Experience" };
    case "Project":
      return { type: "Project" };
    default:
      return state;
  }
};

const Nav = () => {
  const [state, dispatch] = useReducer(reducer, "Home");

  const onClickHandlerHome = () => {
    dispatch({ type: "Home" });
  };
  const onClickHandlerAbout = () => {
    dispatch({ type: "About" });
  };
  const onClickHandlerContact = () => {
    dispatch({ type: "Contact" });
  };
  const onClickHandlerServices = () => {
    dispatch({ type: "Services" });
  };
  const onClickHandlerExperience = () => {
    dispatch({ type: "Experience" });
  };
  const onClickHandlerProject = () => {
    dispatch({ type: "Project" });
  };

  return (
    <>
      <nav>
        <a
          href="#"
          className={state.type === "Home" ? "active" : ""}
          onClick={onClickHandlerHome}
        >
          {<AiOutlineHome />}
        </a>
        <a
          href="#about"
          className={state.type === "About" ? "active" : ""}
          onClick={onClickHandlerAbout}
        >
          <BiUser />
        </a>
        <a
          href="#contact"
          className={state.type === "Contact" ? "active" : ""}
          onClick={onClickHandlerContact}
        >
          <RiContactsBookLine />
        </a>
        <a
          href="#services"
          className={state.type === "Services" ? "active" : ""}
          onClick={onClickHandlerServices}
        >
          <RiServiceLine />
        </a>
        <a
          href="#experience"
          className={state.type === "Experience" ? "active" : ""}
          onClick={onClickHandlerExperience}
        >
          <MdFeedback />
        </a>
        <a
          href="#project"
          className={state.type === "Project" ? "active" : ""}
          onClick={onClickHandlerProject}
        >
          <AiOutlineProject />
        </a>
      </nav>
    </>
  );
};

export default Nav;

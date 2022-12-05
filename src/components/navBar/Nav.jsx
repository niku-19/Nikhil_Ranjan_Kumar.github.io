import React, { useReducer, useState } from "react";
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
  const [nav, setNav] = useState("");

  const onClickHandlerHome = () => {
    dispatch({ type: "Home" });
    setNav("home");
  };
  const onClickHandlerAbout = () => {
    dispatch({ type: "About" });
    setNav("about");
  };
  const onClickHandlerContact = () => {
    dispatch({ type: "Contact" });
    setNav("contact");
  };
  const onClickHandlerServices = () => {
    dispatch({ type: "Services" });
    setNav("services");
  };
  const onClickHandlerExperience = () => {
    dispatch({ type: "Experience" });
    setNav("experience");
  };
  const onClickHandlerProject = () => {
    dispatch({ type: "Project" });
    setNav("project");
  };

  return (
    <div className="container">
      <nav>
        <a
          href={`#${nav}`}
          className={state.type === "Home" ? "active" : ""}
          onClick={onClickHandlerHome}
        >
          {<AiOutlineHome />}
        </a>
        <a
          href={`#${nav}`}
          className={state.type === "About" ? "active" : ""}
          onClick={onClickHandlerAbout}
        >
          <BiUser />
        </a>
        <a
          href={`#${nav}`}
          className={state.type === "Contact" ? "active" : ""}
          onClick={onClickHandlerContact}
        >
          <RiContactsBookLine />
        </a>
        <a
          href={`#${nav}`}
          className={state.type === "Services" ? "active" : ""}
          onClick={onClickHandlerServices}
        >
          <RiServiceLine />
        </a>
        <a
          href={`#${nav}`}
          className={state.type === "Experience" ? "active" : ""}
          onClick={onClickHandlerExperience}
        >
          <MdFeedback />
        </a>
        <a
          href={`#${nav}`}
          className={state.type === "Project" ? "active" : ""}
          onClick={onClickHandlerProject}
        >
          <AiOutlineProject />
        </a>
      </nav>
    </div>
  );
};

export default Nav;

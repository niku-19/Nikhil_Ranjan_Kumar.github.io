import React from "react";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
const PortFolio = () => {
  return (
    <>
      <section id="project">
        <h5>My Recent Work</h5>
        <h1>Portfolio</h1>
        <div className="container portfolio__container">
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default PortFolio;

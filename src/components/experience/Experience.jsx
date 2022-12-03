import React from "react";
import "./Experience.css";
import Skills from "./Skills";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skill I Have</h5>
        <h1>My Experience</h1>
        <div className="container experience__container">
          <div className="skill__card">
            <h3>Froent-end Development</h3>
            <div className="experience__content">
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

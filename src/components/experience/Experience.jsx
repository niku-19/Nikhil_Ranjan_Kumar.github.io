import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import Skills from "./Skills";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skill I Have</h5>
        <h1>My Experience</h1>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.2,
            blur: 100,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            blur: 0,
            transition: {
              duration: 1.5,
            },
          }}
          className="container experience__container"
        >
          <div className="skill__card">
            <h3>Front-end Development</h3>
            <div className="experience__content">
              <Skills />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Experience;

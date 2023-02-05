import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import Skills from "./Skills";

const Experience = () => {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.5,
          }
        }}
       id="experience">
        <h5>What Skill I Have</h5>
        <h1>My Experience</h1>
        <div className="container experience__container">
          <div className="skill__card">
            <h3>Front-end Development</h3>
            <div className="experience__content">
              <Skills />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;

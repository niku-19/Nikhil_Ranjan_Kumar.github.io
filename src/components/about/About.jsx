import React from "react";
import { motion } from "framer-motion";
import BrandImage from "../../assets/NRK.png";
import { FaAward } from "react-icons/fa";
import { BsFolderCheck } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h1>About Me</h1>
        <div className=" container about__container">
          <div className="about__me">
            <motion.div
              initial={{
                opacity: 0,
                x: -200,
                scale: 0.7,
                blur: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                blur: 0,
                transition: {
                  duration: 1.5,
                },
              }}
              className="about__brand-image"
            >
              <img
                src={BrandImage}
                className="about__brand__image-me"
                alt="AboutMe"
              />
            </motion.div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <motion.article
                initial={{
                  opacity: 0,
                  x: 200,
                  scale: 0.1,
                  blur: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  blur: 0,
                  transition: {
                    duration: 1.5,
                  },
                }}
                className="about__card"
              >
                <FaAward className="about__icons" />
                <h5>Web Development</h5>
                <small> 1+ year learning</small>
              </motion.article>
              <motion.article
                initial={{
                  opacity: 0,
                  x: 200,
                  scale: 0.2,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 1.5,
                  },
                }}
                className="about__card"
              >
                <BsFolderCheck className="about__icons" />
                <h5>Project</h5>
                <small> 10+ complete Projects</small>
              </motion.article>
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 300,
                scale: 0.7,
                blur: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                blur: 0,
                transition: {
                  duration: 1.5,
                },
              }}
            >
              First and foremost, I love writing code. Ever since I was a little
              kid, software development has been my passion. As I went through
              the BASIC tutorial, it was fascinating, being able to get the
              computer to do whatever I wanted, just by typing. I latched on to
              any idea for projects I could get, moving from "Hello World" all
              the way to a simple First-person Shooter Engine, with dozens of
              projects in between, I learned C, then C++, tearing through any
              books could find on anything remotely related to software
              development.i was insatiable. This passion carried me through my
              education at Acharya institutes. Here there were more resources to
              me than I ever could have imagined. studied new languages,
              algorithms, compilers, higher mathematics, all with pretty much
              the same fascination that drove me. And it was here that learned
              truly how much there was yet to learn. So, now, in industry, this
              passion remains with me. There's certainly yet more to learn, yet
              more problems to solve, and yet more to build. And for this, I'm
              very grateful.
            </motion.p>
            <a href="#contact" className="btn btn-primary align__btn">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

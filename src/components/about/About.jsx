import React from "react";
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
            <div className="about__brand-image">
              <img
                src={BrandImage}
                className="about__brand__image-me"
                alt="AboutMe"
              />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icons" />
                <h5>Web Development</h5>
                <small> 1+ year learing</small>
              </article>
              <article className="about__card">
                <BsFolderCheck className="about__icons" />
                <h5>Projects</h5>
                <small> 10+ complete Projects</small>
              </article>
            </div>

            <p>
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
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

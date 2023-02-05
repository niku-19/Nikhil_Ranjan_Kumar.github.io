import React from "react";
import { motion } from "framer-motion";
import ProjectDatas from "../Data/ProjectsData";

const ProjectCard = () => {
  return (
    <>
      {ProjectDatas.map((datas) => {
        return (
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1.5,
                delay: datas.delay,
                type: "spring",
              },
            }}
            viewport={{once: true}}
          key={datas.id}>
            <article className="portfolio__items">
              <div className="portfolio__items-image">
                <img src={datas.image} alt="" />
              </div>
              <h3>{datas.title}</h3>
              <div className="portfolio__itmes-cta">
                <a
                  href={datas.link}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GithUb
                </a>
              </div>
            </article>
          </motion.div>
        );
      })}
    </>
  );
};

export default ProjectCard;

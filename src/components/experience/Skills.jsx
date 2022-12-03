import React from "react";
import SkillData from "../Data/Data";
import { BsPatchCheckFill } from "react-icons/bs";
import "../experience/Skills.css";

const Skills = () => {
  // const [skills, setSkills] = useState(SkillData);

  // console.log(skills);

  return (
    <>
      {SkillData.map((datas) => {
        return (
          <div key={datas.id}>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <h4>{datas.title}</h4>
              <div className="skill__bar">
                <div
                  className="skill__bar-fill"
                  style={{ width: `${datas.percentage}%` }}
                ></div>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default Skills;

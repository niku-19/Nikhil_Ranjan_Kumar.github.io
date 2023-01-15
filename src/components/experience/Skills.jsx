import React from "react";
import SkillData from "../Data/Data";
import "../experience/Skills.css";

const Skills = () => {
  // const [skills, setSkills] = useState(SkillData);

  // console.log(skills);

  return (
    <>
      {SkillData.map((datas) => {
        return (
          <article key={datas.id} className="experience__details">
            <div className="experience__details__title">
              <datas.icons className="experience__details-icons" style={{color : `${datas.color}`}} />
              <h4>{datas.title}</h4>
            </div>
            <div className="skill__bar">
              <div
                className="skill__bar-fill"
                style={{ width: `${datas.percentage}%` , backgroundColor: `${datas.color}` }}
              ></div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Skills;

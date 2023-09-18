import React from "react";
import "../styles/Skills.css";
import CardSkill from "./CardSkill";
import data from "../Components/CardContentData";

const Skills = () => {
  return (
    <>
      <div className="skill_container" id="skill">
        <h1 className="skill_header">
          <span className="skill_text">&nbsp;&nbsp;My Skills</span>
          <span className=" skill_text skill_text_hover">
            &nbsp;&nbsp;My Skills
          </span>
        </h1>
        <div className="skill_content">
          <div className="skill_card_wrap">
            <CardSkill img={data[0].img} title={data[0].title} />
            <CardSkill img={data[1].img} title={data[1].title} />
            <CardSkill img={data[2].img} title={data[2].title} />
            <CardSkill img={data[3].img} title={data[3].title} />
          </div>
          <div className="skill_card_wrap">
            <CardSkill img={data[4].img} title={data[4].title} />
            <CardSkill img={data[5].img} title={data[5].title} />
            <CardSkill img={data[6].img} title={data[6].title} />
            <CardSkill img={data[7].img} title={data[7].title} />
          </div>
          <div className="skill_card_wrap">
            <CardSkill img={data[8].img} title={data[8].title} />
            <CardSkill
              img={data[9].img}
              title={data[9].title}
              classtxt={data[9].classtxt}
            />
            <CardSkill img={data[10].img} title={data[10].title} />
            <CardSkill
              img={data[11].img}
              title={data[11].title}
              class={data[11].class}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

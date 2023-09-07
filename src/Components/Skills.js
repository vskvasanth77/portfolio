import React from "react";
import "../styles/Skills.css";
import CardSkill from "./CardSkill";

const Skills = () => {
  return (
    <>
      <div className="skill_container">
        <h1 className="skill_header">My Skills</h1>
        <div className="skill_content">
          <CardSkill />
        </div>
      </div>
    </>
  );
};

export default Skills;

import React from "react";
import CardProject from "./CardProject";
import "../styles/Project.css";

const Project = () => {
  return (
    <>
      <div className="project_container">
        <h1 className="project_header">
          <span className="project_text">&nbsp;&nbsp;My Project</span>
          <span className=" project_text project_text_hover">
            &nbsp;&nbsp;My Project
          </span>
        </h1>
        <div className="project_content">
          <CardProject />
        </div>
      </div>
    </>
  );
};

export default Project;

import React from "react";
import CardProject from "./CardProject";
import "../styles/Project.css";
import data from "../Components/CardProjectContentData";

const Project = () => {
  return (
    <>
      <div className="project_container" id="project">
        <h1 className="project_header">
          <span className="project_text">&nbsp;&nbsp;My Project</span>
          <span className=" project_text project_text_hover">
            &nbsp;&nbsp;My Project
          </span>
        </h1>
        <div className="project_content_handler">
          <div className="project_content">
            <CardProject
              img={data[0].image}
              title={data[0].title}
              titleMain={data[0].titleMain}
              desc={data[0].desc}
              link={data[0].link}
            />
            <CardProject
              img={data[1].image}
              title={data[1].title}
              titleMain={data[1].titleMain}
              desc={data[1].desc}
            />
          </div>
          <div className="project_content">
            <CardProject
              img={data[0].image}
              title={data[0].title}
              titleMain={data[0].titleMain}
              desc={data[0].desc}
              link={data[0].link}
            />
            <CardProject
              img={data[1].image}
              title={data[1].title}
              titleMain={data[1].titleMain}
              desc={data[1].desc}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

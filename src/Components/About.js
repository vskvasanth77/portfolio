import React from "react";
import "../styles/About.css";
import Lottie from "lottie-react";

import Aboutme from "../json/Aboutme.json";

import aboutDot from "../Images/about_section_dot.png";

const About = () => {
  const aboutContent =
    "Hi, I am a graduate of SRM University, holding a B.Tech degree in Information Technology, where my passion for technology and design was ignited. I'm primarily focused on MERN Stack development and UI/UX designer and software Engineer. My journey in the world of IT has been driven by my enthusiasm for learning and my creative approach to problem-solving. I thrive on challenges and have a track record of delivering results efficiently. I'm a dedicated lifelong learner, constantly embracing new technologies and methodologies. This thirst for knowledge not only keeps my skills sharp but also allows me to adapt swiftly to emerging trends and technologies in the ever-evolving tech landscape.";
  return (
    <>
      <div className="about_container" id="about">
        <div className="about_container_left">
          <h1 className="about_header">
            <span className="text">&nbsp;&nbsp;About Me</span>
            <span className=" text text_hover">&nbsp;&nbsp;About Me</span>
          </h1>
          <div className="about_container_left_content">
            <p className="about_p">{aboutContent}</p>
            <div className="about_container_left_icons">
              {/* icon handler for 3 icons */}
              <div className="icon_handler">
                <i className="fa-solid fa-user icon"> </i>
                <span className="icon_span">Vasanth S</span>
              </div>
              <div className="icon_handler">
                <i className="fa-solid fa-envelope icon"></i>
                <span className="icon_span">vskvasanth777@gmail.com</span>
              </div>
              <div className="icon_handler">
                <i className="fa-solid fa-phone icon"></i>
                <span className="icon_span">+91 861 001 8323</span>
              </div>
              {/* ended here */}
            </div>
          </div>
        </div>
        <div className="about_container_right">
          <div className="about_container_right_about_animation">
            <Lottie loop={true} animationData={Aboutme} />
          </div>
        </div>
        <img className="about_img" src={aboutDot} alt="falied to load" />
      </div>
    </>
  );
};

export default About;

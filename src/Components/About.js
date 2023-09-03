import React from "react";
import "../styles/About.css";
import Lottie from "lottie-react";

import Aboutme from "../json/Aboutme.json";

import aboutDot from "../Images/about_section_dot.png";

const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="about_container_left">
          <h1 className="about_header">About me</h1>
          <div className="about_container_left_content">
            <p className="about_p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              omnis numquam dolorum, pariatur veritatis, alias cupiditate sunt
              esse placeat ad eius enim deserunt quibusdam, delectus saepe
              maiores eum sed deleniti. Home Contrary to popular belief, Lorem
              Ipsum is not simply random text. It has roots in a piece of
              classical Latin.Home Contrary to popular belief, Lorem Ipsum is
              not simply random text. It has roots in a piece of classical
              Latin.Home Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin.Home
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin.Home Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin.
            </p>
            <div className="about_container_left_icons">
              {/* icon handler for 3 icons */}
              <div className="icon_handler">
                <i class="fa-solid fa-user icon"> </i>
                <span className="icon_span">Vasanth S</span>
              </div>
              <div className="icon_handler">
                <i class="fa-solid fa-envelope icon"></i>
                <span className="icon_span">vskvasanth777@gmail.com</span>
              </div>
              <div className="icon_handler">
                <i class="fa-solid fa-phone icon"></i>
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

import React from "react";
import Lottie from "lottie-react";

import Computer from "../json/Computer.json";
import "../styles/Home.css";

import sidebar from "../Images/side_bar.png";
import sidedot from "../Images/side_dot.png";
import middot from "../Images/mid_dot.png";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_container_left">
          <h1 className="home_header">
            Vasanth <span className="home_header_span">S</span>{" "}
          </h1>
          <h2 className="home_header_sub">
            I am <span className="pink">Developer</span>
          </h2>
          <p className="home_header_p">
            Home Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin. Lorem ipsum, dolor
          </p>
          <div className="home_container_left_btn_handler">
            <button className="home_container_left_btn_handler_btn1">
              Contact me
            </button>
            <button className="home_container_left_btn_handler_btn2">
              Download CV
            </button>
          </div>
          <div className="home_container_left_social_handler">
            <i class="fa-brands fa-github  icons"></i>
            <i className="fa-brands fa-linkedin icons"></i>
            <i class="fa-brands fa-instagram icons"></i>
          </div>
          <img src={sidebar} className="sidebar" alt="failed to load" />
          <img src={sidedot} className="sidedot" alt="failed to load" />
          <img src={middot} className="middot" alt="failed to load" />
        </div>
        <div className="home_container_right">
          <div className="home_container_right_comupter">
            <Lottie loop={true} animationData={Computer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

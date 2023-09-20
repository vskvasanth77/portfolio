import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-scroll";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import Computer from "../json/Computer.json";
import "../styles/Home.css";

import sidebar from "../Images/side_bar.png";
import sidedot from "../Images/side_dot.png";
import middot from "../Images/mid_dot.png";

import pdf from "../pdf/vasanth.pdf";

const Home = () => {
  //USE TYPE ANIMATION
  // const { text } = useTypewriter({
  //   words: ["Software Engineer", "Mern stack developer", "Ui/Ux designer"],
  //   loop: {},
  //   typeSpeed: 120,
  // });

  const [text] = useTypewriter({
    words: ["Software Engineer", "Mern stack developer", "Ui/Ux designer"],

    loop: false,
    typeSpeed: 180,
    delaySpeed: 80,
  });

  return (
    <>
      <div className="home_container" id="home">
        <div className="home_container_left">
          <h1 className="home_header">
            Vasanth <span className="home_header_span">S</span>{" "}
          </h1>
          <h2 className="home_header_sub">
            I am
            <span className="pink">{text}</span>
            <span className="pink">
              <Cursor />
            </span>
          </h2>
          <p className="home_header_p">
            I'm a MERN stack developer, UI/UX designer, and software engineer. I
            create user-friendly websites that blend aesthetics with
            functionality. Let's collaborate to bring your vision to life!
          </p>
          <div className="home_container_left_btn_handler">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <button className="home_container_left_btn_handler_btn1">
                Contact me
              </button>
            </Link>
            <a href={pdf} download="Vasanth S">
              <button className="home_container_left_btn_handler_btn2">
                Download CV
              </button>
            </a>
          </div>
          <div className="home_container_left_social_handler">
            <a href="https://github.com/vskvasanth77">
              {" "}
              <i className="fa-brands fa-github  icons"></i>
            </a>
            <a href="https://www.linkedin.com/in/vsk-vasanth/">
              <i className="fa-brands fa-linkedin icons"></i>
            </a>
            <a href="https://www.instagram.com/web_ui_ux_designer_/">
              <i className="fa-brands fa-instagram icons"></i>
            </a>
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

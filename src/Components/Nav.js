import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../Images/Main_logo.png";
import "../styles/Nav.css";

const Nav = () => {
  const [menuclick, setMenuClick] = useState("false");
  const menuhandler = () => {
    setMenuClick(!menuclick);
  };
  return (
    <>
      <nav className="navcontainer">
        <div className="logocontainer">
          <img src={logo} alt="logo failed to load" className="logo" />
        </div>
        <div className={!menuclick ? "listhandler_open" : "listhandler_close"}>
          <div className="insidelisthandler">
            <div className="bg">
              <div className="insideh1">
                <h1 className="navheader">
                  Vasanth <span>S</span>
                </h1>
                <div className="line"></div>
              </div>

              <ul className="listcontainer">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                  >
                    skill
                  </Link>
                </li>
                <li>
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
              <div className="socialmediacontroler">
                <a href="https://www.linkedin.com/in/vsk-vasanth/">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="https://www.instagram.com/web_ui_ux_designer_/">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://github.com/vskvasanth77">
                  <i className="fa-brands fa-github" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-container">
          {" "}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            <button>Lets talk</button>
          </Link>
        </div>

        <div className="menuhandler" onClick={menuhandler}>
          <i
            className={!menuclick ? "fas fa-times menu" : "fas fa-bars menu"}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Nav;

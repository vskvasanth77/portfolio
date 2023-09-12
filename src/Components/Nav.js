import React, { useState } from "react";
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
                <li>home</li>
                <li>about</li>
                <li>skill</li>
                <li>projects</li>
              </ul>
              <div className="socialmediacontroler">
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-instagram" />
                <i className="fa-brands fa-github" />
              </div>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button>Lets talk</button>
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

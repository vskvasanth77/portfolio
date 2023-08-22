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
        {/* <ul className={!menuclick ? "listcontainer" : "listcontainer active"}> */}
        <ul className={!menuclick ? "listcontainer" : "listcontainer_false"}>
          <li>home</li>
          <li>about</li>
          <li>skill</li>
          <li>projects</li>
        </ul>
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

import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        <div className="footer_icon_handler">
          <a href="https://github.com/vskvasanth77">
            {" "}
            <i className="fa-brands fa-github  footer_icons"></i>
          </a>
          <a href="https://www.linkedin.com/in/vsk-vasanth/">
            <i className="fa-brands fa-linkedin footer_icons"></i>
          </a>
          <a href="https://www.instagram.com/web_ui_ux_designer_/">
            <i className="fa-brands fa-instagram footer_icons"></i>
          </a>
          <a href="https://dribbble.com/vskvasanth77">
            <i className="fa-brands fa-dribbble footer_icons"></i>
          </a>
          <a href="https://www.behance.net/vskvasanth">
            <i className="fa-brands fa-behance footer_icons"></i>
          </a>
        </div>
        <p className="footer_p">Copyright @2023 vsk</p>
      </div>
    </>
  );
};

export default Footer;

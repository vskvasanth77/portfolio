import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        <div className="footer_icon_handler">
          <i className="fa-brands fa-github  footer_icons"></i>
          <i className="fa-brands fa-linkedin footer_icons"></i>
          <i className="fa-brands fa-instagram footer_icons"></i>
          <i className="fa-brands fa-dribbble footer_icons"></i>
          <i className="fa-brands fa-behance footer_icons"></i>
        </div>
        <p className="footer_p">Copyright @2023 vsk</p>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import "../styles/Email.css";
import Lottie from "lottie-react";
import contact from "../json/Contact.json";

const Email = () => {
  return (
    <>
      <div className="email_handler">
        <h1 className="email_header_one">
          <span className="email_text">&nbsp;&nbsp;Contact Me</span>
          <span className=" email_text email_text_hover">
            &nbsp;&nbsp;Contact Me
          </span>
        </h1>
        <div className="email_container">
          <div className="email_container_left">
            <div className="email_animation_handler">
              <Lottie loop={true} animationData={contact} />
            </div>
          </div>
          <div className="email_container_right">
            <div className="email_container_right_handler">
              <div className="email_handler_bg">
                <h1 className="email_header">Get In Touch</h1>
                <div className="email_content">
                  <form>
                    <label htmlFor="username">Name</label>
                    <input
                      type="text"
                      id="username"
                      required
                      placeholder="Enter your name"
                    />
                    <label htmlFor="emailname">E-mail</label>
                    <input
                      type="email"
                      id="emailname"
                      required
                      placeholder="Enter your E-mail"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="Write you message"
                      id="message"
                      cols="20"
                      rows="10"
                      placeholder="Write your Message"
                    ></textarea>
                    <button className="email_btn">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;

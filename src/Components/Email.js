import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Email.css";
import Lottie from "lottie-react";
import contact from "../json/Contact.json";

const Email = () => {
  const form = useRef();
  const inputname = useRef(null);
  const inputemail = useRef(null);
  const inputmsg = useRef(null);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    inputname.current.value = "";
    inputemail.current.value = "";
    inputmsg.current.value = "";
    setMessage("sent successfully");
    setTimeout(() => {
      setMessage("");
    }, 7000);

    emailjs
      .sendForm(
        "service_vhbdjv2",
        "template_ontz5em",
        form.current,
        "7TjzQ-lwIgrhNSFhT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
                  <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="username">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="username"
                      required
                      placeholder="Enter your name"
                      ref={inputname}
                    />
                    <label htmlFor="emailname">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      id="emailname"
                      required
                      placeholder="Enter your E-mail"
                      ref={inputemail}
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="20"
                      rows="10"
                      placeholder="Write your Message"
                      ref={inputmsg}
                    ></textarea>
                    <button type="submit" className="email_btn">
                      Send
                    </button>
                    {message && <p className="noti_p">{message}</p>}
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

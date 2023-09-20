import React, { useState } from "react";
import "../styles/CardProject.css";

const CardProject = (props) => {
  const [imgPop, setImgPop] = useState(false);
  const imghandler = () => {
    setImgPop(!imgPop);
  };

  const [detailsPop, setDetailsPop] = useState(false);
  const detailshandler = () => {
    setDetailsPop(!detailsPop);
  };

  return (
    <>
      <div className="cardproject_container">
        <div className="cardproject_bg">
          <img
            onClick={imghandler}
            className="cardproject_img"
            src={props.img}
            alt="failed to load check project section"
          />
          <h1 className="projectcard_title">{props.title}</h1>
          <div className="cardproject_btn_handler">
            <button
              onClick={detailshandler}
              className="cardproject_btn secondary"
            >
              Details
            </button>
            <a href={props.link}>
              <button className="cardproject_btn primary">Github</button>
            </a>
          </div>
        </div>
      </div>

      {imgPop && (
        <div className="img_container" onClick={imghandler}>
          <div className="img_handler">
            <img
              onClick={(e) => e.stopPropagation()}
              className="img_popup"
              src={props.img}
              alt="failed to load check cardroject"
            />
          </div>
        </div>
      )}

      {detailsPop && (
        <div onClick={detailshandler} className="details_container">
          <div className="details_content">
            <h1 className="details_header">{props.titleMain}</h1>
            <p className="details_p">{props.desc}</p>
            <p className="details_p"> Technologies Used :</p>
            <p className="details_tech">{props.tech} </p>
            <div className="details_btn_handler">
              <button className="details_btn" onClick={detailshandler}>
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProject;

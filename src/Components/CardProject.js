import React, { useState } from "react";
import "../styles/CardProject.css";

const CardProject = (props) => {
  const imgsumma =
    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg";
  const [imgPop, setImgPop] = useState(false);
  const imghandler = () => {
    setImgPop(!imgPop);
    console.log("you clicked me");
  };

  return (
    <>
      <div className="cardproject_container">
        <div className="cardproject_bg">
          <img
            onClick={imghandler}
            className="cardproject_img"
            src={imgsumma}
            alt="failed to load check project section"
          />
          <div className="cardproject_btn_handler">
            <button className="cardproject_btn secondary">Details</button>
            <button className="cardproject_btn primary">Github</button>
          </div>
        </div>
      </div>
      {!imgPop && (
        <div className="img_container" onClick={imghandler}>
          <div className="img_handler">
            <img
              onCanPlay={(e) => e.stopPropagation()}
              className="img_popup"
              src={imgsumma}
              alt="failed to load check cardroject"
            />
          </div>
        </div>
      )}

      <div className="details_container">
        <div className="details_content">
          <h1>title</h1>
          <p>description</p>
          <button>close</button>
        </div>
      </div>
    </>
  );
};

export default CardProject;

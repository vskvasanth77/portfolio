import React from "react";
import "../styles/CardSkill.css";
import python from "../Images/skill/pngwing.com (6).png";

const CardSkill = () => {
  return (
    <>
      <div className="card_bg">
        <div className="card_handler">
          <img
            className="card_img"
            src={python}
            alt="falied to load check skills section"
          />
          <h3 className="card_text">Python</h3>
        </div>
      </div>
    </>
  );
};

export default CardSkill;

import React, { useState } from "react";
import "../styles/CardProject.css";

const CardProject = (props) => {
  //const [imgPop, setImgPop] = useState(false);
  const imghandler = () => {
    console.log("you clicked me");
  };

  return (
    <>
      <div className="cardproject_container">
        <div className="cardproject_bg">
          <img
            onClick={imghandler}
            className="cardproject_img"
            src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg"
            alt="failed to load check project section"
          />
          <div className="cardproject_btn_handler">
            <button className="cardproject_btn secondary">Details</button>
            <button className="cardproject_btn primary">Github</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;

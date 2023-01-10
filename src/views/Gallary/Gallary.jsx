import React from "react";
import Graduation from "../../assets/image/Graduation.png";
import church from "../../assets/image/church.png";
import image from "../../assets/image/image.png";
import "./gallary.css";
export const Gallary = () => {
  return (
    <div className="gallary_container">
      <div className="section_title">
        <h1>Gallary</h1>
      </div>
      <div className="gallary">
        <div className="img">
          <img src={Graduation} alt="" />
        </div>
        <div className="img center">
          <img src={church} alt="" />
        </div>
        <div className="img">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="">
        <span></span>
      </div>
    </div>
  );
};

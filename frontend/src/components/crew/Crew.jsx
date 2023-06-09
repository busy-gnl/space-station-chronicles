import React from "react";
import "./Crew.css";

export default function Crew({ picture, age, nation, name, description }) {
  return (
    <div className="crew-div">
      <img src="" alt="" />
      <div className="card-left">
        <img src={picture} alt="" />
        <h3>{age}</h3>
        <img src={nation} alt="" />
      </div>
      <div className="card-right">
        <h3>{name}</h3>
        <div className="crew-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

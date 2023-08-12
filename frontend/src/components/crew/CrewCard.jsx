import React from "react";
import "./CrewCard.css";

export default function CrewCard({ picture, age, nation, name, description }) {
  return (
    <div className="crew-div">
      <div className="card-left">
        <img src={picture} alt="" />
        <h3>{age} ans</h3>
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

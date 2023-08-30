import React from "react";
import "./CrewCard.css";

export default function CrewCard({ picture, age, nation, name, description }) {
  return (
    <div className="crew-div">
      <div className="card-left">
        <img src={picture} alt="" />
        <h2>{age} ans</h2>
        <img src={nation} alt="" />
      </div>
      <div className="card-right">
        <h2 className="crew-member-name">{name}</h2>
        <div className="crew-description">{description}</div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./Missions.css";
import axios from "axios";

export default function Missions() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [research, setResearch] = useState([]);
  const [missions, setMissions] = useState(research);
  useEffect(() => {
    axios
      .get(`${backendURL}/missions`)
      .then((res) => {
        setMissions(res.data);
        setResearch(res.data[0]);
        console.info(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="missions-container">
      <div className="mission-info">
        <strong className="missions-domain">{research.domain} : </strong> <br />
        <em>{research.description}</em>
      </div>
      <div className="missions-button-container">
        {missions.map((mission) => (
          <button
            className="missions-change-button"
            type="button"
            onClick={() => {
              setResearch(missions[mission.id]);
            }}
          >
            {mission.domain}
          </button>
        ))}
      </div>
    </div>
  );
}

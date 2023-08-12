import { useState, useEffect } from "react";
import axios from "axios"; // eslint-disable-line
import CrewCard from "./CrewCard";

export default function Crew() {
  const [member, setMember] = useState([]);
  const [crew, setCrew] = useState(member);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const displayCard = (astronaut) => {
    return (
      <CrewCard
        picture={astronaut.picture}
        age={astronaut.age}
        nation={astronaut.nation}
        name={astronaut.name}
        description={astronaut.description}
      />
    );
  };
  useEffect(() => {
    axios
      .get(`${backendURL}/crew`)
      .then((res) => {
        setCrew(res.data);
        setMember(res.data[0]);
        console.info(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="crew-modal">
      <div className="crew-button">
        {crew.map((m) => (
          <button type="button" onClick={() => setMember(m)}>
            <img className="crew-image" src={m.picture} alt="" />
          </button>
        ))}
      </div>
      <div className="crew-card">{displayCard(member)}</div>
    </div>
  );
}

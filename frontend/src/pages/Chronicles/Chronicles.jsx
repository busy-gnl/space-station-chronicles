import React from "react";
import FunFacts from "../../components/fun_facts/FunFacts";
import Missions from "../../components/Missions/Missions";
import "./Chronicles.css";

export default function Chronicles() {
  return (
    <div>
      <h1>Space Station Chronicles</h1>

      <img
        className="chronicles-picture-iss"
        src="../../../public/images/earth-from-above.jpg"
        alt=""
      />

      <h2>Les différentes missions de l'ISS</h2>
      <section className="chronicles-missions-section">
        <h3>
          L'ISS remplit plusieurs missions essentielles pour faire avancer
          l'exploration spatiale et la recherche scientifique. <br />
          <br />
          Voici les principales missions de l'ISS :
        </h3>
        <Missions />
      </section>
      <h2>Fun Facts</h2>
      <section className="chronicles-fun-facts-section">
        <FunFacts />
      </section>
    </div>
  );
}

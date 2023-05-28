import React from "react";
import FunFacts from "../../components/FunFacts/FunFacts";
import "./Chronicles.css";

export default function Chronicles() {
  return (
    <div>
      <h1>Space Station Chronicles</h1>
      <h2>Missions</h2>
      <section className="chronicles-missions-section">
        <div className="chronicles-mission">Missions</div>
      </section>
      <h2>Fun Facts</h2>
      <section className="chronicles-fun-facts-section">
        <FunFacts />
      </section>
    </div>
  );
}

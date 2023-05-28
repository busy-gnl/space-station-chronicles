import React, { useState } from "react";
import "./FunFacts.css";

export default function FunFacts() {
  const funFacts = [
    "The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth.",
    "The ISS program is a joint project between five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada).",
    "The ISS is the ninth space station to be inhabited by crews, following the Soviet and later Russian Salyut, Almaz, and Mir stations as well as Skylab from the US.",
    "The ISS serves as a microgravity and space environment research laboratory in which crew members conduct experiments in biology, human biology, physics, astronomy, meteorology, and other fields.",
    "The ISS is suited for testing the spacecraft systems and equipment required for possible future long-duration missions to the Moon and Mars.",
    "The ISS maintains an orbit with an altitude of between 330 and 435 km (205 and 270 mi) by means of reboost manoeuvres using the engines of the Zvezda module or visiting spacecraft.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS programme is expected to continue until at least 2028 and may be extended beyond 2028 to 2030 or beyond, depending on the budget environment.",
  ];

  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const [funFact, setFunFact] = useState(funFacts[randomIndex]);

  const randomFunFact = () => {
    setFunFact(funFacts[randomIndex]);
  };

  return (
    <div className="fun-facts-container">
      <div className="fun-fact">{funFact}</div>
      <button type="button" onClick={() => randomFunFact()}>
        Random Fun Fact
      </button>
    </div>
  );
}

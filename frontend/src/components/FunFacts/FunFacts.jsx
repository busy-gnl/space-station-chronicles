import React, { useState } from "react";
import "./FunFacts.css";

export default function FunFacts() {
  const funFacts = [
    "L'ISS effectue environ 15,5 orbites autour de la Terre en une seule journée. Cela correspond à une période orbitale d'environ 90 minutes.",
    "L'ISS est un ensemble massif de structures spatiales, mesurant environ 109 mètres de longueur et pesant plus de 400 tonnes. Cela équivaut à peu près à la taille d'un terrain de football.",
    "L'ISS se déplace à une vitesse moyenne d'environ 28 000 kilomètres par heure (17 500 miles par heure). Cela signifie qu'elle effectue une orbite complète de la Terre en environ 90 minutes.",
    "Depuis novembre 2000, l'ISS est habitée en permanence. Cela signifie qu'il y a toujours des astronautes à bord, réalisant des expériences scientifiques, effectuant des réparations et entretenant la station.",
    "Bien qu'elle ne soit pas complètement dépourvue de gravité, l'ISS est en état de chute libre permanente, ce qui donne une sensation d'apesanteur à ses occupants. Cela permet d'effectuer des expériences dans des conditions de microgravité et d'étudier les effets de l'apesanteur sur le corps humain.",
    "L'ISS est un projet collaboratif entre plusieurs agences spatiales internationales, notamment la NASA, Roscosmos, l'Agence spatiale fédérale russe, l'Agence spatiale européenne (ESA), l'Agence japonaise d'exploration aérospatiale (JAXA) et l'Agence spatiale canadienne (ASC). C'est un exemple de collaboration pacifique entre nations dans le domaine de l'exploration spatiale.",
    "L'ISS est alimentée en électricité par des panneaux solaires. Elle dispose de huit panneaux solaires qui fournissent suffisamment d'énergie pour alimenter les systèmes de la station et les expériences scientifiques à bord.",
    "Les astronautes vivant à bord de l'ISS doivent faire face à des défis uniques. Ils doivent s'adapter à un environnement sans gravité, gérer leur temps en fonction des orbites et s'entraîner régulièrement pour maintenir leur santé physique dans l'espace.",
    "NASA (National Aeronautics and Space Administration) : En tant qu'agence spatiale des États-Unis, la NASA est le principal contributeur financier de l'ISS. Elle finance une grande partie des coûts liés à la conception, au développement et à l'exploitation de la station.",
    "CSA (Canadian Space Agency) : L'Agence spatiale canadienne contribue également financièrement à l'ISS. Le Canada fournit le bras robotique Canadarm2, qui est utilisé pour la maintenance et la construction de la station.",
    "JAXA (Japan Aerospace Exploration Agency) : Le Japon participe activement au financement de l'ISS par le biais de la JAXA. Le Japon fournit le module Kibo, qui est utilisé pour les expériences scientifiques à bord de l'ISS.",
    "Roscosmos : L'Agence spatiale fédérale russe joue un rôle important dans le financement de l'ISS. Elle fournit le segment russe de la station, y compris les modules habitables, les véhicules de ravitaillement et les cosmonautes russes.",
    "ESA (European Space Agency) : L'ESA est l'agence spatiale de l'Europe. Les pays membres de l'ESA contribuent financièrement à la construction et à l'exploitation de l'ISS. L'ESA fournit également des astronautes européens pour les missions à bord de la station.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
    "The ISS has been visited by astronauts, cosmonauts and space tourists from 19 different nations.",
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

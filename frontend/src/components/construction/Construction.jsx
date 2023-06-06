import React from "react";
import "./Construction.css";

export default function Construction() {
  const modules = [
    {
      id: 0,
      name: "Zarya (Module de service de base)",
      image: "../../../public/images/zarya.jpeg",
      description:
        "Zarya est le premier module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 20 novembre 1998 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le premier module de l'ISS à être lancé, mais le deuxième à être placé en orbite après le module de service Zvezda. Il a été conçu pour servir de module de stockage et de ravitaillement, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude.",
    },
    {
      id: 1,
      name: "Unity (Node 1)",
      image: "../../../public/images/unity.jpeg",
      description:
        "Unity est le deuxième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par les États-Unis et financé par la Russie. Il a été lancé le 4 décembre 1998 par la navette spatiale Endeavour depuis le centre spatial Kennedy en Floride. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le deuxième module de l'ISS à être lancé, mais le troisième à être placé en orbite après le module de service Zvezda. Il a été conçu pour servir de module d'amarrage et de jonction entre les modules américains et russes. Il a été construit par la Boeing, et a été financé par la NASA. Il a été lancé par la navette spatiale Endeavour depuis le centre spatial Kennedy en Floride. Il a été placé en orbite terrestre basse à 400 km d'altitude.",
    },

    {
      id: 2,
      name: "Zvezda (Module de service russe)",
      image: "../../../public/images/zvezda.jpeg",
      description:
        "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude.",
    },
    {
      id: 3,
      name: "Destiny (Laboratoire américain)",
      image: "../../../public/images/destiny.jpeg",
      description:
        "Le module Destiny, le premier laboratoire américain de l'ISS, a été lancé le 7 février 2001. Il a été construit par les États-Unis et est utilisé pour effectuer des expériences scientifiques dans l'espace. Destiny est équipé de racks de recherche et de systèmes de communication avancés.",
    },
    {
      id: 4,
      name: "Quest (Module d'activités extravéhiculaires)",
      image: "../../../public/images/quest.jpeg",
      description:
        "Le module Quest, également connu sous le nom d'Airlock, a été lancé le 20 juillet 2001. Il a été construit par les États-Unis et est utilisé pour les sorties extravéhiculaires (EVA). Quest fournit une passerelle entre l'intérieur de l'ISS et l'espace extérieur pour les astronautes effectuant des EVA.",
    },
    {
      id: 5,
      name: "Pirs (Module d'amarrage russe)",
      image: "../../../public/images/pirs.jpeg",
      description:
        "Le module Pirs, également appelé Docking Compartment, a été lancé le 14 septembre 2001. Il a été construit par la Russie et sert de port d'amarrage pour les vaisseaux spatiaux russes. Pirs est également équipé d'une écoutille pour les sorties extravéhiculaires russes.",
    },
    {
      id: 6,
      name: "Harmony (Node 2)",
      image: "../../../public/images/harmony.jpeg",
      description:
        "Le module Harmony, également connu sous le nom de Node 2, a été lancé le 23 octobre 2007. Il a été construit par les États-Unis et sert de nœud de connexion pour les futurs modules. Harmony est équipé de plusieurs ports d'amarrage pour les vaisseaux spatiaux et modules supplémentaires.",
    },
    {
      id: 7,
      name: "Columbus (Laboratoire européen)",
      image: "../../../public/images/colombus.jpeg",
      description:
        "Le module Columbus, le laboratoire européen de l'ISS, a été lancé le 7 février 2008. Il a été construit par l'Agence spatiale européenne (ESA) et est utilisé pour mener des expériences scientifiques dans des domaines tels que la biologie, la physique et la recherche sur les matériaux.",
    },
    {
      id: 8,
      name: "Kibo (Laboratoire japonais)",
      image: "../../../public/images/kibo.jpeg",
      description:
        "Le module Kibo, le laboratoire japonais de l'ISS, a été lancé en plusieurs parties entre 2008 et 2009. Il a été construit par l'Agence d'exploration aérospatiale japonaise (JAXA) et comprend plusieurs composants, y compris un laboratoire pressurisé et une plate-forme exposée pour les expériences spatiales.",
    },
    {
      id: 9,
      name: "Tranquility (Node 3)",
      image: "../../../public/images/tranquility.jpeg",
      description:
        "Le module Tranquility, également connu sous le nom de Node 3, a été lancé le 8 février 2010. Il a été construit par les États-Unis et est équipé de systèmes de support de vie supplémentaires. Tranquility abrite également la Cupola, une baie vitrée panoramique utilisée pour l'observation de la Terre.",
    },
    {
      id: 10,
      name: "BEAM (Module d'extension gonflable)",
      image: "../../../public/images/beam.jpeg",
      description:
        "Le module BEAM, le premier module d'extension gonflable de l'ISS, a été lancé le 8 avril 2016. Il a été construit par la société Bigelow Aerospace en collaboration avec la NASA. BEAM est un module expérimental conçu pour tester la technologie des habitats spatiaux gonflables.",
    },
    {
      id: 11,
      name: "Nauka (Module de laboratoire russe)",
      image: "../../../public/images/nauka.jpeg",
      description:
        "Le module Nauka, également appelé Multipurpose Laboratory Module (MLM), est le dernier module russe de l'ISS. Il a été lancé le 21 juillet 2021. Nauka est un module de laboratoire polyvalent qui offre des capacités supplémentaires pour la recherche scientifique et des systèmes de support de vie améliorés.",
    },
  ];

  return (
    <div>
      <h2>Construction</h2>
      <img
        className="construction-img"
        src="../../../public/images/iss-modules.jpeg"
        alt=""
      />
      <div className="construction-modules-container">
        <ul>
          {modules.map((module) => {
            return (
              <li key={module.id}>
                <h3>{module.name}</h3>
                <img src={module.image} alt="" />
                <p>{module.description}</p>
              </li>
            );
          })}
        </ul>
        <div className="construction-modules-resume">
          Ces modules, construits par différents partenaires internationaux, ont
          été assemblés progressivement pour former la Station spatiale
          internationale telle que nous la connaissons aujourd'hui. Ils
          fournissent des installations pour la recherche scientifique, les
          sorties extravéhiculaires, le logement de l'équipage et les opérations
          de soutien nécessaires pour mener des missions dans l'espace.
        </div>
      </div>
    </div>
  );
}

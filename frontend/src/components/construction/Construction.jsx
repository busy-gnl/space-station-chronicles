import React from "react";
import "./Construction.css";

export default function Construction() {
  const modules = [
    {
      id: 1,
      name: "Zarya",
      image: "../../../public/images/zarya.jpg",
      description:
        "Zarya est le premier module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 20 novembre 1998 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le premier module de l'ISS à être lancé, mais le deuxième à être placé en orbite après le module de service Zvezda. Il a été conçu pour servir de module de stockage et de ravitaillement, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude.",
    },
    {
      id: 2,
      name: "Unity",
      image: "../../../public/images/unity.jpg",
      description:
        "Unity est le deuxième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par les États-Unis et financé par la Russie. Il a été lancé le 4 décembre 1998 par la navette spatiale Endeavour depuis le centre spatial Kennedy en Floride. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le deuxième module de l'ISS à être lancé, mais le troisième à être placé en orbite après le module de service Zvezda. Il a été conçu pour servir de module d'amarrage et de jonction entre les modules américains et russes. Il a été construit par la Boeing, et a été financé par la NASA. Il a été lancé par la navette spatiale Endeavour depuis le centre spatial Kennedy en Floride. Il a été placé en orbite terrestre basse à 400 km d'altitude.",
    },

    {
      id: 3,
      name: "Zvezda",
      image: "../../../public/images/zvezda.jpg",
      description:
        "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude.",
    },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
    // {
    //     id: 3,
    //     name: "Zvezda",
    //     image: "../../../public/images/zvezda.jpg",
    //     description: "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
    // },
  ];

  return (
    <div>
      <h2>Construction</h2>
      <img
        className="construction-img"
        src="../../../public/images/construction-iss.jpg"
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
      </div>
    </div>
  );
}

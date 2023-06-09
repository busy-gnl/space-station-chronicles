import React, { useState } from "react";
import "./Missions.css";

export default function Missions() {
  const missions = [
    {
      id: 0,
      domain: "Observations astronomiques",
      description:
        "L'ISS permet d'observer l'univers depuis l'espace, sans la pollution lumineuse de l'atmosphère terrestre. Afin de capturer des images et des données sur les objets célestes tels que les étoiles, les galaxies, les nébuleuses et les phénomènes astronomiques transitoires. Ces observations ont permis de contribuer à des études spécifiques sur la formation des étoiles, les trous noirs, les pulsars et d'autres objets cosmiques.",
    },
    {
      id: 1,
      domain: "Recherche scientifique",
      description:
        "L'ISS sert de laboratoire de recherche en microgravité, offrant aux scientifiques du monde entier la possibilité d'effectuer des expériences dans des domaines tels que la biologie, la physique, la médecine, la chimie et les sciences de la Terre. Ces recherches permettent de mieux comprendre les effets de l'apesanteur sur les organismes vivants, d'explorer de nouveaux matériaux et de développer des technologies pour les missions spatiales futures.",
    },
    {
      id: 2,
      domain: "Exploration spatiale",
      description:
        "L'ISS joue un rôle important dans la préparation et le développement des technologies nécessaires pour des missions d'exploration spatiale à plus long terme, telles que les voyages vers la Lune, Mars et au-delà. Les expériences menées à bord de l'ISS contribuent à l'élaboration de nouvelles technologies de survie, de propulsion, de communication et de protection des astronautes en vue de ces futures missions.",
    },
    {
      id: 3,
      domain: "Collaboration internationale",
      description:
        "L'ISS est un projet de collaboration internationale impliquant plusieurs agences spatiales, notamment la NASA (États-Unis), Roscosmos (Russie), l'ESA (Europe), JAXA (Japon) et CSA (Canada). Cette coopération internationale permet de partager les coûts, les ressources et les compétences techniques, tout en favorisant la compréhension mutuelle et la diplomatie scientifique entre les pays participants.",
    },
    {
      id: 4,
      domain: "Formation des astronautes",
      description:
        "L'ISS sert de plateforme pour la formation des astronautes. Les séjours prolongés à bord de l'ISS permettent aux astronautes d'acquérir une expérience pratique en matière de vie et de travail dans l'espace, de développer des compétences en matière de maintenance et de réparation des systèmes de la station, et de s'entraîner à réaliser des sorties extravéhiculaires.",
    },
    {
      id: 5,
      domain: "Développement technologique",
      description:
        "L'ISS est utilisée pour tester et valider de nouvelles technologies dans des conditions de microgravité. Cela inclut le développement de nouveaux systèmes de propulsion, de matériaux avancés, de technologies de communication et de systèmes de support de vie pour les missions spatiales futures.",
    },
    {
      id: 6,
      domain: "Observation de la Terre",
      description:
        "L'ISS est équipée de capteurs et d'instruments pour observer la Terre depuis l'espace. Ces observations permettent de collecter des données sur les phénomènes météorologiques, les changements climatiques, la déforestation, la pollution et d'autres processus terrestres importants, contribuant ainsi à notre compréhension de notre planète.",
    },
    {
      id: 7,
      domain: "Education et sensibilisation",
      description:
        "L'ISS inspire et éduque les générations futures en matière de science, de technologie, d'ingénierie et de mathématiques (STEM). Les missions de l'ISS sont souvent accompagnées d'activités éducatives, de programmes de diffusion en direct et de ressources pédagogiques pour stimuler l'intérêt des étudiants pour l'exploration spatiale.",
    },
  ];

  const [research, setResearch] = useState(missions[0]);

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

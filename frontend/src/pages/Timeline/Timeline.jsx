import { useState } from "react";
import Event from "../../components/Event/Event";
import "./Timeline.css";
import Construction from "../../components/construction/Construction";

export default function Timeline() {
  const addEvent = (anEvent) => {
    return (
      <Event
        date={anEvent.date}
        title={anEvent.title}
        description={anEvent.description}
        picture={anEvent.picture}
      />
    );
  };

  const event = [
    {
      id: "event1",
      date: "1984",
      title: "Reagan ordonne à la NASA de construire l’ISS ",
      description:
        "'Tout comme les océans ont ouvert un nouveau monde pour les navires clipper et les commerçants yankees, l’espace détient un énorme potentiel pour le commerce aujourd’hui'. Le discours sur l’État de l’Union du président Ronald Reagan ordonne à la NASA de construire une station spatiale internationale au cours des 10 prochaines années.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/ronald-reagan-timeline-600.jpg",
    },
    {
      id: "event2",
      date: "1998",
      title: "Lancement du premier segment de l'ISS",
      description:
        "Le premier segment des lancements de l’ISS : le module de contrôle Zarya lancé à bord d’une fusée russe Proton du cosmodrome de Baïkonour, au Kazakhstan. Zarya (traduit par 'sunrise') a fourni des capacités de stockage de carburant, de batterie, de rendez-vous et d’amarrage pour les véhicules spatiaux Soyouz et Progress.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/ISS-Zarya-STS-88-1998.jpg",
    },
    {
      id: "event3",
      date: "1998",
      title: "Lancement des premiers composants fabriqués aux États-Unis",
      description:
        "Le module Unity Node 1, le premier composant construit aux États-Unis de la station spatiale internationale, est mis en orbite deux semaines plus tard pendant la mission STS-88. La première étape de l’assemblage du laboratoire orbital a été de joindre Unity au module Zarya.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/s99-unity.jpg",
    },
    {
      id: "event4",
      date: "2000",
      title: "Première équipe a résidé dans la station",
      description:
        "L’astronaute de la NASA Bill Shepherd et les cosmonautes Yuri Gidzenko et Sergueï Krikalev deviennent le premier équipage à résider à bord de la station. L’expédition 1 a passé quatre mois à bord pour accomplir les tâches nécessaires pour donner vie à l’ISS et a commencé ce qui est maintenant plus de 20 ans de présence humaine continue dans l’espace.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/first-crew-iss-nov2000.jpg",
    },
    {
      id: "event5",
      date: "2001",
      title: "Ajout d’un module de laboratoire aux États-Unis",
      description:
        "Destiny, le module de laboratoire américain, fait partie de la station. Le laboratoire — qui a augmenté de 41 % l’espace habitable à bord — demeure le principal laboratoire de recherche pour les charges utiles américaines.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/sts_98_destiny-feb2001.jpg",
    },
    {
      id: "event6",
      date: "2005",
      title:
        "Le module de laboratoire américain est reconnu comme le plus récent laboratoire national américain",
      description:
        "Le Congrès désigne la partie américaine de l’ISS comme le plus récent laboratoire national du pays afin de maximiser son utilisation pour d’autres organismes gouvernementaux américains et pour les établissements universitaires et privés.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/destiny3.jpg",
    },
    {
      id: "event7",
      date: "2008",
      title: "Un laboratoire européen rejoint l’ISS",
      description:
        "Le laboratoire Columbus de l’Agence spatiale européenne fait partie de la station.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/columbus-lab-esa.jpg",
    },
    {
      id: "event8",
      date: "2008",
      title: "Un laboratoire japonais rejoint l’ISS",
      description:
        "Le premier module de laboratoire japonais Kibo fait partie de la station.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/external-kibo.jpg",
    },
    {
      id: "event9",
      date: "2010",
      title: "Dixième anniversaire de l'ISS",
      description:
        "L’ISS célèbre son 10e anniversaire d’occupation humaine continue. Depuis l’expédition 1 à l’automne 2000, 202 personnes avaient visité la station.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/iss_sts13010years.jpg",
    },
    {
      id: "event10",
      date: "2011",
      title: "La NASA publie un accord de coopération",
      description:
        "La NASA publie un avis d’entente de coopération pour un partenaire de gestion.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2022/01/600NASA-logo.jpg",
    },
    {
      id: "event11",
      date: "2011",
      title: "La NASA choisit le laboratoire national de l’ISS",
      description:
        "La NASA choisit le Center for the Advancement of Science in Space pour gérer le laboratoire national de l’ISS.",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/2023/02/logo-blue.jpg",
    },
    {
      id: "event12",
      date: "2013",
      title: "Le premier vol national de recherche en laboratoire de l’ISS",
      description:
        "Les protéines peuvent être cultivées comme cristaux dans l’espace avec des structures tridimensionnelles presque parfaites utiles pour le développement de nouveaux médicaments. La série de vols de croissance des cristaux protéiques (PCG) du laboratoire national de l’ISS a commencé en 2013, permettant aux chercheurs d’utiliser l’environnement unique de l’ISS",
      picture:
        "https://www.issnationallab.org/wp-content/uploads/protein-crystalization-iss-launch-e1643234474626.jpg",
    },
  ];

  const [anEvent, setAnEvent] = useState(event[0]);

  return (
    <>
      <h1>Timeline</h1>
      <h2>La conquête de l'espace</h2>
      <section className="timeline-events-section">
        <div className="timeline-div-mobile">
          <ul>
            {event.map((e) => {
              return <li key={e.id}>{addEvent(e)}</li>;
            })}
          </ul>
        </div>
        <div className="timeline-div-Desktop">
          <img
            className="timeline-img"
            src="../../../public/images/vehicle-on-the-moon.jpg"
            alt=""
          />
          <div className="timeline-button">
            {event.map((e) => (
              <button type="button" onClick={() => setAnEvent(e)}>
                {e.date}
              </button>
            ))}
          </div>
          <div className="timeline-card">{addEvent(anEvent)}</div>
        </div>
      </section>
      <h2>Construction des modules de l'ISS</h2>
      <section className="timeline-modules-section">
        <Construction />
      </section>
    </>
  );
}

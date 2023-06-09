import { useState } from "react";
import Crew from "./Crew";

export default function Card() {
  const addEvent = (anEvent) => {
    return (
      <Crew
        picture={anEvent.picture}
        age={anEvent.age}
        nation={anEvent.nation}
        name={anEvent.name}
        description={anEvent.description}
      />
    );
  };
  const event = [
    {
      id: "1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sergey_Prokopyev_-_NASA_portrait.jpg/800px-Sergey_Prokopyev_-_NASA_portrait.jpg",
      age: "48 ans",
      nation:
        "https://img.freepik.com/vecteurs-premium/drapeau-russie-illustration-vectorielle-du-drapeau-russie_685751-100.jpg",
      name: "Sergueï Prokopyev",
      description:
        "1er vol spatial : du 6 juin au 20 décembre 2018 en tant que commandant du vaisseau spatial Soyouz MS-09 et ingénieur de vol ISS-56/57, en compagnie des astronautes Alexander Gerst (ESA) et Serina Aunyon-Chancellor (NASA). Pendant le vol, il a effectué deux sorties dans l'espace. Le premier était avec Oleg Artemiev les 15 et 16 août 2018 d'une durée totale de 7 heures 46 minutes. La deuxième sortie a eu lieu les 11 et 12 décembre 2018, avec Oleg Kononenko, d'une durée de 7 heures et 45 minutes. La durée du vol était de 196 jours 17 heures 49 minutes. 2e vol spatial : Le 21 septembre 2022, avec le cosmonaute de Roscosmos Dmitry Petelin et l'astronaute de la NASA Frank Rubio, il s'est lancé depuis le cosmodrome de Baïkonour en tant que commandant du Soyouz MS-22 TPK et commandant de l'ISS-68. ",
    },
    {
      id: "2",
      picture:
        "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/jsc2017e114795_0.jpg?itok=PtdwE1YW",
      age: "47 ans",
      nation:
        "https://img.freepik.com/vecteurs-premium/drapeau-usa-couleurs-proportions-originales-illustration-vectorielle-etats-unis-eps-10_148553-489.jpg",
      name: "Frank Rubio",
      description:
        "Rubio a pris ses fonctions en août 2017 et a suivi deux ans de formation en tant que candidat astronaute. Il a suivi une formation d'ingénieur de vol et membre de l'équipage de l'expédition 68. Rubio, avec les cosmonautes Sergey Prokopyev et Dmitry Petelin de Roscosmos, a lancé mercredi 21 septembre le vaisseau spatial Soyouz MS-22 du cosmodrome de Baïkonour au Kazakhstan à la Station spatiale internationale.",
    },
    {
      id: "3",
      picture: "https://www.gctc.ru/media/images/news/2021/ekipaji/Petelin.jpg",
      age: "40 ans",
      nation:
        "https://img.freepik.com/vecteurs-premium/drapeau-russie-illustration-vectorielle-du-drapeau-russie_685751-100.jpg",
      name: "Dimitri Petelin",
      description:
        "1er vol spatial : Le 21 septembre 2022, avec le cosmonaute de Roscosmos Sergei Prokopiev et l'astronaute de la NASA Frank Rubio, il a décollé du cosmodrome de Baïkonour en tant qu'ingénieur de vol-1 du Soyouz MS-22 TPK et ingénieur de vol de l'ISS-68. Le 17 novembre, avec le cosmonaute Sergei Prokopyev, il a effectué une sortie dans l'espace d'une durée de 6 heures et 25 minutes.",
    },
    {
      id: "4",
      picture:
        "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/9368719254_4a2c64ac77_o.jpg?itok=T12vNPdd",
      age: "59 ans",
      nation:
        "https://img.freepik.com/vecteurs-premium/drapeau-usa-couleurs-proportions-originales-illustration-vectorielle-etats-unis-eps-10_148553-489.jpg",
      name: "Stephen G. Bowen",
      description:
        "En juillet 2000, Bowen a été le premier officier de sous-marin sélectionné par la NASA en tant que spécialiste de mission. Il s'est présenté pour une formation au Johnson Space Center en août 2000. Après deux années de formation et d'évaluation, il a d'abord été affecté à des tâches techniques au sein de la branche des opérations de la station du bureau des astronautes. Vétéran de trois vols spatiaux, STS‐126 en 2008, STS‐132 en 2010 et STS‐133 en 2011, Bowen a enregistré un total de 47 jours, 10 heures, 4 minutes et 37 secondes dans l'espace, dont 47 heures et 18 minutes en sept sorties dans l'espace. Bowen a été lancé à la Station spatiale internationale en tant que commandant de la mission SpaceX Crew-6 de la NASA à bord d'un vaisseau spatial SpaceX Crew Dragon le 2 mars 2023 et s'est amarré avec succès le 3 mars 2023.",
    },
    {
      id: "5",
      picture:
        "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/jsc2017e118314_0.jpg?itok=2-osKvr9",
      age: "37 ans",
      nation:
        "https://img.freepik.com/vecteurs-premium/drapeau-usa-couleurs-proportions-originales-illustration-vectorielle-etats-unis-eps-10_148553-489.jpg",
      name: "Woody Hoburg",
      description:
        "Au moment de sa sélection en juin 2017, Hoburg était professeur adjoint d'aéronautique et d'astronautique au MIT, où il a enseigné des cours de premier cycle sur la dynamique et l'ingénierie des véhicules de vol. Les recherches de Hoburg se sont concentrées sur des méthodes efficaces de conception de systèmes d'ingénierie. Son groupe a produit l'outil logiciel open source GPkit, qui est un package Python pour la programmation géométrique. Les outils de son groupe ont été utilisés pour concevoir un drone d'endurance de cinq jours pour l'US Air Force. Avant le MIT, il a travaillé pour Boeing Commercial Airplanes Product Development sur des logiciels pour les processus de fabrication de composites. De 2010 à 2013, il a été membre saisonnier de Yosemite Search and Rescue et chef des opérations pour l'unité de sauvetage en montagne de la région de la baie.",
    },
    {
      id: "6",
      picture: "https://www.gctc.ru/media/images/cosmonaut/fedyaev_a.jpg",
      age: "42 ans",
      nation:
        "https://img.freepik.com/vecteurs-premium/drapeau-russie-illustration-vectorielle-du-drapeau-russie_685751-100.jpg",
      name: "Andrey Fedvaev",
      description:
        "Le 2 mars 2023, avec les astronautes de la NASA Steven Bowen , Woody  Hoburg  et l'astronaute des Émirats arabes unis Sult anom al-Neyadi,  lancé depuis le pad 39A du centre spatial Kennedy de la NASA en Floride sur le vaisseau spatial habité Crew Dragon en tant que spécialiste de mission Crew-6 et ingénieur de vol ISS-69. Le 3 mars, le vaisseau spatial habité Crew Dragon s'est amarré au module Harmony Node sur le segment",
    },
    {
      id: "7",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/SpaceX-Crew-6_Sultan-Alneyadi-MBRSC-scaled.jpg",
      age: "42 ans",
      nation:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png",
      name: "Sultan Alneyadi",
      description:
        "AlNeyadi est né le 23 mai 1981 à Umm Ghafa, à 30 kilomètres au sud-est d'Al Ain, à Abu Dhabi, où il a fait ses études primaires et secondaires. Il a excellé dans son éducation, suivant les traces de son père, qui a servi dans l'armée. AlNeyadi a rejoint les forces armées et a été affecté à des études d'ingénierie des communications. Il a commencé ses études supérieures au Royaume-Uni et a obtenu un baccalauréat ès sciences en génie électronique et des communications de l'Université de Brighton au Royaume-Uni. Il est retourné aux Émirats arabes unis et a commencé à servir dans les forces armées. Plus tard, il a repris sa passion pour l'éducation en se rendant en Australie pour recevoir sa maîtrise en informatique, de l'Université Griffith en Australie, en 2008. AlNeyadi a travaillé comme ingénieur en sécurité réseau pour les forces armées des Émirats arabes unis et a visité plus de 20 pays à travers le monde. AlNeyadi a en outre terminé avec succès sa première année de formation au Johnson Space Center de la NASA en 2021, devenant officiellement certifié pour travailler en tant qu'opérateur à bord de la Station spatiale internationale.",
    },
    {
      id: "8",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ISS_emblem.png/800px-ISS_emblem.png",
      age: "25 ans",
      nation:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ISS_emblem.png/800px-ISS_emblem.png",
      name: "International Space Station",
      description:
        "Station spatiale placée en orbite terrestre basse, occupée en permanence par un équipage international qui se consacre à la recherche scientifique dans l'environnement spatial. Ce programme, lancé et piloté par la NASA, est développé conjointement avec l'agence spatiale fédérale russe, avec la participation des agences spatiales européenne, japonaise et canadienne.",
    },
  ];

  const [anEvent, setAnEvent] = useState(event[0]);

  return (
    <div className="crew-modal">
      <div className="crew-button">
        {event.map((e) => (
          <button type="button" onClick={() => setAnEvent(e)}>
            <img className="crew-image" src={e.picture} alt="" />
          </button>
        ))}
      </div>
      <div className="crew-card">{addEvent(anEvent)}</div>
    </div>
  );
}

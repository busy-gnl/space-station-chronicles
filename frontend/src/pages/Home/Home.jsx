/* eslint-disable import/no-unresolved */
import Slider from "@components/slider/Slider";
import Timer from "../../components/Timer/Timer";
import ContactForm from "../../components/contact_form/ContactForm";
import "./Home.css";

export default function Home() {
  const ImageData = [
    {
      id: 1,
      image:
        "https://www.parlonspeuparlonscience.com/wp-content/uploads/2021/01/Nasa-scaled.jpg",
    },
    {
      id: 2,
      image:
        "https://starwalk.space/gallery/images/iss-quiz-intro/1920x1080.jpg",
    },
    {
      id: 3,
      image:
        "https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/03/01/19/Thomas-Pesquet-devoile-des-photos-inedites-de-l-ISS.jpg?VersionId=LEuynsgP9x70H32IdNWJbqk9qayBX_2u",
    },
    {
      id: 4,
      image:
        "https://images.lindependant.fr/api/v1/images/view/63f86bfb29c7275ee07a9f5d/large/image.jpg?v=1",
    },
  ];

  return (
    <div>
      <Slider slides={ImageData} />
      <h2>International Space Station</h2>
      <section className="home-about-section">
        <img
          className="home-about-img"
          src="../../../images/iss-bacteries.webp"
          alt="'ISS"
        />
        <div className="home-intro-iss">
          L'ISS, acronyme de International Space Station, est une station
          spatiale en orbite terrestre basse. C'est un projet international
          développé par la NASA, Roscosmos, l'Agence spatiale fédérale russe,
          l'Agence spatiale européenne (ESA), l'Agence japonaise d'exploration
          aérospatiale (JAXA) et l'Agence spatiale canadienne (ASC). <br />
          <br />
          L'ISS est un laboratoire en orbite qui permet la réalisation de
          recherches scientifiques dans de nombreux domaines tels que la
          biologie, la physique, l'astronomie, la médecine et les sciences de la
          Terre. Elle est également utilisée pour tester de nouvelles
          technologies et préparer les futures missions d'exploration spatiale.{" "}
          <br />
          <br />
          La construction de l'ISS a commencé en 1998 et elle est devenue
          opérationnelle en 2000. Elle est habitée en permanence par une équipe
          internationale de astronautes qui effectuent des rotations régulières.
          L'ISS est un exemple remarquable de coopération internationale dans le
          domaine de l'exploration spatiale, et elle joue un rôle important dans
          la recherche scientifique et le développement de l'expérience humaine
          dans l'espace.
        </div>
      </section>
      <h2>Date de lancement du premier module : 20 novembre 1998</h2>
      <section className="home-timer-section">
        <Timer />
        <img
          className="home-iss-orbit-img"
          src="../../../images/iss-orbite.webp"
          alt="ISS en orbite"
        />
      </section>
      <h2>Live : Vue de la Terre en direct depuis l'ISS</h2>
      <section className="home-live-section">
        <iframe
          className="home-live-video"
          src="https://www.youtube.com/embed/86YLFOog4GM?autoplay=1&mute=1"
          title="Live from ISS"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </section>
      <h2>Envoyez un message à l'équipage de l'ISS</h2>
      <section className="home-contact-section">
        <ContactForm />
      </section>
    </div>
  );
}

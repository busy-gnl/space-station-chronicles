import React from "react";
import FunFacts from "../../components/fun_facts/FunFacts";
import Missions from "../../components/Missions/Missions";
import Carousel from "../../components/carousel/Carousel";
import "./Chronicles.css";

export default function Chronicles() {
  const news = [
    {
      id: 1,
      iframe: (
        <iframe
          title="SpaceX crew-7 members"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FISS%2Fposts%2Fpfbid0gQsPn65JxoSEXTSDLWa5ggWGv6Kv3s55vXs5tPYQQuzra7Dd4U8bbtqCbEKFGSAbl&show_text=true&width=500"
          scrolling="no"
          frameBorder="0"
          style={{ border: "none", overflow: "hidden", padding: "0" }}
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      ),
    },
    {
      id: 2,
      iframe: (
        <iframe
          title="SpaceX crew-7 launch"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FISS%2Fvideos%2F830064328614272%2F&show_text=true&width=560&t=0"
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      ),
    },
    {
      id: 3,
      iframe: (
        <iframe
          title="SpaceX crew-7 docking"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FISS%2Fvideos%2F3524802507837264%2F&show_text=true&width=560&t=0"
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      ),
    },
    {
      id: 4,
      iframe: (
        <iframe
          title="ISS crew meeting new members"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FISS%2Fvideos%2F2041826886151783%2F&show_text=true&width=560&t=0"
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      ),
    },
  ];

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
      <h2>Actualités des réseaux sociaux</h2>
      <section className="chronicles-news-section">
        <Carousel>
          {news.map((tweet) => (
            <div className="chronicles-news" key={tweet.id}>
              {tweet.iframe}
            </div>
          ))}
        </Carousel>
      </section>
      <h2>Fun Facts</h2>
      <section className="chronicles-fun-facts-section">
        <FunFacts />
      </section>
    </div>
  );
}

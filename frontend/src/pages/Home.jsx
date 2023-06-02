import Slider from "../components/carousel/Slider.jsx";
import "../components/carousel/Slider.css"

const ImageData = [
  {
    image:
      "https://www.parlonspeuparlonscience.com/wp-content/uploads/2021/01/Nasa-scaled.jpg"
  },
  {
    image:
      "https://starwalk.space/gallery/images/iss-quiz-intro/1920x1080.jpg"
  },
  {
    image:
      "https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/03/01/19/Thomas-Pesquet-devoile-des-photos-inedites-de-l-ISS.jpg?VersionId=LEuynsgP9x70H32IdNWJbqk9qayBX_2u"
  },
  {
    image:
      "https://images.lindependant.fr/api/v1/images/view/63f86bfb29c7275ee07a9f5d/large/image.jpg?v=1"
  }
];

function Home() {
  return (
    <div className="Home">
      <Slider slides={ImageData} />
    </div>
  );
}

export default Home
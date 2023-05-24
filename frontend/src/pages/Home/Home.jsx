/* eslint-disable import/no-unresolved */
import Timer from "../../components/Timer/Timer";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <section className="timer-section">
        <img
          className="iss-orbite"
          src="../../../public/images/iss-mise-en-orbite.jpg"
          alt="ISS en orbite"
        />
        <Timer />
      </section>
    </div>
  );
}

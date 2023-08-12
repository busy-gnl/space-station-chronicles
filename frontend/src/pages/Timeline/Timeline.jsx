import axios from "axios"; // eslint-disable-line
import { useState, useEffect } from "react";
import Event from "../../components/Event/Event";
import "./Timeline.css";
import Construction from "../../components/construction/Construction";

export default function Timeline() {
  const [oneEvent, setOneEvent] = useState([]);
  const [events, setEvents] = useState(oneEvent);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const displayEvents = (event) => {
    return (
      <Event
        date={event.date}
        title={event.title}
        description={event.description}
        picture={event.picture}
      />
    );
  };

  useEffect(() => {
    axios
      .get(`${backendURL}/events`)
      .then((res) => {
        setEvents(res.data);
        setOneEvent(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1>Timeline</h1>
      <h2>La conquête de l'espace</h2>
      <section className="timeline-events-section">
        <div className="timeline-div-mobile">
          <ul>
            {events.map((e) => {
              return <li key={e.id}>{displayEvents(e)}</li>;
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
            {events.map((e) => (
              <button type="button" onClick={() => setOneEvent(e)}>
                {e.date}
              </button>
            ))}
          </div>
          <div className="timeline-card">{displayEvents(oneEvent)}</div>
        </div>
      </section>
      <h2>Construction des modules de l'ISS</h2>
      <section className="timeline-modules-section">
        <Construction />
      </section>
    </>
  );
}

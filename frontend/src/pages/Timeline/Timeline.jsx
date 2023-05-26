import Event from "../../components/layout/Event";
import "./Timeline.css";

export default function Timeline() {
  const event = [
    {
      date: "1",
      title: "event1",
      description: "description1",
      picture: "",
    },
    {
      date: "2",
      title: "event2",
      description: "description2",
      picture: "",
    },
  ];
  return (
    <>
      <h1>Chronologie</h1>
      <div className="timeline-div">
        <ul>
          {event.map((e) => {
            return (
              <li key={e.date}>
                <Event
                  date={e.date}
                  title={e.title}
                  description={e.description}
                  picture={e.picture}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

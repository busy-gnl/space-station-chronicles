import "./Event.css";

export default function Event({ date, title, description, picture }) {
  return (
    <div className="event-div">
      <span id="event-balise" />
      <div className="event-description">
        <h3 className="event-title">
          {date}: {title}
        </h3>
        <p className="event-p">{description}</p>
      </div>
      <img className="event-img" src={picture} alt="" />
    </div>
  );
}

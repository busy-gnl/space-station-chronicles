import "./Event.css";

export default function Event({ date, title, description, picture }) {
  return (
    <div className="event-div">
      <span id="event-balise" />
      <h3>Date : {date}</h3>
      <h3>Titre : {title}</h3>
      <div>
        <p>Description évènement : {description}</p>
        <img src={picture} alt="" />
      </div>
    </div>
  );
}

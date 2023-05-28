import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const { value } = event.target;
    switch (fieldName) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setIsSubmitted(false);
    }, 10000);
  };

  return (
    <form className="contact-form" action="" onSubmit={handleSubmit}>
      <label className="contact-label" htmlFor="name">
        Votre nom
      </label>
      <input
        className="contact-input"
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        id="name"
      />
      <label className="contact-label" htmlFor="email">
        Votre email
      </label>
      <input
        className="contact-input"
        onChange={handleChange}
        value={email}
        type="email"
        name="email"
        id="email"
      />
      <label className="contact-label" htmlFor="message">
        Votre message
      </label>
      <textarea
        className="contact-input"
        onChange={handleChange}
        value={message}
        name="message"
        id="message"
        cols="30"
        rows="10"
      />
      <button className="contact-button" type="submit">
        Envoyer
      </button>
      {isSubmitted ? (
        <div className="contact-message">Votre message à bien été envoyé!</div>
      ) : null}
    </form>
  );
}

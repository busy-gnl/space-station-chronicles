import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <form className="contact-form" action="">
      <label className="contact-label" htmlFor="name">
        Votre nom
      </label>
      <input className="contact-input" type="text" name="name" id="name" />
      <label className="contact-label" htmlFor="email">
        Votre email
      </label>
      <input className="contact-input" type="email" name="email" id="email" />
      <label className="contact-label" htmlFor="message">
        Votre message
      </label>
      <textarea
        className="contact-input"
        name="message"
        id="message"
        cols="30"
        rows="10"
      />
      <button className="contact-button" type="submit">
        Envoyer
      </button>
    </form>
  );
}

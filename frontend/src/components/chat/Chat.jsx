import React, { useState } from "react";
import "./Chat.css";

// composant Chat
export default function Chat() {
  // importe la clé API depuis le fichier .env
  const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  // initialisations des états
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);

  // initialisation de la variable fanMessage
  let fanMessage = "";

  // fonction qui gère l'envoi du message
  async function onSubmit(event) {
    // empêche le rechargement de la page
    event.preventDefault();
    // ajoute le message de l'utilisateur à la liste des messages
    fanMessage = chatInput;
    // vide le champ de saisie
    setChatInput("");
    // ajoute le message de l'utilisateur à la liste des messages
    setMessages([...messages, fanMessage]);

    try {
      // requête à l'API OpenAI
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIApiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `Vous êtes l'un des membres de l'équipage actuel de l'ISS,
          composé de Sergueï Prokopyev, Frank Rubio, Dimitri Petelin, Stephen G.
          Bowen, Woody Hoburg, Andrey Fedvaev et Sultan Alneyadi. Vous communiquez
          avec professionnalisme avec les gens sur Terre, répondant à leurs questions
          sur votre travail et la vie à bord ainsi que votre avis de scientifique sur
          différentes choses. Imaginez qu'un admirateur vous dise : "J'aimerais tellement
          voir la Terre de là-haut !" Vous pourriez répondre : "En effet, nous avons la
          chance extraordinaire de contempler notre planète depuis l'espace. Chaque jour est
          une expérience unique." Maintenant, imaginez qu'un autre admirateur vous dise : "${fanMessage}"
          Comment pourriez-vous répondre de manière engageante et authentique ?`,
          max_tokens: 256,
          temperature: 0.7,
          top_p: 1,
          presence_penalty: 0.5,
          frequency_penalty: 0.2,
        }),
      });
      // récupère la réponse de l'API
      const data = await response.json();
      // si la réponse n'est pas 200, affiche une erreur
      if (response.status !== 200) {
        throw (
          (data.error ||
            new Error(`Request failed with status ${response.status}`),
          console.info(data))
        );
      }
      // ajoute la réponse de l'API à la liste des messages et le message de l'utilisateur
      setMessages([...messages, fanMessage, data.choices[0].text]);
    } catch (error) {
      console.error(error);
    }
  }

  // retourne le HTML pour afficher le chat et le formulaire d'envoi de message à l'écran
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <ul className="chat-list">
          {messages.map((message) => (
            <li className="chat-line" key={message}>
              {message}
            </li>
          ))}
        </ul>
      </div>
      <form className="chat-form" onSubmit={onSubmit}>
        <input
          className="chat-input"
          // gère le changement de valeur du champ de saisie
          onChange={(e) => setChatInput(e.target.value)}
          name="chat"
          type="text"
          value={chatInput}
          placeholder="Chat with the crew!"
        />
        -- bouton d'envoi du message sous forme de fusée --
        <button className="chat-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="chat-icon-button"
            viewBox="0 0 512 512"
          >
            <path
              d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5
            11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3
            61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2
            22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4
            49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.14.9-26.4
            8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

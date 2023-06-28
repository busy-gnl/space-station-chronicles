import React, { useState } from "react";
import "./Chat.css";

export default function Chat() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);
  const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIApiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `Tu incarnes l'un des membres de l'équipage de l'ISS, qui est composé de Sergueï Prokopyev, Frank Rubio, Dimitri Petelin, Stephen G. Bowen, Woody Hoburg, Andrey Fedvaev et Sultan Alneyadi. Tu communiques avec des fans de votre mission dans l'espace se trouvant sur terre via internet.\nFan : Bonjour ! Je suis tellement content de pouvoir discuter avec vous, depuis la Station spatiale internationale (ISS). Comment ça va aujourd'hui ?\nAstronaute : Bonjour ! Je suis ravi de pouvoir échanger avec vous également. La vie dans l'espace est vraiment extraordinaire ! Nous flottons en microgravité, nous menons des expériences et nous contemplons la beauté de notre planète depuis ce point de vue unique. C'est une aventure constante !\nFan : ${chatInput}\nAstronaute:`,
          max_tokens: 256,
          temperature: 1,
          top_p: 1,
          frequency_penalty: 0,
          stop: [" Fan:", " Astronaute:"],
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          (data.error ||
            new Error(`Request failed with status ${response.status}`),
          console.info(response))
        );
      }
      setMessages([
        ...messages,
        `YOU : ${chatInput}`,
        `ISS : ${data.choices[0].text}`,
      ]);
      setChatInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {/* <a href="javascript:alert('YOU ARE HACKED')">CLICK ME</a> */}
        <ul className="chat-list">
          {messages.map((message) => (
            <li className="chat-line" key={message.id}>
              {message}
            </li>
          ))}
        </ul>
      </div>
      <form className="chat-form" onSubmit={onSubmit}>
        <input
          className="chat-input"
          onChange={(e) => setChatInput(e.target.value)}
          name="chat"
          type="text"
          value={chatInput}
          placeholder="Chat with the crew!"
        />
        <button className="chat-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="chat-icon-button"
            viewBox="0 0 512 512"
          >
            <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

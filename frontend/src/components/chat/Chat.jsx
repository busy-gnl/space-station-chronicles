import React, { useState } from "react";
// import axios from "axios";
// import { Configuration, OpenAIApi } from "openai";
import "./Chat.css";

export default function Chat() {
  const [chatInput, setChatInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `Tu es l'un des membres de l'équipage de l'ISS, qui est composé de Sergueï Prokopyev, Frank Rubio, Dimitri Petelin, Stephen G. Bowen, Woody Hoburg, Andrey Fedvaev et Sultan Alneyadi. Tu communiques avec des fans de votre mission dans l'espace se trouvant sur terre via internet.\nFan : Bonjour ! Je suis tellement émerveillé de pouvoir discuter avec vous, Astronaute Alex, depuis la Station spatiale internationale (ISS). Comment ça va aujourd'hui ?\nAstronaute : Bonjour ! Je suis ravi de pouvoir échanger avec vous également. La vie dans l'espace est vraiment extraordinaire ! Nous flottons en microgravité, nous menons des expériences et nous contemplons la beauté de notre planète depuis ce point de vue unique. C'est une aventure constante !\nFan : ${chatInput}\nAstronaute:`,
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
          console.log(response))
        );
      }

      setResult(data.choices[0].text);
      setChatInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <div>{result}</div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setChatInput(e.target.value)}
          name="chat"
          type="text"
          value={chatInput}
          placeholder="Chat with the crew!"
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

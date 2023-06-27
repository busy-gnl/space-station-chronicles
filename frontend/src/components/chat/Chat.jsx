import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./Chat.css";

export default function Chat() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  async function getAnswer() {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:${message}`,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    console.info(response);
    setAnswer(response.data.choices[0].message.content);
    return response;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getAnswer();
    // console.log(response.data);
    //         fetch("http://api.open-notify.org/iss-now.json")
    //   .then(response => response.json())
    //   .then(data => {console.log(data.message)
    //     console.log(data.iss_position)
    //   })
    //   .catch(err => console.error(err));
    setMessage("");
  };

  return (
    <div>
      <div>{answer}</div>
      <form onSubmit={() => handleSubmit()}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
          placeholder=""
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

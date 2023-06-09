import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./Chat.css";

const configuration = new Configuration({
  organization: "org-2trWmEwJnzrX7LxFZ3xoclt4",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listModels();
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content:
        "You are randomly one member of the current crew of the ISS. You are chatting with people from the Earth.",
    },
  ],
});
console.info(completion.data.choices[0].message);
export default function Chat() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //         fetch("http://api.open-notify.org/iss-now.json")
    //   .then(response => response.json())
    //   .then(data => {console.log(data.message)
    //     console.log(data.iss_position)
    //   })
    //   .catch(err => console.error(err));
    setAnswer(response.data.choices[0].message.content);
  };

  return (
    <div>
      <div>{answer}</div>
      <form onSubmit={() => handleSubmit()}>
        <input
          onChange={() => handleMessage()}
          type="text"
          value={message}
          placeholder="Envoyez un message avec l'équipage"
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

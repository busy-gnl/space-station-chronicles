import { Configuration, OpenAIApi } from "openai";

require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  organization: "org-2trWmEwJnzrX7LxFZ3xoclt4",
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const chat = req.body.chat || "";
  if (chat.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid message.",
      },
    });
    return;
  }
  // gpt-3.5-turbo
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(chat),
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: [" Fan:", " Astronaute:"],
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(chat) {
  const response = chat[0];
  return `Tu es l'un des membres de l'équipage de l'ISS, qui est composé de Sergueï Prokopyev, Frank Rubio, Dimitri Petelin, Stephen G. Bowen, Woody Hoburg, Andrey Fedvaev et Sultan Alneyadi. Tu communiques avec des fans de votre mission dans l'espace se trouvant sur terre via internet.\nFan : Bonjour ! Je suis tellement émerveillé de pouvoir discuter avec vous, Astronaute Alex, depuis la Station spatiale internationale (ISS). Comment ça va aujourd'hui ?\nAstronaute : Bonjour ! Je suis ravi de pouvoir échanger avec vous également. La vie dans l'espace est vraiment extraordinaire ! Nous flottons en microgravité, nous menons des expériences et nous contemplons la beauté de notre planète depuis ce point de vue unique. C'est une aventure constante !\nFan : ${response}\nAstronaute:`;
}

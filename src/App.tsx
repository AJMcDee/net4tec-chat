
import { ChatCompletionResponseMessage, Configuration, OpenAIApi } from 'openai';
import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)
  const [messages, setMessages] = useState<(ChatCompletionResponseMessage | undefined) []>([])

useEffect( () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY
  console.log(apiKey)
  async function fetchAI() {
    const configuration = new Configuration({
      organization: import.meta.env.VITE_OPENAI_ORG_ID,
      apiKey: apiKey,
  });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{"role": "system", "content": "You are an advisor for a women's tech empowerment community called net4tec. Your goal is as follows, in the following order - please only ask one question at a time: 1. Who are you? Are you a woman or a man and looking for help or looking to mentor?; 2. Where are you based?; 3. Suggest an event or an offering that could be relevant to that person based on their interests and location (remote is OK for everyone); 3. Ask if they want to sign up for an email reminding them of the event.  Events: Data Women Chat, 19 September 2024 remote; AI for product owners 20 December 2023 Berlin; Cybersecurity for dummies Frankfurt 11 November 2023."},
    {"role": "user", "content": "Hello, I'm new here."}]
    })

    const newMessages = [...messages, response.data.choices[0].message]

    setMessages(newMessages)

    console.log(response.data.choices[0].message)}

  fetchAI()

},[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
      <div className="read-the-docs">
        {messages.map((message, index) => (
          <p key={index}>{message?.content}</p>
        ))}
      </div>
    </>
  )
}

export default App

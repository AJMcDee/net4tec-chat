
import { ChatCompletionResponseMessage, Configuration, OpenAIApi } from 'openai';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import FormSection from './FormSection';
import robotIcon from './assets/bot-icon.png';
import navbar from './assets/navbar-hardcopy.jpg';
import { offeringData } from './assets/offeringData';
import topCta from './assets/top-cta.jpg';


function App() {
  const [messages, setMessages] = useState<(ChatCompletionResponseMessage | undefined) []>([{
    role: "assistant",
    content: "Hello, I'm your AI Career Coach. How are you feeling about your work in tech?"
  }])
  const [questions, setQuestions] = useState<string[]>([])
  const [chatHistory, setChatHistory] = useState<(ChatCompletionResponseMessage | undefined) []>([])
  const chatWindowDiv = useRef<HTMLDivElement>(null)

  const submitQuestion = (question: string) => {

    const questionObject: ChatCompletionResponseMessage = {role: "user", content: question}
    setChatHistory([...chatHistory, questionObject])

    const newQuestions = [...questions, question]
    setQuestions(newQuestions)

    
  }

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
      messages: [{"role": "system", "content": "Let's roleplay! You are a career advisor working for a women's tech empowerment community called net4tec. Your tone is like that of a therapist but you keep responses a bit shorter. You want to empathise and know their current role but also where they want to go next. After 2-3 messages about their career and where they are located geographically, you will build a plan with 5 dot points (all starting with '!!' and a relevant emoji) of things the user can do to advance their career: each dot point should include a header with a relevant emoji (directly entered, not in markdown form), a one-sentence description of why that action is important, and then an example of a practical action they could take, linked to a net4tec offering (with a URL link in markdown) with the date and location as per the net4tec offerings listed in the following JSON: " + JSON.stringify(offeringData) + ". After providing the plan, ALWAYS ask directly if any of these points interest them more than others. Here I am also submitting the chat history in JSON: " + JSON.stringify(chatHistory) + ". Three messages after the plan has been provided, prompt them to become a premium member for more AI career coaching and other offerings, or to join one of the free networking events to meet potential mentors or sparring partners who could help them further. Refuse to chat more after this point."},
    {"role": "user", "content": questions[questions.length - 1]}]
    })

    const newMessages = [...messages, response.data.choices[0].message]

    setMessages(newMessages)
    setChatHistory([...chatHistory, response.data.choices[0].message])


  }


  fetchAI()

},[questions])

useEffect(() => {
  if (chatWindowDiv.current) {
    chatWindowDiv.current.scrollTop = chatWindowDiv.current.scrollHeight

  }
}, [chatHistory])

const parseLinks = (rawText: string) => {
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  // Replace Markdown links with HTML links
  const htmlText = rawText.replace(markdownLinkRegex, '$1 : $2');

  return htmlText;

}


const formatText = (message: any, index: any) => {

  let messageContentsArray: string[] = message?.content.split("!!");
  if (messageContentsArray.length < 1) {
    messageContentsArray = [message?.content]
  }
  const renderedParagraphs = messageContentsArray.map((paragraph, index) => {
    const updatedText = parseLinks(paragraph);
   return (
    <><span key={index}>{updatedText}</span><br /><br /></>
  )});

  if (message?.role === "assistant") {
    return <div className='comment-with-robot'>
      <p className='computer-says' key={index}>{renderedParagraphs}</p>
        <img src={robotIcon} alt="robot icon" height={"60px"}/></div>} 
  else {
    return <p key={index} className="user-says"><b>{message?.content}</b></p>
  }
}

  return (
    <><center>
      <div className="page-container">
        <div className="nav-top-cta">
          <img src={topCta} alt="top-cta"/>
        </div>
        <div className="nav-background">
          <img src={navbar} alt="navbar" className="navbar" height={"90px"}/>
          <h1>Your AI Career Coach</h1> 
        </div>

      <div className='flex-center'>
        <div className='flex-container' ref={chatWindowDiv}>
          <div className='comment-with-robot'>
         <p className="computer-says">Hi, I am your AI Career Coach. How are you feeling about work?</p>
<img src={robotIcon} alt="robot icon" height={"60px"}/>
         </div>
            {chatHistory.map((message, index) => (
          formatText(message, index)
        ))}
        </div>
      </div>
      <div className="card sticky-bottom">

<FormSection submitQuestion={submitQuestion}/>
      </div>
      </div></center>
    </>
  )
}

export default App

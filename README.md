# net4tec AI Engage

## An OpenAI Chatbot for Career Advice

net4tec is an existing network providing learning hours, networking events, mentorship matching, social media campaigns and more, all with the goal of boosting gender diversity in tech. Unfortunately, the bigger it grows, the more complex its offerings. So how does any one individual quickly and easily find what is relevant for them? From the net4tec perspective: how do we ensure that users stay engaged in the website?

## How to run it

1. Clone the repository
2. Run `npm install`
3. Create a .env file with your OpenAI API credentials.
4. Run `npm run dev` to run a local dev environment.

## What it does

We've built an ChatGPT-style AI conversation bot which offers visitors to the net4tec website a clear, 5-point plan for improving their career. After a short conversation about their job, goals, and location, the bot  provides the individualised plan, along with a few ideas for how net4tec can help them get there. If requested, the bot can also give links to relevant URLs. 

## How we built it

This prototype was built using ReactTS via Vite. All logic is executed in the frontend and connects to the Open AI API. The prompt is long and includes two JSONs: 

**1. net4tec offerings:** This JSON represents what would eventually be pulled from a database dynamically. For now, we have hard-coded what net4tec has to offer in terms of events, social media campaigns, and other. Each of these has been assigned its own TypeScript interface to ensure type security if/when it is integrated with a backend system.

**2. chat history:** In order to execute a continuous conversation with the AI chatbot,  we need to send the chat history through with each request. This is very clumsy but for now unavoidable as a casual user of the API. Without this, the Open AI API will treat each message from the user as brand new, and will never get to their 5-point plan. 




## What's next for net4tec AI Engage

Ideally, we would like to continue moving this project forward into a real-world implementation with a proper backend and request gating for premium members. Naturally this would require more time and commitment, and probably would be best implemented via an open-source repository. 

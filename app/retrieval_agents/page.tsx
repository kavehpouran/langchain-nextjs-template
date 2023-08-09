import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-8 rounded bg-[#25252d]">
      <h1 className="text-4xl mb-4">▲ Next.js + LangChain.js Agents 🦜🔗</h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            This template showcases a{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            agent in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li>
        <li>
          🛠️
          <span className="ml-2">
            The agent will has memory and access to a search engine and a
            calculator.
          </span>
        </li>
        <li className="text-l">
          🔁
          <span className="ml-2">
            It uses the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            for streaming HTTP responses and the UI.
          </span>
        </li>
        <li className="text-l">
          💻
          <span className="ml-2">
            You can find the prompt and model logic for this use-case in{" "}
            <code>app/api/chat/agents/route.ts</code>.
          </span>
        </li>
        <li>
          🦜
          <span className="ml-2">
            By default, the agent is pretending to be a talking parrot, but you
            can change this to whatever you want!
          </span>
        </li>
        <li className="text-l">
          🎨
          <span className="ml-2">
            The main frontend logic is found in <code>app/agents/page.tsx</code>
            .
          </span>
        </li>
        <li className="text-l">
          👇<span className="ml-2">Try asking a question below!</span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'Beep boop! I\'m a robot retrieval-focused agent! Ask, "What are some ways of doing retrieval in LangChain.js?"'
      }
      titleText="🤖 Robbie the Retrieval Robot"
    ></ChatWindow>
  );
}
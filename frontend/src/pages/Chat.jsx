import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../css/Chat.css";

export default function Chat() {
  const APIKEY = import.meta.env.VITE_GEMINIAPI_KEY;
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion("");
    setChatHistory((prev) => [
      ...prev,
      { type: "question", content: currentQuestion },
    ]);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${APIKEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const aiResponse =
        response.data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: aiResponse },
      ]);
    } catch (error) {
      console.log(error);
      setChatHistory((prev) => [
        ...prev,
        {
          type: "answer",
          content: "Sorry - Something went wrong. Please try again!",
        },
      ]);
    }
    setGeneratingAnswer(false);
  }

  return (
    <div className="chat-container">
      <div className="chat-history scrollbar-thin" ref={chatContainerRef}>
        {chatHistory.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6">
            <div className="welcome-message rounded-xl p-8 max-w-2xl">
              <h2 className="welcomechat text-2xl font-bold mb-4">
                Hi I'm StockScholar Bot! 👋
              </h2>
              <p className="text-white mb-4">Ask me anything!</p>
              <div className="chat1 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="chatcard">
                  <span>📈</span> Stock Prices
                </div>
                <div className="chatcard">
                  <span>💹</span> Market Trends
                </div>
                <div className="chatcard">
                  <span>📊</span> Financial News
                </div>
                <div className="chatcard">
                  <span>💰</span> Investment Tips
                </div>
              </div>
              <p className="text-white mt-6 text-md">
                Just type your question and click Send!
              </p>
            </div>
          </div>
        ) : (
          <>
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  chat.type === "question" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${
                    chat.type === "question"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-blue-800 text-white rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown className="overflow-auto hide-scrollbar">
                    {chat.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </>
        )}
        {generatingAnswer && (
          <div className="text-left">
            <div className="inline-block bg-blue-800 p-3 rounded-lg animate-pulse text-white">
              Thinking...
            </div>
          </div>
        )}
      </div>
      <form className="chat-form" onSubmit={generateAnswer}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          className="text-area"
        />
        <button
          type="submit"
          disabled={generatingAnswer}
          className={`submit-button ${
            generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {generatingAnswer ? "Generating..." : "Send"}
        </button>
      </form>
    </div>
  );
}

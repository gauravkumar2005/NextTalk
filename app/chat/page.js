"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { text: "Hello 👋", sender: "other" },
    { text: "Hi bro!", sender: "me" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="flex h-screen">

      {/* 🔹 Sidebar */}
      <div className="w-1/4 bg-black p-4">
        <h2 className="text-xl text-white font-bold mb-4">Users</h2>
        <div className="space-y-2">
          <div className="p-2 bg-white rounded cursor-pointer">User 1</div>
          <div className="p-2 bg-white rounded cursor-pointer">User 2</div>
        </div>
      </div>

      {/* 🔹 Chat Section */}
      <div className="w-3/4 flex flex-col">

        {/* Chat Header */}
        <div className="bg-gray-400 p-4 font-bold">
          Chat
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-300">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`px-4 py-2 rounded-lg ${
                  msg.sender === "me"
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 flex gap-2 bg-white">
          <input
            type="text"
            className="flex-1 border p-2 rounded"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../lib/firebase";

export default function ChatPage() {

  // ================= USERS =================
  const [currentUser, setCurrentUser] = useState("Rohit");

  // ================= MESSAGES =================
  const [messages, setMessages] = useState([]);

  // ================= INPUT =================
  const [input, setInput] = useState("");

  // ================= SEND MESSAGE =================
  const sendMessage = async () => {

    if (input.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: input,
      sender: currentUser,
      createdAt: serverTimestamp(),
    });

    setInput("");
  };

  // ================= REALTIME LISTENER =================
  useEffect(() => {

    const q = query(
      collection(db, "messages"),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const allMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(allMessages);

    });

    return () => unsubscribe();

  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">

      {/* ================= SIDEBAR ================= */}
      <div className="w-full md:w-1/4 bg-black p-4">

        <h2 className="text-xl text-white font-bold mb-4">
          Users
        </h2>

        <div className="space-y-3">

          {/* Rohit */}
          <button
            onClick={() => setCurrentUser("Rohit")}
            className={`w-full p-3 rounded text-left font-medium ${
              currentUser === "Rohit"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Rohit
          </button>

          {/* Aman */}
          <button
            onClick={() => setCurrentUser("Aman")}
            className={`w-full p-3 rounded text-left font-medium ${
              currentUser === "Aman"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Aman
          </button>

        </div>

      </div>

      {/* ================= CHAT SECTION ================= */}
      <div className="w-full md:w-3/4 flex flex-col">

        {/* ================= HEADER ================= */}
        <div className="bg-gray-400 p-4 font-bold text-lg">
          Chat - {currentUser}
        </div>

        {/* ================= MESSAGES ================= */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-300">

          {messages.map((msg) => (

            <div
              key={msg.id}
              className={`mb-4 flex ${
                msg.sender === currentUser
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div>

                {/* Sender Name */}
                <p className="text-xs text-gray-700 mb-1">
                  {msg.sender}
                </p>

                {/* Message Bubble */}
                <div
                  className={`px-4 py-2 rounded-lg max-w-[250px] break-words ${
                    msg.sender === currentUser
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {msg.text}
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ================= INPUT SECTION ================= */}
        <div className="p-4 flex flex-col sm:flex-row gap-2 bg-white">

          {/* Input */}
          <input
            type="text"
            className="flex-1 border p-3 rounded outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {/* Send Button */}
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded w-full sm:w-auto"
          >
            Send
          </button>

        </div>

      </div>
    </div>
  );
}
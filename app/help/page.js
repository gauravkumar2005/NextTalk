"use client";

import { useState } from "react";

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to start a chat?",
      answer: "Go to chat page and select any user to start messaging.",
    },
    {
      question: "How to change password?",
      answer: "Go to settings → account → change password.",
    },
    {
      question: "Why notifications are not coming?",
      answer: "Make sure notifications are enabled in settings.",
    },
    {
      question: "How to edit profile?",
      answer: "Go to profile page and click on edit profile button.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      
      {/* Card */}
      <div className="w-[360px] bg-white rounded-2xl shadow-lg p-5">
        
        {/* Header */}
        <h2 className="text-xl font-semibold mb-4 text-center">
           Center
        </h2>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div key={index} className="border rounded-lg">
              
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="p-3 flex justify-between items-center cursor-pointer"
              >
                <p className="font-medium">{item.question}</p>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-3 pb-3 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Still need help?</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
}
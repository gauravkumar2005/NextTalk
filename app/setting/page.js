"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-black text-white min-h-screen flex justify-center items-center" : "bg-gray-100 min-h-screen flex justify-center items-center"}>
      
      {/* Mobile Card */}
      <div className={darkMode ? "w-[360px] bg-black rounded-3xl shadow-xl p-5" : "w-[360px] bg-white rounded-3xl shadow-xl p-5"}>
        
        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">Settings</h2>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between py-3 border-b">
          <span>🌙 Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              darkMode ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                darkMode ? "translate-x-6" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between py-3 border-b">
          <span>🔔 Notifications</span>
          <span className="text-gray-400">›</span>
        </div>

        {/* Account */}
        <div className="flex items-center justify-between py-3 border-b">
          <span>👤 Account</span>
          <span className="text-gray-400">›</span>
        </div>

        {/* Privacy */}
        <div className="flex items-center justify-between py-3 border-b">
          <span>🔒 abcd</span>
          <span className="text-gray-400">›</span>
        </div>

        {/* Security */}
        <div className="flex items-center justify-between py-3 border-b">
          <span>🛡️ Security</span>
          <span className="text-gray-400">›</span>
        </div>

        {/* Help Center */}
        <div className="flex items-center justify-between py-3">
          <span>❓ Help Center</span>
          <span className="text-gray-400">›</span>
        </div>

      </div>
    </div>
  );
}
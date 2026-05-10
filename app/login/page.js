"use client";

import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // ✅ Firebase Auth Login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      setMessage("✅ Login Successful");

      console.log("Logged in user:", user);

      // 👉 Optional: redirect kar sakte ho
      // window.location.href = "/dashboard";

    } catch (error) {
      setMessage("❌ " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        
        <h2 className="text-2xl font-bold text-center mb-6">
           🔐
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

         <p className="text-center mt-4 text-sm">
          Don't have an account?
          <Link href="/signup" className="text-blue-600 cursor-pointer ml-1">
          Sign Up
          </Link>
         </p>

        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
          {message}
        </p>
      </div>
    </div>
  );
}
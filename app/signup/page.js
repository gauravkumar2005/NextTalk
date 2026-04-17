"use client";

import { useState } from "react";
import { auth, db } from "../lib/firebase";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  setDoc,
} from "firebase/firestore";

export default function Signup() {
  const [name, setName] = useState(""); // ✅ ADD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // ✅ Name bhi save karo
      await setDoc(doc(db, "users", user.uid), {
        name: name, // ✅ ADD
        email: user.email,
        uid: user.uid,
        createdAt: new Date(),
      });

      setMessage("✅ Signup + Data Saved in Firestore");

      // reset
      setName(""); // ✅ FIX
      setEmail("");
      setPassword("");

    } catch (error) {
      setMessage("❌ " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">

          {/* ✅ FIX: name + name (small n) */}
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
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
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <p className="text-sm mt-3 text-center">
            Already have account?{" "}
            <Link href="/login" className="text-blue-600">
              Login
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
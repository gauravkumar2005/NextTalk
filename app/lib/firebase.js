// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";   // 👈 Firestore import
import { getAuth } from "firebase/auth";             // 👈 Auth (optional but useful)

const firebaseConfig = {
  apiKey: "AIzaSyDdLm6-G-qRXWBDv6-0LN-TeDtk7l24zP4",
  authDomain: "chat-app-97493.firebaseapp.com",
  projectId: "chat-app-97493",
  storageBucket: "chat-app-97493.firebasestorage.app",
  messagingSenderId: "725628615312",
  appId: "1:725628615312:web:01ce4f2033ae58eae8b615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firestore Database
export const db = getFirestore(app);

// ✅ Authentication (signup/login ke liye)
export const auth = getAuth(app);
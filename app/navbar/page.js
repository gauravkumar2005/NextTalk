"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black text-white p-4 font-semibold flex justify-between">
      <h1 className="font-bold text-2xl">NextTalk</h1>

      <div className="flex gap-8 text-xl">
        <Link href="/">Home</Link>
        <Link href="/setting">Setting</Link>
        <Link href="/notification">Notification</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  );
}
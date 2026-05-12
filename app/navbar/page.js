"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-bold text-2xl">NextTalk</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/notification">Notification</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
          <Link href="/profile">Profile</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/notification">Notification</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
          <Link href="/profile">Profile</Link>
        </div>
      )}
    </nav>
  );
}
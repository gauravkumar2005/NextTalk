import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500">
                <MessageCircle size={20} />
              </div>

              NextTalk
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
              A simple and modern messaging platform that helps you
              connect with people and enjoy real-time conversations.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-3">
              <a
                href="mailto:contact@nexttalk.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 transition hover:bg-gray-700"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <Link href="/about" className="transition hover:text-white">
                About
              </Link>

              <Link href="/chat" className="transition hover:text-white">
                Chat
              </Link>

              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/security" className="transition hover:text-white">
                Security
              </Link>

              <Link href="/terms" className="transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} NextTalk. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
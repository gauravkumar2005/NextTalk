import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-blue-500 px-6 py-12 text-center shadow-lg sm:px-10 md:px-16">
          
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white">
            <MessageCircle size={28} />
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Ready to start chatting?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Connect with people, start conversations, and enjoy a simple
            real-time messaging experience with NextTalk.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/chat"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition duration-300 hover:bg-gray-100 hover:shadow-md"
            >
              Start Chatting
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
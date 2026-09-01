import Link from "next/link";

import {
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 md:py-28">

      <div className="mx-auto max-w-6xl">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <div className="text-center md:text-left">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              <MessageCircle size={17} />
              Simple & Real-Time Messaging
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              Connect.
              <span className="text-blue-500"> Chat.</span>
              <br />
              Stay Connected.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base md:mx-0">
              Welcome to NextTalk, a simple and modern chatting platform
              where you can connect with people and enjoy real-time
              conversations.
            </p>

            {/* Small Features */}
            <div className="mt-6 flex flex-col items-center gap-3 text-sm text-gray-600 sm:flex-row md:items-start">

              <div className="flex items-center gap-2">
                <CheckCircle size={17} className="text-blue-500" />
                Real-Time Chat
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={17} className="text-blue-500" />
                Easy to Use
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">

              <Link
                href="/chat"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600 hover:shadow-lg"
              >
                Start Chatting
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 transition duration-300 hover:bg-gray-100"
              >
                Learn More
              </Link>

            </div>

          </div>


          {/* Right Chat Preview */}
          <div className="mx-auto w-full max-w-md">

            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

              {/* Chat Header */}
              <div className="flex items-center gap-3 bg-blue-500 px-5 py-4 text-white">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    NextTalk
                  </h3>

                  <p className="text-xs text-blue-100">
                    Online
                  </p>
                </div>

              </div>


              {/* Messages */}
              <div className="space-y-4 bg-gray-100 p-5">

                {/* Received Message */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
                    Hey! How are you?
                  </div>
                </div>

                {/* Sent Message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-md bg-blue-500 px-4 py-3 text-sm text-white">
                    I'm good! What about you?
                  </div>
                </div>

                {/* Received Message */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
                    Doing great! 😊
                  </div>
                </div>

                {/* Sent Message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-md bg-blue-500 px-4 py-3 text-sm text-white">
                    Nice to hear that!
                  </div>
                </div>

              </div>


              {/* Message Input Preview */}
              <div className="flex gap-2 border-t bg-white p-4">

                <div className="flex-1 rounded-lg bg-gray-100 px-4 py-3 text-xs text-gray-400">
                  Type a message...
                </div>

                <div className="flex items-center justify-center rounded-lg bg-blue-500 px-4 text-white">
                  <ArrowRight size={18} />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
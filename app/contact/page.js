"use client";

import {
  Mail,
  MessageCircle,
  HelpCircle,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="min-h-[55vh] flex items-center px-4 py-20 sm:px-6 md:min-h-[60vh] md:py-28">
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg">
            <MessageCircle size={32} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Contact NextTalk
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Have a question, suggestion, or need help?
            Send us a message and we will be happy to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="border-y bg-white px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-gray-100 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <p className="text-sm font-semibold text-blue-500">
              GET IN TOUCH
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              We would love to hear from you
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
              Whether you have feedback, a question about NextTalk,
              or need support, feel free to contact us.
            </p>

            {/* Email */}
            <div className="mt-8 flex items-start gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-white hover:shadow-md hover:-translate-y-1 cursor-pointer">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-500 shadow-sm">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Email
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  support@nexttalk.com
                </p>
              </div>
            </div>

            {/* Chat Support */}
            <div className="mt-6 flex items-start gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-white hover:shadow-md hover:-translate-y-1 cursor-pointer">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-500 shadow-sm">
                <MessageCircle size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Chat Support
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Get help through NextTalk messaging.
                </p>
              </div>
            </div>

            {/* Help */}
            <div className="mt-6 flex items-start gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-white hover:shadow-md hover:-translate-y-1 cursor-pointer">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-500 shadow-sm">
                <HelpCircle size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Help & Support
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  We are here to help with your questions.
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <h2 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below to contact the NextTalk team.
            </p>

            <form className="mt-6 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-500 px-4 py-14 text-center text-white sm:px-6">

        <h2 className="text-2xl font-bold sm:text-3xl">
          Need help with NextTalk?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
          We are always happy to receive your feedback and suggestions.
        </p>

      </section>

    </main>
  );
}
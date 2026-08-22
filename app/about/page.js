"use client";

import Link from "next/link";
import {
  MessageCircle,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg">
            <MessageCircle size={32} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            About NextTalk
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            NextTalk is a modern communication platform designed to make
            connecting with people simple, fast, and enjoyable.
          </p>

          <Link
            href="/chat"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Start Chatting
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* About Section */}
      <section className="border-y bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-2 text-sm font-semibold text-blue-500">
              OUR PURPOSE
            </p>

            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Simple communication, better connections.
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              NextTalk focuses on providing a clean and easy-to-use messaging
              experience. Whether you want to chat with friends, stay connected
              with people, or manage your conversations, NextTalk brings
              everything together in one place.
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              The platform is built with a modern interface and real-time
              communication features to provide a smooth messaging experience.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <MessageCircle className="mb-3 text-blue-500" size={24} />
                <h3 className="font-semibold text-gray-900">
                  Messaging
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Connect through real-time conversations.
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <Users className="mb-3 text-blue-500" size={24} />
                <h3 className="font-semibold text-gray-900">
                  Community
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Discover and connect with other users.
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <Zap className="mb-3 text-blue-500" size={24} />
                <h3 className="font-semibold text-gray-900">
                  Fast
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Enjoy a quick and responsive experience.
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <ShieldCheck className="mb-3 text-blue-500" size={24} />
                <h3 className="font-semibold text-gray-900">
                  Privacy
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Your conversations should stay personal.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold text-blue-500">
            WHY NEXTTALK
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Built for modern conversations
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            <div className="rounded-xl bg-white p-6 text-left shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Clean Interface
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                A simple interface that keeps your conversations easy to
                manage.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 text-left shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Real-Time Chat
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Send and receive messages with real-time updates.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 text-left shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Responsive Design
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Designed to provide a smooth experience across different
                screen sizes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 px-4 py-14 text-center text-white sm:px-6">

        <h2 className="text-2xl font-bold sm:text-3xl">
          Ready to start a conversation?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
          Connect with people and experience a simple way to communicate with
          NextTalk.
        </p>

        <Link
          href="/chat"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Start Chatting
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}
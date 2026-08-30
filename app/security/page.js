"use client";

import Link from "next/link";

import {
  ShieldCheck,
  Lock,
  KeyRound,
  UserCheck,
  Database,
  AlertTriangle,
  Settings,
  Mail,
} from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg">
            <ShieldCheck size={32} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            NextTalk Security
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            We take security seriously and work to keep your account,
            conversations, and personal information protected.
          </p>

        </div>
      </section>

      {/* Security Content */}
      <section className="border-y bg-white px-4 py-14 sm:px-6 md:py-20">

        <div className="mx-auto max-w-5xl space-y-8">

          {/* Account Security */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="mb-4 flex items-center gap-3">
              <Lock className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Account Security
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              We use security measures to help protect your NextTalk account
              from unauthorized access. Keep your password private and avoid
              sharing your login information with others.
            </p>

          </div>

          {/* Password Protection */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="mb-4 flex items-center gap-3">
              <KeyRound className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Password Protection
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Use a strong and unique password for your NextTalk account.
              Never share your password with anyone and avoid using the same
              password across multiple services.
            </p>

          </div>

          {/* Data Protection */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="mb-4 flex items-center gap-3">
              <Database className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Data Protection
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              We take reasonable steps to protect information stored by
              NextTalk against unauthorized access, modification, or
              disclosure.
            </p>

          </div>

          {/* Private Conversations */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="mb-4 flex items-center gap-3">
              <UserCheck className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Private Conversations
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              NextTalk is designed to provide private communication between
              users. Do not share sensitive personal information through
              messages with people you do not trust.
            </p>

          </div>

          {/* Security Practices */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="mb-4 flex items-center gap-3">
              <Settings className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Security Practices
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              We continuously work to improve the security and reliability
              of NextTalk. Security practices may evolve as the platform
              grows and new technologies become available.
            </p>

          </div>

          {/* User Responsibility */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Your Responsibility
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              You are responsible for keeping your account credentials secure.
              If you notice suspicious activity, unauthorized access, or
              unusual behavior on your account, contact the NextTalk team.
            </p>

          </div>

          {/* Security Issues */}
          <div className="rounded-2xl bg-blue-500 p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <div className="mb-4 flex items-center gap-3">
              <Mail size={24} />

              <h2 className="text-xl font-bold sm:text-2xl">
                Report a Security Issue
              </h2>
            </div>

            <p className="text-sm leading-6 text-blue-100 sm:text-base">
              If you discover a potential security problem with NextTalk,
              please contact us so we can investigate and take appropriate
              action.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-gray-100"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  MessageCircle,
  Settings,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg">
            <ShieldCheck size={32} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Your privacy matters to us. This Privacy Policy explains how
            NextTalk collects, uses, and protects your information.
          </p>

          <p className="mt-4 text-xs text-gray-400 sm:text-sm">
            Last updated: August 30, 2026
          </p>

        </div>
      </section>

      {/* Privacy Content */}
      <section className="border-y bg-white px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8">

          {/* Information We Collect */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Database className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Information We Collect
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              When you use NextTalk, we may collect information that you
              provide while creating an account or using our services.
              This may include your name, email address, profile information,
              and messages you send through the platform.
            </p>
          </div>

          {/* How We Use Information */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Settings className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                How We Use Your Information
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Your information may be used to provide and improve NextTalk,
              manage your account, enable messaging features, provide
              customer support, and maintain the security and reliability
              of the platform.
            </p>
          </div>

          {/* Messages */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <MessageCircle className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Messages & Communication
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              NextTalk may store messages and communication data to provide
              messaging functionality and keep conversations available to
              users.
            </p>
          </div>

          {/* Account Security */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <Lock className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Account Security
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              We take reasonable measures to protect your account and
              information from unauthorized access, alteration, disclosure,
              or destruction.
            </p>
          </div>

          {/* User Rights */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <UserCheck className="text-blue-500" size={24} />

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Your Choices & Rights
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              You can review and update certain information associated with
              your account. You may also choose to stop using NextTalk or
              request assistance regarding your account.
            </p>
          </div>

          {/* Third Party Services */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Third-Party Services
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              NextTalk may use third-party services for authentication,
              database, hosting, analytics, or other technical functionality.
            </p>

          </div>

          {/* Changes */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              We may update this Privacy Policy from time to time. Any
              changes will be reflected on this page along with an updated
              revision date.
            </p>

          </div>

          {/* Contact */}
          <div className="rounded-2xl bg-blue-500 p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">

            <h2 className="text-xl font-bold sm:text-2xl">
              Questions About Privacy?
            </h2>

            <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
              If you have any questions or concerns about this Privacy Policy,
              feel free to contact the NextTalk team.
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
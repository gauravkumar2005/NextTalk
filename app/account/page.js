"use client";

import Link from "next/link";

import {
  User,
  Mail,
  Lock,
  Bell,
  ShieldCheck,
  Pencil,
  ChevronRight,
  LogOut,
  HelpCircle,
} from "lucide-react";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 md:py-10">

      <div className="mx-auto max-w-3xl">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            My Account
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your profile, account and preferences.
          </p>
        </div>


        {/* Profile Overview */}
        <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm">

          {/* Profile Top */}
          <div className="bg-blue-500 px-6 py-8 sm:px-8">

            <div className="flex flex-col items-center sm:flex-row">

              {/* Profile Image */}
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
              />

              {/* User Info */}
              <div className="mt-4 text-center text-white sm:ml-5 sm:mt-0 sm:text-left">

                <h2 className="text-2xl font-bold">
                  Rohit
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                  rohit@example.com
                </p>

                <p className="mt-1 text-xs text-blue-100">
                  Member since 2026
                </p>

              </div>

            </div>

          </div>


          {/* Profile Actions */}
          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:p-6">

            <Link
              href="/profile"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <User size={18} />
              View Profile
            </Link>

            <Link
              href="/profile/edit"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              <Pencil size={18} />
              Edit Profile
            </Link>

          </div>

        </div>


        {/* Account Information */}
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">

          <h2 className="mb-4 text-lg font-bold text-gray-900">
            Account Information
          </h2>

          <div className="divide-y divide-gray-100">

            {/* Name */}
            <div className="flex items-center justify-between py-4">

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <User size={19} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Full Name
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Rohit
                  </p>
                </div>

              </div>

              <ChevronRight size={19} className="text-gray-400" />

            </div>


            {/* Email */}
            <div className="flex items-center justify-between py-4">

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Mail size={19} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Email Address
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    rohit@example.com
                  </p>
                </div>

              </div>

              <ChevronRight size={19} className="text-gray-400" />

            </div>

          </div>

        </div>


        {/* Account & Security */}
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">

          <h2 className="mb-4 text-lg font-bold text-gray-900">
            Account & Security
          </h2>

          <div className="space-y-2">

            {/* Password */}
            <Link
              href="/settings/password"
              className="group flex items-center justify-between rounded-xl p-3 transition hover:bg-gray-50"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Lock size={19} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Password
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Change your account password
                  </p>
                </div>

              </div>

              <ChevronRight
                size={19}
                className="text-gray-400 transition group-hover:translate-x-1"
              />

            </Link>


            {/* Security */}
            <Link
              href="/security"
              className="group flex items-center justify-between rounded-xl p-3 transition hover:bg-gray-50"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <ShieldCheck size={19} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Security
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Manage your account security
                  </p>
                </div>

              </div>

              <ChevronRight
                size={19}
                className="text-gray-400 transition group-hover:translate-x-1"
              />

            </Link>


            {/* Notifications */}
            <Link
              href="/notifications"
              className="group flex items-center justify-between rounded-xl p-3 transition hover:bg-gray-50"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Bell size={19} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Notifications
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Manage your notification preferences
                  </p>
                </div>

              </div>

              <ChevronRight
                size={19}
                className="text-gray-400 transition group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>


        {/* Help & Support */}
        <Link
          href="/contact"
          className="mb-6 flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <HelpCircle className="text-blue-500" size={21} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Help & Support
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Need help? Contact the NextTalk team.
              </p>
            </div>

          </div>

          <ChevronRight
            size={20}
            className="text-gray-400"
          />

        </Link>


        {/* Logout */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 bg-white px-5 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={18} />
          Log Out
        </button>


        {/* Footer Text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          NextTalk Account • Manage your account safely
        </p>

      </div>

    </main>
  );
}
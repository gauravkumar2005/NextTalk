"use client";

import Link from "next/link";

import { MoreVertical, MessageCircle, Heart, User, Settings } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      
      {/* Mobile Card */}
      <div className="w-[360px] bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Top Section */}
        <div className="bg-gray-200 p-6 text-center relative">
          
          {/* Menu Icon */}
          <MoreVertical className="absolute right-4 top-4 text-gray-600" />

          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-20 h-20 rounded-full mx-auto border-4 border-white"
          />

          {/* Name */}
          <h2 className="mt-3 text-lg font-semibold">Rohit</h2>

          {/* Location */}
          <p className="text-sm text-gray-500">📍 IN, India</p>
        </div>

        {/* Followers Section */}
        <div className="flex text-center border-t border-b">
          <div className="w-1/2 py-4">
            <h3 className="font-bold text-lg">1500</h3>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="w-1/2 py-4 border-l">
            <h3 className="font-bold text-lg">700</h3>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
        </div>

        {/* Menu List */}
        <div className="p-4 space-y-4">
          
          {/* Chats */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="text-gray-600" />
              <div>
                <p className="font-medium">Chats</p>
                <p className="text-sm text-gray-500">
                  Check your chat history
                </p>
              </div>
            </div>
            <span>›</span>
          </div>

          {/* Archived */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="text-gray-600" />
              <div>
                <Link href="/archived">
                  <p className="font-medium">Archived</p>
                </Link>
                <p className="text-sm text-gray-500">
                  Find your archived chats
                </p>
              </div>
            </div>
            <span>›</span>
          </div>

          {/* My Profile */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <User className="text-gray-600" />
              <div>
                <p className="font-medium">My Profile</p>
                <p className="text-sm text-gray-500">
                  Change your profile details
                </p>
              </div>
            </div>
            <span>›</span>
          </div>

          {/* Settings */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="text-gray-600" />
              <div>
                <Link href="/settings">
                  <p className="font-medium">Settings</p>
                </Link>
                <p className="text-sm text-gray-500">
                  Password and Security
                </p>
              </div>
            </div>
            <span>›</span>
          </div>

        </div>
      </div>
    </div>
  );
}
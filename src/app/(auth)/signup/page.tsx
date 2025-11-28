"use client";

import React from "react";

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="p-10 rounded-xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Sign Up
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded bg-white/20 text-white placeholder-white/50"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-white/20 text-white placeholder-white/50"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-white/20 text-white placeholder-white/50"
          />

          <button
            type="submit"
            className="p-3 bg-blue-500 rounded hover:bg-blue-600 transition cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setError("");
    setSuccess("");

    // Basic frontend validation
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setSuccess(`Account created for ${data.username}!`);
      console.log("Signup success:", data);

      // Optionally, reset form
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Network error, please try again.");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="p-10 rounded-xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Sign Up
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded bg-white/20 text-white placeholder-white/50 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-white/20 text-white placeholder-white/50 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-white/20 text-white placeholder-white/50 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="p-3 bg-blue-500 rounded hover:bg-blue-600 transition cursor-pointer outline-none"
          >
            Create Account
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
}

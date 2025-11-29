"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!username || !password) {
      setError("Please enter both username and password");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      console.log("Login success:", data);
      setLoading(false);

      router.push("/account");
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error, please try again");
      setLoading(false);
    }
  };

  return (
    <div
      className={`transform transition-all duration-1500 ease-out
                    ${
                      isVisible
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : "opacity-0 -translate-x-full -translate-y-20"
                    }}`}
    >
      <div className="bg-white/30 backdrop-blur-lg w-100 h-100 rounded-2xl opacity-75 border border-gray-200">
        <h4 className="my-8 font-bold text-center text-white text-4xl">
          Login
        </h4>

        <div className="h-screen flex justify-center items-start">
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            {/* USERNAME + PASSWORD */}
            <div className="flex flex-col items-center w-full space-y-4">
              <input
                className="p-2 w-80 bg-white rounded-2xl outline-none hover:bg-loginHover
             transition-colors duration-300 ease-in-out"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="p-2 w-80 bg-white rounded-2xl outline-none hover:bg-loginHover
             transition-colors duration-300 ease-in-out"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex p-1 justify-start w-80">
              <input
                className="mr-1"
                type="checkbox"
                id="remember"
                name="remember"
              />
              <h6 className="text-white">Remember Me</h6>
            </div>

            <button
              className="mb-2 text-white hover:font-bold duration-200 ease-in-out cursor-pointer"
              type="button"
            >
              Forgot Password?
            </button>

            <button
              className="w-80 h-12 text-xl text-gray-500 bg-white rounded-4xl text-center hover:text-2xl transition-all duration-200 ease-in-out hover:font-bold hover:bg-loginHover cursor-pointer"
              type="submit"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="my-6 mb-2 text-white hover:font-bold duration-400 ease-in-out cursor-pointer"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

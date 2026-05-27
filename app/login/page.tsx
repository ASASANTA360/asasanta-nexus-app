"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      router.push("/dashboard");
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />

      <div className="relative w-full max-w-md border border-white/10 rounded-[40px] bg-[#050816] p-10 shadow-[0_0_80px_rgba(34,211,238,0.08)]">

        {/* Header */}
        <div className="text-center">

          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-gray-300 mb-8">
            Secure Authentication
          </div>

          <h1 className="text-5xl font-black">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-4">
            Access your AI-powered infrastructure dashboard.
          </p>

        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 border border-red-500/20 bg-red-500/10 text-red-400 rounded-2xl p-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

          {/* Email */}
          <div>

            <label className="text-gray-400 block mb-3">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full h-14 rounded-2xl bg-black border border-white/10 px-5 outline-none focus:border-cyan-400/40 transition-all duration-300"
            />

          </div>

          {/* Password */}
          <div>

            <label className="text-gray-400 block mb-3">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full h-14 rounded-2xl bg-black border border-white/10 px-5 outline-none focus:border-cyan-400/40 transition-all duration-300"
            />

          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm text-gray-400">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              Remember me

            </label>

            <a href="#">
              Forgot password?
            </a>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)] disabled:opacity-50"
          >

            {loading
              ? "Authenticating..."
              : "Login Securely"}

          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-500">

          Powered by Asasanta Nexus AI Infrastructure

        </div>

      </div>

    </main>
  );
}
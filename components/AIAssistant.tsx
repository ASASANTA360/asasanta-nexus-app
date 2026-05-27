"use client";

import { useState } from "react";

export default function AIAssistant() {

  const [message, setMessage] =
    useState("");

  const [reply, setReply] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function sendMessage() {
    if (!message) return;

    try {
      setLoading(true);

      const res = await fetch(
        "/api/ai",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message,
          }),
        }
      );

      const data = await res.json();

      setReply(data.reply);
    } catch (error) {
      setReply(
        "AI request failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 w-[380px] border border-white/10 rounded-[35px] bg-[#050816] shadow-[0_0_80px_rgba(34,211,238,0.08)] overflow-hidden z-50">

      {/* Header */}
      <div className="border-b border-white/10 p-5 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black text-white">
            Nexus AI
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            AI Verification Assistant
          </p>

        </div>

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

      </div>

      {/* Body */}
      <div className="p-5">

        <textarea
          placeholder="Ask Nexus AI..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="w-full h-32 rounded-2xl bg-black border border-white/10 p-4 outline-none resize-none focus:border-cyan-400/40"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="w-full h-14 rounded-2xl bg-cyan-400 text-black font-black mt-5 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)]"
        >

          {loading
            ? "Thinking..."
            : "Ask AI"}

        </button>

        {/* Reply */}
        <div className="mt-5 border border-white/10 rounded-2xl bg-black p-5 min-h-[120px]">

          <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">

            {reply || "AI response will appear here."}

          </p>

        </div>

      </div>

    </div>
  );
}
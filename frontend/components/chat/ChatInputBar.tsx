"use client";

import { Mic, Send } from "lucide-react";
import { useState } from "react";

export default function ChatInputBar() {

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    console.log("Send:", message);
    setMessage("");
  };

  return (

    <div className="max-w-4xl mx-auto flex gap-3 items-center">

      <div className="flex flex-1 items-center border rounded-2xl px-4 py-3 bg-gray-100 focus-within:ring-2 focus-within:ring-pink-400 transition">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about your research paper..."
          className="flex-1 bg-transparent outline-none text-sm"
        />

        <button className="p-2 hover:bg-pink-100 rounded-full transition">
          <Mic size={18} />
        </button>

      </div>

      <button
        onClick={sendMessage}
        className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-2xl transition flex items-center gap-2"
      >
        <Send size={16} />
      </button>

    </div>

  );
}
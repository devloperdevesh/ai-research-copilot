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

    <div className="max-w-4xl mx-auto flex gap-3 items-center p-4">

      <div className="flex flex-1 items-center border rounded-full px-4 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 transition">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about your research paper..."
          className="flex-1 bg-transparent outline-none text-sm"
        />

        <button className="p-2 hover:bg-blue-100 rounded-full transition">
          <Mic size={18} />
        </button>

      </div>

      <button
        onClick={sendMessage}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full transition flex items-center gap-2"
      >
        <Send size={16} />
      </button>

    </div>

  );

}
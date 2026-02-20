"use client";

import { useState } from "react";
import ModeRouter from "../modes/ModeRouter";
import ResearchToolbar from "./ResearchToolbar";
import ChatInputBar from "./ChatInputBar";

export default function ChatContainer() {

  const [mode, setMode] = useState("research");

  const [messages, setMessages] = useState([
    { role: "user", text: "Explain transformers" },
    { role: "ai", text: "Transformers are attention-based models used in NLP..." }
  ]);

  return (

    <div className="flex flex-col h-full bg-gradient-to-br from-white via-pink-50 to-purple-50">

      {/* 🔹 MODE TOOLBAR */}
      <div className="p-4 border-b bg-white shadow-sm">
        <ResearchToolbar mode={mode} setMode={setMode} />
      </div>

      {/* 🔹 MESSAGE AREA */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        <ModeRouter mode={mode} data={messages} />

      </div>

      {/* 🔹 INPUT BAR */}
      <div className="border-t bg-white p-4">
        <ChatInputBar />
      </div>

    </div>

  );
}
"use client";

import { useState } from "react";
import ResearchToolbar from "./ResearchToolbar";
import ChatInputBar from "./ChatInputBar";

export default function ChatContainer() {

  const [mode, setMode] = useState("research");

  return (

    <div className="flex flex-col h-full bg-white">

      {/* Mode Toolbar */}
      <div className="border-b p-4 bg-white">
        <ResearchToolbar mode={mode} setMode={setMode} />
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-6">

        <div className="text-gray-500">
          🔎 Research Mode
        </div>

      </div>

      {/* Bottom Input */}
      <div className="border-t bg-white p-4">
        <ChatInputBar />
      </div>

    </div>

  );
}
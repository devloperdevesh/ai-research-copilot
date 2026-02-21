"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

import ResearchToolbar from "./ResearchToolbar";
import CitationPanel from "./CitationPanel";
import ThinkingIndicator from "./ThinkingIndicator";
import useAutoScroll from "@/hooks/useAutoScroll";

export default function ChatBox() {

  const [mode, setMode] = useState("research");   // ✅ ADD THIS
  const [streamText, setStreamText] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useAutoScroll(streamText);

  const sendMessage = async () => {

    setLoading(true);

    const response = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mode }) // optional future use
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    let result = "";

    while (true) {

      const { done, value } = await reader!.read();

      if (done) break;

      result += decoder.decode(value);
      setStreamText(result);

    }

    setLoading(false);

  };

  return (

    <div className="bg-white shadow-xl rounded-2xl border p-6 flex flex-col gap-6">

      <h1 className="text-3xl font-semibold text-blue-600">
        AI Research Copilot
      </h1>

      <p className="text-gray-500">
        Upload research papers or ask AI.
      </p>

      {/* ✅ PASS PROPS HERE */}
      <ResearchToolbar mode={mode} setMode={setMode} />

      {loading && <ThinkingIndicator />}

      {streamText && (

        <div className="bg-gray-50 p-4 rounded-xl border">

          <ReactMarkdown>
            {streamText}
          </ReactMarkdown>

          <CitationPanel />

        </div>

      )}

      <button
        onClick={sendMessage}
        className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-xl"
      >
        Ask AI
      </button>

      <div ref={bottomRef} />

    </div>

  );

}
"use client";

import { useState } from "react";

type Props = {
  answer?: string;
  citations?: string[];
  context?: string;
};

export default function ResponseTabs({
  answer,
  citations,
  context
}: Props) {

  const [tab, setTab] = useState<"answer" | "citations" | "thinking">("answer");

  const tabs = [
    { id: "answer", label: "Answer" },
    { id: "citations", label: "Sources" },
    { id: "thinking", label: "Agent Thinking" }
  ];

  return (
    <div className="mt-6">

      {/* Tabs */}
      <div className="flex gap-3 mb-4">

        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as any)}
            className={`px-4 py-2 rounded-xl text-sm transition-all duration-200
              ${
                tab === t.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 hover:bg-blue-50"
              }
            `}
          >
            {t.label}
          </button>
        ))}

      </div>

      {/* Content Panel */}
      <div className="bg-white border rounded-xl p-5 min-h-[150px] shadow-sm">

        {tab === "answer" && (
          <div className="leading-relaxed text-gray-800">
            {answer || "AI response will appear here..."}
          </div>
        )}

        {tab === "citations" && (
          <div>
            {citations && citations.length > 0 ? (
              citations.map((c, i) => (
                <div key={i} className="text-sm mb-2 flex gap-2 text-gray-700">
                  📄 <span>{c}</span>
                </div>
              ))
            ) : (
              <span className="text-gray-400">No sources yet</span>
            )}
          </div>
        )}

        {tab === "thinking" && (
          <div className="text-sm text-gray-600">
            {context || "Agent reasoning chain will appear here..."}
          </div>
        )}

      </div>

    </div>
  );
}
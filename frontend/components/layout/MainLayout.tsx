"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ResearchTimeline from "../modes/ResearchTimeline";
import ChatArea from "../chat/ChatArea";

export default function MainLayout({ children }: any) {

  const steps = [
    "Understanding question",
    "Searching embeddings",
    "Ranking chunks",
    "Generating answer"
  ];

  return (

    <div className="h-screen flex flex-col bg-gray-50">

      <Navbar />

      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SIDEBAR */}
        <div className="w-64 border-r bg-white">
          <Sidebar />
        </div>

        {/* CENTER CHAT AREA */}
        <div className="flex-1 flex flex-col">
          <ChatArea>
            {children}
          </ChatArea>
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden xl:block">
          <ResearchTimeline steps={steps} />
        </div>

      </div>

    </div>

  );
}
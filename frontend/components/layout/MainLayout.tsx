"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AgentThinkingPanel from "../chat/AgentThinkingPanel";

export default function MainLayout({ children }: any) {

  const steps = [
    "Understanding query",
    "Retrieving research context",
    "Ranking knowledge chunks",
    "Generating response"
  ];

  return (

    <div className="h-screen flex flex-col bg-gray-50">

      <Navbar/>

      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SIDEBAR */}
        <div className="hidden md:block">
          <Sidebar/>
        </div>

        {/* CENTER WORKSPACE */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {children}
        </div>

        {/* RIGHT AI PANEL */}
        <div className="hidden xl:block w-80 border-l bg-white">
          <AgentThinkingPanel steps={steps}/>
        </div>

      </div>

    </div>

  );
}
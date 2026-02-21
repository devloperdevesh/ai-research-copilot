"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ResearchTimeline from "../modes/ResearchTimeline";

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

        {/* Sidebar */}
        <aside className="hidden md:flex w-64 border-r bg-white">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {children}
        </main>

        {/* Right Panel */}
        <aside className="hidden xl:flex w-72 border-l bg-white">
          <ResearchTimeline steps={steps} />
        </aside>

      </div>
    </div>
  );
}
"use client";

export default function Navbar(){

  return(

    <div className="h-14 flex items-center justify-between px-4 bg-white/70 backdrop-blur-xl border-b">

      <h1 className="font-bold text-lg ai-gradient-text">
        AI Copilot
      </h1>

      <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg">
        Login
      </button>

    </div>

  );

}

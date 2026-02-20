"use client";

import { useState } from "react";

export default function Sidebar(){

  const [open,setOpen] = useState(true);
  const [activeMode,setActiveMode] = useState("Research");

  const modes = [
    "Research",
    "Deep Explain",
    "Compare",
    "Literature Review",
    "Report Generator",
    "Hypothesis Mode"
  ];

  return(

    <div className={`
      h-full
      transition-all duration-300
      ${open ? "w-64" : "w-16"}
      bg-white
      border-r border-gray-200
      p-4 flex flex-col gap-4
    `}>

      {/* Collapse Button */}
      <button
        onClick={()=>setOpen(!open)}
        className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
      >
        {open ? "Collapse" : "Open"}
      </button>

      {/* New Chat */}
      <button className="
        bg-gradient-to-r from-blue-500 to-purple-600
        text-white
        p-2
        rounded-lg
        shadow hover:scale-[1.02] transition
      ">
        {open ? "+ New Chat" : "+"}
      </button>

      {/* Modes */}
      <div className="flex flex-col gap-2 mt-4">

        {modes.map((mode,index)=>(

          <button
            key={index}
            onClick={()=>setActiveMode(mode)}
            className={`
              text-left p-3 rounded-lg text-sm transition
              ${activeMode===mode
                ? "bg-purple-100 text-purple-700 font-medium"
                : "hover:bg-gray-100"
              }
            `}
          >
            {open ? mode : "•"}
          </button>

        ))}

      </div>

      {/* History */}
      {open && (
        <div className="mt-auto text-xs text-gray-400">
          History coming...
        </div>
      )}

    </div>

  );
}
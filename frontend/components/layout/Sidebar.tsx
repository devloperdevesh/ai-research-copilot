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
      h-full flex flex-col
      transition-all duration-300
      ${open ? "w-64" : "w-16"}
      bg-white border-r border-gray-200 p-4
    `}>

      {/* Collapse Toggle */}
      <button
        onClick={()=>setOpen(!open)}
        className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded-lg mb-3"
      >
        {open ? "Collapse" : ">"}
      </button>

      {/* New Chat Button */}
      <button className="
        bg-blue-600 hover:bg-blue-700
        text-white
        p-2 rounded-lg shadow-sm transition mb-4
      ">
        {open ? "+ New Chat" : "+"}
      </button>

      {/* MODES */}
      <div className="flex flex-col gap-1">

        {modes.map((mode,index)=>(

          <button
            key={index}
            onClick={()=>setActiveMode(mode)}
            className={`
              text-left p-3 rounded-lg text-sm transition
              ${activeMode===mode
                ? "bg-blue-50 text-blue-700 font-medium"
                : "hover:bg-gray-100"
              }
            `}
          >
            {open ? mode : "•"}
          </button>

        ))}

      </div>

      {/* History Footer */}
      {open && (
        <div className="mt-auto text-xs text-gray-400 pt-6">
          History coming...
        </div>
      )}

    </div>

  );

}
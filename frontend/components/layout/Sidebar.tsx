"use client";

import { useState } from "react";

export default function Sidebar(){

  const [open,setOpen] = useState(true);

  return(

    <div
      className={`
        bg-white border-r
        transition-all duration-300
        ${open ? "w-64" : "w-16"}
        flex flex-col
        h-screen
        p-4
        gap-4
      `}
    >

      {/* Toggle Button */}

      <button
        onClick={()=>setOpen(!open)}
        className="text-sm bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
      >
        {open ? "Collapse" : "Open"}
      </button>

      {/* New Chat */}

      <button className="
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
        p-2
        rounded-lg
        shadow
      ">
        + New Chat
      </button>

      {/* History */}

      {open && (
        <div className="text-sm text-gray-500">

          History coming...

        </div>
      )}

    </div>

  );

}

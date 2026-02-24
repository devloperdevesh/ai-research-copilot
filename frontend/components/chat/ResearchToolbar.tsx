"use client";

import { Search, Brain, GitCompare, BookOpen, FileText } from "lucide-react";

export default function ResearchToolbar({ mode, setMode }: any) {

  const modes = [
    { id:"research",label:"Research",icon:<Search size={16}/>},
    { id:"explain",label:"Deep Explain",icon:<Brain size={16}/>},
    { id:"compare",label:"Compare",icon:<GitCompare size={16}/>},
    { id:"literature",label:"Literature",icon:<BookOpen size={16}/>},
    { id:"report",label:"Report",icon:<FileText size={16}/>}
  ];

  return (

    <div className="flex gap-3 border-b pb-3">

      {modes.map(m=>(
        <button
          key={m.id}
          onClick={()=>setMode(m.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm
          ${mode===m.id?"bg-blue-600 text-white":"bg-gray-100"}`}
        >
          {m.icon}{m.label}
        </button>
      ))}

    </div>

  );
}
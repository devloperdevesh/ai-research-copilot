"use client";

import { useState } from "react";
import { Search, Brain, GitCompare, BookOpen, FileText } from "lucide-react";

export default function Sidebar(){

 const [active,setActive]=useState("research");

 const modes=[
  {id:"research",label:"Research",icon:<Search size={18}/>},
  {id:"explain",label:"Deep Explain",icon:<Brain size={18}/>},
  {id:"compare",label:"Compare",icon:<GitCompare size={18}/>},
  {id:"literature",label:"Literature",icon:<BookOpen size={18}/>},
  {id:"report",label:"Report",icon:<FileText size={18}/>}
 ];

 return(

<div className="h-full w-64 bg-white border-r p-4 flex flex-col">

{modes.map(m=>(
<button
key={m.id}
onClick={()=>setActive(m.id)}
className={`flex items-center gap-3 p-3 rounded-lg text-sm
${active===m.id?"bg-blue-100 text-blue-600":"hover:bg-gray-100"}
`}
>
{m.icon}
{m.label}
</button>
))}

<div className="mt-6 text-xs text-gray-400">
Recent Chats
</div>

<div className="text-sm text-gray-500 mt-2">
Research transformers
</div>

</div>

 );

}
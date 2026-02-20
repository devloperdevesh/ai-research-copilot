"use client";

import { useState } from "react";

export default function ResponseTabs({answer, citations, context}) {

const [tab,setTab] = useState("answer");

const tabs = [
{ id:"answer", label:"Answer" },
{ id:"citations", label:"Sources" },
{ id:"thinking", label:"Agent Thinking" }
];

return (

<div className="mt-6">

{/* Tabs */}
<div className="flex gap-3 mb-4">

{tabs.map(t => (
<button
key={t.id}
onClick={()=>setTab(t.id)}
className={`px-3 py-1 rounded-lg text-sm transition
${tab===t.id
? "bg-purple-600 text-white shadow-lg"
: "bg-white/10 hover:bg-white/20"}
`}
>
{t.label}
</button>
))}

</div>

{/* Content Panel */}

<div className="bg-black/40 backdrop-blur-lg p-5 rounded-xl border border-white/10 min-h-[150px]">

{tab==="answer" && (

<div className="leading-relaxed">
{answer || "AI response will appear here..."}
</div>

)}

{tab==="citations" && (

<div>

{citations?.length ? citations.map((c,i)=>(
<div key={i} className="text-sm mb-2 flex gap-2">
📄 <span>{c}</span>
</div>
)) : "No sources yet"}

</div>

)}

{tab==="thinking" && (

<div className="text-sm text-gray-300">
{context || "Agent reasoning chain will appear here..."}
</div>

)}

</div>

</div>

);

}
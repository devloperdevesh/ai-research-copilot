"use client";

export default function ResearchTimeline({steps}){

return(

<div className="w-72 border-l bg-white p-4 overflow-y-auto">

<h3 className="font-semibold text-pink-500 mb-5">
🧠 Agent Thinking
</h3>

{steps?.map((step,index)=>(

<div key={index} className="flex gap-3 mb-4">

<div className="w-2 h-2 rounded-full bg-pink-400 mt-2 animate-pulse"/>

<div className="bg-pink-50 rounded-lg p-3 text-sm shadow-sm">

STEP {index+1} — {step}

</div>

</div>

))}

</div>

)

}
"use client";

export default function MessageBubble({ role, text }: any){

return(

<div className={`flex ${role==="user" ? "justify-end":"justify-start"}`}>

<div className={`max-w-lg p-4 rounded-2xl text-sm
${role==="user"
 ? "bg-pink-500 text-white"
 : "bg-white border shadow-sm"
}`}>

{text}

</div>

</div>

);

}
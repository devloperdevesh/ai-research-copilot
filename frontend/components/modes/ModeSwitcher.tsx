"use client";

import { useState } from "react";

export default function ModeSwitcher(){

const modes=["Research","Explain","Compare","Literature","Report"];

const [active,setActive]=useState("Research");

return(

<div className="flex gap-2 mb-4">

{modes.map(m=>(

<button
key={m}
onClick={()=>setActive(m)}
className={`px-3 py-1 rounded-lg text-sm transition
${active===m
 ? "bg-pink-500 text-white"
 : "bg-white border"}
`}
>

{m}

</button>

))}

</div>

)

}
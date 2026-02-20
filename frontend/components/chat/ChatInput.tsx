"use client";

import { useState } from "react";
import CommandMenu from "./CommandMenu";

export default function ChatInput({onSend}:any){

 const [input,setInput]=useState("");
 const [showCommands,setShowCommands]=useState(false);

 const handleChange=(e:any)=>{

   const value=e.target.value;
   setInput(value);

   if(value.startsWith("/"))
     setShowCommands(true);
   else
     setShowCommands(false);

 };

 return(

  <div className="relative">

   {showCommands &&(
     <CommandMenu
      onSelect={(cmd:string)=>{
       setInput(cmd+" ");
       setShowCommands(false);
      }}
     />
   )}

   <div className="flex gap-2">

    <input
      value={input}
      onChange={handleChange}
      placeholder="Ask AI or type /command..."
      className="flex-1 border rounded-lg p-3"
    />

    <button
     onClick={()=>onSend(input)}
     className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-lg"
    >
     Send
    </button>

   </div>

  </div>

 );

}

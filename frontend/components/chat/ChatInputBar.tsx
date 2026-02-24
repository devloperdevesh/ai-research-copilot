"use client";

import { Mic, Send, Upload } from "lucide-react";
import { useState } from "react";

export default function ChatInputBar(){

 const [message,setMessage]=useState("");

 return(

  <div className="max-w-4xl mx-auto flex gap-3 items-center p-4">

   <div className="flex flex-1 items-center border rounded-full px-4 py-3 bg-gray-100">

    <button className="p-2 hover:bg-blue-100 rounded-full">
      <Upload size={18}/>
    </button>

    <input
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      placeholder="What’s on your mind today?"
      className="flex-1 bg-transparent outline-none text-sm px-2"
    />

    <button className="p-2 hover:bg-blue-100 rounded-full">
      <Mic size={18}/>
    </button>

   </div>

   <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full">
     <Send size={16}/>
   </button>

  </div>

 );
}
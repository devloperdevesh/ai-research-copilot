"use client";

import { useState } from "react";

export default function CommandMenu({ setMode }: any){

  const [input, setInput] = useState("");

  function handleCommand(value:string){

    setInput(value);

    if(value.startsWith("/")){
      setMode(value.replace("/",""));
    }
  }

  return(

    <input
      value={input}
      onChange={(e)=>handleCommand(e.target.value)}
      placeholder="Type /research /compare ..."
      className="border p-2 rounded"
    />

  );

}
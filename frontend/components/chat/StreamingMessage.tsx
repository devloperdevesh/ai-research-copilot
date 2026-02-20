"use client";

import { useEffect, useState } from "react";

export default function StreamingMessage({ text }: any) {

  const [display,setDisplay] = useState("");

  useEffect(()=>{

    let i=0;

    const interval = setInterval(()=>{

      setDisplay(text.slice(0,i));
      i++;

      if(i>text.length) clearInterval(interval);

    },15);

    return ()=>clearInterval(interval);

  },[text]);

  return(

    <div className="bg-white border p-4 rounded-xl shadow-sm">

      {display}

    </div>

  );

}
"use client";

import {useState} from "react";
import ReactMarkdown from "react-markdown";

import ResearchToolbar from "./ResearchToolbar";
import CitationPanel from "./CitationPanel";
import ThinkingIndicator from "./ThinkingIndicator";
import useAutoScroll from "@/hooks/useAutoScroll";

export default function ChatBox(){

 const [streamText,setStreamText]=useState("");
 const [loading,setLoading]=useState(false);

 const bottomRef = useAutoScroll(streamText);

 const sendMessage = async ()=>{

   setLoading(true);

   const response = await fetch("http://localhost:8000/chat",{method:"POST"});

   const reader=response.body?.getReader();
   const decoder=new TextDecoder();

   let result="";

   while(true){

     const {done,value}=await reader!.read();

     if(done) break;

     result+=decoder.decode(value);

     setStreamText(result);

   }

   setLoading(false);

 };

 return(

  <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-xl border border-white/40 p-6 flex flex-col gap-4">

    <h1 className="text-4xl font-bold ai-gradient-text">
      AI Research Copilot
    </h1>

    <p className="text-gray-500">
      Upload research papers or ask AI.
    </p>

    <ResearchToolbar/>

    {loading && <ThinkingIndicator/>}

    {streamText &&(

      <div className="bg-gray-50 p-4 rounded-lg">

        <ReactMarkdown>

          {streamText}

        </ReactMarkdown>

        <CitationPanel/>

      </div>

    )}

    <button
      onClick={sendMessage}
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg">

      Ask AI

    </button>

    <div ref={bottomRef}/>

  </div>

 );

}

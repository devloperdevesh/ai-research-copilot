"use client";

import ChatInputBar from "./ChatInputBar";

export default function ChatContainer(){

return(

<div className="flex flex-col h-full bg-gray-50">

{/* HERO */}
<div className="flex-1 flex items-center justify-center text-center px-6">

<div>

<h1 className="text-4xl font-semibold">
Research with context, not guesses.
</h1>

<p className="text-gray-500 mt-3">
Upload academic papers. Ask structured questions. Get cited answers.
</p>

<div className="flex justify-center gap-3 mt-6">

<button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
Analyze Paper
</button>

<button className="bg-gray-100 px-4 py-2 rounded-lg">
Compare Research
</button>

<button className="bg-gray-100 px-4 py-2 rounded-lg">
Generate Report
</button>

</div>

</div>

</div>

{/* FLOATING INPUT */}
<div className="border-t bg-white">
<ChatInputBar/>
</div>

</div>

);

}
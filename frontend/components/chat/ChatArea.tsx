"use client";

import ChatInputBar from "./ChatInputBar";

export default function ChatArea({ children }: any) {

  return (

    <div className="flex flex-col h-full">

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">

        {children}

      </div>

      {/* Bottom Input Fixed */}
      <div className="border-t bg-white p-4">

        <ChatInputBar />

      </div>

    </div>

  );

}
"use client";

export default function ChatContainer({children}:any){

  return(

    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

      {children}

    </div>

  );

}

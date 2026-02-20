"use client";

export default function ChatHistory({ chats = [] }: any){

  return(

    <div className="mt-4">

      <p className="text-sm text-gray-400 mb-2">History</p>

      {chats.map((c:any,i:number)=>(

        <div
          key={i}
          className="p-2 hover:bg-gray-100 rounded cursor-pointer"
        >
          {c.title}
        </div>

      ))}

    </div>

  );

}

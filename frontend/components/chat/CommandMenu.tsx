"use client";

export default function CommandMenu({onSelect}:any){

 const commands=[
  "/research",
  "/summarize",
  "/explain",
  "/citation"
 ];

 return(

  <div className="absolute bottom-14 bg-white shadow-xl rounded-lg p-2 w-full">

   {commands.map((cmd)=>(
    <div
     key={cmd}
     onClick={()=>onSelect(cmd)}
     className="p-2 hover:bg-gray-100 cursor-pointer rounded"
    >
     {cmd}
    </div>
   ))}

  </div>

 );

}

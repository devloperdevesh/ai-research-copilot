export default function MessageBubble({text,isUser}:any){

  return(
 
   <div className={`p-3 rounded-xl max-w-[80%]
    ${isUser ? "bg-blue-500 text-white ml-auto"
             : "bg-gray-100 text-black"}`}>
 
     {text}
 
   </div>
 
  );
 
 }
 
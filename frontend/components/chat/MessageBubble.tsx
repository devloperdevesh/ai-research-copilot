export default function MessageBubble({role,text}:any){

    return(
   
     <div className={`flex ${role==="user"?"justify-end":"justify-start"}`}>
   
       <div className={`
         max-w-xl px-4 py-3 rounded-xl text-sm
         ${role==="user"
           ? "bg-blue-600 text-white"
           : "bg-gray-100"}
       `}>
         {text}
       </div>
   
     </div>
   
    );
   }
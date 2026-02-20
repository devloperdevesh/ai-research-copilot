export default function AgentThinkingPanel({steps}){

    return(
      <div className="border-l w-80 p-3 overflow-y-auto">
   
       <h3 className="font-bold mb-2">🧠 Agent Reasoning</h3>
   
       {steps?.map((s,i)=>(
         <div key={i} className="text-sm mb-2">
           {s}
         </div>
       ))}
   
      </div>
    )
   
   }
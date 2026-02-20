export default function ThinkingIndicator(){

  const steps=[
    "Searching papers...",
    "Retrieving context...",
    "Generating answer..."
  ];
 
  return(
 
   <div className="text-sm text-purple-600 space-y-1">
 
     {steps.map((s,i)=>(
       <p key={i} className="animate-pulse">{s}</p>
     ))}
 
   </div>
 
  );
 
 }
 
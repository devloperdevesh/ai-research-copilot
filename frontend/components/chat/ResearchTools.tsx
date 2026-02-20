"use client";
const modes = [
  {id:"research",label:"🔍 Research"},
  {id:"explain",label:"🧠 Explain"},
  {id:"compare",label:"⚖️ Compare"},
  {id:"literature",label:"📚 Literature"},
  {id:"report",label:"📄 Report"},
  {id:"hypothesis",label:"💡 Hypothesis"}
 ]
 
 export default function ResearchToolbar({mode,setMode}){
 
  return(
   <div className="flex gap-2 border-b p-2">
 
    {modes.map(m=>(
      <button
       key={m.id}
       onClick={()=>setMode(m.id)}
       className={`px-3 py-1 rounded-md
         ${mode===m.id ? "bg-blue-500 text-white":"bg-gray-200"}
       `}
      >
        {m.label}
      </button>
    ))}
 
   </div>
  )
 
 }

export default function ResearchToolbar(){

  return(

    <div className="flex gap-2 flex-wrap">

      <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg">

        📄 Upload Paper

      </button>

      <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg">

        🔎 Summarize

      </button>

      <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg">

        🧠 Explain

      </button>

      <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg">

        ⚖️ Compare

      </button>

    </div>

  );

}


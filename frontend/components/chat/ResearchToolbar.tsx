"use client";

export default function ResearchToolbar(){

 const modes=[
   "Research",
   "Summarize",
   "Explain",
   "Citations",
   "Compare"
 ];

 return(

  <div className="flex gap-2 flex-wrap">

    {modes.map((m)=>(

      <button key={m}
        className="px-3 py-1 rounded-lg bg-gradient-to-r
        from-blue-100 to-purple-100 text-gray-700
        hover:scale-105 transition">

        {m}

      </button>

    ))}

  </div>

 );

}

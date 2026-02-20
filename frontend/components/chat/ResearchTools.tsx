"use client";

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


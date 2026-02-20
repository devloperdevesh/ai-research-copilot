"use client";

export default function ResearchToolbar({ mode, setMode }: any) {

  const modes = [
    { id: "research", label: "Research" },
    { id: "explain", label: "Deep Explain" },
    { id: "compare", label: "Compare" },
    { id: "literature", label: "Literature Review" },
    { id: "report", label: "Generate Report" }
  ];

  return (

    <div className="flex gap-3 flex-wrap">

      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => setMode(m.id)}
          className={`px-4 py-2 rounded-xl text-sm transition
            ${mode === m.id
              ? "bg-pink-500 text-white shadow"
              : "bg-gray-100 hover:bg-pink-100"}
          `}
        >
          {m.label}
        </button>
      ))}

    </div>

  );
}
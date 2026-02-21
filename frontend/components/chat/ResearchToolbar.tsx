"use client";

type Props = {
  mode: string;
  setMode: (mode: string) => void;
};

export default function ResearchToolbar({ mode, setMode }: Props) {

  const modes = [
    { id: "research", label: "Research" },
    { id: "explain", label: "Deep Explain" },
    { id: "compare", label: "Compare" },
    { id: "literature", label: "Literature Review" },
    { id: "report", label: "Generate Report" }
  ];

  return (
    <div className="flex gap-3 flex-wrap border-b pb-3">

      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => setMode(m.id)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition
            ${mode === m.id
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-100 hover:bg-blue-100 text-gray-700"}
          `}
        >
          {m.label}
        </button>
      ))}

    </div>
  );
}
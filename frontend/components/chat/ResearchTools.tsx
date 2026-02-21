"use client";

type Props = {
  mode: string;
  setMode: (mode: string) => void;
};

const modes = [
  { id: "research", label: "🔍 Research" },
  { id: "explain", label: "🧠 Explain" },
  { id: "compare", label: "⚖️ Compare" },
  { id: "literature", label: "📚 Literature" },
  { id: "report", label: "📄 Report" },
  { id: "hypothesis", label: "💡 Hypothesis" }
];

export default function ResearchToolbar({ mode, setMode }: Props) {

  return (
    <div className="flex gap-2 border-b pb-3 flex-wrap">

      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => setMode(m.id)}
          className={`px-4 py-2 rounded-xl text-sm transition
            ${mode === m.id
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-100 hover:bg-blue-100"}
          `}
        >
          {m.label}
        </button>
      ))}

    </div>
  );
}
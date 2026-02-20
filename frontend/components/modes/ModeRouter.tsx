"use client";

export default function ModeRouter({ mode, data }: any) {

  return (

    <div>

      {mode === "research" && <div>🔎 Research Mode</div>}
      {mode === "explain" && <div>🧠 Deep Explain Mode</div>}
      {mode === "compare" && <div>📊 Compare Mode</div>}
      {mode === "literature" && <div>📚 Literature Review Mode</div>}
      {mode === "report" && <div>📝 Report Generator Mode</div>}

    </div>

  );
}
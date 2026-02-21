"use client";

type Props = {
  steps?: string[];
};

export default function ResearchTimeline({ steps = [] }: Props) {

  return (

    <div className="w-72 border-l bg-white p-4 overflow-y-auto">

      <h3 className="font-semibold text-blue-600 mb-5">
        🧠 Agent Thinking
      </h3>

      {steps.length === 0 && (
        <p className="text-sm text-gray-400">
          Waiting for agent steps...
        </p>
      )}

      {steps.map((step, index) => (

        <div key={index} className="flex gap-3 mb-4">

          {/* Animated dot */}
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 animate-pulse"/>

          {/* Step card */}
          <div className="bg-blue-50 rounded-lg p-3 text-sm shadow-sm">

            <span className="font-medium text-gray-600">
              STEP {index + 1}
            </span>

            <div className="text-gray-800 mt-1">
              {step}
            </div>

          </div>

        </div>

      ))}

    </div>

  );
}
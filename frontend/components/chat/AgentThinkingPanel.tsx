"use client";

interface Props {
  steps: string[];
}

export default function AgentThinkingPanel({ steps }: Props) {

  return (
    <div className="border-l w-80 p-4 overflow-y-auto bg-white">

      <h3 className="font-semibold text-blue-600 mb-4">
        Agent Thinking
      </h3>

      {steps.map((step, index) => (

        <div key={index} className="mb-3 flex gap-2">

          <div className="w-2 h-2 mt-2 rounded-full bg-blue-400 animate-pulse"/>

          <div className="bg-blue-50 p-3 rounded-lg text-sm">
            {step}
          </div>

        </div>

      ))}

    </div>
  );
}
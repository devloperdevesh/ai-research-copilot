"use client";

import Image from "next/image";

export default function Navbar() {

  return (

    <div className="h-14 flex items-center justify-between px-6 bg-white border-b border-gray-200">

      {/* LEFT LOGO */}
      <div className="flex items-center gap-3">

        <Image
          src="/logo.png"
          width={28}
          height={28}
          alt="AI Research Copilot"
          priority
        />

        <h1 className="font-semibold text-lg text-blue-600">
          AI Research Copilot
        </h1>

      </div>

      {/* RIGHT ACTION */}
      <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-1.5 rounded-lg text-sm shadow-sm">
        Login
      </button>

    </div>

  );

}
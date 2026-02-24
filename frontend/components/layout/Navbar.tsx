import Image from "next/image";

export default function Navbar() {

 return (

  <div className="h-14 flex items-center justify-between px-6 bg-white border-b">

    <div className="flex items-center gap-3">

      <Image src="/logo.png" width={28} height={28} alt="logo"/>

      <h1 className="font-semibold text-lg text-blue-600">
        AI Research Copilot
      </h1>

    </div>

    <div className="flex gap-3">

      <button className="text-sm text-gray-600 hover:text-black">
        Login
      </button>

      <button className="bg-blue-600 text-white px-4 py-1 rounded-lg">
        Signup
      </button>

    </div>

  </div>

 );

}
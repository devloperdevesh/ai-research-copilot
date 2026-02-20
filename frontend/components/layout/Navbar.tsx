import Image from "next/image"

export default function Navbar(){

return(

<div className="h-14 flex items-center justify-between px-6 bg-white border-b">

<div className="flex items-center gap-2">

<Image src="/logo.png" width={28} height={28} alt="logo"/>

<h1 className="font-bold text-lg text-pink-500">
AI Research Copilot
</h1>

</div>

<button className="bg-pink-500 text-white px-4 py-1 rounded-lg">
Login
</button>

</div>

)

}
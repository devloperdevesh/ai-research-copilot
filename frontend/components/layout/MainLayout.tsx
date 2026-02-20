"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({children}:any){

  return(

    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-purple-50">

      <Navbar/>

      <div className="flex flex-1">

        {/* Sidebar Desktop only */}
        <div className="hidden lg:block">
          <Sidebar/>
        </div>

        {/* Main Area */}
        <main className="flex-1 flex justify-center px-3 sm:px-6 lg:px-8 py-6">

          <div className="w-full max-w-4xl">

            {children}

          </div>

        </main>

      </div>

    </div>

  );

}

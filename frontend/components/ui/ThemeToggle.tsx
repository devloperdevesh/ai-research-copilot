"use client";

export default function ThemeToggle(){

  const toggleTheme = () => {

    document.documentElement.classList.toggle("dark");

  };

  return(

    <button onClick={toggleTheme}
      className="p-2 bg-gray-200 rounded">

      🌙

    </button>

  );

}

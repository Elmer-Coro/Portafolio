import React, { useState, useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Puedes personalizar la lógica de cambio de tema según tus necesidades
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className='bg-mgh max-w-[1200px] mx-auto p-8 flex items-center justify-between'>
      <div className='text-2xl font-bold'>
        <a
          href='#'
          className='text-blue-900'>
          &lt;&gt;MasterDev&lt;/&gt;
        </a>
      </div>
      <div className='flex items-center space-x-5'>
        <ul className='flex space-x-4 font-semibold text-sm text-blue-700'>
          <li>
            <a
              href='#'
              className=''>
              Inicio
            </a>
          </li>
          <li>
            <a href='#'>Sobre mi</a>
          </li>
          <li>
            <a href='#'>Proyectos</a>
          </li>
          <li>
            <a href='#'>Habilidades</a>
          </li>
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

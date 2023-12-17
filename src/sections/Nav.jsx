import React, { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

export default function Nav() {
  const [currentPage, setCurrentPage] = useState("inicio");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className='max-w-[1200px] mx-auto p-8 flex items-center justify-between'>
      <div className='text-1xl sm:text-2xl font-bold'>
        <a
          href='#inicio'
          className={`text-blue-900 dark:text-gray-400 ${
            currentPage === "inicio" ? "active" : ""
          }`}
          onClick={() => handlePageChange("inicio")}>
          &lt;&gt;MasterDev&lt;/&gt;
        </a>
      </div>
      <div className='flex items-center space-x-5'>
        <ul className='lg:flex hidden space-x-4 font-semibold text-sm text-blue-700 dark:text-gray-400'>
          <li>
            <a
              href='#inicio'
              className={`hover:text-blue-800 dark:hover:text-gray-600 ${
                currentPage === "inicio" ? "active" : ""
              }`}
              onClick={() => handlePageChange("inicio")}>
              Inicio
            </a>
          </li>
          <li>
            <a
              href='#proyectos'
              className={`hover:text-blue-800 dark:hover:text-gray-600 ${
                currentPage === "proyectos" ? "active" : ""
              }`}
              onClick={() => handlePageChange("proyectos")}>
              Proyectos
            </a>
          </li>
          <li>
            <a
              href='#habilidades'
              className={`hover:text-blue-800 dark:hover:text-gray-600 ${
                currentPage === "habilidades" ? "active" : ""
              }`}
              onClick={() => handlePageChange("habilidades")}>
              Habilidades
            </a>
          </li>
        </ul>
        <DarkModeSwitch />
      </div>
    </nav>
  );
}

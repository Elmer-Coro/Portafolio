import React, { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Nav() {
  const [currentPage, setCurrentPage] = useState("inicio");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className='max-w-[1200px] mx-auto p-8 flex items-center justify-between'>
      <div className='text-2xl font-bold'>
        <a
          href='#inicio'
          className={`text-blue-900 ${
            currentPage === "inicio" ? "active" : ""
          }`}
          onClick={() => handlePageChange("inicio")}>
          &lt;&gt;MasterDev&lt;/&gt;
        </a>
      </div>
      <div className='flex items-center space-x-5'>
        <ul className='sm:hidden flex space-x-4 font-semibold text-sm text-blue-700'>
          <li>
            <a
              href='#inicio'
              className={`${currentPage === "inicio" ? "active" : ""}`}
              onClick={() => handlePageChange("inicio")}>
              Inicio
            </a>
          </li>
          <li>
            <a
              href='#proyectos'
              className={`${currentPage === "proyectos" ? "active" : ""}`}
              onClick={() => handlePageChange("proyectos")}>
              Proyectos
            </a>
          </li>
          <li>
            <a
              href='#habilidades'
              className={`${currentPage === "habilidades" ? "active" : ""}`}
              onClick={() => handlePageChange("habilidades")}>
              Habilidades
            </a>
          </li>
        </ul>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

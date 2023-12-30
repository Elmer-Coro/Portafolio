import React, { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Logo2 from "../../public/images/Logo2.png";

export default function Nav() {
  return (
    <header className='max-w-[1200px] mx-auto p-8 flex items-center justify-between'>
      <div className='text-1xl sm:text-2xl font-bold'>
        <a
          href='#inicio'
          onClick={() => handlePageChange("inicio")}>
          <img
            className='w-20 h-16'
            src={Logo2}
            alt=''
          />
        </a>
      </div>
      <nav className='hidden md:flex items-center space-x-5 text-white/80 font-light text-sm transition-all duration-1000 ease-in-out'>
        <a
          className='hover:text-white/50'
          href='#inicio'
          onClick={() => handlePageChange("inicio")}>
          Inicio
        </a>
        <a
          className='hover:text-white/50'
          href='#proyectos'
          onClick={() => handlePageChange("proyectos")}>
          Sobre mi
        </a>

        <a
          className='hover:text-white/50'
          href='#proyectos'
          onClick={() => handlePageChange("proyectos")}>
          Proyectos
        </a>

        <a
          className='hover:text-white/50'
          href='#habilidades'
          onClick={() => handlePageChange("habilidades")}>
          Habilidades
        </a>
      </nav>
    </header>
  );
}

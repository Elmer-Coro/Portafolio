import React from "react";
import logo from "../../public/images/logo.png";
import Button from "../components/Button";
import { CgDarkMode } from "react-icons/cg";

export default function Nav() {
  return (
    <nav className='max-w-[1200px] m-auto p-8 flex items-center justify-between gap-8 text-slate-900 font-semibold '>
      <div className='max-w-[100px]'>
        <a href='#'>
          <img
            src={logo}
            alt='logo'
          />
        </a>
      </div>
      <ul className='sm:hidden md:hidden list-none flex items-center gap-12 font-semibold'>
        <li className='text-violet-600 hover:text-blue-500'>
          <a href='#'>Inicio</a>
        </li>
        <li
          id='link1'
          className='hover:text-slate-600 text-slate-900'>
          <a href='#'>Sobre mi</a>
        </li>
        <li
          id='link2'
          className='hover:text-slate-600 text-slate-900'>
          <a href='#'>Proyectos</a>
        </li>
        <li
          id='link3'
          className='hover:text-slate-600 text-slate-900'>
          <a href='#'>Habilidades</a>
        </li>
      </ul>
      <Button text={"Contacto"} />
    </nav>
  );
}

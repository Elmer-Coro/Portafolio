import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Skills() {
  return (
    <section className='max-w-[1200px] m-auto py-20 px-8'>
      <h2 className='font-bold text-slate-900 text-center text-2xl mb-16'>
        HABILIDADES
      </h2>
      <p className='mb-4 text-center text-slate-600 font-normal'>
        Mi viaje en el mundo del desarrollo web ha estado marcado por la
        dedicación a la excelencia, la creatividad y la búsqueda constante de
        soluciones innovadoras. A lo largo de mi carrera, he cultivado
        habilidades sólidas en JavaScript, CSS y HTML, y he aplicado esta
        experiencia en una amplia gama de proyectos emocionantes.
      </p>
      <div className='grid place-items-center place-content-center gap-4 grid-cols-7 sm:grid-cols-3'>
        <div className='text-5xl text-red-500 hover:animate-bounce'>
          <FaHtml5 />
        </div>
        <div className='text-5xl text-blue-500 hover:animate-bounce'>
          <FaCss3 />
        </div>
        <div className='text-5xl text-yellow-400 hover:animate-bounce'>
          <IoLogoJavascript />
        </div>
        <div className='text-5xl text-sky-600 hover:animate-bounce'>
          <FaReact />
        </div>
        <div className='text-5xl text-sky-400 hover:animate-bounce'>
          <SiTailwindcss />
        </div>
        <div className='text-5xl text-pink-500 hover:animate-bounce'>
          <FaBootstrap />
        </div>
        <div className='text-5xl hover:animate-bounce'>
          <FaGithub />
        </div>
      </div>
    </section>
  );
}

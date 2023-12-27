import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Icon from "../components/Icon";

export default function Skills() {
  return (
    <section
      id='habilidades'
      className='max-w-[1200px] m-auto py-20 px-8'>
      <h2 className='dark:text-gray-300 font-bold text-blue-900 text-center text-3xl mb-8'>
        HABILIDADES
      </h2>
      <p className='dark:text-gray-400 mb-4 text-center text-slate-600 font-normal'>
        Mi viaje en el mundo del desarrollo web ha estado marcado por la
        dedicación a la excelencia, la creatividad y la búsqueda constante de
        soluciones innovadoras. A lo largo de mi carrera, he cultivado
        habilidades sólidas en JavaScript, CSS y HTML, y he aplicado esta
        experiencia en una amplia gama de proyectos emocionantes.
      </p>
      <div className='grid place-items-center place-content-center gap-4 grid-cols-7 py-20'>
        <Icon icon={<FaHtml5 className='text-gray-400 hover:text-red-500' />} />
        <Icon icon={<FaCss3 className='text-gray-400 hover:text-blue-500' />} />
        <Icon
          icon={
            <IoLogoJavascript className='text-gray-400 hover:text-yellow-500' />
          }
        />
        <Icon
          icon={<FaReact className='text-gray-400 hover:text-blue-600' />}
        />
        <Icon
          icon={<SiTailwindcss className='text-gray-400 hover:text-blue-400' />}
        />
        <Icon
          icon={<FaBootstrap className='text-gray-400 hover:text-pink-500' />}
        />
        <Icon icon={<FaGithub className='text-gray-400 hover:text-black' />} />
      </div>
    </section>
  );
}

import React from "react";
import programing from "../../public/images/programming.svg";
import Button from "../components/Button";

export default function Hero() {
  return (
    <header
      id='inicio'
      className='relative pt-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-[1200px] m-auto py-20 px-8 '>
      <div className='order-2 content md:order-1'>
        <h4 className='mb-4 text-slate-800 text-base font-semibold dark:text-gray-400'>
          CODEANDO EL FUTURO, PIXEL POR PIXEL
        </h4>
        <h1 className='mb-4 text-blue-900 text-4xl sm:text-5xl font-bold dark:text-gray-300'>
          Hola, soy <span>Elmer</span>, desarrollador web
        </h1>
        <p className='mb-8 text-slate-700 dark:text-gray-400'>
          Soy un apasionado del desarrollo web, un universo en constante
          evolución que me fascina. Disfruto cada línea de código como si fuera
          una pieza de un rompecabezas, buscando siempre la combinación perfecta
          para crear experiencias digitales cautivadoras.
        </p>
        <div className='flex gap-4'>
          <Button text={"Contacto"} />
          <Button text={"Sobre mi"} />
        </div>
      </div>
      <div className='sm:order-1 '>
        <img
          src={programing}
          alt='programing'
        />
      </div>
    </header>
  );
}

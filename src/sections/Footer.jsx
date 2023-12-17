import React from "react";
import logo from "../../public/images/logo.png";
import Socials from "../components/Socials";

export default function Footer() {
  return (
    <footer className='lg:grid-cols-4 md:grid-cols-2 text-white relative grid grid-cols-2 gap-8 max-w-[1200px] m-auto py-20 px-8 text-sm '>
      <div className='column'>
        <div className='max-w-[100px] mb-8 font-bold text-2xl'>
          <img
            src={logo}
            alt=''
          />
        </div>
        <p className='mb-8 dark:text-gray-400'>
          Construyendo experiencias digitales excepcionales.
        </p>
        <Socials />
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl font-semibold dark:text-gray-300'>
          Personal
        </h4>
        <a
          className='block mb-4 dark:text-gray-400'
          href='https://elmer-coro.github.io/Blog/'>
          Blog
        </a>
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl font-semibold dark:text-gray-300'>
          Proyectos
        </h4>
        <a
          className='dark:text-gray-400 block mb-4 '
          href='#'>
          Memory Game
        </a>
        <a
          className='dark:text-gray-400 block mb-4 '
          href='#'>
          Gallery Project
        </a>
        <a
          className='dark:text-gray-400 block mb-4 '
          href='#'>
          Calculator
        </a>
        <a
          className='dark:text-gray-400 block mb-4 '
          href='#'>
          dessert Page
        </a>
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl font-medium dark:text-gray-300'>
          Contacto
        </h4>
        <a
          className='dark:text-gray-400 block mb-4 '
          href='#'>
          Linkedin
        </a>
        <a
          className='dark:text-gray-400 block mb-4 '
          href='#'>
          GitHub
        </a>
        <a
          className='dark:text-gray-400 block mb-4 '
          href='#'>
          Instagram
        </a>
      </div>
    </footer>
  );
}

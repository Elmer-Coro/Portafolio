import React from "react";
import logo from "../../public/images/logo.png";
import Socials from "../components/Socials";

export default function Footer() {
  return (
    <footer className='md:grid-cols-2 text-white relative grid grid-cols-4 gap-8 max-w-[1200px] m-auto py-20 px-8 text-sm '>
      <div className='column'>
        <div className='max-w-[100px] mb-8 font-bold text-2xl'>
          &lt;&gt;MasterDev&lt;/&gt;
        </div>
        <p className='mb-8'>
          Construyendo experiencias digitales excepcionales.
        </p>
        <Socials />
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl font-semibold'>Personal</h4>
        <a
          className='block mb-4'
          href='https://elmer-coro.github.io/Blog/'>
          Blog
        </a>
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl font-semibold'>Proyectos</h4>
        <a
          className='block mb-4 '
          href='#'>
          Memory Game
        </a>
        <a
          className='block mb-4 '
          href='#'>
          Gallery Project
        </a>
        <a
          className='block mb-4 '
          href='#'>
          Calculator
        </a>
        <a
          className='block mb-4 '
          href='#'>
          dessert Page
        </a>
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl font-medium'>Contacto</h4>
        <a
          className='block mb-4 '
          href='#'>
          Linkedin
        </a>
        <a
          className='block mb-4 '
          href='#'>
          GitHub
        </a>
        <a
          className='block mb-4 '
          href='#'>
          Instagram
        </a>
      </div>
    </footer>
  );
}

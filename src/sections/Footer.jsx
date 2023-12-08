import React from "react";
import logo from "../../public/images/logo.png";
import Socials from "../components/Socials";

export default function Footer() {
  return (
    <footer className='md:grid-cols-2 relative grid grid-cols-4 gap-8 max-w-[1200px] m-auto py-20 px-8'>
      <div className='column'>
        <div className='max-w-[100px] mb-8'>
          <img
            src={logo}
            alt='logo'
          />
        </div>
        <p className='mb-8 text-slate-700'>
          Construyendo experiencias digitales excepcionales.
        </p>
        <Socials />
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl text-slate-900 font-medium'>Personal</h4>
        <a
          className='block mb-4 text-slate-600 hover:text-blue-800'
          href='https://elmer-coro.github.io/Blog/'>
          Blog
        </a>
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl text-slate-900 font-medium'>Proyectos</h4>
        <a
          className='block mb-4 text-slate-600 hover:text-violet-800'
          href='#'>
          Memory Game
        </a>
        <a
          className='block mb-4 text-slate-600 hover:text-violet-800'
          href='#'>
          Gallery Project
        </a>
        <a
          className='block mb-4 text-slate-600 hover:text-violet-800'
          href='#'>
          Calculator
        </a>
        <a
          className='block mb-4 text-slate-600 hover:text-violet-800'
          href='#'>
          dessert Page
        </a>
      </div>
      <div className='column'>
        <h4 className='mb-8 text-xl text-slate-900 font-medium'>Contacto</h4>
        <a
          className='block mb-4 text-slate-600 hover:text-violet-800'
          href='#'>
          Linkedin
        </a>
        <a
          className='block mb-4 text-slate-600 hover:text-violet-800'
          href='#'>
          GitHub
        </a>
        <a
          className='block mb-4 text-slate-600 hover:text-violet-800'
          href='#'>
          Instagram
        </a>
      </div>
    </footer>
  );
}

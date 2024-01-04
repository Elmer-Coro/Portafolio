import React from "react";
import { SvgGithub, SvgLink } from "../icons/Icons";

export default function Card({
  text,
  paragraph,
  img,
  websiteLink,
  githubLink,
  cols,
  tamaño,
}) {
  return (
    <div
      className={`h-[28em] border border-white/20 rounded-2xl overflow-hidden relative hover:scale-105 transition-all duration-500 ease-in-out ${cols}`}>
      <div className='blur-sm absolute top-0 z-[-2] h-full w-full  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />

      <div className='p-4'>
        <h2 className='text-white/80 text-xl font-extrabold mb-2'>{text}</h2>
        <p className='text-white/30 mb-4'>Html | Css | Javsscript</p>
        <p className='text-white/70 font-light text-pretty text-base mb-4'>
          {paragraph}
        </p>
        <img
          className={`w-full h-48 object-fill rounded-lg ${tamaño}`}
          src={img}
          alt='{title}'
        />
        <div className='mt-4 flex justify-between'>
          <a
            href={websiteLink}
            target='_blank'
            rel='noopener noreferrer'
            className='dark:text-blue-500 text-blue-900 hover:underline'>
            <SvgLink />
          </a>
          <a
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:underline'>
            <SvgGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Technologies from "./Technologies";
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Card({
  text,
  paragraph,
  img,
  websiteLink,
  githubLink,
}) {
  return (
    <div className='max-w-sm  border rounded-xl overflow-hidden shadow-md dark:bg-slate-800 dark:border-slate-700'>
      <img
        className='w-full h-48 object-cover object-center'
        src={img}
        alt='{title}'
      />
      <div className='p-4'>
        <h2 className='dark:text-gray-300 text-xl text-blue-900 font-semibold mb-2'>
          {text}
        </h2>
        <p className='dark:text-gray-500 text-gray-600 mb-4'>
          Html, Css, Javsscript
        </p>
        <p className='text-gray-800 dark:text-gray-400 opacity-75'>
          {paragraph}
        </p>
        <div className='mt-4 flex justify-between'>
          <a
            href={websiteLink}
            target='_blank'
            rel='noopener noreferrer'
            className='dark:text-blue-500 text-blue-900 hover:underline'>
            Visitar Sitio
          </a>
          <a
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:underline'>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

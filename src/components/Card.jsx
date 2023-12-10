import React from "react";
import Technologies from "./Technologies";
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Card({ text, paragraph, img }) {
  return (
    <div className='max-w-sm  border rounded-xl overflow-hidden shadow-md'>
      <img
        className='w-full h-48 object-cover object-center'
        src={img}
        alt='{title}'
      />
      <div className='p-4'>
        <h2 className='text-xl text-blue-900 font-semibold mb-2'>{text}</h2>
        <p className='text-gray-600 mb-4'>Html, Css, Javsscript</p>
        <p className='text-gray-800'>{paragraph}</p>
        <div className='mt-4 flex justify-between'>
          <a
            href='{websiteLink}'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-900 hover:underline'>
            Visitar Sitio
          </a>
          <a
            href='{githubLink}'
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

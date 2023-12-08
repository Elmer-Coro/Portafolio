import React from "react";
import Technologies from "./Technologies";
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Card({ text, paragraph, img }) {
  return (
    <div className='rounded-md p-3 bg-white shadow-dm shadow-zinc-300 border'>
      <Technologies />
      <h4 className='mb-2 text-slate-900 text-xl font-bold '>{text}</h4>
      <p className=' mb-4 text-slate-700'>{paragraph}</p>
      <div className='mb-2'>
        <img
          src={img}
          alt='snake'
        />
      </div>
      <div className='flex mt-auto justify-between items-center'>
        <a
          className='text-violet-500 font-semibold flex items-center gap-2'
          href='https://elmer-coro.github.io/memory-game/src/'>
          Visitar web <FaArrowRight />
        </a>
      </div>
    </div>
  );
}

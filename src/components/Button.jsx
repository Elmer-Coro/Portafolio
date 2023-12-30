import React from "react";

export default function Button({ text }) {
  return (
    <button className='bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border border-white/40 rounded-md w-36 py-3 text-white/80 transition-all ease-in-out duration-300 font-normal text-sm hover:text-white/40 '>
      {text}
    </button>
  );
}

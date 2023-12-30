import React from "react";

export default function Icon({ icon, sizes }) {
  return (
    <div
      className={`hover:scale-105 relative w-full h-full justify-center flex items-center border border-white/20 rounded-2xl text-9xl py-2 px-2 shadow-lg  transition-all ${sizes}`}>
      <div className='absolute top-0 bottom-0 blur w-full h-full justify-center flex items-center border border-white/20 rounded-2xl text-9xl py-4 px-4 shadow-lg bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
      <i>{icon}</i>
    </div>
  );
}

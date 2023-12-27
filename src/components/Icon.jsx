import React from "react";

export default function Icon({ icon }) {
  return (
    <div className='md:text-4xl text-3xl text-red-500 hover:scale-150 transition-all'>
      {icon}
    </div>
  );
}

import React from "react";

export default function Button({ text }) {
  return (
    <button className='bg-blue-900 rounded-sm w-36 py-3 text-white font-semibold'>
      {text}
    </button>
  );
}

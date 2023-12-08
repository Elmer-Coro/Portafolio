import React from "react";

export default function Button({ text }) {
  return (
    <button className='bg-slate-900 rounded w-36 py-3 text-white font-semibold hover:bg-slate-700'>
      {text}
    </button>
  );
}

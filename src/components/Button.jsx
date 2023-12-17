import React from "react";

export default function Button({ text }) {
  return (
    <button className='hover:bg-blue-950 dark:hover:bg-gray-800 bg-blue-900 dark:bg-gray-700 rounded-md w-36 py-3 text-white font-semibold'>
      {text}
    </button>
  );
}

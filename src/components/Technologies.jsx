import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function Technologies() {
  return (
    <div className='flex items-center gap-4 mb-2'>
      <span className='inline-block  text-3xl'>
        <FaHtml5 className='bg-red-600 text-white text-3xl rounded' />
      </span>
      <span>
        <FaCss3 className='bg-blue-600 text-white text-3xl rounded' />
      </span>
      <span>
        <IoLogoJavascript className='bg-yellow-300 text-white text-3xl rounded' />
      </span>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const DarkModeSwitch = () => {
  // Estado para controlar el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto para aplicar el modo oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className='flex items-center'>
      <label
        htmlFor='darkModeSwitch'
        className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            type='checkbox'
            id='darkModeSwitch'
            className='sr-only'
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
          {/* <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner dark:bg-gray-600' />
          <div className='dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition' /> */}
          <div className='rounded-full transition'>
            {isDarkMode ? (
              <FaMoon className='text-gray-400' />
            ) : (
              <FaSun className='text-yellow-400' />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Puedes usar el localStorage para persistir el modo oscuro entre sesiones
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    } else {
      // Si no hay un modo guardado, puedes usar la configuración del sistema
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <div>
      {isDarkMode ? (
        <FaMoon
          className='text-gray-500'
          onClick={toggleDarkMode}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <FaSun
          className='text-yellow-400'
          onClick={toggleDarkMode}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default DarkModeToggle;

"use client"
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
      // Check saved dark mode preference
      const savedMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(savedMode);
      document.documentElement.classList.toggle('dark', savedMode);
    }, []);
  
    useEffect(() => {
      // Save dark mode preference
      localStorage.setItem('darkMode', darkMode);
      document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

  return (
    <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed z-10 bottom-4 right-4 px-4 py-3 text-white bg-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full shadow-lg flex items-center"
    >
    <span className="hidden md:block">
        {darkMode ? '☀️ Light' : '🌙 Dark'}
    </span>
    <span className="block md:hidden">
        {darkMode ? '☀️' : '🌙'}
    </span>
    </button>
  );
}

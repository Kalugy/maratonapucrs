"use client"
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference in localStorage
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);

    // Set initial theme based on saved preference or system preference
    if (savedMode || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('darkMode', darkMode);

    // Toggle dark mode class on the document element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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

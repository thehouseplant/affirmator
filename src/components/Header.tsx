import { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";

const Header: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4 shadow-md dark:bg-gray-900">
      <h1 className="text-xl font-semibold">Affirmator</h1>
      <Button variant="outline" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </header>
  )
}

export default Header;

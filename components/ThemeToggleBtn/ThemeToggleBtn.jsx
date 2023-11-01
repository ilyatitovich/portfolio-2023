import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState("light");

  // get color theme when loading
  useEffect(() => {
    setCurrentTheme(localStorage.getItem("colorTheme") || "light");
  }, []);

  // set theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    document.body.className = currentTheme;
  }, [currentTheme]);

  function toggleTheme() {
    let colorTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(colorTheme);
    localStorage.setItem("colorTheme", colorTheme);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 17"
      width={17}
      height={17}
      className="icons-style mini-icons"
      onClick={toggleTheme}
    >
      <title>Theme</title>
      <motion.path
        animate={{ y: currentTheme === "dark" ? 17 : 0 }}
        d="M14.994,7.99a7,7,0,0,1-12.813,3.9,1,1,0,0,1,1.063-1.532,6.139,6.139,0,0,0,1.961.089,6.012,6.012,0,0,0,5.212-4.985,6.067,6.067,0,0,0-.065-2.274A1,1,0,0,1,11.9,2.182,6.985,6.985,0,0,1,14.994,7.99Z"
      />
      <motion.g animate={{ y: currentTheme === "light" ? 17 : 0 }}>
        <circle cx="8.5" cy="8.5" r={3} />
        <line x1="8.5" y1={1} x2="8.5" y2={2} />
        <line x1="13.803" y1="3.197" x2="13.096" y2="3.904" />
        <line x1={16} y1="8.5" x2={15} y2="8.5" />
        <line x1="13.803" y1="13.803" x2="13.096" y2="13.096" />
        <line x1="8.5" y1={16} x2="8.5" y2={15} />
        <line x1="3.197" y1="13.803" x2="3.904" y2="13.096" />
        <line x1={1} y1="8.5" x2={2} y2="8.5" />
        <line x1="3.197" y1="3.197" x2="3.904" y2="3.904" />
      </motion.g>
    </svg>
  );
}

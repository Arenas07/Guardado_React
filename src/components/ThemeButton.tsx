import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded transition-all duration-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDarkMode ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <MdSunny size={24} className="text-white hover:text-green-300" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <IoMoonOutline size={24} className="text-gray-800 hover:text-green-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ThemeButton;
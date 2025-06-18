import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 w-full z-50 bg-[rgb(var(--background-2))] shadow-md">
      <div className="flex justify-between items-center px-6 md:px-14 py-4">
        <RouterLink to="/" className="text-2xl font-extrabold bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent tracking-wider drop-shadow-sm">
          Habita
        </RouterLink>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className="hidden md:flex items-center gap-10 text-white">
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-emerald-400 transition-all duration-300"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="howItWorks"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-emerald-400 transition-all duration-300"
          >
            How Habita Works
          </ScrollLink>
          <RouterLink
            to="/login"
            className="cursor-pointer hover:text-emerald-400 transition-all duration-300"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold shadow-md hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
          >
            Start for free
          </RouterLink>
        </nav>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center md:hidden gap-4 py-6 bg-[rgb(var(--background-2))] text-white shadow-md">
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-emerald-400 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="howItWorks"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-emerald-400 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            How Habita Works
          </ScrollLink>
          <RouterLink
            to="/login"
            className="cursor-pointer hover:text-emerald-400 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold shadow-md hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Start for free
          </RouterLink>
        </div>
      )}
    </header>
  );
}

export default Header;

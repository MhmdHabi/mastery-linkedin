import { useEffect, useState } from "react";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";
import { itemVariants } from "../utils/animation";
import Drawer from "./Drawer";
import { navItems } from "../constants/navItems"; // ⬅️ ambil dari constants

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -70,
    spy: true,
    activeClass: "!text-blue-600 dark:!text-blue-400 after:w-full after:bg-blue-600 dark:after:bg-blue-400",
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b transition-shadow backdrop-blur
          bg-white/70 text-slate-900
          dark:bg-black/60 dark:text-white dark:border-gray-800
          ${scrolled ? "shadow-[0_6px_24px_-12px_rgba(0,0,0,0.3)]" : ""}`}
        aria-label="Main"
      >
        <div className="mx-auto flex items-center justify-between px-6 py-4 font-poppins">
          {/* Logo + LinkedIn */}
          <motion.div className="flex items-center gap-2" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 250, damping: 20 }}>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg p-1.5 transition
                text-blue-700 hover:bg-blue-100/60
                dark:text-blue-400 dark:hover:bg-blue-500/10"
              aria-label="Open LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </motion.a>
            <Link
              to="hero"
              {...linkProps}
              className="cursor-pointer text-lg font-bold tracking-wide
                bg-clip-text text-transparent
                bg-gradient-to-r from-blue-600 to-blue-400
                dark:from-blue-400 dark:to-sky-400"
            >
              LinkedIn Mastery
            </Link>
          </motion.div>

          {/* Nav Items Center (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center gap-6">
            <AnimatePresence initial={false}>
              {navItems.map(({ to, label }, i) => (
                <motion.div key={to} custom={i} initial="hidden" animate="show" variants={itemVariants}>
                  <Link
                    to={to}
                    {...linkProps}
                    className="relative cursor-pointer text-slate-700 font-semibold dark:text-slate-300 transition-colors
                      hover:text-blue-600 dark:hover:text-blue-400
                      after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 dark:after:bg-blue-400
                      after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Toggle Dark Mode */}
            <motion.button
              whileHover={{ y: -1, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-lg p-2 transition border border-blue-500 dark:border-gray-700
                hover:bg-blue-200/40
                dark:hover:bg-white/10"
              aria-label="Toggle Dark Mode"
              title="Toggle theme"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Mobile Button */}
            <motion.button
              whileHover={{ y: -1, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="text-slate-700 dark:text-slate-300 md:hidden rounded-lg p-2 hover:bg-slate-200/70 dark:hover:bg-white/10"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              title="Open menu"
            >
              <FiMenu size={22} />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} linkProps={linkProps} />
    </>
  );
}

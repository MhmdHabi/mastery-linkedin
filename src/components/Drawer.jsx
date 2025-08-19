import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import { drawerVariants, mobileItemVariants } from "../utils/animation";

export default function Drawer({ isOpen, setIsOpen, navItems, linkProps }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={drawerVariants}
            className="fixed right-0 top-0 z-50 h-full w-64 max-w-[85vw]
              bg-white/95 backdrop-blur-xl
              dark:bg-gray-900/95
              border-l border-gray-200/50 dark:border-gray-700/50
              shadow-2xl md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200/50 dark:border-gray-700/50 p-6">
              <h2 id="drawer-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                Menu
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700
                  dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <FiX size={20} />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col p-6 space-y-1">
              <AnimatePresence>
                {navItems.map(({ to, label }, i) => (
                  <motion.div key={to} custom={i} initial="hidden" animate="show" variants={mobileItemVariants}>
                    <Link
                      to={to}
                      {...linkProps}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300
                        hover:bg-blue-50 hover:text-blue-600
                        dark:hover:bg-blue-900/20 dark:hover:text-blue-400
                        transition-all duration-200 cursor-pointer active:scale-95
                        [&.active]:text-blue-600 dark:[&.active]:text-blue-400
                        [&.active]:after:w-full"
                    >
                      <span className="font-medium">{label}</span>
                      <motion.div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" initial={{ x: -10 }} animate={{ x: 0 }}>
                        →
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

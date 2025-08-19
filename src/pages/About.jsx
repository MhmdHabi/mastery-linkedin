import { motion } from "framer-motion";
import AboutContent from "../components/About/AboutContent";
import AboutImage from "../components/About/AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white
                 text-slate-800 dark:from-black dark:via-gray-900 dark:to-black dark:text-white transition-colors duration-500"
    >
      {/* Background accents (dekorasi, tidak dibaca screen reader) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl dark:bg-blue-400/10" />
      </div>

      <div className="px-6 py-14 md:py-18">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <AboutImage />
          <AboutContent />
        </motion.div>
      </div>

      {/* Bottom wave (dekorasi) */}
      <svg className="pointer-events-none -mb-px block h-12 w-full text-white dark:text-black" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor" aria-hidden="true">
        <path d="M0 54h1440V0c-120 25-240 38-360 38S720 0 540 0 240 25 120 38 0 38 0 38v16z" />
      </svg>
    </section>
  );
}

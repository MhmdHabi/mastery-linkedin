import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fadeUp } from "../../utils/animation";

export default function HeroContent({ headerY }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }} className="text-center md:text-left w-full mx-auto" style={{ y: headerY, willChange: "transform" }}>
      {/* Badge */}
      <motion.div
        custom={0}
        variants={fadeUp}
        className="mb-6 inline-flex items-center gap-2 rounded-full
                   border border-slate-200 bg-white/80
                   px-3 py-1 text-xs text-slate-600
                   shadow-sm backdrop-blur
                   dark:border-blue-500/40 dark:bg-slate-900/70 dark:text-white"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Kelas Online • Pemula s/d Menengah
      </motion.div>

      {/* Title */}
      <motion.h1
        custom={1}
        variants={fadeUp}
        className="bg-gradient-to-br from-blue-900 to-blue-600 bg-clip-text
                   text-3xl font-extrabold leading-tight tracking-tight
                   text-transparent sm:text-5xl
                   dark:from-blue-400 dark:to-cyan-300 dark:bg-clip-text"
      >
        Mastering LinkedIn for Career Growth
      </motion.h1>

      {/* Description */}
      <motion.p custom={2} variants={fadeUp} className="mt-5 text-base text-slate-600 sm:text-lg dark:text-slate-200">
        Optimalkan profil, bangun jaringan yang tepat, dan raih peluang karier baru melalui strategi LinkedIn yang terbukti efektif.
      </motion.p>

      {/* CTA */}
      <motion.div custom={3} variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
        <Link
          to="r"
          className="group inline-flex items-center justify-center rounded-2xl
                     border border-blue-200 bg-blue-600 px-6 py-3
                     text-sm font-semibold text-white shadow-lg shadow-blue-200/60
                     transition-transform duration-300 hover:-translate-y-1
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-blue-400
                     dark:border-blue-500/40 dark:bg-blue-600 dark:shadow-blue-500/40"
        >
          Daftar Sekarang
          <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <Link
          to=""
          className="inline-flex items-center justify-center rounded-2xl
                     border border-slate-200 bg-white px-6 py-3
                     text-sm font-medium text-slate-700 shadow-sm
                     transition-transform duration-300 hover:-translate-y-1 hover:bg-slate-50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300
                     dark:border-blue-500/40 dark:bg-slate-900 dark:text-blue-400
                     dark:hover:bg-slate-800"
        >
          Lihat Silabus
        </Link>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        custom={4}
        variants={fadeUp}
        className="mt-10 flex flex-wrap items-center justify-center md:justify-start
                   gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-200"
      >
        {["Optimasi Profil", "Personal Branding", "Networking & Job Hunting"].map((t) => (
          <motion.span key={t} whileHover={{ scale: 1.07, rotate: -1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="inline-flex items-center gap-2 cursor-default">
            <FiCheckCircle className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
            <span>{t}</span>
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

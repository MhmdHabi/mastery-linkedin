import { motion } from "framer-motion";

import { fadeLeft } from "../utils/animation";
import BenefitList from "../components/Benefits/BenefitList";
import BenefitImages from "../components/Benefits/BenefitImages";

export default function Benefit() {
  return (
    <section id="benefits" className="relative py-20 bg-white dark:bg-black overflow-hidden">
      {/* Background Hiasan */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text & Benefit List */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70
                       px-3 py-1 text-xs text-blue-700 shadow-sm backdrop-blur
                       dark:border-blue-500/30 dark:bg-blue-900/30 dark:text-blue-300"
          >
            ✨ Key Benefits
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Manfaat Utama dari <span className="text-blue-600 dark:text-blue-400">Kelas Ini</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Ikuti kelas ini untuk menguasai strategi praktis LinkedIn, membangun personal branding yang kuat, serta meningkatkan peluang karier di era digital.
          </p>

          <BenefitList />
        </motion.div>

        {/* Images */}
        <BenefitImages />
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FiTarget, FiUserCheck, FiTrendingUp } from "react-icons/fi";
import { fadeUp, fadeRight } from "../../utils/animation";

export default function AboutContent() {
  const benefits = [
    { icon: <FiTarget className="h-4 w-4" />, text: "Strategi profil yang terbukti" },
    { icon: <FiUserCheck className="h-4 w-4" />, text: "Branding personal yang konsisten" },
    { icon: <FiTrendingUp className="h-4 w-4" />, text: "Taktik networking & mencari kerja" },
  ];

  return (
    <section>
      {/* Label heading kecil */}
      <motion.span
        as="span"
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70
                   px-3 py-1 text-xs text-blue-700 shadow-sm backdrop-blur
                   dark:border-blue-500/30 dark:bg-blue-900/30 dark:text-blue-300"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        Tentang Kami
      </motion.span>

      {/* Judul utama */}
      <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl dark:text-blue-400">
        Bangun Personal Branding & Jaringanmu di LinkedIn
      </motion.h2>

      {/* Paragraf deskripsi */}
      <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-justify text-slate-600 sm:text-lg dark:text-slate-300">
        Kelas ini dirancang untuk para profesional, mahasiswa, dan pencari kerja yang ingin menguasai strategi praktis untuk memaksimalkan LinkedIn sebagai platform pengembangan karier. Peserta akan belajar cara mengoptimalkan profil,
        membangun personal branding yang kuat, dan menjalin koneksi bermakna melalui pendekatan interaktif. Kursus ini disusun untuk memberikan wawasan yang bisa langsung diterapkan, membuka peluang baru, memperluas jaringan profesional,
        dan meningkatkan visibilitas di era digital saat ini.
      </motion.p>

      {/* Daftar manfaat */}
      <motion.ul variants={fadeRight} className="mt-6 space-y-3">
        {benefits.map((b, i) => (
          <motion.li key={i} variants={fadeUp} custom={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
            <span
              className="grid place-items-center rounded-full border border-blue-200 bg-blue-50 p-2
                         text-blue-700 dark:border-blue-400/30 dark:bg-blue-900/40 dark:text-blue-300"
            >
              {b.icon}
            </span>
            <span>{b.text}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

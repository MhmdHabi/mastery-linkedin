import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../../utils/animation";

// import images from assets
import benefit1 from "/assets/benefit1.webp";
import benefit2 from "/assets/benefit2.webp";
import benefit3 from "/assets/benefit3.jpeg";
import benefit4 from "/assets/benefit4.jpeg";

export default function BenefitImages() {
  return (
    <section className="grid grid-cols-2 w-full max-w-md sm:max-w-md mx-auto gap-0">
      {/* Atas kiri */}
      <motion.figure variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}>
        <img src={benefit1} alt="Person 1" loading="lazy" className="w-full aspect-square object-cover shadow-lg dark:shadow-blue-500/30 rounded-br-[80px] rounded-tl-[80px]" />
      </motion.figure>

      {/* Atas kanan */}
      <motion.figure variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}>
        <img src={benefit2} alt="Person 2" loading="lazy" className="w-full aspect-square object-cover shadow-lg dark:shadow-blue-500/30 rounded-bl-[80px] rounded-tr-[80px]" />
      </motion.figure>

      {/* Bawah kiri */}
      <motion.figure variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}>
        <img src={benefit3} alt="Person 3" loading="lazy" className="w-full aspect-square object-cover shadow-lg dark:shadow-blue-500/30 rounded-tr-[80px] rounded-bl-[80px]" />
      </motion.figure>

      {/* Bawah kanan */}
      <motion.figure variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}>
        <img src={benefit4} alt="Person 4" loading="lazy" className="w-full aspect-square object-cover shadow-lg dark:shadow-blue-500/30 rounded-tl-[80px] rounded-br-[80px]" />
      </motion.figure>
    </section>
  );
}

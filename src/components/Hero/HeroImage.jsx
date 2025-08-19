import { motion } from "framer-motion";
import heroImage from "/assets/hero.webp";

export default function HeroImage({ fadeRight }) {
  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeRight} viewport={{ once: false, amount: 0.4 }} className="flex justify-center lg:justify-end">
      <img
        src={heroImage}
        alt="Hero Illustration"
        loading="lazy"
        width="600"
        height="400"
        className="max-w-xs px-2 md:max-w-lg lg:max-w-lg rounded-xl shadow-lg
                   shadow-blue-200/40 dark:shadow-blue-500/30"
      />
    </motion.div>
  );
}

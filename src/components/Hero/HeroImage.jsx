import { motion } from "framer-motion";

export default function HeroImage({ fadeRight }) {
  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeRight} viewport={{ once: false, amount: 0.4 }} className="flex justify-center lg:justify-end">
      <img
        src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Hero Illustration"
        className="max-w-sm px-2 md:max-w-lg lg:max-w-lg rounded-xl shadow-lg
                   shadow-blue-200/40 dark:shadow-blue-500/30"
      />
    </motion.div>
  );
}

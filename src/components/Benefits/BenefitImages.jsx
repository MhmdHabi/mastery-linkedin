import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../../utils/animation";

export default function BenefitImages() {
  return (
    <div className="grid grid-cols-2 w-full max-w-md sm:max-w-md mx-auto gap-0">
      {/* Atas kiri */}
      <motion.img
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Person 1"
        className="w-full aspect-square object-cover shadow-lg dark:shadow-blue-500/30 rounded-br-[80px] rounded-tl-[80px]"
      />

      {/* Atas kanan */}
      <motion.img
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Person 2"
        className="w-full aspect-square object-cover shadow-lg dark:shadow-blue-500/30 rounded-bl-[80px] rounded-tr-[80px]"
      />

      {/* Bawah kiri */}
      <motion.img
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Person 3"
        className="w-full aspect-square object-cover shadow-lg dark:shadow-blue-500/30 rounded-tr-[80px] rounded-bl-[80px]"
      />

      {/* Bawah kanan */}
      <motion.img
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Person 4"
        className="w-full aspect-square object-cover shadow-lg dark:shadow-blue-500/30 rounded-tl-[80px] rounded-br-[80px]"
      />
    </div>
  );
}

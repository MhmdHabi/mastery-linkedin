import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeDown, fadeUp } from "../../utils/animation";

export default function AboutImage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Image 1 - kiri (mobile: atas) */}
      <motion.div variants={fadeLeft} className="flex justify-center items-center order-1 md:order-none">
        <img
          src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=500"
          alt="LinkedIn Workshop"
          className="h-56 md:h-64 w-full max-w-full rounded-xl object-cover shadow-md dark:shadow-blue-500/20"
        />
      </motion.div>

      {/* Image 2 & 3 - tengah */}
      <div className="flex flex-row md:flex-col gap-3 order-2 md:order-none md:h-[30rem] w-full overflow-hidden">
        <motion.img
          variants={fadeDown}
          src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=500"
          alt="Career Coaching"
          className="flex-1 basis-1/2 min-w-0 h-40 md:flex-1 md:w-full rounded-xl object-cover shadow-md dark:shadow-blue-500/20"
        />
        <motion.img
          variants={fadeUp}
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500"
          alt="Networking"
          className="flex-1 basis-1/2 min-w-0 h-40 md:flex-1 md:w-full rounded-xl object-cover shadow-md dark:shadow-blue-500/20"
        />
      </div>

      {/* Image 4 - kanan (mobile: bawah) */}
      <motion.div variants={fadeRight} className="flex justify-center items-center order-3 md:order-none">
        <img
          src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=500"
          alt="Collaboration"
          className="h-56 md:h-64 w-full max-w-full rounded-xl object-cover shadow-md dark:shadow-blue-500/20"
        />
      </motion.div>
    </div>
  );
}

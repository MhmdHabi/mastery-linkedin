import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeDown, fadeUp } from "../../utils/animation";
import about1 from "/assets/hero.webp";
import about2 from "/assets/about2.jpeg";
import about3 from "/assets/about3.jpeg";
import about4 from "/assets/about4.jpeg";

export default function AboutImage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Image 1 - kiri (mobile: atas) */}
      <motion.figure variants={fadeLeft} className="flex justify-center items-center order-1 md:order-none">
        <img src={about1} alt="LinkedIn Workshop" loading="lazy" className="h-56 md:h-64 w-full max-w-full rounded-xl object-cover shadow-md dark:shadow-blue-500/20" />
      </motion.figure>

      {/* Image 2 & 3 - tengah */}
      <figure className="flex flex-row md:flex-col gap-3 order-2 md:order-none md:h-[30rem] w-full overflow-hidden">
        <motion.img variants={fadeDown} src={about2} alt="Career Coaching" loading="lazy" className="flex-1 basis-1/2 min-w-0 h-40 md:flex-1 md:w-full rounded-xl object-cover shadow-md dark:shadow-blue-500/20" />
        <motion.img variants={fadeUp} src={about3} alt="Networking" loading="lazy" className="flex-1 basis-1/2 min-w-0 h-40 md:flex-1 md:w-full rounded-xl object-cover shadow-md dark:shadow-blue-500/20" />
      </figure>

      {/* Image 4 - kanan (mobile: bawah) */}
      <motion.figure variants={fadeRight} className="flex justify-center items-center order-3 md:order-none">
        <img src={about4} alt="Collaboration" loading="lazy" className="h-56 md:h-64 w-full max-w-full rounded-xl object-cover shadow-md dark:shadow-blue-500/20" />
      </motion.figure>
    </section>
  );
}

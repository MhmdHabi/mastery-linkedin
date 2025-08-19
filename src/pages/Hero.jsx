import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { fadeRight } from "../utils/animation";
import HeroContent from "../components/Hero/HeroContent";
import HeroImage from "../components/Hero/HeroImage";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.3,
  });

  const headerY = useTransform(smooth, [0, 1], [0, -12]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white text-slate-900
                 dark:bg-black dark:text-white transition-colors min-h-screen"
    >
      {/* Background Aksen */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Light */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:hidden" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl dark:hidden" />
        {/* Dark */}
        <div className="hidden dark:block absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="hidden dark:block absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12
                   items-center px-6 py-14 md:py-16 mt-12 relative z-10"
      >
        <HeroContent headerY={headerY} />
        <HeroImage fadeRight={fadeRight} />
      </div>

      {/* Wave */}
      <svg className="pointer-events-none -mb-px block h-12 w-full text-white dark:text-black" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor" aria-hidden>
        <path d="M0 54h1440V0c-120 25-240 38-360 38S720 0 540 0 240 25 120 38 0 38 0 38v16z" />
      </svg>
    </section>
  );
}

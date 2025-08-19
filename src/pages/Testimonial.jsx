import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Quote } from "lucide-react";
import TestimonialCard from "../components/Testimonial/TestimonialCard";
import testimonials from "../utils/TestimonialData";
import { fadeDown } from "../utils/animation";

export default function Testimonial() {
  const loopTestimonials = [...testimonials, ...testimonials];

  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const speed = useRef(0.6);

  useAnimationFrame(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth / 2;
      let currentX = x.get();

      currentX -= speed.current;
      if (Math.abs(currentX) >= scrollWidth) {
        currentX = 0;
      }
      x.set(currentX);
    }
  });

  const handleMouseEnter = () => (speed.current = 0);
  const handleMouseLeave = () => (speed.current = 0.6);

  return (
    <section id="testimonial" className="py-10 mt-10 px-6 bg-gray-50 dark:bg-black transition-colors duration-500">
      {/* Header */}
      <motion.div variants={fadeDown} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="container mx-auto max-w-6xl text-center mb-12">
        <span className="inline-flex items-center px-4 py-1.5 text-sm rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mb-4">
          <Quote className="w-4 h-4 mr-2" /> Testimoni Alumni
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Apa Kata <span className="font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Alumni</span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Cerita nyata dan pengalaman dari para alumni setelah mengikuti kelas ini.</p>
      </motion.div>

      {/* Slider otomatis */}
      <div className="overflow-hidden relative max-w-6xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <motion.div ref={containerRef} className="flex space-x-6" style={{ x }}>
          {loopTestimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

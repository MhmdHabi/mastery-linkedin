import { motion } from "framer-motion";
import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="w-80 flex-shrink-0 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-blue-200 dark:border-transparent shadow-sm dark:shadow-md hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Foto user */}
      <header className="flex items-center mb-3">
        <img src={testimonial.photo} alt={`Foto ${testimonial.name}`} loading="lazy" className="w-12 h-12 rounded-full object-cover mr-3 border border-blue-300 dark:border-gray-700" />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </header>

      {/* Feedback */}
      <blockquote className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">“{testimonial.feedback}”</blockquote>

      {/* Info tambahan */}
      <footer className="text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
        <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500 dark:text-blue-400" />
          {testimonial.createdAt}
        </p>
        <p className="flex items-center gap-2">
          <FaGraduationCap className="text-blue-500 dark:text-blue-400" />
          {testimonial.batch}
        </p>
      </footer>
    </motion.article>
  );
}

import { motion, LazyMotion, domAnimation } from "framer-motion";
import { fadeUp } from "../utils/animation";
import FAQAccordion from "../components/Faq/FAQAccordion";
import CTAButtons from "../components/faq/CTAButtons";
export default function CTA() {
  return (
    <section
      id="register"
      aria-labelledby="cta-heading"
      role="region"
      className="relative py-20 text-center
                 bg-white text-slate-900
                 dark:bg-black dark:text-slate-100"
    >
      <LazyMotion features={domAnimation}>
        {/* FAQ Section */}
        <FAQAccordion />

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-2xl mx-auto px-6">
          <p className="text-lg mb-8 text-slate-600 dark:text-slate-300">
            Bergabung bersama ratusan alumni yang sudah meningkatkan visibilitas, memperluas jaringan profesional, dan lebih percaya diri tampil di <strong className="text-blue-700 dark:text-cyan-300">LinkedIn</strong> 🚀
          </p>

          {/* CTA Buttons */}
          <CTAButtons />
        </motion.div>
      </LazyMotion>
    </section>
  );
}

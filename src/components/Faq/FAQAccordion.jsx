import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import faqs from "../../utils/faqData";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="max-w-4xl mx-auto px-6 py-14">
      <h2
        id="faq-heading"
        className="text-2xl md:text-3xl font-bold mb-8 text-center
                   text-blue-700 dark:text-blue-400"
      >
        Pertanyaan yang Sering Ditanyakan
      </h2>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border border-blue-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left
                         font-medium text-slate-800 dark:text-slate-200
                         hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {item.question}
              <FiChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${openIndex === i ? "rotate-180 text-blue-600 dark:text-cyan-400" : ""}`} />
            </button>
            <motion.div initial={false} animate={{ height: openIndex === i ? "auto" : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden px-4">
              <p className="py-3 text-slate-600 dark:text-slate-300">{item.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

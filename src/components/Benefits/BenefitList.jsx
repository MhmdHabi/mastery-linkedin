import { motion } from "framer-motion";
import BenefitItem from "./BenefitItem";
import { Target, UserCheck, TrendingUp, Star } from "lucide-react";
import { fadeUp } from "../../utils/animation";

const benefits = [
  {
    icon: <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Strategi Profil Terbukti",
    desc: "Optimalkan profil LinkedIn agar terlihat profesional dan dilirik perekrut.",
  },
  {
    icon: <UserCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Personal Branding Konsisten",
    desc: "Bangun citra profesional yang kuat di mata perusahaan maupun publik.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Taktik Networking",
    desc: "Kuasai strategi membangun koneksi berkualitas untuk memperluas peluang karier.",
  },
  {
    icon: <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Peningkatan Visibilitas",
    desc: "Tingkatkan eksposur melalui aktivitas & konten yang tepat di LinkedIn.",
  },
];

export default function BenefitList() {
  return (
    <ul className="mt-8 space-y-6">
      {benefits.map((b, i) => (
        <motion.li
          key={i}
          variants={fadeUp}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="list-none" // supaya tidak muncul bullet
        >
          <BenefitItem {...b} />
        </motion.li>
      ))}
    </ul>
  );
}

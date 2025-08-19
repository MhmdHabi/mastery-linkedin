import { Link } from "react-scroll";
import { navItems } from "../constants/NavItems";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -70,
    spy: true,
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-700 dark:text-gray-300 mt-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">LinkedIn Mastery</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Bangun personal branding yang kuat bersama kami 🚀</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                {...linkProps}
                className="relative cursor-pointer text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-white/10 transition" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-sky-100 dark:hover:bg-white/10 transition" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} LinkedIn Mastery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

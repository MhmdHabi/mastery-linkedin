import { Link } from "react-router-dom";

export default function CTAButtons() {
  return (
    <div className="flex  justify-center gap-4">
      <Link
        to="/daftar"
        className="inline-block px-8 py-3 rounded-xl
                   bg-blue-600 text-white font-semibold shadow-md
                   hover:bg-blue-700 hover:shadow-lg transition
                   focus:outline-none focus:ring-2 focus:ring-blue-300
                   dark:bg-blue-500 dark:hover:bg-blue-600 dark:shadow-blue-400/40"
      >
        Daftar Sekarang
      </Link>
    </div>
  );
}

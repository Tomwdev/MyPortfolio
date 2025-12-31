import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-100/80 dark:bg-black/50 backdrop-blur-md border-b border-slate-300 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-evenly items-center">
          <Link href="/" className="text-xl font-bold font-mono text-slate-900 dark:text-white transition-colors duration-300">
            Thomas Woodland
          </Link>
          <div>
          <Link href="https://github.com/tomwdev" target="_blank" rel="noopener noreferrer" className="text-xl font-bold font-mono text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-600 transition-colors duration-300">
            (Tomwdev<FaGithub className="inline ml-2 align-text-top-[0.2em]" />)
          </Link>
          </div>
          <ThemeToggle className="flex ml-auto" />
        </div>
      </div>
    </nav>
  );
}
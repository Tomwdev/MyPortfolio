import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 b-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <Link href="/" className="text-xl font-bold font-mono text-white">
            Thomas Woodland&nbsp;
          </Link>
          <div>
          <Link href="https://github.com/tomwdev" target="_blank" rel="noopener noreferrer" className="text-xl font-bold font-mono text-gray hover:text-emerald-600 transition-colors">
            (Tomwdev<FaGithub className="inline ml-2 align-text-top-[0.2em]" />)
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
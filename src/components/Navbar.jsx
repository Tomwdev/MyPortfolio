import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 b-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold font-mono text-white">
            Thomas Woodland (Tomwdev)
          </Link>
          <ul className="flex gap-8">
            <NavLink href="#about" label="About" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
          </ul>

        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-sm text-gray-300 transition-colors hover:text-white"
      >
        {label}
      </Link>
    </li>
  );
}
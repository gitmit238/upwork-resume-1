import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#030712]/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        {/* Logo */}

        <div className="text-2xl font-bold tracking-wider text-white">

          <span className="text-cyan-400">J</span>Smith

        </div>

        {/* Menu */}

        <nav className="hidden lg:flex gap-10 text-slate-300">

          <a href="#about" className="hover:text-cyan-400 duration-300">
            About
          </a>

          <a href="#experience" className="hover:text-cyan-400 duration-300">
            Experience
          </a>

          <a href="#skills" className="hover:text-cyan-400 duration-300">
            Skills
          </a>

          <a href="#education" className="hover:text-cyan-400 duration-300">
            Education
          </a>

          <a href="#contact" className="hover:text-cyan-400 duration-300">
            Contact
          </a>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-5">

          <button className="hidden lg:block bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold transition">

            Download CV

          </button>

          <button className="lg:hidden text-white">

            <Menu size={28} />

          </button>

        </div>

      </div>

    </header>
  );
}
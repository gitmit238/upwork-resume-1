import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#030712]/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

        <h1 className="text-2xl text-white font-bold">
          <span className="text-cyan-400">J</span>Smith
        </h1>

        <nav className="hidden lg:flex gap-8">
          ...
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>

      {open && (
        <div className="lg:hidden text-white bg-slate-900 border-t border-slate-800">
          <a href="#about" className="block  px-6 py-4">About</a>
          <a href="#experience" className="block px-6 py-4">Experience</a>
          <a href="#skills" className="block px-6 py-4">Skills</a>
          <a href="#education" className="block px-6 py-4">Education</a>
          <a href="#contact" className="block px-6 py-4">Contact</a>
        </div>
      )}

    </header>
  );
}
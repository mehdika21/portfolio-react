import React from "react";
import OnePieceSVG from "./OnePieceSVG";

const Navbar: React.FC = () => (
  <header id="nav" className="bg-[#1a1a1a] sticky top-0 z-50 backdrop-blur border-b border-white/5">
    <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      {/* Left side - Straw Hat Jolly Roger */}
      <div className="flex items-center gap-3">
        <OnePieceSVG />
        <span className="font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-straw via-gold to-teal glow-mk">
          MK
        </span>
      </div>
      {/* Center - Navigation menu */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#projects" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">Projects</a>
        <a href="#skills" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">Skills</a>
        <a href="#contact" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">Contact</a>
      </div>
      {/* Right side - Language selector */}
      <div className="flex items-center gap-3 text-sm">
        <span id="lang-en" className="text-gold font-semibold">EN</span>
        <span className="text-slate-500">|</span>
        <span id="lang-fr" className="text-slate-400 hover:text-teal cursor-pointer transition-colors font-semibold">FR</span>
      </div>
      {/* Mobile menu button */}
      <button className="md:hidden p-2 rounded-lg border border-white/10 hover:border-teal">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  </header>
);

export default Navbar;

import React from "react";
import OnePieceSVG from "./OnePieceSVG";
import { useI18n } from "../i18n/I18n";

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useI18n();

  return (
    <header id="nav" className="bg-[#1a1a1a] sticky top-0 z-50 backdrop-blur border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <OnePieceSVG />
          <span className="font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-straw via-gold to-teal glow-mk">
            MK
          </span>
        </div>

        {/* Center menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">
            {t('nav.projects')}
          </a>
          <a href="#skills" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">
            {t('nav.skills')}
          </a>
          <a href="#contact" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">
            {t('nav.contact')}
          </a>
        </div>

        {/* Right: EN/FR toggle */}
        <div className="flex items-center gap-3 text-sm">
          <button
            aria-pressed={lang === 'fr'}
            onClick={() => setLang('fr')}
            className={`font-semibold transition-colors ${lang === 'fr' ? 'text-gold' : 'text-slate-400 hover:text-teal'}`}
          >
            FR
          </button>
          <span className="text-slate-500">|</span>
          <button
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
            className={`font-semibold transition-colors ${lang === 'en' ? 'text-gold' : 'text-slate-400 hover:text-teal'}`}
          >
            EN
          </button>
        </div>

        {/* Mobile menu button (not wired to drawer for brevity) */}
        <button className="md:hidden p-2 rounded-lg border border-white/10 hover:border-teal" aria-label="Open menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

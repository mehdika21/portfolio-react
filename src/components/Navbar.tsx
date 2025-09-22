import React from "react";
import OnePieceSVG from "./OnePieceSVG";
import { useI18n } from "../i18n/I18n";
import cv from "../assets/cv_stage1.pdf";

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useI18n();

  return (
    <header id="nav" className="bg-[#1a1a1a] sticky top-0 z-50 backdrop-blur border-b border-white/5">
      {/* 'relative' lets us absolutely center the menu */}
      <nav className="relative max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <OnePieceSVG />
          <span className="font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-straw via-gold to-teal glow-mk">
            MK
          </span>
        </div>

        {/* CENTER: Nav links—perfectly centered on desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          <a href="#projects" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">
            {t("nav.projects")}
          </a>
          <a href="#skills" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">
            {t("nav.skills")}
          </a>
          <a href="#contact" className="text-sm text-slate-300 hover:text-teal transition-colors font-medium">
            {t("nav.contact")}
          </a>
        </div>

        {/* RIGHT: CV (desktop), language, CV (mobile icon), hamburger */}
        <div className="flex items-center gap-3">
          {/* CV button (desktop) */}
          <a
            href={cv}
            download
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-teal/60 text-slate-200 text-sm transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1z" />
              <path d="M5 18a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z" />
            </svg>

            {lang === 'fr' ? 'Télécharger le CV' : 'Download CV'}

          </a>

          {/* Language toggle */}
          <div className="flex items-center gap-3 text-sm">
            <button
              aria-pressed={lang === "fr"}
              onClick={() => setLang("fr")}
              className={`font-semibold transition-colors ${lang === "fr" ? "text-gold" : "text-slate-400 hover:text-teal"}`}
            >
              FR
            </button>
            <span className="text-slate-500">|</span>
            <button
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
              className={`font-semibold transition-colors ${lang === "en" ? "text-gold" : "text-slate-400 hover:text-teal"}`}
            >
              EN
            </button>
          </div>

          {/* CV icon (mobile) */}
          <a
            href={cv}
            download
            className="md:hidden p-2 rounded-lg border border-white/10 hover:border-teal/60"
            aria-label="Download CV"
            title="Download CV"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 3.5L19.5 9H14V3.5z" />
            </svg>
          </a>

          {/* Hamburger (mobile) */}
          <button className="md:hidden p-2 rounded-lg border border-white/10 hover:border-teal" aria-label="Open menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

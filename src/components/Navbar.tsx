import React, { useEffect, useState } from "react";
// import OnePieceSVG from "./OnePieceSVG";
import onePiece from "../assets/images/strawhat.png";
import { useI18n } from "../i18n/I18n";
import cv from "../assets/MehdiKAIDI.pdf";

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close on Esc and lock body scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileOpen]);

  const cvLabel = lang === "fr" ? "Télécharger le CV" : "Download CV";

  return (
    <header id="nav" className="bg-[#1a1a1a] sticky top-0 z-50 backdrop-blur border-b border-white/5">
      <nav className="relative max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={onePiece}
            alt="onePieceLogo"
            className="w-8 h-8 object-contain relative top-[2px]"
          />
          <span className="font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-straw via-gold to-teal glow-mk">
            MK
          </span>
        </div>



        {/* CENTER (desktop): links */}
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

        {/* RIGHT: CV (desktop) + language + hamburger */}
        <div className="flex items-center gap-3">
          {/* CV button (desktop) */}
          <a
            href={cv}
            download
            className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-teal/60 text-slate-200 text-sm transition-colors"
          >
            {/* download icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1z" />
              <path d="M5 18a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z" />
            </svg>
            {cvLabel}
          </a>

          {/* Language toggle */}
          <div className="hidden sm:flex items-center gap-3 text-sm">
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

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden p-2 rounded-lg border border-white/10 hover:border-teal"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed z-50 top-[64px] left-0 right-0 mx-3 rounded-2xl border border-white/10 bg-[#222]/95 shadow-xl transition-all duration-200 ${mobileOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
          }`}
      >
        <div className="p-4 flex flex-col gap-2">
          <a
            href="#projects"
            className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.projects")}
          </a>
          <a
            href="#skills"
            className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.skills")}
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.contact")}
          </a>

          <hr className="my-2 border-white/10" />

          <div className="flex items-center justify-between gap-3 pt-2">
            <a
              href={cv}
              download
              className="inline-flex items-center gap-1 h-9 px-4 rounded-[8px] bg-yellow-600 text-slate-900 text-xs font-medium hover:brightness-95 whitespace-nowrap"
              onClick={() => setMobileOpen(false)}
              aria-label={cvLabel}
              title={cvLabel}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1z" />
                <path d="M5 18a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z" />
              </svg>
              {cvLabel}
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setLang("fr");
                  setMobileOpen(false);
                }}
                className={`font-semibold ${lang === "fr" ? "text-gold" : "text-slate-400 hover:text-teal"}`}
              >
                FR
              </button>
              <span className="text-slate-500">|</span>
              <button
                onClick={() => {
                  setLang("en");
                  setMobileOpen(false);
                }}
                className={`font-semibold ${lang === "en" ? "text-gold" : "text-slate-400 hover:text-teal"}`}
              >
                EN
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
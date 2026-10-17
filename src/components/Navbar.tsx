
import React, { useEffect, useState } from "react";
import onePiece from "../assets/images/strawhat.png";
import { useI18n } from "../i18n/I18n";
import cv from "../assets/MehdiKAIDI.pdf";

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ];

  // Close mobile menu on Escape
  // and lock scrolling when it is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    document.body.classList.toggle(
      "overflow-hidden",
      mobileOpen
    );

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileOpen]);

  const cvLabel =
    lang === "fr" ? "Télécharger le CV" : "Download CV";

  const changeLanguage = (language: "fr" | "en") => {
    setLang(language);
    setMobileOpen(false);
  };

  const languageButtonClass = (language: "fr" | "en") =>
    `
      !p-0 !border-0 !bg-transparent
      !rounded-none font-semibold
      transition-colors
      ${
        lang === language
          ? "text-gold"
          : "text-slate-400 hover:text-teal"
      }
    `;

  return (
    <header
      id="nav"
      className="
        bg-[#1a1a1a]
        sticky top-0 z-50
        border-b border-white/5
      "
    >
      <nav
        className="
          relative z-50
          max-w-6xl mx-auto
          px-4 py-4
          flex items-center justify-between gap-4
        "
      >
        {/* LEFT: Logo */}
        <a
          href="#"
          className="flex items-center gap-2 shrink-0"
          aria-label="Back to top"
        >
          <img
            src={onePiece}
            alt="Straw Hat Logo"
            className="w-8 h-8 object-contain relative top-[2px]"
          />

          <span
            className="
              font-extrabold text-xl sm:text-2xl
              text-transparent bg-clip-text
              bg-gradient-to-r from-straw via-gold to-teal
              glow-mk
            "
          >
            MK
          </span>
        </a>

        {/* CENTER: Desktop navigation */}
        <div className="hidden md:flex items-center gap-3 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-sm text-slate-300
                hover:text-teal
                transition-colors
                font-medium whitespace-nowrap
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* RIGHT: CV + language + mobile button */}
        <div className="flex items-center gap-3 shrink-0">

          {/* CV Download - Desktop */}
          <a
            href={cv}
            download
            className="
              hidden md:inline-flex
              items-center gap-2
              px-3 py-1.5
              rounded-lg
              border border-white/10
              hover:border-teal/60
              text-slate-200 text-sm
              transition-colors whitespace-nowrap
            "
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1z" />
              <path d="M5 18a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z" />
            </svg>

            {cvLabel}
          </a>

          {/* Language selector - Desktop */}
          <div className="hidden md:flex items-center gap-3 text-sm">

            <button
              type="button"
              id="lang-fr"
              aria-pressed={lang === "fr"}
              onClick={() => changeLanguage("fr")}
              className={languageButtonClass("fr")}
            >
              FR
            </button>

            <span className="text-slate-500">|</span>

            <button
              type="button"
              id="lang-en"
              aria-pressed={lang === "en"}
              onClick={() => changeLanguage("en")}
              className={languageButtonClass("en")}
            >
              EN
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="
              md:hidden
              p-2 rounded-lg
              border border-white/10
              hover:border-teal
              transition-colors
            "
            aria-label={
              mobileOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              // Close icon
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="
            fixed inset-0 z-40
            bg-slate-950/60
            backdrop-blur-sm
            md:hidden
          "
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile navigation panel */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={`
          md:hidden
          absolute z-50
          top-full left-3 right-3
          rounded-2xl
          border border-white/10
          bg-[#222222]
          shadow-xl
          transition-all duration-200
          ${
            mobileOpen
              ? "visible opacity-100 translate-y-0"
              : "invisible pointer-events-none opacity-0 -translate-y-2"
          }
        `}
      >
        <div className="p-4 flex flex-col gap-2">

          {/* Navigation links */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                px-3 py-2
                rounded-lg text-slate-200
                hover:bg-white/5
                hover:text-teal
                transition-colors
              "
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}

          <hr className="my-2 border-white/10" />

          {/* CV + Language */}
          <div className="flex items-center justify-between gap-3 pt-2">

            {/* Mobile CV button */}
            <a
              href={cv}
              download
              className="
                inline-flex items-center gap-2
                h-9 px-4
                rounded-lg
                bg-yellow-600
                text-slate-900
                text-xs font-medium
                hover:brightness-95
                whitespace-nowrap
              "
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1z" />
                <path d="M5 18a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z" />
              </svg>

              {cvLabel}
            </a>

            {/* Mobile language selector */}
            <div className="flex items-center gap-3 text-sm">

              <button
                type="button"
                onClick={() => changeLanguage("fr")}
                aria-pressed={lang === "fr"}
                tabIndex={mobileOpen ? 0 : -1}
                className={languageButtonClass("fr")}
              >
                FR
              </button>

              <span className="text-slate-500">|</span>

              <button
                type="button"
                onClick={() => changeLanguage("en")}
                aria-pressed={lang === "en"}
                tabIndex={mobileOpen ? 0 : -1}
                className={languageButtonClass("en")}
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

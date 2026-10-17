
import React, { useState } from "react";
import bureauVeritasLogo from "../assets/images/logos/bv.png";
import { translations, type Lang, type TKey } from "../i18n/translations";

type ExperienceProps = {
  language: Lang;
};

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const t = (key: TKey) => translations[language][key];

  const technologies = [
    "Python",
    "PyQt5",
    "PyQt6",
    "PySide6",
    t("experience.guiTesting"),
    t("experience.testAutomation"),
  ];

  const details = [
    t("experience.detail.1"),
    t("experience.detail.2"),
    t("experience.detail.3"),
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20"
    >
      {/* Section header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          {t("experience.title")}
        </h2>
        <p className="text-slate-400 text-sm">
          {t("experience.subtitle")}
        </p>
      </div>

      {/* Main experience card */}
      <article
        className="
          overflow-hidden rounded-2xl
          border border-white/10
          bg-[#1b1b1b]/95
          shadow-lg
          transition-all duration-300
          hover:border-white/15
        "
      >
        {/* Top card */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#D4AF37]" />

          <div className="p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

              {/* Left side */}
              <div className="pl-2 flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                  {t("experience.internship")}
                </div>

                <h3 className="text-2xl md:text-[2rem] font-semibold leading-tight text-white">
                  {t("experience.role")}
                </h3>

                <p className="text-[#25b7c4] text-xl font-medium mt-1">
                  {t("experience.specialty")}
                </p>

                <p className="text-white font-semibold text-lg mt-4">
                  Bureau Veritas Marine & Offshore
                </p>

                <div className="flex items-center gap-2 text-slate-400 mt-2">
                  <svg
                    className="w-4 h-4 text-[#25b7c4] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <span>{t("experience.location")}</span>
                </div>
              </div>

              {/* Right side */}
              <div className="flex md:flex-col items-start md:items-end justify-between gap-4 shrink-0">

                {/* Date */}
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-xl border border-white/10
                    bg-[#202020]
                    px-4 py-3 text-sm font-medium text-white
                  "
                >
                  <svg
                    className="w-4 h-4 text-[#D4AF37] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                  {t("experience.date")}
                </div>

                {/* Bureau Veritas logo */}
                <div
                  className="
                    w-24 h-24 md:w-28 md:h-28
                    rounded-2xl bg-white
                    flex items-center justify-center
                    shadow-md overflow-hidden
                    p-1 shrink-0
                  "
                >
                  <img
                    src={bureauVeritasLogo}
                    alt="Bureau Veritas Logo"
                    className="w-full h-full object-contain scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Show / Hide details button */}
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls="experience-details"
                className="
                  inline-flex items-center gap-2
                  rounded-lg px-4 py-2
                  text-sm font-medium
                  bg-white/5 text-slate-200
                  border border-white/10
                  hover:bg-white/10 transition-colors
                  focus-visible:outline-2
                  focus-visible:outline-[#25b7c4]
                "
              >
                {isOpen
                  ? t("experience.hideDetails")
                  : t("experience.showDetails")}

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.167l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Expandable details */}
        <div
          id="experience-details"
          aria-hidden={!isOpen}
          className={`
            grid overflow-hidden
            transition-[grid-template-rows,opacity]
            duration-500 ease-in-out
            ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-white/10 px-6 md:px-7 pb-7 pt-6">

              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">

                {/* Overview */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#25b7c4] mb-4">
                    {t("experience.overview")}
                  </h4>

                  <p className="text-slate-300 leading-relaxed">
                    {t("experience.overview.p1")}
                  </p>

                  <p className="text-slate-400 leading-relaxed mt-4">
                    {t("experience.overview.p2")}
                  </p>
                </div>

                {/* Contributions */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#25b7c4] mb-4">
                    {t("experience.contributions")}
                  </h4>

                  <ul className="space-y-4">
                    {details.map((item, index) => (
                      <li key={index} className="flex gap-4">
                        <div
                          className="
                            mt-1 flex h-7 w-7 shrink-0
                            items-center justify-center
                            rounded-lg bg-[#25b7c4]/10
                            border border-[#25b7c4]/20
                            text-[#25b7c4] text-xs font-semibold
                          "
                        >
                          {index + 1}
                        </div>

                        <p className="text-slate-300 leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
                  {t("experience.technologies")}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1.5 rounded-lg
                        text-sm text-slate-300
                        bg-white/5 border border-white/10
                        hover:border-[#25b7c4]/40
                        hover:text-[#25b7c4]
                        transition-colors
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Experience;

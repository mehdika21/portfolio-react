import React, { useState } from "react";
import bureauVeritasLogo from "../assets/images/logos/bv.png";

const technologies = [
  "Python",
  "PyQt5",
  "PyQt6",
  "PySide6",
  "GUI Testing",
  "Test Automation",
];

const details = [
  "Designed and developed a Python-based testing framework to automate graphical interface testing for an internal business application.",
  "Developed automated tests covering widgets, signals/slots, and user interaction workflows.",
  "Created reusable testing components and contributed to improving software testing practices and maintainability.",
];

const Experience: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <p className="text-slate-400 text-sm">
          Professional experience and internship work.
        </p>
      </div>

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
        {/* TOP CARD */}
        <div className="relative">
          {/* left accent line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#D4AF37]" />

          <div className="p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* LEFT SIDE */}
              <div className="pl-2">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  Final-Year Internship
                </div>

                <h3 className="text-2xl md:text-[2rem] font-semibold leading-tight text-white">
                  Software Development Intern
                </h3>

                <p className="text-[#25b7c4] text-xl font-medium mt-1">
                  GUI Test Automation
                </p>

                <p className="text-white font-semibold text-lg mt-4">
                  Bureau Veritas Marine & Offshore
                </p>

                <div className="flex items-center gap-2 text-slate-400 mt-2">
                  <svg
                    className="w-4 h-4 text-[#25b7c4]"
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
                  <span>Nantes, France</span>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex md:flex-col items-start md:items-end justify-between gap-4">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-xl border border-white/10
                    bg-[#202020]
                    px-4 py-3 text-sm font-medium text-white
                  "
                >
                  <svg
                    className="w-4 h-4 text-[#D4AF37]"
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
                  February – August 2026
                </div>

                {/* BV LOGO BOX */}
                <div
                className="
                    w-24 h-24 md:w-28 md:h-28
                    rounded-2xl bg-white
                    flex items-center justify-center
                    shadow-md overflow-hidden
                    p-1
                    shrink-0
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

            {/* Toggle button */}
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="
                  inline-flex items-center gap-2
                  rounded-lg px-4 py-2
                  text-sm font-medium
                  bg-white/5 text-slate-200
                  border border-white/10
                  hover:bg-white/10 transition-colors
                "
              >
                {isOpen ? "Hide details" : "Show details"}
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

        {/* EXPANDABLE DETAILS */}
        <div
          className={`
            transition-all duration-500 ease-in-out overflow-hidden
            ${isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="border-t border-white/10 px-6 md:px-7 pb-7 pt-6">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
              {/* LEFT */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#25b7c4] mb-4">
                  Overview
                </h4>

                <p className="text-slate-300 leading-relaxed">
                  During my final-year internship at Bureau Veritas Marine &
                  Offshore, I contributed to the development of a Python-based
                  automated testing framework for graphical user interfaces.
                </p>

                <p className="text-slate-400 leading-relaxed mt-4">
                  The work focused on improving test reliability, reusability,
                  and software quality for an internal business application
                  built with Qt technologies.
                </p>
              </div>

              {/* RIGHT */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#25b7c4] mb-4">
                  Key Contributions
                </h4>

                <ul className="space-y-4">
                  {details.map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <div
                        className="
                          mt-1 flex h-7 w-7 shrink-0 items-center justify-center
                          rounded-lg bg-[#25b7c4]/10
                          border border-[#25b7c4]/20
                          text-[#25b7c4] text-xs font-semibold
                        "
                      >
                        {index + 1}
                      </div>

                      <p className="text-slate-300 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech stack */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
                Technologies & Tools
              </h4>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1.5 rounded-lg
                      text-sm text-slate-300
                      bg-white/5 border border-white/10
                      hover:border-[#25b7c4]/40 hover:text-[#25b7c4]
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
      </article>
    </section>
  );
};

export default Experience;
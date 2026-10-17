
import React, { useEffect, useState } from "react";
import SkillCloud from "./SkillCloud";
import { translations, type Lang, type TKey } from "../i18n/translations";

type HeroProps = {
  language: Lang;
};

// Technology icons
const BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const iconPaths = [
  "javascript/javascript-original",
  "typescript/typescript-original",
  "react/react-original",
  "tailwindcss/tailwindcss-original",
  "html5/html5-original",
  "css3/css3-original",
  "nodejs/nodejs-original",
  "express/express-original",
  "mysql/mysql-original",
  "python/python-original",
  "java/java-original",
  "angularjs/angularjs-original",
  "bootstrap/bootstrap-original",
  "dotnetcore/dotnetcore-original",
  "csharp/csharp-original",
  "cplusplus/cplusplus-original",
  "c/c-original",
  "php/php-original",
  "rust/rust-original",
  "docker/docker-original",
  "pytest/pytest-original",
  "github/github-original",
  "gitlab/gitlab-original",
  "mongodb/mongodb-original",
];

const ICONS = iconPaths.map((path) => ({
  src: `${BASE}/${path}.svg`,
}));

const TYPING_MS = 40;
const DELETING_MS = 24;
const PAUSE_END_MS = 1200;
const PAUSE_START_MS = 400;

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const t = (key: TKey) => translations[language][key];

  const phrases = [
    t("hero.phrase.1"),
    t("hero.phrase.2"),
  ];

  // Restart the animation when language changes
  useEffect(() => {
    setPhraseIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [language]);

  // Typewriter animation
  useEffect(() => {
    const current = phrases[phraseIndex];

    let timeout: number;

    if (!isDeleting && charIndex < current.length) {
      timeout = window.setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, TYPING_MS);

    } else if (
      !isDeleting &&
      charIndex === current.length
    ) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_END_MS);

    } else if (isDeleting && charIndex > 0) {
      timeout = window.setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, DELETING_MS);

    } else {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex(
          (prev) => (prev + 1) % phrases.length
        );
      }, PAUSE_START_MS);
    }

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, language]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div className="space-y-6">

            <p className="uppercase tracking-[.2em] text-xs text-slate-400">
              {t("hero.tagline")}
            </p>

            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
              {t("hero.hello")}{" "}
              {t("hero.greeting")}{" "}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-teal">
                Mehdi Kaidi
              </span>
            </h1>

            {/* Typewriter Subtitle */}
            <h2 className="text-lg sm:text-xl text-slate-300 font-medium">
              {t("hero.imPassionate")}

              <span className="text-teal">
                {phrases[phraseIndex].slice(0, charIndex)}

                <span
                  className="
                    border-r-2 border-teal ml-0.5
                    inline-block h-[1em]
                    align-[-0.1em] animate-pulse
                  "
                />
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
              {t("hero.blurb")}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="
                  px-6 py-2.5 rounded-lg
                  bg-teal text-slate-950
                  font-medium
                  hover:opacity-90 transition-opacity
                "
              >
                {t("hero.cta.projects")}
              </a>

              <a
                href="#contact"
                className="
                  px-6 py-2.5 rounded-lg
                  border border-white/10
                  hover:border-teal transition-colors
                "
              >
                {t("hero.cta.contact")}
              </a>
            </div>
          </div>

          {/* Right: 3D Skills Cloud */}
          <SkillCloud icons={ICONS} />

        </div>
      </div>
    </section>
  );
};

export default Hero;

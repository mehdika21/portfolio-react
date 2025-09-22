import React, { useEffect, useState } from "react";
import SkillCloud from "./SkillCloud";
import { useI18n } from "../i18n/I18n";

const ICONS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { src: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
  { src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
];

const Hero: React.FC = () => {
  const { lang, t } = useI18n();
  const phrases = lang === 'fr'
    ? [t('hero.phrase.1'), t('hero.phrase.2')]
    : [t('hero.phrase.1'), t('hero.phrase.2')];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const TYPING_MS = 40;
  const DELETING_MS = 24;
  const PAUSE_END_MS = 1200;
  const PAUSE_START_MS = 400;

  useEffect(() => {
    setCharIndex(0);
    setIsDeleting(false);
    setPhraseIndex(0);
  }, [lang]);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: number;
    if (!isDeleting && charIndex < current.length) {
      timeout = window.setTimeout(() => setCharIndex(charIndex + 1), TYPING_MS);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_END_MS);
    } else if (isDeleting && charIndex > 0) {
      timeout = window.setTimeout(() => setCharIndex(charIndex - 1), DELETING_MS);
    } else if (isDeleting && charIndex === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, PAUSE_START_MS);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[.2em] text-xs text-slate-400">
              {t('hero.tagline')}
            </p>

            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
              {t('hero.greeting')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-teal">
                {" "}Mehdi Kaidi{" "}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl text-slate-300 font-medium">
              {t('hero.imPassionate')}
              <span className="text-teal" aria-live="polite">
                {phrases[phraseIndex].slice(0, charIndex)}
                <span className="border-r-2 border-teal ml-0.5 inline-block h-[1em] align-[-0.1em] animate-pulse">
                  &nbsp;
                </span>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
              {t('hero.blurb')}
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#projects" className="px-6 py-2.5 rounded-lg bg-teal text-slate-950 font-medium hover:opacity-90 transition-opacity">
                {t('hero.cta.projects')}
              </a>
              <a href="#contact" className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-teal transition-colors">
                {t('hero.cta.contact')}
              </a>
            </div>
          </div>

          <SkillCloud icons={ICONS} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
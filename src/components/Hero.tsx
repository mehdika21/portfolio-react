import React, { useEffect, useState } from "react";
import SkillCloud from "./SkillCloud";
import mehdiImage from "../assets/images/mehdi.jpg";

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
];

const phrases = [
  "Building clean, reliable web apps",
  "Solving complex problems",
];

const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const TYPING_MS = 40;
  const DELETING_MS = 24;
  const PAUSE_END_MS = 1200;
  const PAUSE_START_MS = 400;

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: number;

    if (!isDeleting && charIndex < current.length) {
      // typing forward
      timeout = window.setTimeout(() => setCharIndex(charIndex + 1), TYPING_MS);
    } else if (!isDeleting && charIndex === current.length) {
      // pause at the end, then start deleting
      timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_END_MS);
    } else if (isDeleting && charIndex > 0) {
      // deleting backward
      timeout = window.setTimeout(() => setCharIndex(charIndex - 1), DELETING_MS);
    } else if (isDeleting && charIndex === 0) {
      // finished deleting -> go to next phrase
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, PAUSE_START_MS);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <p className="uppercase tracking-[.2em] text-xs text-slate-400">
              Setting Sail for the Grand Line
            </p>

            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
              Hi, I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-teal">
                {" "}
                Mehdi Kaidi{" "}
              </span>
            </h1>

            {/* Typewriter subtitle */}
            <h2 className="text-lg sm:text-xl text-slate-300 font-medium">
              I'm passionate about{" "}
              <span className="text-teal" aria-live="polite">
                {phrases[phraseIndex].slice(0, charIndex)}
                <span className="border-r-2 border-teal ml-0.5 inline-block h-[1em] align-[-0.1em] animate-pulse">
                  &nbsp;
                </span>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
              I'm enthusiastic about discovering new digital technologies and
              expanding my knowledge of innovative, creative design principles.
              My curiosity drives me to continuously learn about modern
              technologies and their potential to create meaningful experiences.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-lg bg-teal text-slate-950 font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-teal transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          <SkillCloud icons={ICONS} />

          {/* Right: Photo with Creative Background (optional) */}
          {/*
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72">
              <div className="absolute inset-4 rounded-full border-4 border-white/20 opacity-30 animate-spin [animation-duration:20s] z-0"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl z-10">
                <img src={mehdiImage} alt="Mehdi Kaidi" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
              <div className="absolute top-8 left-8 w-3 h-3 bg-yellow-600 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-12 right-6 w-2 h-2 bg-yellow-600 rounded-full opacity-80 animate-bounce [animation-delay:1s]"></div>
              <div className="absolute top-20 right-12 w-1.5 h-1.5 bg-yellow-600 rounded-full opacity-50 animate-pulse [animation-delay:2s]"></div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

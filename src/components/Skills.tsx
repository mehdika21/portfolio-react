import React from "react";
import { useI18n } from "../i18n/I18n";

const Skills: React.FC = () => {
  const { t } = useI18n();
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-center mb-2">{t('skills.title')}</h2>
      <div className="grid gap-6 md:grid-cols-3 mt-8">
        <div className="skill-card p-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-lg font-semibold text-teal skill-title">{t('skills.frontend')}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="skill-pill">HTML</div>
            <div className="skill-pill">CSS</div>
            <div className="skill-pill">JavaScript</div>
            <div className="skill-pill">TypeScript</div>
            <div className="skill-pill">React</div>
            <div className="skill-pill">Angular</div>
            <div className="skill-pill">Tailwind CSS</div>
            <div className="skill-pill">Bootstrap</div>
          </div>
        </div>

        <div className="skill-card p-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-lg font-semibold text-teal skill-title">{t('skills.backend')}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="skill-pill">Node.js</div>
            <div className="skill-pill">Express</div>
            <div className="skill-pill">.NET</div>
            <div className="skill-pill">MySQL</div>
          </div>
        </div>

        <div className="skill-card p-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-lg font-semibold text-teal skill-title">{t('skills.languages')}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="skill-pill">C++</div>
            <div className="skill-pill">C</div>
            <div className="skill-pill">Java</div>
            <div className="skill-pill">Python</div>
            <div className="skill-pill">JavaScript</div>
            <div className="skill-pill">PHP</div>
            <div className="skill-pill">Bash</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

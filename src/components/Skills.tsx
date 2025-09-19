import React from "react";

const Skills: React.FC = () => (
  <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-2xl font-semibold text-center mb-2">Skills</h2>
    <div className="grid gap-6 md:grid-cols-3 mt-8">
      {/* FRONTEND */}
      <div className="skill-card p-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-lg font-semibold text-teal skill-title">Frontend</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="skill-pill">HTML</div>
          <div className="skill-pill">CSS</div>
          <div className="skill-pill">JavaScript</div>
          <div className="skill-pill">TypeScript</div>
          <div className="skill-pill">React</div>
          <div className="skill-pill">Angular.js</div>
          <div className="skill-pill">Tailwind CSS</div>
          <div className="skill-pill">Bootstrap</div>
        </div>
      </div>
      {/* BACKEND */}
      <div className="skill-card p-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-lg font-semibold text-teal skill-title">Backend</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="skill-pill">Node.js</div>
          <div className="skill-pill">Express</div>
          <div className="skill-pill">.NET</div>
          <div className="skill-pill">MySQL</div>
        </div>
      </div>
      {/* LANGUAGES */}
      <div className="skill-card p-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-lg font-semibold text-teal skill-title">Languages</span>
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

export default Skills;

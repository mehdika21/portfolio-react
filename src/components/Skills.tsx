
import React from "react";
import { useI18n } from "../i18n/I18n";

const groups = [
  {
    titleKey: "skills.languages",
    items: [
      "Python",
      "C++",
      "C",
      "Java",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Rust",
    ],
  },
  {
    titleKey: "skills.frontend",
    items: [
      "HTML",
      "CSS",
      "React",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    titleKey: "skills.backendData",
    items: [
      "Node.js",
      "Express",
      ".NET",
      "Spring Boot",
      "MySQL",
      "SQL",
    ],
  },
  {
    titleKey: "skills.toolsTesting",
    items: [
      "Git",
      "Docker",
      "GitLab",
      "Jira",
      "Qt",
      "pytest",
    ],
  },
] as const;

const Skills: React.FC = () => {
  const { t } = useI18n();

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <h2 className="text-2xl font-semibold text-center mb-2">
        {t("skills.title")}
      </h2>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {groups.map((group) => (
          <div
            key={group.titleKey}
            className="skill-card p-6"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-lg font-semibold text-teal skill-title">
                {t(group.titleKey as Parameters<typeof t>[0])}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="skill-pill"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

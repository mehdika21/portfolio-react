
import React from "react";
import { useI18n } from "../i18n/I18n";

const groups = [
  {
    titleKey: "skills.languages",
    fallbackTitle: "Languages",
    items: [
      "Python", "C++", "C", "Java",
      "JavaScript", "TypeScript", "PHP", "Rust",
    ],
  },
  {
    titleKey: "skills.frontend",
    fallbackTitle: "Frontend",
    items: [
      "HTML", "CSS", "React", "Angular",
      "Tailwind CSS", "Bootstrap",
    ],
  },
  {
    titleKey: "skills.backendData",
    fallbackTitle: "Backend & Data",
    items: [
      "Node.js", "Express", ".NET",
      "Spring Boot", "MySQL", "SQL",
      "MongoDB",
    ],
  },
  {
    titleKey: "skills.toolsTesting",
    fallbackTitle: "Tools & Testing",
    items: [
      "Git", "Docker", "GitLab",
      "Jira", "pytest",
    ],
  },
] as const;

const Skills: React.FC = () => {
  const { t } = useI18n();

  const getTitle = (
    key: (typeof groups)[number]["titleKey"],
    fallback: string
  ) => {
    const translated = t(
      key as Parameters<typeof t>[0]
    );

    return translated === key ? fallback : translated;
  };

  return (
    <section
      id="skills"
      className="w-full max-w-[1500px] mx-auto px-4 py-16"
    >
      <h2 className="text-2xl font-semibold text-center mb-2">
        {t("skills.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
        {groups.map((group) => (
          <div
            key={group.titleKey}
            className="skill-card min-w-0 p-4"
          >
            <div className="flex items-center justify-center mb-5">
              <span className="text-lg font-semibold text-teal skill-title text-center">
                {getTitle(group.titleKey, group.fallbackTitle)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="skill-pill min-w-0 px-2 py-3 text-center text-sm break-words"
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

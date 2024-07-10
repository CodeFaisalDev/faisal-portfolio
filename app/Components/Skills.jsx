import React from "react";
import dynamic from "next/dynamic";
import SkillDialog from "./SkillDialog";

// Lazy load the IconCloud component
const IconCloud = dynamic(() => import("@/components/magicui/icon-cloud"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Optionally, you can show a loading indicator
});

const dialogs = {
  ReactJs: {
    key: "ReactJs",
    name: "ReactJs",
    desc: "3 years of experience in React.js, building dynamic and responsive web applications.",
  },
  NextJs: {
    key: "NextJs",
    name: "NextJs",
    desc: "2 years of experience in Next.js, specializing in server-side rendering and static site generation.",
  },
  Python: {
    key: "Python",
    name: "Python",
    desc: "2 years of experience in Python, developing backend services and automation scripts.",
  },
  Django: {
    key: "Django",
    name: "Django",
    desc: "3 years of experience in Django, creating robust and scalable web applications.",
  },
  Api_Development: {
    key: "Api_Development",
    name: "API Development",
    desc: "2 years of experience in API Development, designing and implementing RESTful APIs.",
  },
  Postgres_Sql: {
    key: "Postgres_Sql",
    name: "PostgreSQL",
    desc: "3 years of experience in PostgreSQL, managing and optimizing relational databases.",
  },
  MySql: {
    key: "MySql",
    name: "MySQL",
    desc: "3 years of experience in MySQL, handling database operations and performance tuning.",
  },
  AI_Expert: {
    key: "AI_Expert",
    name: "AI Expert",
    desc: "2 years of experience in AI, working on machine learning models and data analysis.",
  },
};

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="z-10 md:mt-20 md:mb-32 font-rubik text-center justify-center 2xl:mt-36 max-md:mt-16 min-fit">
        <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-16">Skills</h1>
        <div className="flex flex-col-reverse justify-center items-center lg:grid md:grid-cols-2 mt-2 2xl:mt-8">
          <div className="max-md:p-5">
            <div className="grid font-bold w-full sm:text-lg 2xl:text-2xl h-full grid-cols-2 gap-2">
              {Object.entries(dialogs).map(([key, value]) => (
                <span key={key} className="mt-5 lg:mt-1 lg:mr-5 2xl:mr-10">
                  <SkillDialog name={value.name} desc={value.desc} />
                </span>
              ))}
            </div>
          </div>
          <div className="max-md:px-10">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import SkillDialog from "./SkillDialog";

const dialogs = {
  ReacrJs: {
    key: "ReacrJs",
    name: "ReacrJs",
    desc: "Lorem Ipsum is Lorem Ipsum but was LETTER",
  },
  NextJs: {
    key: "NextJs",
    name: "NextJs",
    desc: "Lorem Ipsum is Lorem Ipsum but was LETTER",
  },
  Pyhton: {
    key: "Pyhton",
    name: "Pyhton",
    desc: "Lorem Ipsum is Lorem Ipsum but was LETTER",
  },
  Django: {
    key: "Django",
    name: "Django",
    desc: "Lorem Ipsum is Lorem Ipsum but was LETTER",
  },
  "Api Development": {
    key: "Api Development",
    name: "Api Development",
    desc: "Lorem Ipsum is Lorem Ipsum but was LETTER",
  },
  "Postgress Sql": {
    key: "Postgress Sql",
    name: "Postgress Sql",
    desc: "Lorem Ipsum is Lorem Ipsum but was LETTER",
  },
  MySql: {
    key: "MySql",
    name: "MySql",
    desc: "Lorem Ipsum is Lorem Ipsum but was LETTER",
  },
  "AI Expert": {
    key: "AI Expert",
    name: "AI Expert",
    desc: "Lorem Ipsum is Lorem Ipsum but was LETTER",
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
        <div className="flex flex-col-reverse lg:grid md:grid-cols-2 mt-2 2xl:mt-8">
          <div className="max-md:p-5">
            <div className="grid font-bold w-full sm:text-xl 2xl:text-2xl h-full grid-cols-2 gap-2">
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

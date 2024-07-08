import React from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <section id="portfolio">
    <div className="h-fit max-md:mb-32 font-rubik w-[70vw]">
      <h1 className="text-center max-md:text-4xl max-md:mt-16 mb-16 text-6xl font-bold">
        My Works
      </h1>
      <section className="grid items-center justify-center gap-5 grid-rows-2 xl:grid-cols-2 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        
      </section>
    </div>
    </section>
  );
};

export default Portfolio;

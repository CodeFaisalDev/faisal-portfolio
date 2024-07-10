import React from "react";
import ProjectCard from "./ProjectCard";

const portfolios = [
  {
    name: "Shols Ecommarce Website",
    img: "/p1.png",
    git: "https://github.com/CodeFaisalDev/Ecommarce-Project",
    demo: "https://ecommarce-project.vercel.app/",
    technologies: ["logos/nextjs.jpg", "logos/sanity.jpg", "logos/react.jpg"],
  },
  {
    name: "Borge Blog Website",
    img: "/p2.png",
    git: "https://github.com/CodeFaisalDev/borge-blog",
    demo: "https://borge-blog-dev.vercel.app/",
    technologies: ["logos/nextjs.jpg", "logos/sanity.jpg", "logos/django.jpg"],
  },
  {
    name: "Sass Platform",
    img: "/p3.png",
    git: "/",
    demo: "/",
    technologies: ["logos/nextjs.jpg", "logos/prisma.jpg", "logos/python.jpg"],
  },
  {
    name: "Rest API Development",
    img: "/p4.png",
    git: "https://github.com/CodeFaisalDev/Rest-Api",
    demo: "https://github.com/CodeFaisalDev/Rest-Api",
    technologies: ["logos/python.jpg", "logos/django.jpg", "logos/postgress.jpg"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="h-fit max-md:mb-32 font-rubik w-[70vw]">
        <h1 className="text-center max-md:text-4xl max-md:mt-16 mb-16 text-6xl font-bold">
          My Works
        </h1>
        <section className="grid items-center justify-center gap-5 grid-rows-2 xl:grid-cols-2">
          {portfolios.map((portfolio, index) => (
            <ProjectCard
              key={index}
              name={portfolio.name}
              img={portfolio.img}
              git={portfolio.git}
              demo={portfolio.demo}
              tech={portfolio.technologies}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Portfolio;

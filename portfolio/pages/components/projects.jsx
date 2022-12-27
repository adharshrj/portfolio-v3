import React from "react";
import { projectstore } from "./helpers/assets";
import ProjectCard from "./helpers/projectcard";

const projectlist = projectstore.map((value) => {
  return (
    <div key={value.title}>
      <ProjectCard
        title={value.title}
        backgroundImg={value.backgroundImage}
        url={value.url}
        stack={value.stack}
      />
    </div>
  );
});

const Projects = () => {
  return (
    <div id="recent" className="w-full">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <p className="font-extrabold text-xl tracking-widest uppercase text-[#3b95da]">
          Projects
        </p>
        <h2 className="py-4 text-[#dcdbdb]">My Work</h2>
        <div className="grid md:grid-cols-2 gap-8">{projectlist}</div>
      </div>
    </div>
  );
};

export default Projects;

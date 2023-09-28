import React from "react";
import ProjectCard from "../../helpers/projectcard";
import { useStore } from "../../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const { globalData } = useStore();
  const projectlist = globalData?.projectstore?.map((value) => {
    return (
      <div key={uuidv4()}>
        <ProjectCard
          title={value.title}
          backgroundImg={value.backgroundImage}
          url={value.url}
          stack={value.stack}
          about={value.about}
        />
      </div>
    );
  });

  return (
    <div id="recent" className="w-full px-4 pt-8 sm:pt-8 md:pt-16">
      <div className="max-w-[1240px] mx-auto lg:px-0 lg:pt-32 md:px-4 sm:px-4 pt-16">
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

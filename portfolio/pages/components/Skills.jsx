import React from "react";
import { frontend, backend, db, other } from "./helpers/assets";
import  SkillsCard  from "./helpers/skillscard";

const frontendlist = frontend.map((value) => {
  return (
    <div key={value.title}>
      <SkillsCard title={value.title} skimage={value.image} />
    </div>
  );
});

const backendlist = backend.map((value) => {
  return (
    <div key={value.title}>
      <SkillsCard title={value.title} skimage={value.image} />
    </div>
  );
});

const dblist = db.map((value) => {
  return (
    <div key={value.title}>
      <SkillsCard title={value.title} skimage={value.image} />
    </div>
  );
});

const otherlist = other.map((value) => {
  return (
    <div key={value.title}>
      <SkillsCard title={value.title} skimage={value.image} />
    </div>
  );
});

const Skills = () => {
  return (
    <div id="skills" className="w-full px-4 pt-16 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="font-extrabold text-xl tracking-widest uppercase text-[#3b95da]">
          Skills
        </p>
        <h2 className="py-4 text-[#dcdbdb]">My Forte</h2>
        <p className="font-extrabold text-xl tracking-widest uppercase text-[#3b95da] "> Frontend</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-[#dcdbdb]">
          {frontendlist}
        </div>
        <p className="font-extrabold text-xl tracking-widest uppercase text-[#3b95da] sm:pt-8 md:pt-8"> Backend</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-[#dcdbdb]">
          {backendlist}
        </div>
        <p className="font-extrabold text-xl tracking-widest uppercase text-[#3b95da] sm:pt-8 md:pt-8"> Database</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-[#dcdbdb]">
          {dblist}
        </div>
        <p className="font-extrabold text-xl tracking-widest uppercase text-[#3b95da] sm:pt-8 md:pt-8"> Platform</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-[#dcdbdb]">
          {otherlist}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import SkillsCard from "../../helpers/skillscard";
import { useStore } from "../../context/AppContext";

const getSkills = (store) => {
  return store.map((value) => {
    return (
      <div key={value.title}>
        <SkillsCard title={value.title} skimage={value.image} />
      </div>
    );
  });
};
const Skills = () => {
  const { globalData } = useStore();
  const frontendlist = getSkills(globalData?.frontend);
  const backendlist = getSkills(globalData?.backend);
  const dblist = getSkills(globalData?.db);
  const otherlist = getSkills(globalData?.other);

  const skillmap = {
    FrontEnd: frontendlist,
    BackEnd: backendlist,
    Database: dblist,
    Platform: otherlist,
  };

  return (
    <div id="skills" className="w-full px-4 pt-16 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="font-extrabold text-xl tracking-widest uppercase text-[#3b95da]">
          Skills
        </p>
        <h2 className="py-4 text-[#dcdbdb]">My Forte</h2>
        {/* Skill Categorization*/}
        {Object.entries(skillmap).map((value) => (
          <>
            <p className="font-extrabold text-xl tracking-widest uppercase text-[#3b95da] py-8 mt-4">
              {value[0]}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-[#dcdbdb]">
              {value[1]}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;

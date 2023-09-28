import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const ProjectCard = ({
  title,
  backgroundImg,
  stack = ["Temp"],
  about = "about",
  url = "default",
}) => {
  return (
    <div className="flex max-w-xl mx-auto relative overflow-hidden items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl group hover:bg-gradient-to-r from-[#51b1e5] to-[#8ae0fe]">
      <div className="group-hover:opacity-10 sm:w-full md:w-full">
        <Image
          className="rounded-t-xl"
          src={backgroundImg}
          alt="/"
          width="600"
          height="600"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-white text-xl mb-2"> {title}</div>
          <p className="text-white text-base">{about}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {stack.map((value) => (
            <span
              key={uuidv4()}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{value}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Link href={url}>
          <div className="text-center shadow-md shadow-gray-500 py-3 rounded-full bg-white text-gray-700 font-bold text-lg cursor-pointer">
            <div className="p-2">More Info</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

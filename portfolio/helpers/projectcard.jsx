import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProjectCard = ({
  title,
  backgroundImg,
  stack = ["Temp"],
  about = "about",
  url = "default",
}) => {
  return (
    <div className="flex max-w-xl mx-auto relative overflow-hidden items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl group hover:bg-gradient-to-r from-[#51b1e5] to-[#8ae0fe]">
      <Link href={url}>
        <div className="group-hover:opacity-10 sm:w-full md:w-full overflow-hidden">
          <Image
            className="rounded-t-xl z-10"
            src={backgroundImg}
            alt="/"
            width="700"
            height="400"
          />
          <div className="p-4">
            <div className="font-bold text-white text-xl mb-2"> {title}</div>
            <p className="text-white text-base">{about}</p>
          </div>
          <div className="p-4">
            <ul>
              {stack.map((value, idx) => (
                <li
                  key={idx}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                >
                  #{value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
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

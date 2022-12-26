import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutImg } from "./helpers/assets";
function AboutMe() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="font-extrabold uppercase text-xl tracking-widest text-[#3b95da]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 text-justify">
            I specialize in designing (systems), developing Full-Stack web
            applications and integerated solutions for a given purpose. I’m a
            continuous and passionate learner who loves to experment with state
            of the art technologies to upskill myself for the market needs.
          </p>
          <p className="py-2 text-gray-600 text-justify">
            I initially started as a Python Developer for AI/ML related projects
            in 2019. I then took up Java Backend Developement and then evolved
            into a Java Full-Stack Developer with the React, SpringBoot and
            MySQL stack. I later picked up the MERN stack and Next.Js based on
            client requirements. I believe in developing Language and Framework
            agnostic skills in order to become a good Engineer.
          </p>
          <p className="py-2 text-gray-600 text-justify">
            I also have extensive experience with developing solutions on various
            cloud platforms namely Amazon Web Services (AWS) and Azure.
          </p>
          <Link href="/#recent">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest work.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            width="250"
            height="250"
            className="rounded-xl"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

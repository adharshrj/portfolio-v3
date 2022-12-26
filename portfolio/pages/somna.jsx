import React from "react";
import Image from "next/image";
import { somnaimg } from "./components/helpers/assets";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Typed from "react-typed";
function somna() {
  return (
    <div className="w-full bg-[#282828]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={somnaimg}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Somna - Sleep and Activity Monitor</h2>
          <h3><Typed
                strings={["Python, HTML, CSS, IBM Cloud"]}
                typeSpeed={40}
                backSpeed={50}
                loop
            /></h3>
        </div>
      </div>

      <div className="text-[#dcdbdb] max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 text-justify">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The goal was to develop an application that will assist astronauts
            in maitaining a proper dietary intake and also help them maintain peak 
            performance in zero gravity situations. We analyzed the dataset provided
            by NASA to derive the essential parameters. The essential parameters
            were Basal Metabolic Rate or BMR of the individual in zero gravity
            situations and nutrient partioning advised by NASA. Based on the
            research we designed a preliminary web application, the application
            was deployed to IBM Cloud. An android port was then created. 
            We cross checked the parameters and submitted after finalization.
          </p>
          <a
            href="https://2020.spaceappschallenge.org/challenges/sustain/sleep-shift-scheduling-tool/teams/peripheralplutarch/project"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 shadow-black">Code</button>
          </a>
          <a
            href="https://github.com/adharshrj"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 shadow-black">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>

              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> IBM Cloud
              </p>
            </div>
          </div>
        </div>
        <Link href="/#recent">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default somna;

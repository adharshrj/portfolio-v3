import React from "react";
import Image from "next/image";
import { xionaimg } from "../helpers/assets";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Typed from "react-typed";
function xiona() {
  return (
    <div className="w-full bg-[#1F2833]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          priority={true}
          src={xionaimg}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Xiona - Medical Assistant Robot</h2>
          <h3>
            <Typed
              strings={["Python", "Tensorflow", "Aurdino"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h3>
        </div>
      </div>

      <div className=" text-[#dcdbdb] max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 text-justify">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            ABSTRACT: A robotic device with multiple stage access control and
            methods of screening.
            <br />
            <br />
            ROLE: I was approached by SIMS Hospital at the time of the Covid-19
            pandemic to work as the lead programmer. Met and discussed about the
            possible modes of transmission of COVID 19 with the veteran
            professionals from the medical industry. Using the Pareto principle
            we determined the major factors that contribute to the spread of
            COVID-19 virus. Based on previous discussions and Pareto analysis
            the initial block diagram was created. The block diagram included
            the sensory instruments for detection and micro-computers to process
            the data. The proposal was submitted to the expert panel and was
            approved. Under my leadership a team of programmers was formed. The
            team was responsible for designing a mask detection model and a
            chat-bot based on the aforementioned questionnaire, the coding was
            done on micro-computers using python programming language. Using a
            tensorflow model and open-cv for viewfinder generation the code was
            compiled.
          </p>
          <a
            href="https://github.com/adharshrj"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 shadow-black">Code</button>
          </a>
          <a
            href="https://www.youtube.com/watch?v=uKxohwGp-MM"
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
                <RiRadioButtonFill className="pr-1" /> Tensorflow
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Aurdino
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

export default xiona;

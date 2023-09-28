import React from "react";
import Image from "next/image";
import { nammacartimg } from "../../helpers/assets";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Typed from "react-typed";

function nammacart() {
  return (
    <div className="w-full bg-[#1F2833]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          priority={true}
          src={nammacartimg}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Nammcart</h2>
          <h3>
            <Typed
              strings={[
                "Next.js",
                "Hapi.js",
                "Elastic Search",
                "MongoDB",
                "AWS",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h3>
        </div>
      </div>

      <div className="text-[#dcdbdb] max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 text-justify">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Nammacart is a website where retailers can list and sell their
            products seamlessly and efficiently. Imagine a smaller scale Amazon
            only concentrating on household products. <br />
            <br />
            My contributions: <br />
            a) Collaborated with an Agile team of 4. <br />
            b) Redesigned the existing backend services to work in line with
            Elastic Search and developed new database models for efficient
            implementation. <br />
            C) Implemented Elasticsearch throughout the site decreasing search
            response times by 80% on average (from 1000ms to 200ms) and ~98%
            (1000ms to 20ms) in an ideal case. <br />
          </p>
          <a
            href="https://github.com/adharshrj"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 shadow-black">Code</button>
          </a>
          <a href="https://www.nammacart.com/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 shadow-black">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Hapi.js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Elasticsearch
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Lambda
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

export default nammacart;

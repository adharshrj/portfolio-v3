import React from "react";
import Image from "next/image";
import { support } from "../../helpers/assets";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Typed from "react-typed";
function supportportal() {
  return (
    <div className="w-full bg-[#1F2833]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          priority={true}
          src={support}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Support Portal</h2>
          <h3>
            <Typed
              strings={[
                "React.js",
                "Node.js",
                "Amazon Connect",
                "Amazon Lex",
                "AWS CDK",
              ]}
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
            Created and shipped a custom user interface using React for customer
            support agents handling customers from the North American market
            with faster loading, response times and automated data gathering,
            thus increasing agent productivity by 50%. Developed backend
            services using Node.Js (Express and Serverless) and Spring. Created
            chatbots and automation scripts in Python to handle general customer
            queries automatically and transferring priority requests to agents.
            Collaborated with an agile team of 5, aided in prioritizing feature
            requests that had the largest impacts. Had clear cut communication
            with the product owners, stakeholders and internal teams leading to
            prioritizing features that affects user experience the maximum.
            Designed CI/CD Pipelines for deployment prioritizing multi-stage and
            multi-region support for Development and Production purposes.
            Enhanced system security by redesigning the system to accommodate a
            reverse proxy. Comprehended the data quality requirements for
            efficient analytics by discussing with the Analytics team and thus
            improving data quality scores by 25%
          </p>
          <a
            href="https://github.com/adharshrj"
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
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Amazon Connect API
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Amazon Lex
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

export default supportportal;

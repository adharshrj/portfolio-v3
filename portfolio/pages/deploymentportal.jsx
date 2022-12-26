import React from "react";
import Image from "next/image";
import { deployment } from "./components/helpers/assets";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function deploymentportal() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={deployment}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Deployment Portal</h2>
          <h3>Next.js | Node.js | AzureAD | AWS Lambda</h3>
        </div>
      </div>

      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 text-justify">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Collaborated with an Agile team of 3. Designed and
            developed a custom release management system for seamless deployment
            of projects thus reducing cost of deployment by 92%. Developed a
            middleware to facilitate communication between the release
            management site and GitLab. 
            <br/><br/>
            The main features are: <br/>
            a) Automatic Stage Wise Deployment <br/>
            b) Deployment Analytics. <br/> 
            c) Single Sign On using Azure AD.<br/>
          </p>
          <a
            href="https://github.com/adharshrj"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://github.com/adharshrj"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AzureAD
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Lambda
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Amplify
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

export default deploymentportal;

import React from "react";
import Image from "next/legacy/image";
import { hangman } from "./components/helpers/assets";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function hangmanGame() {
  return (
    <div className="w-full  bg-[#282828]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          priority={true}
          src={hangman}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Hangman</h2>
          <h3>React.js | Node.js | Vite | Vercel</h3>
        </div>
      </div>

      <div className=" max-w-[1240px] text-gray-200 mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 text-justify">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            An iteration of the OG hangman game we played in our childhood.
            <br/><br/>
            The main features are: <br/>
            a) Vite.js tooling leading to faster compilation <br/>
            b) Fully playable game<br/> 
            c) Clean UI with TailwindCss<br/>
          </p>
          <a
            href="https://github.com/adharshrj/hangman-ts"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 shadow-black mr-8">Code</button>
          </a>
          <a
            href="https://hangman-l0cltxtbl-adharshrj.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 shadow-black mt-4">Demo</button>
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
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vite
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
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

export default hangmanGame;

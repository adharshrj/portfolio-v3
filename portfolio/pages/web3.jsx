import React from "react";
import Image from "next/image";
import { web3eth } from "./components/helpers/assets";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function web3() {
    return (
        <div className="w-full">
          <div className="w-screen h-[50vh] relative">
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
            <Image
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={web3eth}
              alt="/"
            />
            <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">Web3 NFT Dashboard</h2>
              <h3>Next.js | Node.js | Alchemy SDK | Ethers.js | Supabase</h3>
            </div>
          </div>
    
          <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
            <div className="col-span-4 text-justify">
              <p>Project</p>
              <h2>Overview</h2>
              <p>
                Created a simple and custom NFT dashboard using Next.js, Alchemy SDK and Ethers.js with
                Supabase and Edge fuctions serving as backend. <br/><br/>

                The main features are: <br/>
                  a) Login with your Wallet (ex: Metamask) <br/>
                  b) View all NFTs based on your ENS names <br/> 
                  c) Wallet Id and ENS names added to Supabase for future use.
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
                    <RiRadioButtonFill className="pr-1" /> Ethers.js
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Alchemy SDK
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Supabase
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

export default web3
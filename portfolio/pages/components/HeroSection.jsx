import React from "react";
import Typed from "react-typed";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { resume, linkedin, github } from "./helpers/assets";
import Image from "next/image";

function HeroSection() {
  return (
    <>
    <div
      className={`bg-no-repeat bg-cover bg-center`}
    >
      <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          priority={true}
          placeholder="blur"
          blurDataURL= '/assets/bg3.jpg'
          src='/assets/bg3.jpg'
          alt="/"
        />
      <div
        id="home"
        className="w-full px-8 h-screen text-center backdrop-brightness-50"
      >
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <h1 className="py-4 text-gray-200	">
              {" "}
              Hi there! I'm <span className="text-[#3b95da]">Adharsh</span>
            </h1>
            <h1 className="py-2 text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#185a9d]">{"<"}Full-Stack Engineer{">"}</h1>
            <p className="py-4 text-white sm:max-w-[70%] m-auto">
              I’m currently building responsive web-applications and
              integerating them with scalable backend systems for my clients.
              Recently, I've dipped my toes into Web3 related development
              efforts.
            </p>
            <p className="text-white font-bold">
              {" "}
              My expertise:{" "}
              <Typed
                strings={["MERN", "Next.js", "SpringBoot", "AWS"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </p>

            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-[#3b95da] rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-[#3b95da] rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <Link href="/#contact">
                <div className="bg-[#3b95da] rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
              <a target="_blank" href={resume} rel="noopener noreferrer">
                <div className="bg-[#3b95da] rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HeroSection;

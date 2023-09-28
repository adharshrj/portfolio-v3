import React from "react";
import Typed from "react-typed";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { resume, linkedin, github } from "./helpers/assets";

function HeroSection() {
  return (
    <>
      <section>
        <div className="bg-main bg-no-repeat bg-cover bg-fixed h-screen bg-top lg:bg-center">
          <div
            id="home"
            className="w-full px-8 pt-32 h-screen text-center backdrop-brightness-[.33]"
          >
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
              <div className="flex-col align-middle justify-center items-center">
                <h1 className="py-4 text-[#dcdbdb]">
                  Hi there! I'm <span className="text-[#3b95da]">Adharsh</span>
                </h1>
                <h1 className="py-2 md:text-5xl text-transparent text-3xl animate-pulse bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#037ae3]">
                  {""}Software Engineer{""}
                </h1>
                <p className="py-4 text-[#dcdbdb] sm:max-w-[70%] m-auto font-semibold text-justify">
                  An end to end Full Stack Software Engineer with about 3 years
                  of experience and expertise in building scalable web
                  applications and distributed systems.
                </p>
                {/* <p className="text-[#dcdbdb] font-bold">
                  {" "}
                  My expertise:{" "}
                  <Typed
                    strings={[]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </p> */}

                {/* Social Media Section */}

                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <a href={linkedin} target="_blank" rel="noreferrer">
                    <div className="bg-[#3b95da] rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href={github} target="_blank" rel="noreferrer">
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
      </section>
    </>
  );
}

export default HeroSection;

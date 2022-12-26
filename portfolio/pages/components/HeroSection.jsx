import React from "react";
import Typed from "react-typed";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


function HeroSection() {
  return (
    <>
      <div id="home" className="w-full h-screen text-center backdrop-brightness-50" >
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
          <h1 className="py-4 text-gray-200	"> Hi there! I'm <span className="text-[#3b95da]">Adharsh</span></h1>
          <h1 className="py-2 text-gray-200	">A Full-Stack Engineer</h1>
          <p className="py-4 text-white sm:max-w-[70%] m-auto">
            I’m currently building responsive web-applications 
            and integerating them with scalable backend systems for my clients.
            Recently, I've dipped my toes into Web3 related development efforts.
          </p>
          <p  className='text-white font-bold'> My expertise: {' '}
          <Typed
                      strings={['MERN', 'Next.js', 'SpringBoot', 'AWS']}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                  />
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/adharsh-rj/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#3b95da] rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/adharshrj"
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
            <Link href="/resume">
              <div className="bg-[#3b95da] rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

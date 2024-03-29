import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { NavLogo, linkedin, github } from "../../helpers/assets";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "../../context/AppContext";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { globalData } = useStore();

  const handleNav = () => {
    setNav(!nav);
  };

  const NavMap = {
    Home: "",
    About: "about",
    Skills: "skills",
    "Recent Work": "recent",
    Contact: "contact",
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 200) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [nav]);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-500"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div
        className={
          shadow
            ? "bg-black opacity-80 flex ease-in-out duration-500 justify-between items-center w-full h-full pr-4 2xl:px-16"
            : "flex md:justify-center justify-between ease-in-out duration-700 items-center w-full h-full pr-4 2xl:px-16"
        }
      >
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="125"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            {Object.entries(NavMap).map((value) => (
              <li
                key={uuidv4()}
                className="font-extrabold text-white ml-10 uppercase hover:border-b-[4px]"
              >
                <Link key={uuidv4()} href={`/#${value[1]}`}>
                  {value[0]}
                </Link>
              </li>
            ))}
            <li className="font-extrabold text-white ml-10 uppercase hover:border-b-[4px]">
              <a target="_blank" href={globalData.resume} rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu
              size={25}
              className="text-white hover:text-[#3b95da]"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "overflow-y-auto opacity-100 scrollbar-hide fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1F2833] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-black p-3 cursor-pointer"
              >
                <AiOutlineClose
                  size={20}
                  className="text-white hover:text-[#3b95da]"
                />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-bold text-white">
                Welcome to my world!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-extrabold text-white">
              {Object.entries(NavMap).map((value, idx) => (
                <Link key={uuidv4()} href={`/#${value[1]}`}>
                  <li
                    key={uuidv4()}
                    onClick={() => setNav(false)}
                    className="py-4 hover:text-[#3b95da] text-sm"
                  >
                    {value[0]}
                  </li>
                </Link>
              ))}

              <a target="_blank" href={globalData.resume} rel="noopener  noreferrer">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#3b95da]"
                >
                  Resume
                </li>
              </a>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest font-bold text-[#3b95da]">
                Connect with me
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn color="white" />
                  </div>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub color="white" />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail color="white" />
                  </div>
                </Link>
                <a target="_blank" href={globalData.resume} rel="noopener noreferrer">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill color="white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

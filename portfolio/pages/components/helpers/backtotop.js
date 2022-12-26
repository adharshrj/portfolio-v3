import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Backtotop = () => {
  return (
    <div className="flex justify-center py-12">
      <Link href="/">
          <div className="rounded-full shadow-lg shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#3b95da]" size={30} />
          </div>
      </Link>
    </div>
  );
};

export default Backtotop;

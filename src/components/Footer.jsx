import React from "react";
import { FaReact } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { PiOpenAiLogoLight } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="border-t border-zinc-300 py-6 px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
      <ul className="flex items-center gap-5">
        <li>
          <FaReact className="w-6 h-6 hover:text-zinc-700 transition-colors" />
        </li>
        <li>
          <RiTailwindCssFill className="w-6 h-6 hover:text-zinc-700 transition-colors" />
        </li>
        <li>
          <IoLogoVercel className="w-6 h-6 hover:text-zinc-700 transition-colors" />
        </li>
        <li>
          <PiOpenAiLogoLight className="w-6 h-6 hover:text-zinc-700 transition-colors" />
        </li>
      </ul>

      <p className="mt-4 md:mt-0">
        &copy; {new Date().getFullYear()} Abhijith T
      </p>
    </footer>
  );
}

export default Footer;

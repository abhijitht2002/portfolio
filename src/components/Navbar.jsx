import React from "react";
import { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdDownload, IoMdMail } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="relative border-b border-zinc-300 py-6 px-6 sm:px-12 flex justify-between">
        <h1 className="text-sm sm:text-base font-medium text-zinc-900">
          Abhijith T
        </h1>

        {/* Toggle Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <IoCloseOutline className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-zinc-400 text-sm sm:text-base">
          <li>
            <a
              href="https://github.com/abhijitht2002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-teal-400 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="http://www.linkedin.com/in/abhijitht2002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-400 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </li>
          {/* <li>
          <a
            href="mailto:rajithrechu@gmail.com"
            aria-label="Email"
            className="hover:text-teal-400 transition-colors"
          >
            <IoMdMail className="w-6 h-6" />
          </a>
        </li> */}
          <li>
            <a
              href="pdf/Abhijith_T_Entri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              className="hover:text-teal-400 transition-colors"
            >
              <IoMdDownload className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 right-6 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 md:hidden">
          <a
            href="https://github.com/abhijitht2002"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 text-sm text-teal-400 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>

          <a
            href="http://www.linkedin.com/in/abhijitht2002"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 text-sm text-indigo-400 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            LinkedIn
          </a>

          <a
            href="pdf/Abhijith_T_Entri.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 text-sm text-teal-400 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            Download
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;

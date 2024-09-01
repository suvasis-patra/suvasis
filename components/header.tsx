"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="w-full fixed top-0 left-1/2 h-[4rem] 
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full sm:h-[3.5rem] sm:w-[36rem] sm:top-6"
        initial={{ y: -10, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap sm:flex-nowrap items-center justify-center w-[22rem] gap-y-1 sm:gap-5 font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              key={link.name}
              className=" h-3/4 flex items-center justify-center relative"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

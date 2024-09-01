"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <>
      <motion.p
        className="text-lg sm:text-xl md:text-3xl leading-1 font-semibold"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "tween" }}
      >
        Hi, I&apos;m <span className="font-bold text-blue-500">Suvasis</span>, a{" "}
        <span className="font-bold text-blue-500">Fullstack Developer</span>{" "}
        based in India. I love building real world applications.
      </motion.p>
      <motion.div
        className="flex gap-2 flex-col sm:flex-row sm:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <Link
          href="#contact"
          className="bg-black text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full transition group outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:text-black hover:bg-white"
        >
          Contact me{" "}
          <span>
            <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
          </span>
        </Link>
        <a
          href=""
          className="px-7 py-3 flex items-center justify-center gap-2 rounded-full border border-black/[0.5] bg-white outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
        >
          Download CV
          <span>
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </span>
        </a>
        <div className="flex gap-2 justify-center items-center">
          <a
            href=""
            className="group rounded-full w-full p-2 bg-white text-center border-[1px] border-gray-900 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <BsLinkedin
              className="group-hover:scale-110 transition"
              size={20}
            />
          </a>
          <a
            href=""
            className="group rounded-full w-full p-2 bg-white text-center border-[1px] border-gray-900 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaGithubSquare
              className="group-hover:scale-110 transition"
              size={20}
            />
          </a>
        </div>
      </motion.div>
    </>
  );
}

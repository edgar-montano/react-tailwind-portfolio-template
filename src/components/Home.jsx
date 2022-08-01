import React from "react";
import { HiArrowCircleRight, HiArrowCircleDown } from "react-icons/hi";
import TypeWriterEffect from "react-typewriter-effect";
import { config } from "../config.js";
import { Link } from "react-scroll";
export default function Home(props) {
  const { name, description, employment_status, typewriter_text, source } =
    config;
  return (
    <div name="home" className="w-full h-screen bg-bgdark">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <span className="text-white text-2xl">Hello my name is</span>

        <h1 className="text-7xl font-bold text-primary">{name}</h1>
        <h2 className="text-5xl font-bold text-white bg-black mt-4">
          <TypeWriterEffect // textStyle={{
            startDelay={100}
            cursorColor="white"
            multiText={typewriter_text}
            multiTextLoop={true}
            typeSpeed={50}
          />
        </h2>
        <h3 className="relative top-2 tracking-widest text-end">
          Current Status:
          <span className="text-green-500 animate-pulse text-sm">
            {employment_status ? " Seeking Employment" : "Employed"}
          </span>
        </h3>
        <div className="flex flex-wrap justify-end mt-4">
          <Link to="about" smooth={true} duration={500} className="btn">
            About Me
            <HiArrowCircleDown className="ml-2 animate-bounce" />
          </Link>
          <a href={source} className="btn hidden md:flex">
            View Source
            <HiArrowCircleRight className="ml-2 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
}

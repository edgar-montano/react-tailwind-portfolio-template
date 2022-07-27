import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import TypeWriterEffect from "react-typewriter-effect";

export default function Home(props) {
  return (
    <div name="home" className="w-full h-screen bg-bgdark">
      {/* Home */}
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <span className="text-white text-2xl">Hello my name is</span>

        <h1 className="text-4xl sm:text-7xl font-bold text-primary z-0">
          Edgar Montano
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white bg-black">
          {/* NOTE: Check to see if TailwindCSS styles work with TypeWriterEffect.  */}
          <TypeWriterEffect // textStyle={{
            // textStyle={{fontSize: "1.5rem"}}
            startDelay={100}
            cursorColor="white"
            multiText={[
              "> I'm a Full Stack Developer.",
              "> I'm a Backend Engineer.",
              "> I'm a Data Scientist. ",
              "> I'm an Audio Engineer.",
              "> I'm a Hacker.",
              "> I'm an Arch Linux User. 🐧",
              "> I'm a Software Engineer.",
            ]}
            multiTextLoop={true}
            typeSpeed={50}
          />
        </h2>
        <p className="py-4 max-w-700px text-white">
          Edgar Montano is a Degreed Computer Scientist with 5+ years of
          experience in programming, collaboration, critical thinking, problem
          solving, and project management. Specialty in various fields of
          Software Engineering including but not limited to; Full Stack Web
          Development, Backend Programming, API Development, and Large Scale Web
          Applications.
        </p>
        <div className="">
          <button className="text-white  hover:animate-pulse duration-300 border-2 px-6 py-3 my-2 flex items-center hover:bg-primary hover:border-secondary">
            View Source Code
            <span className="group-hover:animate-spin duration-100">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

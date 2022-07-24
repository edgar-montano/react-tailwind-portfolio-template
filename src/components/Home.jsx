import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import TypeWriterEffect from "react-typewriter-effect";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-bgdark">
      {/* Home */}
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white text-xl">Hello my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-primary">
          Edgar Montano
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white ">
          {/* NOTE: Check to see if TailwindCSS styles work with TypeWriterEffect.  */}
          <TypeWriterEffect // textStyle={{
            // textStyle={{fontSize: "1.5rem"}}
            startDelay={100}
            cursorColor="black"
            multiText={[
              "I'm a Full Stack Developer.",
              "I'm a Backend Engineer.",
              "I'm a Data Scientist. ",
              "I'm an Audio Engineer.",
              "I'm a Hacker.",
              "I'm an Arch Linux User. 🐧",
              "I'm a Software Engineer.",
            ]}
            multiTextLoop={true}
            typeSpeed={50}
          />
        </h2>
        <p className="py-4 max-w-700px text-city">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio
          culpa aspernatur praesentium, quam perspiciatis at id doloribus
          voluptate enim expedita ullam? Molestias ab atque voluptatibus.
          Maiores quis voluptate suscipit!
        </p>
        <div className="">
          <button className="text-white group group-hover border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Source Code
            <span className="group-hover:rotate-90 duration-100">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

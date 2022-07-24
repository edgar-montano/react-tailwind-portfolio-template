import React from "react";
import avatar from "../assets/avatar.jpg";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* about me title */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-primary">
              About me
            </p>
            <img
              src={avatar}
              alt=""
              className=" rounded-lg float-left w-1/2 px-2 py-4"
            />
            <div>
              <p className="text-4xl font-bold py-4">
                Hi my name is <span className="">Edgar Montano</span>.
              </p>
            </div>
          </div>

          {/* about me text */}
          <div className="max-w-[1000px] w-full grid grid-cols">
            <p>
              I've been programming since the age of 12. With a degree in
              Computer Science from New York University, I've been able to
              create many wonderful programs, including a child-friendly Linux
              Operating System, Kidify; along with an educational content
              management system. I've also done various consultant work for
              startup companies, most recently I've worked on various projects
              for RustyTub IT Solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

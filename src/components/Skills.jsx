import React from "react";
import SkillCard from "./SkillCard.jsx";
import ToolTip from "./ToolTip.jsx";

export default function Skills() {
  return (
    <div
      name="skills"
      className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen text-gray-300"
    >
      <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full ">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            {/* about me title */}
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-primary">
                About me
              </p>
              <img
                src=""
                alt="a wild programmer has appeared!"
                className="rounded-full float-left w-1/2 px-2 py-4 hover:scale-110 duration-700"
              />
              <div>
                <p className="text-4xl font-bold py-4">
                  Hi my name is{" "}
                  <span className="text-primary">Edgar Montano</span>.
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
    </div>
  );
}

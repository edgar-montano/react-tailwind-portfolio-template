import React from "react";
import { config } from "../config.js";

export default function Skills() {
  const skills = config.skills.map((item) => {
    let { name, libraries } = item;
    let subskills = item.libraries.sort().join(", ");
    return (
      <li key={name} className="even:text-primary odd:text-tenary">
        <span className="hover:scale-150 hover:animate-pulse">{name}</span>
        <br />
        <span className="hover:text-xl flex flex-wrap items-center text-sm text-white tracking-wide">
          {subskills}
        </span>
      </li>
    );
  });
  return (
    <div name="skills" className="page">
      <div className="flex-container flex-col">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* about me title */}
          <div className="sm:text-right">
            <p className="text-underline">My skills</p>
          </div>

          {/* about me text */}
          <div className="max-w-[1000px] w-full grid grid-cols">
            <ul className="text-3xl mx-2 odd:text-primary even:text-secondary">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

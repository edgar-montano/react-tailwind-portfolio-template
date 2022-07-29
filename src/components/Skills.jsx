import React from "react";
import config from "../config.json";

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
    <div
      name="skills"
      className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen text-gray-300"
    >
      <div name="about" className="w-full h-screen text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full ">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            {/* about me title */}
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-primary">
                My skills
              </p>
            </div>

            {/* about me text */}
            <div className="max-w-[1000px] w-full grid grid-cols">
              <ul className="text-3xl mx-2 odd:text-primary even:text-secondary">
                {skills}
                {/* <li>
                  <span className="text-2xl text-pink-500">Python:</span>{" "}
                  Django, SciKit, NumPy, Scrapy, Web2py, Requests, Selenium
                </li>
                <li>
                  <span className="text-2xl text-blue-500">JavaScript: </span>{" "}
                  TypeScript, Express, Node.js, React, Vue, Next.js
                </li>
                <li>Java: Spring Boot, Jenkins. </li>
                <li>SQL: PostgreSQL, MySQL</li>
                <li>NoSQL: MongoDB, DocumentDB</li>
                <li>
                  DevOps: Linux (Arch, Redhat, Debian, Ubuntu, Centos), Docker
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

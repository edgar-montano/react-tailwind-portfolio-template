import React from "react";
import SkillCard from "./SkillCard.jsx";

export default function Skills() {
  return (
    <div
      name="skills"
      className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300"
    >
      <div>
        {/* container  */}
        <div className="pb-8 pl-4">
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-primary">
            Skills
          </p>
          <p className="py-4 text-sm text-slate-grey">
            /programming languages/
            {/* <code>These are the technology I work with: </code>{" "} */}
          </p>
        </div>

        {/* technology cards */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <SkillCard
            url="/"
            icon="devicon-javascript-plain colored"
            name="JavaScript"
          />
          <SkillCard
            url="/"
            icon="devicon-python-plain colored"
            name="Python"
          />
          <SkillCard url="/" icon="devicon-java-plain colored" name="Java" />
        </div>
      </div>
      <div>
        {/* container  */}
        <div className="pb-8 pl-4">
          <p className="text-4xl text-gray-300 font-bold inline  border-b-4 border-primary text-center">
            Frontend
          </p>
          <p className="py-4 text-sm text-slate-grey">
            /programming frontends/
            {/* <code>These are the technology I work with: </code>{" "} */}
          </p>
        </div>

        {/* technology cards */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <SkillCard
            url="/"
            icon="devicon-react-original-wordmark colored"
            name="React"
          />
          <SkillCard url="/" icon="devicon-vuejs-plain colored" name="Vue.js" />
          <SkillCard
            url="/"
            icon="devicon-tailwindcss-plain colored"
            name="TailwindCSS"
          />
        </div>
      </div>
    </div>
  );
}

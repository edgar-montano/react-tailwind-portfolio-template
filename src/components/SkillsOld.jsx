import React from "react";
import SkillCard from "./SkillCard.jsx";
import ToolTip from "./ToolTip.jsx";

export default function SkillsOld() {
  return (
    <div
      name="skills"
      className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen text-gray-300"
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
        {/* <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"> */}
        <div className="flex justify-center gap-8">
          <SkillCard
            url=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            name="JavaScript"
            skillLevel="Pro"
            skillYears="4+ years"
            description="Experienced Full Stack Developer in MERN stack (MongoDB,Express,React, Node.js). With knowledge of Vue.js.   "
          />
          <SkillCard
            url=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            name="Python"
            skillLevel="Pro"
            skillYears="4+ years"
            description="Experienced Backend Engineer in Web2py and Django. Strong data science background with knowledge of SciKit, NumPy, NLP and other machine learning libraries. "
          />
          <SkillCard
            url=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            name="Java"
            skillLevel="Adv"
            skillYears="2+ years"
            description="Intermediate knowledge in Spring Boot stack and familiarity with Jenkins, and other common Java tooling."
          />
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
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
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

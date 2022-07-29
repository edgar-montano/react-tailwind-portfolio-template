import React from "react";
import ToolTip from "./ToolTip.jsx";
export default function SkillCard(props) {
  return (
    <div className="flex flex-wrap focus:ring-8 w-48 rounded-lg shadow-md  hover:shadow-md hover:scale-110">
      <img
        className="w-full rounded w-48 h-48 "
        src={props.src}
        alt={props.name}
      />
      <div className="">
        <h3 className="text-2xl bg-darker ">
          {props.name}
          <span
            class="float-right text-sm text-dark hover:tooltip group hover:cursor-help "
            data-tooltip-target="tooltip-default"
          >
            <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-sm ">
                {props.skillYears}
              </span>
            </div>
            [{props.skillLevel}]
          </span>
        </h3>

        <a href={props.url} className="">
          <p className="text-sm px-2 py-1 text-white bg-bgdark">
            {props.description}
          </p>
        </a>
      </div>
    </div>
  );
}

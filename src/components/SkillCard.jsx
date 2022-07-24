import React from "react";

export default function SkillCard(props) {
  return (
    <div className="hover:shadow-md shadow-[#010164] hover:scale-110 duration-500">
      <a href={props.url} className="w-20 mx-auto text-4xl">
        <i className={props.icon} alt={props.name} />
        <p>{props.name}</p>
      </a>
    </div>
  );
}

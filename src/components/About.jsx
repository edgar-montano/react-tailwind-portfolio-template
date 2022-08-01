import React from "react";
import avatar from "../assets/avatar.jpg";
import { config } from "../config.js";
export default function About() {
  const { description, name } = config;
  return (
    <div name="about" className="page bg-darker">
      <div className="flex-container flex-col">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* about me title */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-primary">
              About me
            </p>
            <img
              src={avatar}
              alt="a wild programmer has appeared!"
              className="rounded-full float-left w-1/2 px-2 py-4 hover:scale-110 duration-700"
            />
            <div>
              <p className="text-4xl font-bold py-4">
                Hi my name is{" "}
                <span className="text-primary cursor-default">{name}</span>.
              </p>
            </div>
          </div>

          {/* about me text */}
          <div className="max-w-[1000px] w-full ">
            <blockquote className="flex p-4 m-4 text-white  text-center">
              <span className="text-center">{description}</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

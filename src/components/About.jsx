import React from "react";
import avatar from "../assets/avatar.jpg";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* about me title */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About me
            </p>
            <img src={avatar} alt="" className=" float-left w-1/2" />
            <div>
              <p className="text-4xl font-bold py-4">
                Hi my name is <span className="">Edgar Montano</span>.
              </p>
            </div>
          </div>

          {/* about me text */}
          <div className="max-w-[1000px] w-full grid grid-cols">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              accusamus hic nobis impedit reprehenderit beatae repudiandae porro
              quod facere sunt ullam voluptas ex vitae provident assumenda
              adipisci id! Fuga, inventore?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

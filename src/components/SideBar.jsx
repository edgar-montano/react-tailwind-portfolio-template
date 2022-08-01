import React from "react";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
export default function SideBar() {
  const sidebar = [
    {
      name: "LinkedIn",
      library: <FaLinkedin size={30} />,
      url: "https://linkedin.com/in/edgar-montano",
    },
    {
      name: "Github",
      library: <FaGithub size={30} />,
      url: "https://github.com/edgar-montano",
    },
    {
      name: "Email",
      library: <HiOutlineMail size={30} />,
      url: "mailto:edgar@edgar-montano.com",
    },
  ].map((item, id) => {
    return (
      <li className="side-item" key={id}>
        <a href={item.url}>
          {item.name} {item.library}
        </a>
      </li>
    );
  });
  return (
    <div className="fixed flex flex-col top-[35%] left-0 hidden lg:block">
      <ul>{sidebar}</ul>
    </div>
  );
}

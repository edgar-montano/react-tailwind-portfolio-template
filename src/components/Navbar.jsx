import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import SideBar from "./SideBar.jsx";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-bgdark text-bglight">
      <div>
        <img src={Logo} style={{ width: "100px" }} alt="Logo" />
      </div>

      <ul className="hidden md:flex ml-auto">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger*/}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile*/}

      <SideBar />
      {/* <div className="">
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center overflow-hidden"
          }
        >
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">Contact</li>
          <li className="py-6 text-4xl">Home</li>
        </ul>
      </div> */}
      {/* social media */}
    </div>
  );
}

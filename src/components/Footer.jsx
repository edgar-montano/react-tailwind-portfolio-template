import React from "react";

export default function Footer() {
  return (
    <div className="bg-black flex flex-wrap justify-center items-center pl-1 text-white text-sm">
      This website was made with 💖 in React.js & TailWindCSS. Source code
      freely available on
      <a
        className="text-blue-500 pl-1 hover:scale-110"
        href="https://github.com/edgar-montano"
      >
        {" "}
        github.
      </a>
    </div>
  );
}

import React from "react";
import { sidebar } from "../config.js";

export default function SideBar() {
  const sideBar = sidebar.map((item, id) => {
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
      <ul>{sideBar}</ul>
    </div>
  );
}

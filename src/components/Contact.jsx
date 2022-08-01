import React from "react";
import { config } from "../config.js";

export default function Contact() {
  const contacts = config.contacts.map((item) => {
    return (
      <li key={item.name} className="hover:scale-150">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </li>
    );
  });
  return (
    <div className="page bg-darker" name="contact">
      <div className="flex-container">
        <h2 className="text-underline">Contact Me</h2>
        <div className="flex flex-wrap justify-center text-xl text-tenary w-full items-center">
          <ul className="text-2xl py-4">{contacts}</ul>
        </div>
      </div>
    </div>
  );
}

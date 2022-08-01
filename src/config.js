import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const config = {
  name: "Edgar Montano",
  image: "src/assets/avatar.jpg",
  description: "",
  source: "",
  employment_status: true,
  typewriter_text: [
    "> I'm a Software Engineer.",
    "> I'm a Backend Engineer.",
    "> I'm a Data Scientist. ",
    "> I'm a Full Stack Dev.",
    "> I'm an Audio Engineer.",
    "> I'm a Hacker.",
    "> I'm a Linux User.",
  ],

  contacts: [
    {
      name: "linkedin",
      url: "https://linkedin.com/in/edgar-montano",
    },
    {
      name: "twitter",
      url: "https://twitter.com/edgar_montano",
    },
    {
      name: "github",
      url: "https://github.com/edgar-montano",
    },
  ],
  skills: [
    {
      name: "Python",
      libraries: [
        "Django",
        "Scikit",
        "Numpy",
        "Web2py",
        "Scrapy",
        "NLP",
        "Selenium",
      ],
    },
    {
      name: "JavaScript",
      libraries: [
        "TypeScript",
        "Express",
        "Node.js",
        "React",
        "Vue",
        "Jest",
        "Puppeteer",
      ],
    },
    {
      name: "Java",
      libraries: ["Jenkins", "Spring Boot", "Maven", "JUnit"],
    },
    {
      name: "DevOps",
      libraries: [
        "Bash",
        "Linux",
        "Agile",
        "Docker",
        "SQL (MySQL, PostgreSQL)",
        "NoSQL (MongoDB/DocumentDB)",
        "Test Driven Development",
        "CI/CD",
      ],
    },
    {
      name: "Soft Skills",
      libraries: [
        "Team Player",
        "Project Manager",
        "Strong Communication",
        "Creative",
        "Problem-Solver",
      ],
    },
  ],
};

export const sidebar = [
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
];

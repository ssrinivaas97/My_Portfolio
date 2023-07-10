import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "K7 Computing Private Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2019 - July 2022",
    points: [
      "Develped and maintained automation scripts using python for assessing the product’s (K7 Total Security) performance and minimized the manual work by 4hrs/person.day",
      "Ensured product performance by leveraging the developed python scripts, to perform file copying, loading websites, and file installation. Analyzed monthly reports in detail using windows process monitor which led to a perfect product score of 6/6 by AV-Test",
      "Scanned different malicious samples using profile scanner, an internal python tool to identify and report highly impactful product binaries aiding in the reduction of the size of binaries up to 60 KB.",
      "Prepare a competitor analysis report which made the product compete with other major AV Vendors (McAfee, Kaspersky, Avira) in terms of ratings and usability metrics",
      "Created monthly performance analysis reports which aided in analyzing and fine-tuning the product’s performance, leading to the AVC-GOLD award given by AV-Test",
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dribble Clone",
    description:
      "Web-based platform that allows user to share, edit and create projects to keep dev community connected with respect to projects",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "grafbase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ssrinivaas97/Flexxible_proj",
  },
  {
    name: "AI Article Summarizer",
    description:
      "Web application similar to chatGPT capable of scraping the links and provide user with the needed and precise summary of the page swiftly.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolKit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ssrinivaas97/AI-Summarizer",
  },
  {
    name: "E-Commerce Website",
    description:
      "A comprehensive clothing website which allows user to browse through specific categories, use dynamic shopping cart, exclusive deals and safe checkout.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ssrinivaas97/E_Commerce",
  },
  {
    name: "Car showcase",
    description:
      "A fully operable car rental website , which allows user to browse , filter, choose and rent various car models with a descriptive catalogue for each.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ssrinivaas97/CAR_RENTAL",
  },
];

export { services, technologies, experiences, testimonials, projects };

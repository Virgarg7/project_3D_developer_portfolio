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
  testimonial1,
  testimonial2,
  testimonial3
} from "../assets";

// import { nitj } from "../assets/company/nitj.png";

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
    title: "Problem Solver",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Figma/Canva Design",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "XCEED | NITJ Website",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Ongoing",
    points: [
      "Implementing a calendar feature for NITJ Website, showcasing all college events in the backend.",
      "Developing and maintaining web applications using Express, Node.js, MongoDB, and related technologies.",
      "Collaborating with cross-functional teams for seamless integration and functionality.",
      "Actively participating in code reviews, providing constructive feedback to fellow developers.",
    ],
  },
  {
    title: "Web Dev Intern",
    company_name: "RadicalX | Remote",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Engaged in an intensive 3-month program, honing collaboration and software development skills, with a focus on backend expertise.",
      "Contributed to significant open-source projects, gaining hands-on experience in backend development, along with proficiency in Canva and Figma.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Antier Solutions | On-site",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Studied and reviewed code for Twilio Chat Application using React.js and TypeScript in the front end.",
      "Implemented backend functionality with Node.js, Express.js, and MongoDB for a full-stack solution.",
      "Implemented diverse communication channels, such as SMS, WhatsApp messages, and chat.",
    ],
  },
  {
    title: "Student Intern",
    company_name: "Google Cloud Community India | Remote",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Successfully completed a 60-day Google Cloud program, kickstarting my cloud career with hands-on practice.",
      "Accomplished 30 Quest and 15 Skill badges across diverse tracks, including Cloud Infrastructure, Cloud-Native Application Development, and Big Data/Machine Learning.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working alongside Vir during his tenure as a Web Dev Intern at RadicalX, and I can confidently attest to his contributions to our team.",
    name: "Melisa Sever",
    designation: "Software Engineer",
    company: "RadicalAI",
    image: testimonial1
  },
  {
    testimonial:
      "Vir has consistently shown a constant commitment to learning and has made great contributions to our projects.",
    name: "Surinder Kumar",
    designation: "Project Manager",
    company: "Antier Solution",
    image: testimonial2,
  },
  {
    testimonial:
      "Collaborating with Vir during an Unstop hackathon was phenomenal. His unwavering dedication and work ethic were exceptional.",
    name: "Ayushi Nanda",
    designation: "Full Stack Engineer",
    company: "of TalentServe",
    image: testimonial3
  }
];



const projects = [
  {
    name: "NITJ Placement Cell",
    description:
      "It revolutionizes campus recruitments with a unified portal, streamlining applications and enhancing student awareness. The platform uniquely integrates student-centric details, a blog portal, and recruitment analytics, creating a comprehensive resource to boost students' career success.",
    tags: [
      {
        name: "React-Redux",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Virgarg7/Placement_Cell.git",
  },
  {
    name: "Waste Management Application",
    description:
      "Developed a Figma-based prototype for a connected system catering to efficient disposal of industrial plastic and recyclable waste. Proficient in UI/UX and graphic design to ensure seamless user experiences.",
    tags: [
      {
        name: "Design",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.figma.com/proto/7RoHnxWbfOdXwM6rovzEv5/Waste-Management-(Community)?scaling=scale-down&page-id=0&node-id=2-2&starting-point-node-id=2%3A2&mode=design&t=J3UyGiceCRPo8vqS-1",
  },
  {
    name: "College Calendar",
    description:
      "It is web application that aids students to efficiently manage thier assignments, exams, and college schedules. With intuitive features for task organization, deadline tracking, and visualizing schedules, it empowers students to stay organized and focused on their academic goals.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: threejs,
    source_code_link: "https://calendar-frontend-xceed.vercel.app/",
  },
  {
    name: "PicSnag",
    description:
      "It is an image extractor application built using Node.js, Express.js, MongoDB, and the EJS templating engine. The purpose of the application is to allow users to extract information from images and manage those extracted details in a database.",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Virgarg7/PicSnag.git",
  },
];

export { services, technologies, experiences, testimonials, projects };

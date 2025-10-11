import { Github, Linkedin, Twitter, Code, Monitor, Server, Database, BrainCircuit, Paintbrush } from 'lucide-react';

export const personalData = {
  name: "Alex Doe",
  title: "Creative Full-Stack Developer",
  bio: "A passionate developer with a love for creating beautiful, interactive, and performant web experiences. I blend design and technology to build user-friendly applications that solve real-world problems. This immersive CV is a testament to my dedication to pushing the boundaries of web development.",
  contact: {
    email: "alex.doe@example.com",
    social: [
      { name: "GitHub", url: "https://github.com", icon: Github },
      { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
      { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    ],
  },
};

export const skillsData = [
  { name: "React & Next.js", icon: Code },
  { name: "Three.js & WebGL", icon: Monitor },
  { name: "Node.js & Express", icon: Server },
  { name: "Firebase & GCP", icon: Database },
  { name: "GenAI & LLMs", icon: BrainCircuit },
  { name: "UI/UX Design", icon: Paintbrush },
];

export const experienceData = [
  {
    company: "Tech Innovators Inc.",
    role: "Senior Frontend Developer",
    period: "2020 - Present",
    description: "Led the development of a large-scale e-commerce platform using Next.js, resulting in a 40% increase in performance. Integrated 3D product viewers with Three.js. Mentored junior developers and championed best practices in code quality and testing.",
    rawTimeline: "At Tech Innovators Inc. from 2020 to present, I worked as a Senior Frontend Developer. Key projects involved leading a team to build a new e-commerce site with Next.js which improved performance by 40%. I also developed a 3D viewer for products using Three.js and was responsible for mentoring junior team members.",
  },
  {
    company: "Creative Solutions LLC",
    role: "Full-Stack Developer",
    period: "2018 - 2020",
    description: "Developed and maintained client websites and web applications using the MERN stack. Collaborated with designers to implement pixel-perfect user interfaces and interactive features. Managed database schemas and RESTful APIs.",
    rawTimeline: "During my time at Creative Solutions LLC between 2018 and 2020 as a Full-Stack Developer, I built websites for clients with React and Node.js. I worked closely with the design team and handled both frontend and backend tasks, including API and database management.",
  },
];

export const projectsData = [
  {
    id: "project1",
    title: "Project Alpha",
    description: "A real-time collaborative whiteboard application built with React, WebSockets, and Firebase. Features a rich-text editor, drawing tools, and user presence indicators.",
    tech: ["React", "Firebase", "WebSockets"],
    imageUrlId: "project-alpha",
    projectDetails: "Project Alpha is a web-based collaborative tool. Technologies used: React for the frontend, Firebase Realtime Database for data synchronization, and native WebSockets for low-latency communication. A key challenge was managing state synchronization across multiple clients efficiently. The outcome was a highly responsive and user-friendly application.",
  },
  {
    id: "project2",
    title: "Project Beta",
    description: "An e-commerce storefront for a fictional brand, featuring 3D product previews and a Stripe integration for payments. Built with Next.js and Three.js.",
    tech: ["Next.js", "Three.js", "Stripe"],
    imageUrlId: "project-beta",
    projectDetails: "Project Beta is an online store. Technologies: Next.js for server-side rendering, Three.js for interactive 3D product models, and Stripe API for handling payments. The main challenge was optimizing the 3D models for fast loading on the web without sacrificing quality. The project successfully demonstrates a modern e-commerce experience.",
  },
];

export const educationData = [
    {
        institution: "University of Technology",
        degree: "Master of Science in Computer Science",
        period: "2016 - 2018",
    },
    {
        institution: "State University",
        degree: "Bachelor of Science in Software Engineering",
        period: "2012 - 2016",
    }
];

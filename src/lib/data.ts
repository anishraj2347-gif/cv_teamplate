import { Github, Linkedin, Twitter, Code, Monitor, Server, Database, BrainCircuit, Paintbrush, Clapperboard, Lightbulb } from 'lucide-react';

export const personalData = {
  name: "Anish Raj",
  title: "Data Scientist @ Tata Elxsi",
  bio: "I'm a Data Scientist with a passion for building awesome products using data, with about 2 years of experience in the field. My main focus is on creating smart solutions with data, with a special interest in Machine Learning, Deep Learning, and Recommendation Systems. I'm all about using data to tell stories and find cool insights. I'm also really into MLOps, which is about making sure machine learning models work smoothly in the real world.",
  contact: {
    email: "anish.raj@example.com",
    social: [
      { name: "GitHub", url: "https://github.com/Anish-raj-99", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/anish-raj99", icon: Linkedin },
      { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    ],
  },
};

export const skillsData = [
  { name: "Python", icon: Code },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Deep Learning", icon: Lightbulb },
  { name: "SQL", icon: Database },
  { name: "MLOps", icon: Server },
  { name: "Data Visualization", icon: Paintbrush },
];

export const experienceData = [
  {
    company: "Tata Elxsi",
    role: "Data Scientist",
    period: "Sep 2022 - Present",
    description: "Developing and deploying machine learning models for various projects, focusing on recommendation systems and predictive analytics. Responsible for the end-to-end MLOps lifecycle to ensure models are robust and scalable.",
    rawTimeline: "At Tata Elxsi, from September 2022 to present, I am a Data Scientist. I develop and deploy machine learning models, specializing in recommendation systems and predictive analytics, and I manage the full MLOps lifecycle.",
  },
  {
    company: "Oyo",
    role: "Patron - Data Science",
    period: "Dec 2021 - Sep 2022",
    description: "Contributed to data science initiatives, working on data analysis and model building to support business decisions. Gained experience in handling large-scale datasets and collaborating with cross-functional teams.",
    rawTimeline: "As a Patron in Data Science at Oyo from December 2021 to September 2022, I contributed to data analysis and model building to support business decisions using large-scale datasets.",
  },
];

export const projectsData = [
  {
    id: "project1",
    title: "Movie Recommender System",
    description: "Built a content-based movie recommender system that suggests movies to users based on their preferences.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    imageUrlId: "project-alpha",
    projectDetails: "This project involved creating a recommender system for movies. I used Python and Scikit-learn for the core logic and Streamlit to build a simple web interface. The main challenge was to efficiently process movie metadata to create meaningful recommendations.",
  },
  {
    id: "project2",
    title: "Car Price Prediction",
    description: "Developed a regression model to predict the price of used cars based on their features.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    imageUrlId: "project-beta",
    projectDetails: "This project predicts the price of used cars. It uses Python with Pandas for data cleaning and Scikit-learn for building the regression model. The main outcome was a predictive tool that can help users estimate car values.",
  },
];

export const educationData = [
    {
        institution: "Vellore Institute of Technology",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        period: "2018 - 2022",
    }
];

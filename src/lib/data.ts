import { Github, Linkedin, Twitter, Code, BrainCircuit, Lightbulb, Database, Server, Paintbrush } from 'lucide-react';

export const personalData = {
  name: "Anish Raj",
  title: "Data Scientist @ Nomad Credit",
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
    company: "Nomad Credit",
    role: "Data Scientist",
    period: "Sep 2022 - Present",
    description: "Developing and deploying machine learning models for various projects, focusing on recommendation systems and predictive analytics. Responsible for the end-to-end MLOps lifecycle to ensure models are robust and scalable.",
    rawTimeline: "At Nomad Credit, from September 2022 to present, I am a Data Scientist. I develop and deploy machine learning models, specializing in recommendation systems and predictive analytics, and I manage the full MLOps lifecycle.",
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
    title: "Customer Churn Prediction",
    description: "Developed a model to predict customer churn, helping the business to retain customers.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    imageUrlId: "project-alpha",
    projectDetails: "This project focused on predicting customer churn for a telecom company. I used Python, Scikit-learn, and Pandas for data preprocessing, feature engineering, and model building. The resulting model helps identify at-risk customers, allowing for targeted retention strategies.",
  },
  {
    id: "project2",
    title: "Topic Modeling for large text data",
    description: "Built a topic model to identify latent topics from large-scale text data.",
    tech: ["Python", "NLTK", "Gensim"],
    imageUrlId: "project-beta",
    projectDetails: "In this project, I implemented Latent Dirichlet Allocation (LDA) to perform topic modeling on a large corpus of text documents. The goal was to uncover hidden thematic structures in the data. I used NLTK for text preprocessing and Gensim for the LDA model implementation.",
  },
];

export const educationData = [
    {
        institution: "Vellore Institute of Technology",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        period: "2018 - 2022",
    }
];

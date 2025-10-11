import { Github, Linkedin, Twitter, Code, Monitor, Server, Database, BrainCircuit, Paintbrush } from 'lucide-react';

export const personalData = {
  name: "Anish Raj",
  title: "Data Scientist",
  bio: "A passionate data scientist with a love for extracting insights from data to solve real-world problems. I blend statistical analysis and machine learning to build intelligent applications. This immersive CV is a testament to my dedication to showcasing data-driven projects.",
  contact: {
    email: "anish.raj@example.com",
    social: [
      { name: "GitHub", url: "https://github.com", icon: Github },
      { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
      { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    ],
  },
};

export const skillsData = [
  { name: "Python & R", icon: Code },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Data Visualization", icon: Paintbrush },
  { name: "SQL & BigQuery", icon: Database },
  { name: "Cloud Platforms (GCP)", icon: Server },
  { name: "Statistical Analysis", icon: Monitor },
];

export const experienceData = [
  {
    company: "Data Insights Corp.",
    role: "Lead Data Scientist",
    period: "2020 - Present",
    description: "Led a team of data scientists on projects related to predictive modeling and customer segmentation. Developed and deployed machine learning models that resulted in a 15% increase in customer retention. Specialized in natural language processing (NLP) for sentiment analysis.",
    rawTimeline: "At Data Insights Corp. from 2020 to present, I work as a Lead Data Scientist. I lead projects on predictive modeling and have deployed ML models that boosted customer retention by 15%. My focus is on NLP.",
  },
  {
    company: "Analytics Solutions",
    role: "Data Analyst",
    period: "2018 - 2020",
    description: "Performed data analysis and created dashboards to track key business metrics. Worked with large datasets to identify trends and provide actionable insights to stakeholders. Cleaned and preprocessed data to ensure accuracy for modeling.",
    rawTimeline: "During my time at Analytics Solutions between 2018 and 2020 as a Data Analyst, I analyzed data and built dashboards. I worked with large datasets to find trends and prepared data for modeling.",
  },
];

export const projectsData = [
  {
    id: "project1",
    title: "Customer Churn Prediction",
    description: "Developed a machine learning model to predict customer churn, achieving 92% accuracy. The model helps the business to proactively retain customers.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    imageUrlId: "project-alpha",
    projectDetails: "This project predicts customer churn. Technologies used: Python with Scikit-learn and Pandas for data manipulation and modeling. The challenge was handling imbalanced data. The outcome was a highly accurate model that provides value to the business.",
  },
  {
    id: "project2",
    title: "Sentiment Analysis of Reviews",
    description: "A project to analyze customer reviews using NLP techniques to determine sentiment. The results are visualized in an interactive dashboard.",
    tech: ["Python", "NLTK", "Tableau"],
    imageUrlId: "project-beta",
    projectDetails: "This project performs sentiment analysis on customer reviews. Technologies: Python with NLTK for natural language processing, and Tableau for data visualization. The main challenge was to handle slang and misspellings in the review text. The project provides a clear overview of customer sentiment.",
  },
];

export const educationData = [
    {
        institution: "University of Data Science",
        degree: "Master of Science in Data Science",
        period: "2016 - 2018",
    },
    {
        institution: "State University",
        degree: "Bachelor of Science in Statistics",
        period: "2012 - 2016",
    }
];

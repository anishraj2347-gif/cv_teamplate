import { Github, Linkedin, Twitter, Code, Database, BarChart, FileJson } from 'lucide-react';

export const personalData = {
  name: "Anish Raj",
  title: "Data Analyst | SQL, Python, Tableau Expert | Turning Data into Actionable Insights",
  bio: `I am a data-driven professional with a passion for transforming raw data into meaningful insights that drive business growth and innovation. As a Data Analyst at Nomad Credit, I specialize in leveraging SQL, Python, HubSpot and Tableau to clean, analyze, and visualize data, enabling smarter, data-backed decisions.

In my role, I have:
- Automated reporting workflows, reducing manual effort by 30% and improving team efficiency.
- Developed interactive dashboards in Tableau, providing real-time insights that led to a 15% increase in decision-making speed.
- Utilized Python for predictive modeling, uncovering trends that contributed to a 10% boost in revenue.

What sets me apart is my ability to bridge the gap between technical analysis and business strategy. I thrive on solving complex problems, telling compelling data stories, and delivering actionable recommendations that create tangible impact.

I am passionate about continuous learning and staying updated with the latest tools and technologies in data analytics. My goal is to contribute to innovative projects that push the boundaries of what data can achieve.

Let’s connect and explore how we can use data to drive success!`,
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
  { name: "SQL", icon: Database },
  { name: "Tableau", icon: BarChart },
  { name: "HubSpot", icon: FileJson },
  { name: "Machine Learning", icon: Code },
  { name: "Data Visualization", icon: BarChart },
];

export const experienceData = [
  {
    company: "Nomad Credit",
    role: "Data Analyst",
    period: "Sep 2022 - Present",
    description: "Automated reporting workflows, developed interactive dashboards in Tableau, and utilized Python for predictive modeling to drive business decisions.",
    rawTimeline: "At Nomad Credit, from September 2022 to present, I am a Data Analyst. I automate reporting, create Tableau dashboards, and use Python for predictive modeling.",
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

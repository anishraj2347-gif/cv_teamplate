import { Github, Linkedin, Twitter, Code, Database, BarChart, FileJson } from 'lucide-react';

export const personalData = {
  name: "Anish Raj",
  profilePictureUrlId: "profile-pic",
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
      { name: "GitHub", url: "https://github.com/anishraj2347-gif", icon: Github },
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
    role: "Junior Data Analyst",
    period: "Apr 2024 - Present",
    description: "Key skills include Data Visualization (Tableau, Hubspot, Power BI), Python, R, and SQL.",
  },
  {
    company: "Nomad Credit",
    role: "Data Specialist",
    period: "Mar 2022 - Mar 2024",
    description: "Focused on Data Analysis and Interpretation, and Data Visualization using Tableau, Hubspot, and Power BI.",
  },
  {
    company: "Amity Institute of Information Technology (AIIT), Amity University Patna",
    role: "Club Member - Techpreneurs",
    period: "Sep 2025 - Present",
    description: "Part-time role as a club member of the Techpreneurs group.",
  },
];

export const projectsData = [
  {
    id: "project3",
    title: "CRM Data Migration and Report Setup",
    description: "Successfully managed the migration of CRM data to a new platform, ensuring data integrity and setting up automated reporting.",
    tech: [],
    imageUrlId: "project-gamma",
    projectDetails: null,
  },
  {
    id: "project4",
    title: "Partnership Pipeline Data Cleanup",
    description: "Led a data cleanup and standardization project for the partnership pipeline, significantly improving data quality and reporting accuracy.",
    tech: [],
    imageUrlId: "project-delta",
    projectDetails: null,
  },
  {
    id: "project5",
    title: "Admissions & Loans Team Reporting",
    description: "Designed and built KPI dashboards for the Admissions and Loans teams, providing clear insights into team performance.",
    tech: [],
    imageUrlId: "project-epsilon",
    projectDetails: null,
  },
  {
    id: "project6",
    title: "Customer Success Productivity Analysis",
    description: "Analyzed customer success workflows to identify bottlenecks and provided data-driven recommendations that boosted team productivity.",
    tech: [],
    imageUrlId: "project-zeta",
    projectDetails: null,
  },
];

export const educationData = [
  {
      institution: "Amity University",
      degree: "B.Sc IT, Information Technology",
      period: "2025 - 2028",
  }
];

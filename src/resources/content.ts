import type {
  SiteConfig,
  Hero,
  CareerEntry,
  Project,
  GalleryItem,
  Contact,
} from "./types";

export const siteConfig: SiteConfig = {
  name: "Torin Borton-McCallum",
  title: "Torin Borton-McCallum | Personal Website",
  description:
    "Personal portfolio of Torin, a software engineer building thoughtful, well-crafted software.",
  resumeUrl: "/resume.pdf", // Place your resume PDF in /public
};

export const hero: Hero = {
  greeting: "Hi, I'm",
  name: "Torin",
  roles: [
    "Data Analyst",
    "Software Developer",
    "Technical Consultant",
    "Project Manager",
  ],
  bio: "I’m a Data Analyst with a background in software development, consulting, and project management. I enjoy solving challenging problems and helping people and organizations succeed by using technology in smart, innovative ways.",
  profileImage: "/profile.jpg",
};

export const career: CareerEntry[] = [
  {
    company: "Bruce Power",
    role: "Data Analyst - Project Moonshot",
    period: "2026 — Present",
    description:
      "Lead data engineering initiatives across departments, repointing asset-data objects to Databricks and designing reliable Silver and Gold tables that support Bruce Power’s reporting and analytics needs.",
  },
  {
    company: "Oracle",
    role: "Consulting Project Manager - NetSuite",
    period: "2025 — 2026",
    description:
      "Lead NetSuite consulting projects, designing custom workflows, automations, and integrations while guiding clients through system adoption and business process improvements.",
  },
  {
    company: "SEH Computer Systems Inc.",
    role: "Software Developer",
    period: "2024 — 2025",
    description:
      "Built software and Dashboard solutions for insurance companies, developing a .NET and Blazor-based rating engine to automate policy calculations and improve workflows.",
  },
  {
    company: "IBM",
    role: "Technical Account Associate",
    period: "2023-2024",
    description:
      "Supported enterprise clients with analytics solutions while building internal tools and dashboards used by technical teams to manage client insights and improve operations on open tickets.",
  },
];

export const projects: Project[] = [
  // Tech projects
  {
    type: "tech",
    title: "Handle",
    description:
      "A Wordle-style puzzle game that recognizes American Sign Language letters through hand landmark tracking.",
    tech: ["React", "JavaScript", "Firebase", "MediaPipe"],
    link: "https://github.com/Torin99/Handle",
    github: "https://github.com/Torin99/Handle",
  },

  // Events
  {
    type: "event",
    title: "HawkHacks",
    description:
      "Organized one of Ontario’s largest Hackathons, helping lead sponsor partnerships and event logistics to deliver a high-quality experience for 750+ participants.",
    role: "Vice President",
    date: "June 2024",
    link: "https://hawkhacks.ca/",
  },

  // Organizations
  {
    type: "org",
    title: "Laurier Computing Society",
    description:
      "Led a team of six event coordinators to plan and run events on career and skill development within computer science.",
    role: "Vice President",
    period: "2022 - 2024",
    link: "https://lauriercs.ca/",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Club Awards V1",
    description:
      "Team photo at the Faculty of Science Club awards where LCS won Club of the Year.",
    image: "/gallery/5.jpg",
  },
  {
    title: "Club Awards V2",
    description:
      "Another team photo at the Faculty of Science Club awards where LCS ran it back to back as Club of the Year!",
    image: "/gallery/3.jpg",
  },
  {
    title: "Grammas BDay",
    description: "Backyard Partying with my girl!",
    image: "/gallery/9.jpg",
  },
  {
    title: "Hockey Tourney",
    description: "The OG hockey line back together for another tourney.",
    image: "/gallery/10.png",
  },
  {
    title: "Celebrating a Great Year",
    description:
      "Team photo celebrating our awards for Event of the Year and Events Executive of the Year.",
    image: "/gallery/4.jpg",
  },
  {
    title: "Coaching Sessions",
    description: "Teaching rugrats how to hit homeruns!",
    image: "/gallery/1.jpg",
  },
  {
    title: "LCS Execs",
    description: "The executive team for the Laurier Computing Society!",
    image: "/gallery/6.jpg",
  },
  {
    title: "Graduation",
    description:
      "Graduating alongside my best friends... even though no one can jump at the same time.",
    image: "/gallery/7.jpg",
  },
  {
    title: "First Day at Oracle",
    description: "Celebrating My first day on the job!",
    image: "/gallery/8.jpg",
  },
  {
    title: "Slo-Pitch",
    description: "2025 Mens League Slo-Pitch Champs!",
    image: "/gallery/2.jpg",
  },
];

export const contact: Contact = {
  email: "torinmccallum@gmail.com",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/Torin99",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/torinwylder/",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/torinwylder/",
    },
    {
      platform: "Resume",
      url: "/resume.pdf",
    },
  ],
};

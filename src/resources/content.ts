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
  title: "Torin — Software Engineer",
  description:
    "Personal portfolio of Torin, a software engineer building thoughtful, well-crafted software.",
  resumeUrl: "/resume.pdf", // Place your resume PDF in /public
};

export const hero: Hero = {
  greeting: "Hi, I'm",
  name: "Torin",
  roles: ["Software Engineer", "Full-Stack Developer", "Systems Thinker"],
  bio: "I build thoughtful software with clean architecture and an eye for detail. Passionate about solving complex problems and crafting great user experiences.",
  profileImage: "/profile.jpg",
};

export const career: CareerEntry[] = [
  {
    company: "Oracle",
    role: "Functional Consultant - NetSuite",
    period: "2025 — Present",
    description:
      "Leading frontend architecture for a high-traffic SaaS platform. Migrated legacy codebase to Next.js, reducing load times by 40%.",
  },
  {
    company: "SEH Computer Systems Inc.",
    role: "Software Developer",
    period: "2024 — 2025",
    description:
      "Built real-time data pipelines and internal tooling used by 200+ employees. Shipped a customer-facing dashboard from zero to production.",
  },
  {
    company: "IBM",
    role: "Technical Account Associate",
    period: "2023-2024",
    description:
      "Full-stack development on a React / Node.js stack. Owned the notification system and contributed to the design system.",
  },
];

export const projects: Project[] = [
  // Tech projects
  {
    type: "tech",
    title: "DataFlow",
    description:
      "A real-time data pipeline visualizer that lets engineers debug complex event streams with an intuitive drag-and-drop interface.",
    tech: ["React", "TypeScript", "D3.js", "WebSockets"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    type: "tech",
    title: "Synth",
    description:
      "CLI tool for scaffolding microservice architectures with best-practice defaults, config generation, and CI/CD templates.",
    tech: ["Go", "Cobra", "Docker"],
    github: "https://github.com",
  },
  {
    type: "tech",
    title: "Paletteer",
    description:
      "A color palette generator that uses perceptual color science to produce accessible, harmonious palettes for design systems.",
    tech: ["Next.js", "Tailwind CSS", "Color.js"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    type: "tech",
    title: "Oku",
    description:
      "Minimalist reading tracker and book review journal with offline-first sync and Markdown export.",
    tech: ["React Native", "SQLite", "Cloudflare Workers"],
    link: "https://example.com",
  },

  // Events
  {
    type: "event",
    title: "HackCity 2024",
    description:
      "Organized a 200-person hackathon with 30+ sponsors, mentors from top tech companies, and $10k in prizes.",
    role: "Lead Organizer",
    date: "March 2024",
    link: "https://example.com",
  },
  {
    type: "event",
    title: "DevTalks Meetup Series",
    description:
      "Founded and hosted a monthly developer meetup featuring lightning talks, live coding, and networking.",
    role: "Founder & Host",
    date: "2023 — Present",
  },
  {
    type: "event",
    title: "Open Source Weekend",
    description:
      "Led a weekend sprint where 40 contributors shipped patches to popular open-source projects.",
    role: "Organizer",
    date: "October 2023",
    link: "https://example.com",
  },

  // Organizations
  {
    type: "org",
    title: "Code for Good",
    description:
      "Led a team of 15 volunteers building pro-bono software for local nonprofits, delivering 4 projects in one year.",
    role: "Chapter Lead",
    period: "2022 — Present",
    link: "https://example.com",
  },
  {
    type: "org",
    title: "University CS Society",
    description:
      "Ran workshops, hackathons, and industry panels for 500+ members as VP of the computer science society.",
    role: "Vice President",
    period: "2020 — 2022",
  },
  {
    type: "org",
    title: "Mentor Collective",
    description:
      "Mentored 10+ junior developers through a structured 6-month program covering career growth and technical skills.",
    role: "Senior Mentor",
    period: "2021 — 2023",
    link: "https://example.com",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Clean Architecture",
    description:
      "Building systems with clear boundaries and separation of concerns.",
    image: "/gallery/1.jpg",
  },
  {
    title: "Code Craftsmanship",
    description:
      "Writing expressive, well-tested code that stands the test of time.",
    image: "/gallery/2.jpg",
  },
  {
    title: "Deep Focus",
    description:
      "Solving hard problems with patience, curiosity, and a debugger.",
    image: "/gallery/3.jpg",
  },
  {
    title: "Dev Environment",
    description:
      "A productive workspace tuned for flow state and fast iteration.",
    image: "/gallery/4.jpg",
  },
  {
    title: "Debugging Sessions",
    description:
      "Tracing complex issues through layers of abstraction to their root cause.",
    image: "/gallery/5.jpg",
  },
  {
    title: "Collaboration",
    description:
      "Building great products together through code review and pair programming.",
    image: "/gallery/6.jpg",
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

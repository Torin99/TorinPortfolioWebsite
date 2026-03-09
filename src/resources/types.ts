export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  resumeUrl: string;
};

export type Hero = {
  greeting: string;
  name: string;
  roles: string[];
  bio: string;
  profileImage: string;
};

export type CareerEntry = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type TechProject = {
  type: "tech";
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

export type EventProject = {
  type: "event";
  title: string;
  description: string;
  role: string;
  date: string;
  link?: string;
};

export type OrgProject = {
  type: "org";
  title: string;
  description: string;
  role: string;
  period: string;
  link?: string;
};

export type Project = TechProject | EventProject | OrgProject;

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

export type Social = {
  platform: string;
  url: string;
};

export type Contact = {
  email: string;
  socials: Social[];
};

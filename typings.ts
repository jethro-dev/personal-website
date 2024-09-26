import { PortableTextBlock } from 'sanity';

export enum KEYWORDS {
  HTML = 'HTML',
  CSS = 'CSS',
  JavaScript = 'JavaScript',
  React = 'React',
  Next = 'Next',
  Python = 'Python',
  Django = 'Django',
  Java = 'Java',
  Shopify = 'Shopify',
  AWS = 'AWS',
  Node = 'Node',
  TypeScript = 'TypeScript',
  PostgreSQL = 'PostgreSQL',
  Frontend = 'Frontend',
  Backend = 'Backend',
  Fullstack = 'Fullstack',
  StableDiffusion = 'Stable Diffusion',
  APIs = 'APIs',
  AI = 'AI',
  Animations = 'Animations',
}

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
  url?: string;
  description: string;
  is_public: boolean;
  keywords: string[];
};

export type SimpleBlog = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  _createdAt: Date;
  _updatedAt: Date;
};

export type DetailedBlog = {
  _id: string;
  title: string;
  coverImage: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  content: PortableTextBlock[];
  _createdAt: Date;
  _updatedAt: Date;
};

export type AboutSectionData = {
  title: string;
  tldr: string[];
  paragraphs: { title: string; text: string }[];
};

export type ExperienceSectionData = {
  title: string;
  description: string;
  experience: Experience[];
};

export type Experience = {
  title: string;
  description: string[];
  organisation: string;
  startDate: Date;
  endDate: Date;
  is_present: boolean;
  keywords: string[];
};

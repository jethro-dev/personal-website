export enum KEYWORDS {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  React = "React",
  Next = "Next",
  Python = "Python",
  Django = "Django",
  Java = "Java",
  Shopify = "Shopify",
  AWS = "AWS",
  Node = "Node",
  TypeScript = "TypeScript",
  PostgreSQL = "PostgreSQL",
  Frontend = "Frontend",
  Backend = "Backend",
  Fullstack = "Fullstack",
  StableDiffusion = "Stable Diffusion",
  APIs = "APIs",
  AI = "AI",
  Animations = "Animations",
}

export type Project = {
  title: string;
  link: string;
  src: string;
  description: string;
  keywords: string[];
  slug: string;
  is_private: boolean;
};

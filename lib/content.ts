import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';

const contentDir = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  content: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: string;
  isPublic: boolean;
  description: string;
  keywords: string[];
  createdAt: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string | string[];
  organisation: string;
  startDate: string;
  endDate: string | null;
  isPresent: boolean;
  keywords: string[];
}

export interface HomePageData {
  hero?: {
    title: string;
    paragraph: string;
  };
  about?: {
    title: string;
    paragraphs: Array<{ title: string; text: string }>;
    tldr: string[];
  };
  experience?: Experience[];
}

// Get all blog posts for a specific locale
export async function getBlogPosts(locale: string = 'en'): Promise<BlogPost[]> {
  const blogsDir = path.join(contentDir, locale, 'blogs');

  if (!fs.existsSync(blogsDir)) {
    return [];
  }

  const files = fs.readdirSync(blogsDir);

  const blogs = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(blogsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        return {
          ...data,
          content,
          slug: file.replace('.mdx', ''),
          readingTime: readingTime(String(content))
        } as BlogPost;
      })
  );

  // Sort by publishedAt date (newest first)
  return blogs.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Get a single blog post
export async function getBlogPost(slug: string, locale: string = 'en'): Promise<BlogPost | null> {
  const filePath = path.join(contentDir, locale, 'blogs', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    // Fallback to English if translation doesn't exist
    const enFilePath = path.join(contentDir, 'en', 'blogs', `${slug}.mdx`);
    if (!fs.existsSync(enFilePath)) {
      return null;
    }
    const fileContent = fs.readFileSync(enFilePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      ...data,
      content,
      slug,
      readingTime: readingTime(String(content))
    } as BlogPost;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    ...data,
    content,
    slug,
    readingTime: readingTime(content)
  } as BlogPost;
}

// Get related blog posts based on tags
export async function getRelatedBlogs(tags: string[], locale: string = 'en', excludeSlug?: string): Promise<BlogPost[]> {
  const allBlogs = await getBlogPosts(locale);

  // Filter blogs that have at least one matching tag
  const relatedBlogs = allBlogs
    .filter(blog => blog.slug !== excludeSlug)
    .filter(blog => blog.tags?.some(tag => tags?.includes(tag)))
    .slice(0, 3);

  return relatedBlogs;
}

// Get all projects
export function getProjects(locale: string = 'en'): Project[] {
  const projectsPath = path.join(contentDir, locale, 'projects', 'projects.json');

  if (!fs.existsSync(projectsPath)) {
    // Fallback to English
    const enProjectsPath = path.join(contentDir, 'en', 'projects', 'projects.json');
    if (fs.existsSync(enProjectsPath)) {
      return JSON.parse(fs.readFileSync(enProjectsPath, 'utf-8'));
    }
    return [];
  }

  return JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
}

// Get all experiences
export function getExperiences(locale: string = 'en'): Experience[] {
  const experiencesPath = path.join(contentDir, locale, 'experiences', 'experiences.json');

  if (!fs.existsSync(experiencesPath)) {
    // Fallback to English
    const enExperiencesPath = path.join(contentDir, 'en', 'experiences', 'experiences.json');
    if (fs.existsSync(enExperiencesPath)) {
      return JSON.parse(fs.readFileSync(enExperiencesPath, 'utf-8'));
    }
    return [];
  }

  return JSON.parse(fs.readFileSync(experiencesPath, 'utf-8'));
}

// Get portfolio projects
export function getPortfolioProjects(locale: string = 'en'): any[] {
  const portfolioProjectsPath = path.join(contentDir, locale, 'projects', 'portfolio-projects.json');

  if (!fs.existsSync(portfolioProjectsPath)) {
    // Fallback to English
    const enPortfolioProjectsPath = path.join(contentDir, 'en', 'projects', 'portfolio-projects.json');
    if (fs.existsSync(enPortfolioProjectsPath)) {
      return JSON.parse(fs.readFileSync(enPortfolioProjectsPath, 'utf-8'));
    }
    return [];
  }

  return JSON.parse(fs.readFileSync(portfolioProjectsPath, 'utf-8'));
}

// Get home page data
export function getHomePageData(locale: string = 'en'): HomePageData {
  const homePath = path.join(contentDir, locale, 'home.json');

  if (!fs.existsSync(homePath)) {
    // Fallback to English
    const enHomePath = path.join(contentDir, 'en', 'home.json');
    if (fs.existsSync(enHomePath)) {
      return JSON.parse(fs.readFileSync(enHomePath, 'utf-8'));
    }
    return {};
  }

  return JSON.parse(fs.readFileSync(homePath, 'utf-8'));
}

// Get all blog slugs (for static generation)
export function getAllBlogSlugs(): string[] {
  const blogsDir = path.join(contentDir, 'en', 'blogs');

  if (!fs.existsSync(blogsDir)) {
    return [];
  }

  return fs.readdirSync(blogsDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''));
}

// Compile MDX content
export async function compileBlogContent(content: string) {
  const compiled = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    },
  });

  return compiled;
}
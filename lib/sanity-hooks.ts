"use client";

import { cache } from 'react';
import { client } from './sanity';
import { groq } from 'next-sanity';
import { 
  DetailedBlog, 
  SimpleBlog, 
  Project, 
  AboutSectionData, 
  ExperienceSectionData 
} from '@/typings';

// React 19 cache for server-side data fetching optimization
export const getCachedBlogs = cache(async (): Promise<SimpleBlog[]> => {
  const query = groq`*[_type == "blog" && !(_id in path("drafts.**"))] | order(_createdAt desc){
    _id,
    _createdAt,
    _updatedAt,
   title,
   description,
   "slug":slug.current,
   "coverImage":coverImage.asset,
}`;

  return await client.fetch<SimpleBlog[]>(query);
});

export const getCachedProjects = cache(async (): Promise<Project[]> => {
  const query = groq`*[_type=='project'] {
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      "image":image.asset,
      url,
      content,
      is_public,
      description,
      "keywords": keywords[]->name 
    }`;

  return await client.fetch<Project[]>(query);
});

export const getCachedBlog = cache(async (slug: string): Promise<DetailedBlog> => {
  const query = groq`*[_type=='blog' &&  slug.current == "${slug}"] {
    _id,_createdAt,_updatedAt,
    "slug":slug.current,
    title,
    content,
    "coverImage":coverImage.asset,
    description,
    category,
    tags
}[0]`;

  return await client.fetch<DetailedBlog>(query);
});

export const getCachedHeroData = cache(async () => {
  const query = groq`*[_type=='page' && title == 'Home'][0].section[_type == 'heroSection'][0]{
    title,paragraph
  }`;

  return await client.fetch(query);
});

export const getCachedAboutData = cache(async (): Promise<AboutSectionData> => {
  const query = groq`*[_type=='page' && title == 'Home'][0].section[_type=='aboutSection'][0]{
    title,tldr[],
    paragraphs[]{title,text}
  }`;

  return await client.fetch<AboutSectionData>(query);
});

export const getCachedExperienceData = cache(async (): Promise<ExperienceSectionData> => {
  const query = groq`*[_type=='page' && title == 'Home'][0].section[_type=='experienceSection'][0]{
    title,description,
      experience[]->{title,description,organisation,startDate,endDate,is_present,"keywords": keywords[]->name }
  }`;

  return await client.fetch<ExperienceSectionData>(query);
});

// React 19 use() compatible promise creators
export function createBlogsPromise(): Promise<SimpleBlog[]> {
  return getCachedBlogs();
}

export function createProjectsPromise(): Promise<Project[]> {
  return getCachedProjects();
}

export function createBlogPromise(slug: string): Promise<DetailedBlog> {
  return getCachedBlog(slug);
}

export function createHeroPromise() {
  return getCachedHeroData();
}

export function createAboutPromise(): Promise<AboutSectionData> {
  return getCachedAboutData();
}

export function createExperiencePromise(): Promise<ExperienceSectionData> {
  return getCachedExperienceData();
}
"use server";

import {
  AboutSectionData,
  DetailedBlog,
  ExperienceSectionData,
  Project,
  SimpleBlog,
} from "@/typings";
import { groq } from "next-sanity";
import { client } from "./sanity";

// Get all projects
export async function getProjects(locale: string = 'en'): Promise<Project[]> {
  const query = groq`*[_type=='project' && language == $locale] {
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

  const data = await client.fetch<Project[]>(query, { locale });

  return data;
}

// Get all blogs
export async function getBlogs(locale: string = 'en'): Promise<SimpleBlog[]> {
  const query = groq`*[_type == "blog" && language == $locale && !(_id in path("drafts.**"))] | order(_createdAt desc){
    _id,
    _createdAt,
    _updatedAt,
   title,
   description,
   "slug":slug.current,
   "coverImage":coverImage.asset,
}`;

  const data = await client.fetch<SimpleBlog[]>(query, { locale });

  return data;
}

// Get blog by slug
export async function getBlog(slug: string, locale: string = 'en'): Promise<DetailedBlog> {
  const query = groq`*[_type=='blog' && slug.current == $slug && language == $locale] {
    _id,_createdAt,_updatedAt,
    "slug":slug.current,
    title,
    content,
    "coverImage":coverImage.asset,
    description,
    category,
    tags

}[0]`;
  const data = await client.fetch<DetailedBlog>(query, { slug, locale });
  return data;
}

// Get Related Blogs by Tags
export async function getRelatedBlogs(tags: string[]): Promise<DetailedBlog[]> {
  const query = groq`*[_type=='blog'] {
    _id,_createdAt,_updatedAt,
    "slug":slug.current,
    title,
    content,
    "coverImage":coverImage.asset,
    description,
    category,
    tags

}`;
  const data = await client.fetch<DetailedBlog[]>(query);
  return data;
}

// Get about section data
export async function getAboutSectionData(locale: string = 'en'): Promise<AboutSectionData> {
  const query = groq`*[_type=='page' && title == 'Home' && language == $locale][0].section[_type=='aboutSection'][0]{
    title,tldr[],
    paragraphs[]{title,text}
  }`;
  const data = await client.fetch<AboutSectionData>(query, { locale });
  return data;
}

// Get experience section data
export async function getExperienceSectionData(locale: string = 'en'): Promise<ExperienceSectionData> {
  const query = groq`*[_type=='page' && title == 'Home' && language == $locale][0].section[_type=='experienceSection'][0]{
    title,description,
      experience[]->{title,description,organisation,startDate,endDate,is_present,"keywords": keywords[]->name }
  }`;
  const data = await client.fetch<ExperienceSectionData>(query, { locale });
  return data;
}

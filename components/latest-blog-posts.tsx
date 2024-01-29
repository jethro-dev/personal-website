import React from "react";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { client, urlFor } from "@/lib/sanity";
import { SimpleBlog } from "@/typings";
import Image from "next/image";
import Link from "next/link";

type Props = {};

type Post = {
  title: string;
  link: string;
  src: string;
  description: string;
};

async function getBlogs() {
  const query = `*[_type=='blog'] | order(_createdAt desc) {
    title,
    "description":smallDescription,
    "slug":slug.current,
    "image":coverImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export const LatestBlogPosts = async ({}: Props) => {
  const blogs: SimpleBlog[] = await getBlogs();
  console.log({ blogs });
  if (!blogs) {
    return null;
  }
  return (
    <div id="blog" className="px-10 py-40 flex items-center justify-center">
      <div>
        <div className="flex-1">
          <div className="text-center">
            <TypographyH1>Featured Blogs</TypographyH1>
            <TypographyP className="mt-2">
              Here are some featured blogs
            </TypographyP>
          </div>

          <div className="max-w-7xl mx-auto mt-10 flex justify-between gap-4">
            {blogs.map((post, i) => (
              <Blog key={i} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = ({ title, description, slug, image }: SimpleBlog) => (
  <div className="flex-1">
    <Link href={`/blogs/${slug}`}>
      <div className="relative w-full aspect-video rounded-md bg-neutral-200 overflow-hidden">
        <Image
          src={urlFor(image).url()}
          alt="title"
          fill
          className="object-cover object-center hover:brightness-50 transition"
        />
      </div>
    </Link>

    <Link href={`/blogs/${slug}`}>
      <h3 className="mt-4 font-semibold line-clamp-1 hover:underline">
        {title}
      </h3>
    </Link>
    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
      {description}
    </p>
  </div>
);

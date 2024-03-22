import React from "react";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { client, urlFor } from "@/lib/sanity";
import { SimpleBlog } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/lib/sanity-utils";
import { BlogCard } from "./blog-card";

type Props = {};

export const LatestBlogPosts = async ({}: Props) => {
  const blogs: SimpleBlog[] = await getBlogs();
  if (!blogs) {
    return null;
  }
  return (
    <div
      id="blogs"
      className="px-10 py-40 flex items-center justify-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <div className="flex-1">
          <div className="text-center">
            <TypographyH1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-4">
              Featured Blogs
            </TypographyH1>
            <TypographyP className="lg:mt-6">
              Here are my featured blog posts
            </TypographyP>
          </div>

          <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row items-stretch justify-between gap-4">
            {blogs.map((post, i) => (
              // <Blog key={i} {...post} />
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

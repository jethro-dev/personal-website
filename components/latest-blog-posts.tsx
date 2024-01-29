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

// const posts: Post[] = [
//   {
//     title: "NFT Landing Page",
//     link: "/",
//     src: "",
//     description:
//       "Discover my NFT Landing Page: a captivating fusion of design and animations, offering a visual journey into the world of digital art. Explore the unique essence of each NFT collection through an engaging and seamless platform.",
//   },
//   {
//     title: "AI Environmment Generator",
//     link: "/",
//     src: "",
//     description: "Lorem ipsum dolor sit amet.",
//   },
//   {
//     title: "StudyBud",
//     link: "/",
//     src: "",
//     description:
//       "Study Bud is a full-stack social media application development in Django's Model-View-Template (MVT) architecture. Built with Python, Django, PostgreSQL. Secure user login and authentication. Start the chat by creating a room and choose a topic!",
//   },
// ];

async function getBlogs() {
  const query = `*[_type=='blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "slug":slug.current,
    "image":coverImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export const LatestBlogPosts = async ({}: Props) => {
  const posts: SimpleBlog[] = await getBlogs();
  console.log({ posts });
  if (!posts) {
    return null;
  }
  return (
    <div id="blog" className="px-10 py-40 flex items-center justify-center">
      <div>
        <div className="flex-1">
          <div className="text-center">
            <TypographyH1>Featured Blog Posts</TypographyH1>
            <TypographyP className="mt-2">
              Here are some featured blog posts
            </TypographyP>
          </div>

          <div className="max-w-7xl mx-auto mt-10 flex justify-between gap-4">
            {posts.map((post, i) => (
              <PostCard key={i} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCard = ({ title, smallDescription, slug, image }: SimpleBlog) => (
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
      {smallDescription}
    </p>
  </div>
);

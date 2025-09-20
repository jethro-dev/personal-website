import { ConnectBanner } from "@/components/connect-banner";
import { urlFor } from "@/lib/sanity";
import { getBlogs } from "@/lib/sanity-utils";
import { cn } from "@/lib/utils";
import { SimpleBlog } from "@/typings";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const BlogsMainPage = async (props: Props) => {
  const blogs: SimpleBlog[] = await getBlogs();

  function formatDate(date: Date) {
    // Format the month as a short name followed by a period
    const month = format(new Date(date), "MMM"); // 'Apr'

    // Format the day with the suffix
    const day = format(new Date(date), "do"); // '17th'

    // Format the year as four digits
    const year = format(new Date(date), "yyyy"); // '2024'

    return `${month}. ${day} ${year}`;
  }

  const blogsWithGrid = blogs.map((blog, index) => {
    // Define default grid spans
    let rowSpan = "row-span-3";

    // Customize grid spans based on the position or other logic
    if (index === 0) {
      rowSpan = "row-span-7"; // Larger featured post
    } else if (index === 2 || index === 3) {
      rowSpan = "row-span-4"; // Slightly larger post
    }

    return { ...blog, rowSpan };
  });
  return (
    <main>
      <div className="mt-20 mb-40 container max-w-7xl pt-20">
        <h1 className="text-4xl font-medium">All Posts</h1>
        <div className="mt-20 grid grid-cols-3 grid-rows-7 h-[600px] gap-6">
          {blogsWithGrid.slice(0, 5).map((blog) => (
            <Link
              href={`blogs/${blog.slug}`}
              key={blog.slug} // Assuming each blog has a unique slug
              className={cn(
                `group relative border border-white/20 overflow-hidden rounded-md col-span-1 hover:cursor-pointer`,
                blog.rowSpan
              )}
            >
              <div className="bg-black absolute inset-0 z-10 opacity-50"></div>
              <Image
                src={urlFor(blog.coverImage).url()}
                alt="Blog cover image"
                fill
                className="object-center object-cover brightness-50 group-hover:brightness-100 transition-all"
              />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="font-semibold text-xl">{blog.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/profile.jpeg"
                      alt="Jethro Au's profile picture"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <p className="text-sm font-medium text-muted-foreground">
                      Jethro Au
                    </p>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {formatDate(blog._createdAt)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <h1 className="mt-20 text-4xl font-medium">Latest</h1>
        <div className="mt-20 grid grid-cols-2 gap-6">
          <div className="border border-border rounded-md col-span-1">A</div>
          <div className="border border-border rounded-md col-span-1">B</div>
        </div> */}
      </div>
      <ConnectBanner />
    </main>
  );
};

export default BlogsMainPage;

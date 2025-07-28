'use client';

import React, { Suspense, use } from 'react';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import { BlogCard } from './blog-card';
import { Button } from './ui/button';
import Link from 'next/link';
import { createBlogsPromise } from '@/lib/sanity-hooks';
import { SimpleBlog } from '@/typings';

type Props = {
  blogsPromise: Promise<SimpleBlog[]>;
};

// Loading skeleton for blogs
function BlogsSkeleton() {
  return (
    <div className="px-10 py-40 flex items-center justify-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <div className="flex-1">
          <div className="text-center">
            <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse mb-4 max-w-md mx-auto"></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse w-64 mx-auto"></div>
          </div>

          <div className="relative max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row items-stretch justify-between gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="max-w-sm w-full">
                <div className="p-8 w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/[0.2] h-auto rounded-xl">
                  <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse mb-4"></div>
                  <div className="h-60 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse mb-6"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog content component using React 19's use() hook
function BlogsContent({ blogsPromise }: Props) {
  // React 19 use() hook for data fetching with Suspense
  const blogs = use(blogsPromise);

  if (!blogs || blogs.length === 0) {
    return (
      <div className="px-10 py-40 flex items-center justify-center">
        <div className="text-center">
          <TypographyH1 className="text-5xl font-bold mb-4">No Blogs Found</TypographyH1>
          <TypographyP>Check back later for new content!</TypographyP>
        </div>
      </div>
    );
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
            <TypographyH1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-20 gradient-text pb-4">
              Featured Blogs
            </TypographyH1>
            <TypographyP className="lg:mt-6">
              Here are my featured blog posts
            </TypographyP>
          </div>

          <div className="relative max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row items-stretch justify-between gap-4">
            <Button className="absolute bottom-[100%] mb-10 right-0" asChild>
              <Link href={"/blogs"}>Read more blogs</Link>
            </Button>
            {blogs.slice(0, 3).map((post, i) => (
              <BlogCard key={post._id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Blogs component with Suspense boundary
export const BlogsModern = () => {
  const blogsPromise = createBlogsPromise();

  return (
    <Suspense fallback={<BlogsSkeleton />}>
      <BlogsContent blogsPromise={blogsPromise} />
    </Suspense>
  );
};
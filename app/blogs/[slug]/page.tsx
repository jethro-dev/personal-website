import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyP } from "@/components/ui/typography-p";
import { client, urlFor } from "@/lib/sanity";
import { FullBlog, SimpleBlog } from "@/typings";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { ConnectBanner } from "@/components/connect-banner";
import { getBlogs } from "@/components/latest-blog-posts";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  const query = `*[_type=='blog' &&  slug.current == "${slug}"] {
    "slug":slug.current,
    title,
    content,
    "image":coverImage,
    "description":smallDescription
      
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

const BlogPage = async ({ params }: Props) => {
  const blog: FullBlog = await getBlog(params.slug);

  return (
    <main>
      <header className="mt-20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <TypographyH1 className="text-5xl lg:text-7xl">
            {blog.title}
          </TypographyH1>
          <TypographyP className="mt-4 w-3/5">{blog.description}</TypographyP>
        </div>
      </header>

      <div className="py-0 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border p-2 rounded-md">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <Image
                src={urlFor(blog.image).url()}
                alt={blog.title}
                fill
                className="object-center object-cover"
                priority
              />
            </div>
          </div>

          <div className="my-20 prose dark:prose-invert prose-sm lg:prose-lg prose-li:marker:text-primary">
            <PortableText
              value={blog.content}
              // components={/* optional object of custom components to use */}
            />
          </div>
        </div>
      </div>
      <ConnectBanner />
    </main>
  );
};

export async function generateStaticParams() {
  const blogs: SimpleBlog[] = await getBlogs();
  return blogs.map((blogs) => ({
    slug: blogs.slug,
  }));
}

export default BlogPage;

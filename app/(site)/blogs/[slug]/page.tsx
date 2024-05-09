import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyP } from "@/components/ui/typography-p";
import { client, urlFor } from "@/lib/sanity";
import { DetailedBlog, SimpleBlog } from "@/typings";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { ConnectBanner } from "@/components/connect-banner";
import { unstable_noStore as noStore, unstable_cache } from "next/cache";
import { getBlog, getBlogs, getRelatedBlogs } from "@/lib/sanity-utils";
import { format, parseISO } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// you can also choose styles such as prism/dracula
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeBlock from "@/components/code-block";

type Props = {
  params: { slug: string };
};

export const revalidate = 60; // revalidate at most every minutes

export async function generateMetadata({ params }: Props) {
  const blog: DetailedBlog = await getBlog(params.slug);
  return {
    title: blog.title,
  };
}

const BlogPage = async ({ params }: Props) => {
  let { slug } = params;

  let blog = await getBlog(slug);
  let relatedBlogs = await getRelatedBlogs(blog.tags);
  const formattedDate = format(
    parseISO(blog._createdAt.toString()),
    "eeee, MMMM do yyyy"
  );

  const serializers = {
    types: {
      // @ts-ignore
      code: ({ value }) => <CodeBlock value={value} />,
      // Add other type serializers as needed
    },
  };

  return (
    <main>
      <header className="relative mt-20">
        {/* gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 to-purple-900 brightness-50"></div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[80%] to-black"></div>
        <div className="absolute inset-0 -z-10 test"></div>

        <div className="max-w-7xl container grid grid-cols-12 py-6">
          <div className="col-span-9">
            <div className="flex items-center text-muted-foreground text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Back to Blog</span>
            </div>
            <div className="mt-16 flex items-center gap-4">
              <div className="px-3 py-2 rounded-full bg-violet-500 text-sm font">
                {blog.category}
              </div>
              <span className="text-sm text-muted-foreground">
                {formattedDate}
              </span>
            </div>
            <h1 className="mt-4 text-6xl font-bold">{blog.title}</h1>
            <p className="text-xl mt-10 text-muted-foreground font-medium">
              {blog.description}
            </p>
          </div>
        </div>
      </header>

      <div className="container max-w-7xl grid grid-cols-12 mt-16">
        <div className="col-span-9 pr-10">
          <div className="">
            <div className="border p-2 rounded-md">
              <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <Image
                  src={urlFor(blog.coverImage).url()}
                  alt={blog.title}
                  fill
                  className="object-center object-cover"
                  priority
                />
              </div>
            </div>

            <div className="my-20 prose dark:prose-invert prose-sm lg:prose-lg prose-li:marker:text-primary">
              <PortableText value={blog.content} components={serializers} />
            </div>
          </div>
        </div>
        <div className="col-span-3 border-l border-white/20 pl-10">
          <p className="text-muted-foreground text-sm mb-6">Posted by</p>
          <div className="flex gap-2 items-center">
            <Image
              src="/profile.jpeg"
              alt="Jethro Au's profile pciture"
              width={40}
              height={40}
              className="rounded-full"
            />

            <div>
              <p className="text-sm font-medium">Jethro Au</p>
              <p className="text-muted-foreground text-sm">Software Engineer</p>
            </div>
          </div>

          {/* related readings */}
          <p className="mt-20 text-muted-foreground text-sm mb-6">
            Related readings
          </p>
          {relatedBlogs.map((blog) => (
            <div className="mt-6" key={blog._id}>
              <p className="text-md font-medium">{blog.title}</p>
              <div className="mt-2 flex items-center gap-2">
                <Image
                  src="/profile.jpeg"
                  alt="Jethro Au's profile pciture"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="text-sm text-muted-foreground">Jethro Au</p>
              </div>
            </div>
          ))}
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

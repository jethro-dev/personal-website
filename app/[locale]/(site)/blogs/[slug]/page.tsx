import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyP } from "@/components/ui/typography-p";
import Image from "next/image";
import React from "react";
import { ConnectBanner } from "@/components/connect-banner";
import { unstable_noStore as noStore, unstable_cache } from "next/cache";
import { getBlogPost, getRelatedBlogs, getAllBlogSlugs } from "@/lib/content";
import { getLocale } from 'next-intl/server';
import { format, parseISO } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeBlock from "@/components/code-block";
import remarkGfm from 'remark-gfm';

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export const revalidate = 60; // revalidate at most every minutes

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const blog = await getBlogPost(slug, locale);

  if (!blog) {
    return {
      title: 'Blog Post Not Found'
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

const BlogPage = async ({ params }: Props) => {
  let { slug } = await params;
  const locale = await getLocale();

  let blog = await getBlogPost(slug, locale);

  if (!blog) {
    return (
      <main>
        <div className="container mt-40">
          <h1 className="text-4xl font-bold">Blog post not found</h1>
          <p className="mt-4">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </main>
    );
  }

  let relatedBlogs = await getRelatedBlogs(blog.tags, locale, slug);
  const formattedDate = format(
    parseISO(blog.publishedAt),
    "eeee, MMMM do yyyy"
  );

  const components = {
    // Handle code blocks with syntax highlighting
    pre: (props: any) => {
      // The pre element wraps a code element in MDX
      const codeElement = props.children;

      if (codeElement?.props) {
        // Extract language from className (e.g., "language-javascript")
        const className = codeElement.props.className || '';
        const match = /language-(\w+)/.exec(className);
        const language = match ? match[1] : 'text';

        // Get the actual code text from the code element's children
        const code = codeElement.props.children || '';

        return <CodeBlock value={{ language, code: String(code) }} />;
      }

      // Fallback for plain pre blocks
      return <pre {...props} />;
    },
    // Handle inline code
    code: ({ children, className }: any) => {
      // If it has a className, it's part of a code block (handled by pre)
      if (className) {
        return <code className={className}>{children}</code>;
      }

      // Otherwise it's inline code
      return (
        <code className="bg-gray-800 px-1 py-0.5 rounded text-sm">{children}</code>
      );
    },
  };

  return (
    <main>
      <header className="relative mt-20">
        {/* gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 to-purple-900 brightness-50"></div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[80%] to-black"></div>
        <div className="absolute inset-0 -z-10 test"></div>

        <div className="container grid grid-cols-12 py-6">
          <div className="col-span-9">
            <Link href={`/${locale}/blogs`} className="flex items-center text-muted-foreground text-sm font-medium hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Back to Blog</span>
            </Link>
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
            {blog.readingTime && (
              <p className="text-sm text-muted-foreground mt-4">
                {blog.readingTime.text}
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="container grid grid-cols-12 mt-16">
        <div className="col-span-9 pr-10">
          <div className="">
            <div className="border p-2 rounded-md">
              <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-center object-cover"
                  priority
                />
              </div>
            </div>

            <div className="my-20 prose dark:prose-invert prose-sm lg:prose-lg prose-li:marker:text-primary prose-code:before:content-none prose-code:after:content-none">
              <MDXRemote
                source={blog.content}
                components={components}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    development: false,
                  }
                }}
              />
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
          {relatedBlogs.length > 0 && (
            <>
              <p className="mt-20 text-muted-foreground text-sm mb-6">
                Related readings
              </p>
              {relatedBlogs.map((blog) => (
                <Link href={`/${locale}/blogs/${blog.slug}`} key={blog.slug} className="block mt-6 group">
                  <p className="text-md font-medium group-hover:text-primary transition-colors">{blog.title}</p>
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
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      <ConnectBanner />
    </main>
  );
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default BlogPage;
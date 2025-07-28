"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project, SimpleBlog } from "@/typings";
import { urlFor } from "@/lib/sanity";
import { Badge } from "./badge";
import Link from "next/link";
import { BlogInteractions } from "./blog-interactions";

export function BlogCard({ title, description, slug, coverImage }: SimpleBlog) {
  return (
    <CardContainer containerClassName="max-w-sm w-full h-full">
      <CardBody className="p-8 w-full max-w-sm bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl border">
        <Link href={`/blogs/${slug}`}>
          <CardItem
            translateZ="50"
            as={"h3"}
            className="text-xl font-bold gradient-text hover:underline"
          >
            {title}
          </CardItem>
        </Link>
        
        <Link href={`/blogs/${slug}`}>
          <CardItem
            translateZ="40"
            className="w-full mt-4"
          >
            <Image
              src={urlFor(coverImage).url()}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </Link>
        
        <Link href={`/blogs/${slug}`}>
          <CardItem
            as="p"
            translateZ="40"
            className="text-sm max-w-sm mt-6 text-muted-foreground line-clamp-3 hover:text-foreground transition-colors"
          >
            {description}
          </CardItem>
        </Link>

        <CardItem translateZ="30" className="w-full">
          <BlogInteractions blogId={slug} initialLikes={0} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

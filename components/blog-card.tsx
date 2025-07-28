"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project, SimpleBlog } from "@/typings";
import { urlFor } from "@/lib/sanity";
import { Badge } from "./badge";
import Link from "next/link";

export function BlogCard({ title, description, slug, coverImage }: SimpleBlog) {
  return (
    <Link href={`/blogs/${slug}`}>
      <CardContainer containerClassName="max-w-sm w-full h-full">
        <CardBody className="p-8 w-full max-w-sm bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl border">
          <CardItem
            translateZ="50"
            as={"h3"}
            className="text-xl font-bold gradient-text"
          >
            {title}
          </CardItem>
          <CardItem
            translateZ="40"
            //   rotateX={20}
            //   rotateZ={-10}
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
          <CardItem
            as="p"
            translateZ="40"
            className="text-sm max-w-sm mt-6 text-muted-foreground line-clamp-3"
          >
            {description}
          </CardItem>

        </CardBody>
      </CardContainer>
    </Link>
  );
}

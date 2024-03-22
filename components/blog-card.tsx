"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project, SimpleBlog } from "@/typings";
import { urlFor } from "@/lib/sanity";
import { Badge } from "./badge";

export function BlogCard({ title, description, slug, coverImage }: SimpleBlog) {
  return (
    <CardContainer containerClassName="max-w-sm w-full h-full">
      <CardBody className="p-8 w-full max-w-sm bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl border">
        <CardItem
          translateZ="50"
          as={"h3"}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
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

        {/* <div className="mt-4 w-full flex items-center flex-wrap gap-2">
          {keywords?.map((keyword) => (
            <CardItem translateZ={40}>
              <Badge key={keyword} text={keyword} />
            </CardItem>
          ))}
        </div> */}
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            // translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live site →
          </CardItem>
          <CardItem
            translateZ={20}
            // translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            GitHub
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}

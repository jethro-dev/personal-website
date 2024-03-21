"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project } from "@/typings";
import { urlFor } from "@/lib/sanity";
import { Badge } from "./badge";
import { Eye, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button as MovingBorderButton } from "./ui/moving-border";
import { Button } from "./ui/button";
import { DrawerDemo } from "./drawer";

export function AboutMeCard({}) {
  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[16rem] h-auto rounded-xl p-6 border flex flex-col items-center cursor-pointer">
        <CardItem
          translateZ="40"
          //   rotateX={20}
          //   rotateZ={-10}
          className=""
        >
          <Image
            src={"/profile.jpeg"}
            height="1000"
            width="1000"
            className="h-20 w-20 object-cover aspect-square rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as={"h1"}
          translateZ="50"
          className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Jethro Au
          </span>
        </CardItem>
        <CardItem
          as="p"
          translateZ="40"
          className="mt-2 text-xs text-muted-foreground max-w-sm line-clamp-1"
        >
          Software Enginer
        </CardItem>
        <div className="mt-4 w-full flex items-center justify-center flex-wrap gap-2">
          <CardItem translateZ="40">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full w-8 h-8"
              asChild
            >
              <Link href="https://www.linkedin.com/in/galongau/">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </Link>
            </Button>
          </CardItem>
          <CardItem translateZ="40">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full w-8 h-8"
              asChild
            >
              <Link href="https://github.com/jethro-dev">
                <Github className="h-4 w-4 text-muted-foreground" />
              </Link>
            </Button>
          </CardItem>
        </div>

        <CardItem
          translateZ={40}
          // translateX={-40}

          className="mt-6"
        >
          <DrawerDemo />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

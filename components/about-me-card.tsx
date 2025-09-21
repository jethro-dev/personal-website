"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project } from "@/typings";
import { Badge } from "./badge";
import { Eye, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button as MovingBorderButton } from "./ui/moving-border";
import { Button } from "./ui/button";
import { DrawerDemo } from "./drawer";
import { useTranslations } from 'next-intl';
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";

export function AboutMeCard({}) {
  const t = useTranslations('aboutCard');

  return (
    <CardContainer>
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] border w-[20rem] lg:w-[24rem] h-auto rounded-xl p-8 flex flex-col items-center cursor-pointer overflow-hidden">
        {/* Aurora Background */}
        <AuroraBackground className="absolute inset-0 w-full h-full rounded-xl" showRadialGradient={false} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
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
              className="h-24 w-24 lg:h-28 lg:w-28 object-cover aspect-square rounded-full group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            as={"h1"}
            translateZ="50"
            className="mt-6 text-xl lg:text-2xl font-bold text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
              {t('name')}
            </span>
          </CardItem>
          <CardItem
            as="p"
            translateZ="40"
            className="mt-3 text-sm lg:text-base text-white/70 max-w-sm text-center"
          >
            {t('title')}
          </CardItem>
          <div className="mt-4 w-full flex items-center justify-center flex-wrap gap-2">
            <CardItem translateZ="40">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="rounded-full w-8 h-8 hover:bg-white/10"
                asChild
              >
                <Link href="https://www.linkedin.com/in/galongau/">
                  <Linkedin className="h-4 w-4 text-white/70" />
                </Link>
              </Button>
            </CardItem>
            <CardItem translateZ="40">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="rounded-full w-8 h-8 hover:bg-white/10"
                asChild
              >
                <Link href="https://github.com/jethro-dev">
                  <Github className="h-4 w-4 text-white/70" />
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
        </div>
      </CardBody>
    </CardContainer>
  );
}
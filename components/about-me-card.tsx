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
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] border w-[24.375rem] h-[30.25rem] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer overflow-hidden shadow-lg">
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
              className="h-32 w-32 lg:h-36 lg:w-36 object-cover aspect-square rounded-full group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            as={"h1"}
            translateZ="50"
            className="mt-8 text-2xl lg:text-3xl font-bold text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
              {t('name')}
            </span>
          </CardItem>
          <CardItem
            as="p"
            translateZ="40"
            className="mt-4 text-base lg:text-lg text-white/70 max-w-sm text-center"
          >
            {t('title')}
          </CardItem>
          <div className="mt-6 w-full flex items-center justify-center flex-wrap gap-3">
            <CardItem translateZ="40">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="rounded-full w-10 h-10 hover:bg-white/10"
                asChild
              >
                <Link href="https://www.linkedin.com/in/galongau/">
                  <Linkedin className="h-5 w-5 text-white/70" />
                </Link>
              </Button>
            </CardItem>
            <CardItem translateZ="40">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="rounded-full w-10 h-10 hover:bg-white/10"
                asChild
              >
                <Link href="https://github.com/jethro-dev">
                  <Github className="h-5 w-5 text-white/70" />
                </Link>
              </Button>
            </CardItem>
          </div>

          <CardItem
            translateZ={40}
            // translateX={-40}

            className="mt-8"
          >
            <DrawerDemo />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
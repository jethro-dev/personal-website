"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'motion/react';
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { TextGenerateEffect } from "./text-generate-effect";
import CubicModel from "../cubic-model";

export const HeroParallax = ({}: {}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const t = useTranslations('hero');

  return (
    <div
      ref={ref}
      className="h-screen min-h-[700px] flex items-center dark:bg-black bg-white  overflow-hidden"
    >
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex items-center container h-full flex-col md:flex-row gap-10">
        <div className="order-2 md:order-1 basis-1/2 h-1/2 md:h-full flex justify-center flex-col">
          <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            {t('welcome')} <br /> {t('siteName')}
          </h1>
          <TextGenerateEffect
            className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 whitespace-pre-wrap"
            words={t('tagline')}
          />
        </div>
        <div className="h-1/2 order-1 md:order-2 basis-1/2 w-full md:h-full object-center">
          <CubicModel />
        </div>
      </div>
    </div>
  );
};

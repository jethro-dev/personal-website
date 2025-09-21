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
import { AboutMeCard } from "../about-me-card";
import { HeroNavbar } from "../hero-navbar";

export const HeroParallax = ({}: {}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const t = useTranslations('hero');

  return (
    <div
      ref={ref}
      className="min-h-screen flex dark:bg-black bg-white overflow-hidden relative"
    >
      {/* Background overlay */}
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full min-h-[80vh]">
          {/* Left Side - Navigation and Text Content */}
          <div className="flex flex-col justify-center space-y-12">
            {/* Navigation */}
            <HeroNavbar />

            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 leading-tight">
                {t('welcome')} <br /> {t('siteName')}
              </h1>
              <TextGenerateEffect
                className="text-base md:text-xl dark:text-neutral-200 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 whitespace-pre-wrap max-w-xl"
                words={t('tagline')}
              />
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <AboutMeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

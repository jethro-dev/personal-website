'use client';

import React, { Suspense, use } from "react";
import { DrawerDemo } from "./drawer";
import { LearnMoreButton } from "./learn-more-btn";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { anton } from "@/app/fonts";
import { createHeroPromise } from "@/lib/sanity-hooks";

type Props = {
  heroPromise: Promise<any>;
};

// Loading component for Suspense
function HeroSkeleton() {
  return (
    <header className="bg-background relative h-screen min-h-[600px] p-6 flex items-center justify-between transition duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse mb-4"></div>
        <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse w-4/5 mb-12"></div>
        <div className="flex flex-col sm:flex-row items-start md:items-center gap-4">
          <div className="h-10 w-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse"></div>
          <span className="text-muted-foreground">or</span>
          <div className="h-10 w-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </header>
  );
}

// Modern Hero component using React 19's use() hook
function HeroContent({ heroPromise }: Props) {
  // React 19 use() hook for data fetching with Suspense
  const data = use(heroPromise);

  return (
    <header className="bg-background relative h-screen min-h-[600px] p-6 flex items-center justify-between transition duration-300">
      <div className="max-w-4xl mx-auto">
        <TypographyH1 className={`${anton.className} tracking-wide`}>
          {data.title}
        </TypographyH1>
        <TypographyP className="mt-2 w-4/5">{data.paragraph}</TypographyP>
        <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 mt-12">
          <LearnMoreButton />
          <span>or</span>
          <DrawerDemo />
        </div>
      </div>
    </header>
  );
}

// Main Hero component with Suspense boundary
export const HeroModern = () => {
  const heroPromise = createHeroPromise();

  return (
    <Suspense fallback={<HeroSkeleton />}>
      <HeroContent heroPromise={heroPromise} />
    </Suspense>
  );
};
import React from 'react';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './badge';
import { KEYWORDS, Project } from '@/typings';
import Link from 'next/link';
import { ArrowUpRightFromSquare } from 'lucide-react';
import { unstable_noStore as noStore } from 'next/cache';
import { getProjects } from '@/lib/content';
import { ProjectCard } from './project-card';
import { PortfolioGrid } from './portfolio-grid';
import { getLocale, getTranslations } from 'next-intl/server';

type Props = {};

export const Portfolio = async (props: Props) => {
  const t = await getTranslations('portfolio');

  return (
    <div
      id="portfolio"
      className="dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] py-40 flex items-center justify-center transition duration-300 relative"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
      <div className="w-full relative z-10">
        <div className="flex-1">
          <div className="text-center mb-20">
            <TypographyH1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              {t('title')}
            </TypographyH1>
            <TypographyP className="mt-4 lg:mt-6">
              {t('description')}
            </TypographyP>
          </div>
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
};
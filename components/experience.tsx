import React from 'react';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import { Timeline } from './timeline';
import { Button } from './ui/button';
import { getExperiences } from '@/lib/content';
import { getLocale, getTranslations } from 'next-intl/server';

type Props = {};

export const Experience = async (props: Props) => {
  const t = await getTranslations('experience');

  return (
    <div
      id="experience"
      className="bg-background pt-60 pb-40 transition duration-300"
    >
      <div className="text-left md:text-center container mx-auto">
        <TypographyH1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          {t('title')}
        </TypographyH1>
        <TypographyP className="mt-4 lg:mt-6">
          {t('description')}
        </TypographyP>
        <div className="mt-10 inline-block dark:shadow-2xl dark:shadow-emerald-500/[0.1]  mb-10 last:mb-0 border border-border px-4 py-2 cursor-pointer transition duration-300 rounded-full text-xs font-light">
          {t('yearsOfExperience')}
        </div>
      </div>

      <Timeline className="mt-20" />
    </div>
  );
};
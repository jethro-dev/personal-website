import { Download, Eye, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import { TypographyH3 } from './ui/typography-h3';
import Link from 'next/link';
import { getHomePageData } from '@/lib/content';
import { TracingBeam } from './ui/tracing-beam';
import { AboutItem } from './about-item';
import { getLocale, getTranslations } from 'next-intl/server';

type Props = {};

export const About = async (props: Props) => {
  const locale = await getLocale();
  const homeData = getHomePageData(locale);
  const t = await getTranslations('about');
  return (
    <TracingBeam>
      <div
        id="about"
        className="container bg-background py-20 px-6 transition duration-300 relative"
      >
        <div className="max-w-4xl mx-auto">
          <TypographyH1 className="text-4xl sm:text-7xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            {homeData.about?.title || "About Me"}
          </TypographyH1>
          <TypographyP className="mt-2">{t('subtitle')}</TypographyP>

          <div className="">
            {homeData.about?.paragraphs?.map((p: any, i: number) => (
              <AboutItem key={i} {...p} />
            )) || []}
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};

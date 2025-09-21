"use client";
import React from "react";
import { TypographyP } from "./ui/typography-p";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyH3 } from "./ui/typography-h3";
import { Button } from "./ui/button";
import PsychedelicSpiral from "./ui/shadcn-io/psychedelic-spiral";
import { DrawerDemo } from "./drawer";
import { useTranslations } from 'next-intl';

type Props = {};

export const ConnectBanner = (props: Props) => {
  const t = useTranslations('connectBanner');

  return (
    <div id="connect-banner" className="relative py-20">
      {/* Psychedelic Spiral Background */}
      <div className="absolute inset-0 w-full h-full">
        <PsychedelicSpiral
          spinRotation={-2.0}
          spinSpeed={7.0}
          offset={[0.0, 0.0]}
          color1="#871d87"
          color2="#b2dfdf"
          color3="#0c204e"
          contrast={3.5}
          lighting={0.4}
          spinAmount={0.25}
          pixelFilter={745.0}
          spinEase={1.0}
          isRotate={true}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-white">
        <div className="container">
          <TypographyH1>{t('title')}</TypographyH1>
          <TypographyH3 className="mt-4">
            {t('subtitle')}
          </TypographyH3>
          <TypographyP className="mt-6 w-4/5 text-white">
            {t('description1')}
          </TypographyP>
          <TypographyP className="mt-2 w-4/5 text-white">
            {t('description2')}
          </TypographyP>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <DrawerDemo />
            {/* <Button className="bg-white text-black">Schedule a meeting</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
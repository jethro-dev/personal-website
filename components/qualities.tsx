"use client";

import React from "react";
import { QualityCard } from "./quality-card";
import { useTranslations } from 'next-intl';

export const Qualities = () => {
  const t = useTranslations('qualities');

  const qualities = [
    {
      title: t('fullStack.title'),
      description: t('fullStack.description'),
      videoSrc: undefined, // Add video path here: "/videos/fullstack.mp4"
    },
    {
      title: t('aiEnthusiast.title'),
      description: t('aiEnthusiast.description'),
      videoSrc: undefined, // Add video path here: "/videos/ai.mp4"
    },
    {
      title: t('trendsSetter.title'),
      description: t('trendsSetter.description'),
      videoSrc: undefined, // Add video path here: "/videos/trends.mp4"
    },
  ];

  return (
    <section className="container py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualities.map((quality, index) => (
          <QualityCard
            key={index}
            title={quality.title}
            description={quality.description}
            videoSrc={quality.videoSrc}
          />
        ))}
        </div>
      </div>
    </section>
  );
};
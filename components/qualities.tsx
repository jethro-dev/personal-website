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
      gradientClass: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
    },
    {
      title: t('aiEnthusiast.title'),
      description: t('aiEnthusiast.description'),
      gradientClass: "bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700",
    },
    {
      title: t('trendsSetter.title'),
      description: t('trendsSetter.description'),
      gradientClass: "bg-gradient-to-br from-orange-500 via-pink-500 to-red-600",
    },
  ];

  return (
    <section className="container py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <QualityCard
              key={index}
              title={quality.title}
              description={quality.description}
              gradientClass={quality.gradientClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
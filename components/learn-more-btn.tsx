"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

type Props = {};

export const LearnMoreButton = (props: Props) => {
  const t = useTranslations('hero');

  return (
    <Button
      onClick={() => {
        document
          .querySelector("#about")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {t('learnMore')}
    </Button>
  );
};

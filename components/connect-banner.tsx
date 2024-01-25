"use client";
import React from "react";
import { TypographyP } from "./ui/typography-p";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyH3 } from "./ui/typography-h3";
import { Button } from "./ui/button";
import useConfettiGradient from "@/hooks/useConfettiGradient";

type Props = {};

export const ConnectBanner = (props: Props) => {
  const { ConfettiGradient } = useConfettiGradient(1);
  return (
    <div
      id="connect-banner"
      className="relative h-[400px] !bg-neutral-900 text-white flex items-center"
    >
      <div className="w-full h-full brightness-75 absolute inset-0 z-0">
        <ConfettiGradient />
      </div>
      <div className="max-w-5xl mx-auto px-6 z-10">
        <TypographyH1>Connect With Me</TypographyH1>
        <TypographyH3 className="mt-4">
          Let's Transform Ideas into Code!
        </TypographyH3>
        <TypographyP className="mt-6 w-4/5 text-white">
          Reach out for collaborations, inquiries, or just a tech chat –
          together, we can turn visions into powerful software solutions. Your
          project awaits its digital transformation!
        </TypographyP>
        <TypographyP className="mt-2 w-4/5 text-white">
          Contact me by completing the contact form or scheduling a meeting.
        </TypographyP>
        <div className="mt-12 flex items-center gap-4">
          <Button className="bg-white text-black">Fill in contact form</Button>
          <Button className="bg-white text-black">Schedule a meeting</Button>
        </div>
      </div>
    </div>
  );
};

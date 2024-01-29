"use client";
import React from "react";
import { Button } from "@/components/ui/button";

type Props = {};

export const LearnMoreButton = (props: Props) => {
  return (
    <Button
      onClick={() => {
        document
          .querySelector("#about")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Learn more about me
    </Button>
  );
};

"use client";

import React from "react";
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";

interface QualityCardProps {
  title: string;
  description: string;
  videoSrc?: string;
  className?: string;
}

export const QualityCard = ({
  title,
  description,
  videoSrc,
  className
}: QualityCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-[2rem] p-8 aspect-[9/16] flex flex-col justify-between",
        "border border-border backdrop-blur-sm shadow-lg",
        className
      )}
    >
      {/* Video Background */}
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        // Placeholder background
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h3 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          {title}
        </h3>
        <p className="text-neutral-300 text-sm lg:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
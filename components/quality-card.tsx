"use client";

import React from "react";
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";

interface QualityCardProps {
  title: string;
  description: string;
  gradientClass: string;
  className?: string;
}

export const QualityCard = ({
  title,
  description,
  gradientClass,
  className
}: QualityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 h-80 flex flex-col justify-end",
        "backdrop-blur-sm border border-white/10 shadow-2xl",
        gradientClass,
        className
      )}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-2xl lg:text-3xl font-bold text-white">
          {title}
        </h3>
        <p className="text-white/90 text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-transparent via-transparent to-white/5" />
    </motion.div>
  );
};
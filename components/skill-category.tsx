'use client';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

type Props = {
  title: string;
  items: { name: string; logo: string }[];
  onEnter: () => void; // New prop to notify when in view
};

export const SkillCategory = ({ title, items, onEnter }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Trigger the onEnter callback when the scroll reaches a certain threshold
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.5) {
        onEnter(); // Notify parent when the component is in view
      }
    });

    return () => unsubscribe(); // Cleanup the effect
  }, [scrollYProgress, onEnter]);

  return (
    <motion.div
      ref={ref}
      className="my-40 lg:my-80 flex justify-center"
      style={{
        opacity: scrollYProgress,
        scale: scale,
      }}
    >
      <div className="border border-border rounded-lg p-6 w-full max-w-md bg-background">
        <h2 className="font-light text-muted-foreground text-sm">{title}</h2>

        <div className="mt-4 grid grid-cols-3 gap-6 content-center justify-items-center">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-between size-20"
            >
              <Image src={item.logo} alt={item.name} width={50} height={50} />
              <p className="text-sm font-light">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

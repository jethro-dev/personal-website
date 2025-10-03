"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowUpRightFromSquare } from "lucide-react";

interface Project {
  id: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  description: string;
  keywords: string[];
}

interface HorizontalScrollSectionProps {
  projects: Project[];
}

export const HorizontalScrollSection = ({ projects }: HorizontalScrollSectionProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate transform based on number of projects
  const totalProjects = projects.length;
  const transformEnd = `-${((totalProjects - 1) / totalProjects) * 100}%`;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", transformEnd]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 pl-[calc(50vw-45vw/2-140px)]">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="flex items-center gap-8 min-w-[90vw] md:min-w-[70vw] lg:min-w-[60vw] cursor-pointer group"
            >
              {/* Mobile Phone Card */}
              <div className="relative w-[280px] aspect-[9/16] overflow-hidden rounded-[2rem] border border-border backdrop-blur-sm shadow-lg flex-shrink-0 transition-transform group-hover:scale-105">
                {/* Project Image Background */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Text Content on Right */}
              <div className="flex-1 space-y-6 max-w-md">
                <h3 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Keywords */}
                {project.keywords && project.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Details Hint */}
                <div className="inline-flex items-center gap-2 text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  <span>Click for details</span>
                  <ArrowUpRightFromSquare className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

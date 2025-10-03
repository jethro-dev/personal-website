"use client";

import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ProjectDetail } from "@/components/project-detail";
import { useState } from "react";

interface Project {
  id: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  description: string;
  keywords: string[];
}

interface ProjectDrawerProps {
  project: Project;
}

export function ProjectDrawer({ project }: ProjectDrawerProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    // Small delay to allow animation to finish
    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DrawerContent className="h-[98vh]">
        <DrawerHeader>
          <DrawerTitle className="sr-only">{project.name}</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto flex-1">
          <div className="container">
            <ProjectDetail project={project} mode="drawer" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

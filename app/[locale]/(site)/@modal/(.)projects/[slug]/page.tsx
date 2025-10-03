"use client";

import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ProjectDetail } from "@/components/project-detail";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  description: string;
  keywords: string[];
}

interface ModalProjectPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default function ModalProjectPage({ params }: ModalProjectPageProps) {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const resolvedParams = await params;
      const response = await fetch(`/api/projects/${resolvedParams.slug}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data);
      }
    };
    fetchProject();
  }, [params]);

  const handleClose = () => {
    setIsOpen(false);
    router.back();
  };

  if (!project) {
    return null;
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader>
          <DrawerTitle className="sr-only">{project.name}</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto max-h-[calc(90vh-4rem)]">
          <ProjectDetail project={project} mode="drawer" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

import { getProjects } from "@/lib/content";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const projects = getProjects(locale);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <ProjectDetail project={project} mode="full" />
    </div>
  );
}

export async function generateStaticParams() {
  const projects = getProjects('en');

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

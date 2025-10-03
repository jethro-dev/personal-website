import { getProjects } from "@/lib/content";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProjectDrawer } from "@/components/project-drawer";

interface ModalProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ModalProjectPage({ params }: ModalProjectPageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const projects = getProjects(locale);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDrawer project={project} />;
}

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowUpRightFromSquare, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  id: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  description: string;
  keywords: string[];
}

interface ProjectDetailProps {
  project: Project;
  mode: "full" | "drawer";
}

export const ProjectDetail = ({ project, mode }: ProjectDetailProps) => {
  const isFullPage = mode === "full";

  return (
    <div className={isFullPage ? "container pt-[71px]" : "py-6 pt-[71px]"}>
      {/* Back button for full page */}
      {isFullPage && (
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      )}

      {/* Title */}
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground mb-4">
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
        <h1 className={`font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ${isFullPage ? 'text-7xl lg:text-9xl' : 'text-5xl lg:text-7xl'}`}>
          {project.name}
        </h1>
      </div>

      {/* Author */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt="Jethro Au"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-muted-foreground">Jethro Au</span>
      </div>

      {/* Project Image */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Info */}
      <div className="space-y-6">
        <p className={`text-muted-foreground leading-relaxed ${isFullPage ? 'text-xl' : 'text-base'}`}>
          {project.description}
        </p>

        {/* Keywords */}
        {project.keywords && project.keywords.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {project.url && (
          <div className="flex gap-4 pt-4">
            <Button asChild size={isFullPage ? "lg" : "default"}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span>View Live Project</span>
                <ArrowUpRightFromSquare className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Project Screenshots Grid */}
      <div className="grid grid-cols-2 gap-6 mt-12">
        {/* Placeholder images - replace with actual project screenshots */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-800">
            <Image
              src={project.image}
              alt={`${project.name} screenshot ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

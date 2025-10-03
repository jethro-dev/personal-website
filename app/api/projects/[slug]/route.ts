import { getProjects } from "@/lib/content";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Get locale from cookie or header, default to 'en'
  const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';

  const projects = getProjects(locale);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}

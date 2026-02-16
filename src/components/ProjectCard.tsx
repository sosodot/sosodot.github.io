import { Link } from "react-router-dom";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  comingSoon?: boolean;
}

export default function ProjectCard({ project, comingSoon }: ProjectCardProps) {
  const content = (
    <>
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-warm/50">
        <img
          src={project.images.thumbnail}
          alt={project.title}
          className={`h-full w-full object-cover object-center transition-transform duration-300 ${comingSoon ? "opacity-60" : "group-hover:scale-[1.03]"}`}
          loading="lazy"
        />
        {comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-cream px-5 py-2 text-sm font-medium">
              Coming soon
            </span>
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-4 pt-4 px-4">
        <h3 className="min-w-0 font-medium">{project.title}</h3>
        <p className="flex shrink-0 items-center gap-2 text-sm text-brown-medium whitespace-nowrap">
          {project.tagline}
          <span className="inline-block h-1 w-1 rounded-full bg-brown-medium" />
          <span className="text-sand-600">{project.date.slice(0, 4)}</span>
        </p>
      </div>
    </>
  );

  if (comingSoon) {
    return <div className="block">{content}</div>;
  }

  return (
    <Link to={`/projects/${project.id}`} className="group block">
      {content}
    </Link>
  );
}

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectById, getAdjacentProjects } from "../data/projects";
import CaseStudySection from "../components/CaseStudySection";
import FadeIn from "../components/FadeIn";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;
  const adjacent = projectId
    ? getAdjacentProjects(projectId)
    : { prev: undefined, next: undefined };

  if (!project) {
    return (
      <div className="mx-auto max-w-[926px] px-6 py-20 text-center">
        <h1 className="text-2xl font-medium">Project not found</h1>
        <Link
          to="/"
          className="mt-4 inline-block text-sm text-sand-800 underline"
        >
          Back to home
        </Link>
      </div>
    );
  }

  const hasSections = project.sections && project.sections.length > 0;
  const paragraphs = project.fullDescription
    ? project.fullDescription.split("\n\n")
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Back navigation */}
      <div className="mx-auto max-w-[926px] px-6 pt-8">
        <Link
          to="/"
          className="inline-block text-sm text-sand-600 transition-opacity hover:opacity-60"
        >
          &larr; Back to projects
        </Link>
      </div>

      {/* Hero image */}
      <section className="mx-auto max-w-7xl px-6 pt-4 md:pt-6">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={project.images.hero}
            alt={project.title}
            className="w-full"
          />
        </div>
      </section>

      {/* Header */}
      <section className="mx-auto max-w-[926px] px-6 pt-8 md:pt-10">
        <div className="flex items-center gap-2">
          {project.name && (
            <>
              <p className="text-base uppercase text-sand-700">
                {project.name}
              </p>
              <span className="h-1 w-1 rounded-full bg-sand-700" />
            </>
          )}
          <p className="text-base uppercase text-sand-700">
            {project.tagline}
          </p>
        </div>

        <h1 className="mt-6 font-[Spectral] md:mt-8 text-[clamp(2.5rem,5vw,5rem)] font-extrabold italic leading-[1.15] md:leading-[1]">
          {project.title}
        </h1>

        <p className="mt-8 max-w-[926px] text-xl md:mt-10 leading-[1.5] text-sand-700 md:text-2xl md:leading-[1.4]">
          {project.description}
        </p>

        {project.note && (
          <p className="mt-4 text-base leading-6">{project.note}</p>
        )}

        <hr className="mt-12 border-divider md:mt-16" />

        {/* Metadata */}
        <div className="mt-10 grid grid-cols-2 md:mt-16 gap-x-10 gap-y-8 md:grid-cols-4">
          <MetaItem label="Role" value={project.role} />
          {project.timeline && (
            <MetaItem label="Timeline" value={project.timeline} />
          )}
          {project.team && (
            <MetaItem label="Team" value={project.team} multiline />
          )}
          {project.platform && (
            <MetaItem label="Platform" value={project.platform} />
          )}
        </div>
      </section>

      {/* Case study sections */}
      {hasSections &&
        project.sections!.map((section, i) => (
          <FadeIn key={i} className="mt-10 md:mt-16">
            <CaseStudySection section={section} />
          </FadeIn>
        ))}

      {/* Fallback layout for projects without sections */}
      {!hasSections && paragraphs.length > 0 && (
        <section className="mx-auto max-w-[926px] px-6 pt-16">
          <h2 className="text-sm uppercase tracking-widest text-sand-800">
            Overview
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-[1.8]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {project.tech.length > 0 && (
            <div className="mt-16">
              <h2 className="text-sm uppercase tracking-widest text-sand-800">
                Tech Stack
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-sand-300 px-3 py-1 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.challenges && (
            <div className="mt-16">
              <h2 className="text-sm uppercase tracking-widest text-sand-800">
                Challenge
              </h2>
              <p className="mt-6 max-w-prose leading-[1.8]">
                {project.challenges}
              </p>
            </div>
          )}

          {project.results && (
            <div className="mt-16">
              <h2 className="text-sm uppercase tracking-widest text-sand-800">
                Results
              </h2>
              <p className="mt-6 max-w-prose leading-[1.8]">
                {project.results}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Prev / Next navigation */}
      <section className="mx-auto max-w-[926px] px-6 pb-20 pt-16 md:pt-24">
        <hr className="mb-12 border-divider" />
        <div className="flex items-center justify-between">
          {adjacent.prev ? (
            <Link
              to={`/projects/${adjacent.prev.id}`}
              className="group text-left"
            >
              <p className="text-sm text-sand-600">Previous</p>
              <p className="mt-2 font-medium transition-opacity group-hover:opacity-60">
                {adjacent.prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {adjacent.next ? (
            <Link
              to={`/projects/${adjacent.next.id}`}
              className="group text-right"
            >
              <p className="text-sm text-sand-600">Next</p>
              <p className="mt-2 font-medium transition-opacity group-hover:opacity-60">
                {adjacent.next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </motion.div>
  );
}

function MetaItem({
  label,
  value,
  multiline,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <p className="text-sm uppercase tracking-widest text-sand-700">
        {label}
      </p>
      <p className="mt-2 text-base leading-6">
        {multiline
          ? value.split(", ").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))
          : value}
      </p>
    </div>
  );
}

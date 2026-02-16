import { motion } from "framer-motion";
import { getFeaturedProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-sand-400 px-3 py-2 text-sm tracking-wide text-sage-800 md:mb-6">
          <span className="h-2 w-2 rounded-full bg-sage-800" />
          Available for consulting
        </span>
        <h1 className="max-w-2xl font-[Spectral] text-[36px] font-semibold italic leading-[1.3] tracking-wide md:text-[60px]">
          Hello, I'm Sónia!
        </h1>
        <h2 className="max-w-2xl text-[28px] font-normal leading-[1.4] tracking-wide text-sand-600 md:text-[56px] md:leading-[1.3]">
          I'm a Product Designer that loves the messy and the complex.
        </h2>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-full border border-brown-dark px-7 py-3.5 text-sm font-medium transition-colors hover:bg-brown-dark hover:text-cream md:mt-10"
        >
          Let's chat
        </a>
      </section>

      {/* Projects */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-6 pb-16 md:pb-24">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {featured.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.08}>
                <ProjectCard
                  project={project}
                  comingSoon={project.id === "mbio-vpp"}
                />
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import sosoPhoto from "../assets/about/soso.jpg";
import FadeIn from "../components/FadeIn";

const experience = [
  {
    period: "2023 – Present",
    role: "Senior Product Designer",
    company: "Bounce",
    description:
      "Bounce is a luggage storage marketplace. I own the partner experience end to end across our B2B Partner Portal, including booking management, store configuration, partner communications, and operational workflows. I also design the customer post-booking experience, focused on customer–partner coordination, support deflection, and task completion. I lead the Design System (tokens, components, documentation, governance), and use AI-assisted workflows to speed up documentation, QA, and repetitive design ops.",
  },
  {
    period: "2022 – 2023",
    role: "Senior Product Designer",
    company: "Kitch",
    description:
      "Kitch built a centralized platform for restaurants that integrates delivery apps and POS systems to streamline operations. I led product design for partner activation and engagement across onboarding, settings, and operational dashboards, using qualitative research and iterative testing to reduce friction. I also led the design of Kitch Pay, a mobile web pay-at-table product.",
  },
  {
    period: "2021 – 2022",
    role: "Senior Product Designer",
    company: "Salsify",
    description:
      "Salsify is a product experience management (PXM) SaaS platform that helps brands manage product information and publish it across ecommerce channels. I designed a B2B digital product catalog used by brand and retail teams to browse assortments, validate content, and support ordering and inventory workflows. Contributed to the Design System through component design, UX guidelines, documentation, and governance, working closely with engineering in an agile environment.",
  },
  {
    period: "2018 – 2021",
    role: "Product Designer",
    company: "Mercedes-Benz.io",
    description:
      "Over two years, I designed and optimized a high-traffic marketing website with a focus on product detail pages, conversion, and content clarity. I led experimentation and discovery packages (hypothesis-driven testing, rapid prototyping, iteration) with cross-functional teams. I also supported delivery as a Scrum Master in an agile setup and led the Design System team, improving components, documentation, and adoption across product teams.",
  },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero — photo + intro side by side */}
      <section className="mx-auto max-w-[1200px] px-6 pt-12 pb-12 md:pt-24 md:pb-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Photo */}
          <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-warm/50">
            <img
              src={sosoPhoto}
              alt="Sónia dos Reis"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="font-[Spectral] text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold italic leading-[1.2]">
              Hello there!
            </h1>
            <div className="mt-8 space-y-6 text-lg leading-[1.8] text-sand-700">
              <p>
                I'm Sónia, a Product Designer based in Lisbon, currently working at Bounce, 
                a luggage storage marketplace.
              </p>
              <p>
                Most of my work sits at the intersection of design, product
                strategy, and user research. I care about understanding the real
                context of use before jumping into solutions, and I tend to work
                closely with engineering to keep things grounded and shippable.
              </p>
              <p>
                I've spent the last few years working on partner-facing tools,
                Design Systems, and Internal Platforms, the kind of products that don't
                always get the spotlight but have a big impact on how businesses
                run day to day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <FadeIn>
        <section className="mx-auto max-w-[926px] px-6 pb-24">
          <hr className="border-divider" />
          <div className="mt-16">
            <p className="text-sm uppercase tracking-widest text-sand-700">
              Experience
            </p>
            <div className="mt-10 space-y-12">
              {experience.map((entry) => (
                <div
                  key={entry.period}
                  className="grid grid-cols-1 gap-2 md:grid-cols-[200px_1fr] md:gap-10"
                >
                  <p className="text-sm text-brown-dark">{entry.period}</p>
                  <div>
                    <p className="text-base font-bold">
                      {entry.role}{" "}
                      <span className="font-normal text-sand-700">
                        at {entry.company}
                      </span>
                    </p>
                    <p className="mt-2 text-base leading-6 text-sage-800">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Resume CTA */}
      <FadeIn>
        <section className="mx-auto max-w-[926px] px-6 pb-24">
          <hr className="border-divider" />
          <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-lg leading-[1.8]">
            Want the full picture?
          </p>
          <a
            href="https://www.linkedin.com/in/soniadosreis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-brown-dark px-7 py-3.5 text-sm font-medium transition-colors hover:bg-brown-dark hover:text-cream"
          >
            Check out my LinkedIn
          </a>
        </div>
        </section>
      </FadeIn>
    </motion.div>
  );
}

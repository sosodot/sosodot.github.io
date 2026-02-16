import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="mx-auto max-w-[926px] px-6 py-24 md:py-36">
        <h1 className="font-[Spectral] text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold italic leading-[1.2]">
          Let's work together
        </h1>
        <p className="mt-6 max-w-[636px] text-lg leading-[1.8] text-sand-800">
          Whether you have a project in mind, want to explore working together,
          or just want to say hi — I'd love to hear from you.
        </p>

        <div className="mt-16 space-y-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-sand-800">
              Email
            </p>
            <a
              href="mailto:soniapdosreis@gmail.com"
              className="mt-2 inline-block text-2xl transition-opacity hover:opacity-60"
            >
              soniapdosreis@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-sand-800">
              Schedule a call
            </p>
            <a
              href="https://calendar.app.google/GuJVanPnnSoT9UT97"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-2xl transition-opacity hover:opacity-60"
            >
              Grab a time on my calendar
            </a>
          </div>

          <hr className="border-divider" />

          <div>
            <p className="text-sm uppercase tracking-widest text-sand-800">
              Find me elsewhere
            </p>
            <div className="mt-4 flex gap-8">
              <a
                href="https://www.linkedin.com/in/soniadosreis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base transition-opacity hover:opacity-60"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

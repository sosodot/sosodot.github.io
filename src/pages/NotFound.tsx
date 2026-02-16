import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="mx-auto max-w-[1200px] px-6 py-20 text-center md:py-28">
        <h1 className="text-4xl font-medium md:text-5xl">404</h1>
        <p className="mt-4 text-lg text-brown-medium">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full border border-brown-dark px-6 py-3 text-sm transition-colors hover:bg-brown-dark hover:text-cream"
        >
          Back to home
        </Link>
      </section>
    </motion.div>
  );
}

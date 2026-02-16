import { useState, useCallback } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MobileNav from "../components/MobileNav";

const navLinks = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
];

function navClassName({ isActive }: { isActive: boolean }) {
  return `transition-opacity ${isActive ? "opacity-60" : "hover:opacity-60"}`;
}

export default function MainLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <div className="flex min-h-screen flex-col bg-cream text-brown-dark">
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
          <NavLink to="/" className="text-lg font-medium tracking-tight">
            soso.
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 text-sm md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={navClassName}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] w-full bg-brown-dark transition-transform duration-200 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-full bg-brown-dark transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-full bg-brown-dark transition-transform duration-200 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </nav>
        <div className="mx-auto max-w-[1200px] px-6">
          <hr className="border-divider" />
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={closeMobile} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      <footer id="contact" className="mt-12 bg-sand-400 text-sand-900">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-[Spectral] text-[28px] font-semibold italic leading-[1.3] text-sage-900 md:text-[36px]">
                Have a project in mind? Let's talk.
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-sand-700">
                Feel free to{" "}
                <a
                  href="mailto:soniapdosreis@gmail.com"
                  className="underline text-sand-900 transition-opacity hover:opacity-60"
                >
                  send me a message
                </a>{" "}
                or{" "}
                <a
                  href="https://calendar.app.google/GuJVanPnnSoT9UT97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sand-900 transition-opacity hover:opacity-60"
                >
                  grab a time on my calendar
                </a>.{" "}
                Even if it's just to say hi, I'm in.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-sm font-medium uppercase tracking-widest text-sand-700">
                I'm interested in
              </p>
              <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                {[
                  "Design Strategy",
                  "Product Design",
                  "Research",
                  "Design Leadership",
                  "Design Systems",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-sand-500 px-4 py-2 text-sm text-sand-900"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-sand-600/30 pt-8 text-sm text-sand-700 sm:flex-row sm:items-center sm:justify-between">
            <span>
              &copy; {new Date().getFullYear()} Sónia Reis
            </span>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/soniadosreis/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

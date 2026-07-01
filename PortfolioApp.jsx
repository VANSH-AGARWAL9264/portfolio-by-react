import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, MapPin, Menu, X } from "lucide-react";

const PROFILE = {
  name: "Maya Whitfield",
  role: "Product Designer — Frontend Engineer",
  location: "Portland, OR",
  availability: "Open for select freelance work",
  thesis:
    "I design and build interfaces for teams who care about the difference between good and considered — spending most of my time where research, systems thinking, and code overlap.",
  email: "hello@mayawhitfield.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

const FACTS = [
  { label: "Focus", value: "Product design, design systems, front-end" },
  { label: "Tools", value: "Figma, React, TypeScript, Framer" },
  { label: "Based in", value: PROFILE.location },
  { label: "Status", value: PROFILE.availability },
];

const PROJECTS = [
  {
    tag: "Fintech",
    year: "2025",
    title: "Northwind Ledger",
    description:
      "Reworked a multi-entity accounting dashboard now used daily by forty-plus finance teams.",
    stack: ["React", "TypeScript", "D3"],
  },
  {
    tag: "Mobile",
    year: "2024",
    title: "Almanac",
    description:
      "A distraction-free reading companion built around adaptive typography and offline sync.",
    stack: ["Swift", "CoreData"],
  },
  {
    tag: "Field tool",
    year: "2024",
    title: "Fieldnote",
    description:
      "Offline-first mapping tool for agronomists collecting soil samples across remote sites.",
    stack: ["React Native", "PostGIS"],
  },
  {
    tag: "Brand & web",
    year: "2023",
    title: "Currant",
    description:
      "Identity, packaging, and storefront for an independent coffee roaster's first flagship.",
    stack: ["Next.js", "Shopify"],
  },
  {
    tag: "Design system",
    year: "2023",
    title: "Loom Studio",
    description:
      "A component library and documentation site adopted across six internal product teams.",
    stack: ["React", "Storybook"],
  },
  {
    tag: "Wayfinding",
    year: "2022",
    title: "Waypoint",
    description:
      "Signage and digital wayfinding system designed for a 40-building university campus.",
    stack: ["Figma", "Illustrator"],
  },
];

const EXPERIENCE = [
  {
    period: "2023 — Present",
    role: "Senior Product Designer",
    org: "Fieldstone & Co.",
    note: "Leading design for the core ledger product, from research through shipped code.",
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    org: "Currant Studio",
    note: "Built and maintained client storefronts and internal tooling for a small design studio.",
  },
  {
    period: "2019 — 2021",
    role: "Product Designer",
    org: "Almanac Labs",
    note: "Owned end-to-end design for a reading app that grew to 200k monthly readers.",
  },
  {
    period: "2018 — 2019",
    role: "Design Intern",
    org: "Waypoint Collective",
    note: "Supported signage and wayfinding design for civic and campus clients.",
  },
];

const CAPABILITIES = [
  {
    group: "Interface",
    items: ["Figma", "Prototyping", "Design systems", "Interaction design"],
  },
  {
    group: "Engineering",
    items: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    group: "Craft",
    items: ["Typography", "Illustration", "Motion", "Art direction"],
  },
];

// ---------------------------------------------------------------------
// Small hook: fade elements in as they enter the viewport

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------
// Folder-tab section label

function Tab({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-6">
      <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#6B6559] border border-[#DBD5C7] rounded-sm px-2.5 py-1">
        {children}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------
// Index-card project tile (signature element)

function ProjectCard({ project, index }) {
  const rotation = index % 2 === 0 ? "-rotate-1" : "rotate-1";
  return (
    <div className="group relative">
      {/* punch holes */}
      <div className="absolute -top-[5px] left-6 w-2.5 h-2.5 rounded-full bg-[#F6F3EC] border border-[#DBD5C7] z-10" />
      <div className="absolute -top-[5px] right-6 w-2.5 h-2.5 rounded-full bg-[#F6F3EC] border border-[#DBD5C7] z-10" />

      <div className="relative bg-[#FCFAF5] border border-[#DBD5C7] rounded-sm p-6 pt-8 border-dashed transition-all duration-300 group-hover:border-solid group-hover:border-[#3F6659] group-hover:-translate-y-1">
        {/* stamp */}
        <span
          className={`absolute top-4 right-4 font-mono text-[10px] tracking-[0.15em] uppercase text-[#8A6A32] border border-[#A67C3D]/50 px-2 py-0.5 rounded-sm ${rotation} select-none`}
        >
          {project.tag}
        </span>

        <p className="font-mono text-[11px] tracking-[0.15em] text-[#6B6559] mb-3">
          {project.year}
        </p>

        <h3 className="font-serif italic text-2xl text-[#1C2024] mb-3 pr-16">
          {project.title}
        </h3>

        <p className="text-[#4A463E] text-[14.5px] leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {project.stack.map((s) => (
              <li
                key={s}
                className="font-mono text-[11px] text-[#6B6559] after:content-['·'] last:after:content-[''] after:ml-3"
              >
                {s}
              </li>
            ))}
          </ul>
          <ArrowUpRight
            size={16}
            className="text-[#3F6659] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 ml-2"
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Main component

export default function PortfolioApp() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { href: "#profile", label: "Profile" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#1C2024] font-sans selection:bg-[#3F6659] selection:text-[#F6F3EC]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,400;1,9..144,500&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; }
        .font-sans { font-family: 'IBM Plex Sans', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* ---------------- Nav ---------------- */}
      <header className="sticky top-0 z-40 bg-[#F6F3EC]/90 backdrop-blur border-b border-[#DBD5C7]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-serif italic text-lg tracking-tight text-[#1C2024]"
          >
            {PROFILE.name}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[12px] tracking-[0.1em] uppercase text-[#4A463E] hover:text-[#3F6659] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="font-mono text-[12px] tracking-[0.1em] uppercase border border-[#1C2024] rounded-sm px-3.5 py-1.5 hover:bg-[#1C2024] hover:text-[#F6F3EC] transition-colors"
            >
              Say hello
            </a>
          </nav>

          <button
            className="md:hidden text-[#1C2024]"
            aria-label="Toggle navigation menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden border-t border-[#DBD5C7] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setNavOpen(false)}
                className="font-mono text-[12px] tracking-[0.1em] uppercase text-[#4A463E]"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top">
        {/* ---------------- Hero ---------------- */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
          <Reveal>
            <p className="font-mono text-[12px] tracking-[0.25em] uppercase text-[#6B6559] mb-6">
              {PROFILE.role}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-serif text-[13vw] leading-[0.95] md:text-[86px] md:leading-[0.95] text-[#1C2024] mb-8">
              <span className="italic">{PROFILE.name.split(" ")[0]}</span>{" "}
              {PROFILE.name.split(" ").slice(1).join(" ")}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-[17px] leading-relaxed text-[#4A463E] mb-10">
              {PROFILE.thesis}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase bg-[#1C2024] text-[#F6F3EC] rounded-sm px-5 py-3 hover:bg-[#3F6659] transition-colors"
              >
                View selected work
                <ArrowUpRight size={14} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase border border-[#1C2024] rounded-sm px-5 py-3 hover:border-[#3F6659] hover:text-[#3F6659] transition-colors"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </section>

        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="border-t border-[#DBD5C7]" />
        </div>

        {/* ---------------- Profile / About ---------------- */}
        <section id="profile" className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <Tab>Profile</Tab>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <Reveal className="md:col-span-3" delay={60}>
              <p className="font-serif italic text-2xl md:text-[28px] leading-snug text-[#1C2024]">
                I've spent the last seven years moving between design and
                engineering — usually landing wherever a product needs
                someone who can do both.
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-[#4A463E] max-w-lg">
                Most of my work starts with a messy, specific problem: a
                workflow nobody enjoys, a system nobody trusts, an interface
                nobody bothered to finish. I like the unglamorous middle of
                a project — the part where research becomes structure, and
                structure becomes something people actually use.
              </p>
            </Reveal>

            <Reveal className="md:col-span-2" delay={140}>
              <dl className="border-t border-[#DBD5C7]">
                {FACTS.map((f) => (
                  <div
                    key={f.label}
                    className="flex justify-between gap-6 py-4 border-b border-[#DBD5C7]"
                  >
                    <dt className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#6B6559] shrink-0">
                      {f.label}
                    </dt>
                    <dd className="text-[14px] text-[#1C2024] text-right">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="border-t border-[#DBD5C7]" />
        </div>

        {/* ---------------- Work ---------------- */}
        <section id="work" className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <Tab>Selected work</Tab>
              <p className="font-mono text-[11px] tracking-[0.1em] text-[#6B6559] uppercase mb-6">
                {PROJECTS.length} projects, 2022 — 2025
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 pt-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="border-t border-[#DBD5C7]" />
        </div>

        {/* ---------------- Experience ---------------- */}
        <section id="experience" className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <Tab>Experience</Tab>
          </Reveal>

          <div className="border-t border-[#DBD5C7]">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 70}>
                <div className="grid md:grid-cols-12 gap-2 md:gap-6 py-7 border-b border-[#DBD5C7] items-baseline">
                  <p className="md:col-span-3 font-mono text-[12px] tracking-[0.05em] text-[#6B6559]">
                    {e.period}
                  </p>
                  <div className="md:col-span-4">
                    <p className="font-serif italic text-xl text-[#1C2024]">
                      {e.role}
                    </p>
                    <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#3F6659] mt-1">
                      {e.org}
                    </p>
                  </div>
                  <p className="md:col-span-5 text-[14px] leading-relaxed text-[#4A463E]">
                    {e.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="border-t border-[#DBD5C7]" />
        </div>

        {/* ---------------- Capabilities ---------------- */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <Tab>Capabilities</Tab>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-10">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.group} delay={i * 80}>
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#3F6659] mb-4">
                  {c.group}
                </p>
                <ul className="space-y-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] text-[#1C2024] font-serif italic"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section id="contact" className="bg-[#1C2024] text-[#F6F3EC]">
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
            <Reveal>
              <p className="font-mono text-[12px] tracking-[0.25em] uppercase text-[#9A9488] mb-6">
                Contact
              </p>
              <h2 className="font-serif italic text-4xl md:text-[56px] leading-[1.05] max-w-2xl mb-10">
                Have a project worth doing properly? Let's talk.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-wrap items-center gap-4 mb-16">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase bg-[#F6F3EC] text-[#1C2024] rounded-sm px-5 py-3 hover:bg-[#3F6659] hover:text-[#F6F3EC] transition-colors"
                >
                  <Mail size={14} />
                  {PROFILE.email}
                </a>
                <a
                  href={PROFILE.github}
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase border border-[#544F44] rounded-sm px-5 py-3 hover:border-[#F6F3EC] transition-colors"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase border border-[#544F44] rounded-sm px-5 py-3 hover:border-[#F6F3EC] transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#3A362E]">
                <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#9A9488] flex items-center gap-1.5">
                  <MapPin size={12} />
                  {PROFILE.location}
                </p>
                <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#9A9488]">
                  © {new Date().getFullYear()} {PROFILE.name}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}

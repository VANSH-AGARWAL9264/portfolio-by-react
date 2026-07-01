import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, MapPin, Menu, X } from "lucide-react";

const C = {
  bg: "#050505",
  bgHeader: "rgba(5,5,5,0.88)",
  ink: "#F4EEE2",
  inkMuted: "#A79E8E",
  inkFaint: "#5C544A",
  labelMuted: "#8A8175",
  gold: "#D9AC5C",
  goldLight: "#F5D68C",
  goldDeep: "#9C7A3C",
  border: "#221F1A",
  borderStrong: "#3A342A",
  ghostNumeral: "#0E0D0B",
};

const GOLD_GRADIENT =
  "linear-gradient(120deg, #F5D68C 0%, #D9AC5C 50%, #9C7A3C 100%)";

const goldText = {
  backgroundImage: GOLD_GRADIENT,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
};

const goldGlow = { boxShadow: "0 0 26px rgba(217,172,92,0.22)" };

// ---------------------------------------------------------------------
// DATA — replace with your own details
// ---------------------------------------------------------------------
const PROFILE = {
  name: "Vansh Agarwal",
  role: "Computer Science Student",
  location: "Sitapur, Uttar Pradesh, India",
  availability: "Open to Internship Opportunities",
  thesis:
    "B.Tech CSE (Artificial Intelligence) Student | Learning Web Development & Programming",
  email: "YOUR_EMAIL",
  github: "https://github.com/VANSH-AGARWAL9264",
  linkedin: "YOUR_REAL_LINKEDIN_LINK",
};

const FACTS = [
  { label: "Education", value: "B.Tech CSE (Artificial Intelligence)" },
  { label: "College", value: "KIET Group of Institutions" },
  { label: "Currently learning", value: "HTML, CSS, JavaScript, React, C++, Python, DSA" },
  { label: "Focus", value: "Frontend Development, Programming, Problem Solving" },
];

const PROJECTS = [
  {
    tag: "JavaScript",
    year: "2026",
    title: "Friend Request Card",
    description:
      "An interactive social media style friend request card where users can send and remove requests using JavaScript DOM manipulation.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    tag: "Animation",
    year: "2026",
    title: "Instagram Double Tap Like",
    description:
      "A smooth Instagram-inspired double tap like animation built with JavaScript and interactive UI effects.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    tag: "UI",
    year: "2026",
    title: "Hover Image Reveal",
    description:
      "A creative hover interaction where images smoothly follow the cursor and reveal themselves while hovering over text.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    tag: "UI",
    year: "2026",
    title: "Instagram Stories",
    description:
      "An Instagram stories interface with clickable stories and animated progress bars.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    tag: "Node.js",
    year: "2026",
    title: "File Management Dashboard",
    description:
      "A simple file management project built while learning Node.js fundamentals.",
    stack: ["Node.js"],
  },
];

const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "B.Tech Student",
    org: "KIET Group of Institutions",
    note: "Learning programming, web development, and data structures while building personal projects.",
  },
  {
    period: "2026",
    role: "Personal Projects",
    org: "Self-directed Development",
    note: "Built multiple frontend projects using HTML, CSS, and JavaScript to strengthen practical development skills.",
  },
];

const CAPABILITIES = [
  {
    group: "Programming",
    items: ["C++", "Python", "JavaScript"],
  },
  {
    group: "Frontend",
    items: ["HTML", "CSS", "React (Learning)"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    group: "Currently Learning",
    items: ["Data Structures & Algorithms", "React", "JavaScript", "Node.js"],
  },
];

// ---------------------------------------------------------------------
// Small hook: fade elements in as they enter the viewport
// ---------------------------------------------------------------------
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
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Tab({ children }) {
  return (
    <p
      className="font-mono uppercase flex items-center gap-3"
      style={{
        fontSize: 11,
        letterSpacing: "0.35em",
        color: C.inkMuted,
        marginBottom: 32,
      }}
    >
      <span
        style={{
          width: 32,
          height: 1,
          background: `linear-gradient(90deg, ${C.goldLight}, transparent)`,
        }}
      />
      {children}
    </p>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  const bracketStyle = {
    position: "absolute",
    width: 12,
    height: 12,
    opacity: hovered ? 1 : 0,
    transition: "opacity 0.5s",
    filter: "drop-shadow(0 0 4px rgba(245,214,140,0.5))",
  };

  return (
    <div
      className="relative py-9 md:py-11"
      style={{ borderTop: `1px solid ${C.border}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          ...bracketStyle,
          left: -4,
          top: 24,
          borderLeft: `1px solid ${C.goldLight}`,
          borderTop: `1px solid ${C.goldLight}`,
        }}
      />
      <span
        style={{
          ...bracketStyle,
          right: -4,
          top: 24,
          borderRight: `1px solid ${C.goldLight}`,
          borderTop: `1px solid ${C.goldLight}`,
        }}
      />
      <span
        style={{
          ...bracketStyle,
          left: -4,
          bottom: 24,
          borderLeft: `1px solid ${C.goldLight}`,
          borderBottom: `1px solid ${C.goldLight}`,
        }}
      />
      <span
        style={{
          ...bracketStyle,
          right: -4,
          bottom: 24,
          borderRight: `1px solid ${C.goldLight}`,
          borderBottom: `1px solid ${C.goldLight}`,
        }}
      />

      <div className="grid md:grid-cols-12 gap-3 md:gap-8 items-start px-1">
        <div className="md:col-span-1">
          <span className="font-mono" style={{ fontSize: 12, color: C.inkFaint }}>
            {num}
          </span>
        </div>

        <div className="md:col-span-4">
          <h3
            className="font-serif italic leading-none"
            style={{
              fontSize: "clamp(28px,4vw,38px)",
              lineHeight: 1.05,
              transition: "all 0.5s",
              ...(hovered ? goldText : { color: C.ink }),
            }}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <span
              className="font-mono uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.15em",
                color: C.gold,
                border: `1px solid ${C.borderStrong}`,
                borderRadius: 2,
                padding: "2px 8px",
              }}
            >
              {project.tag}
            </span>
            <span className="font-mono" style={{ fontSize: 11, color: C.inkFaint }}>
              {project.year}
            </span>
          </div>
        </div>

        <div className="md:col-span-5">
          <p
            className="max-w-full"
            style={{ fontSize: 14.5, lineHeight: 1.7, color: C.inkMuted }}
          >
            {project.description}
          </p>
        </div>

        <div className="md:col-span-2 flex md:flex-col md:items-end gap-2 md:gap-3">
          <ul className="flex flex-wrap md:justify-end gap-x-2 gap-y-1">
            {project.stack.map((s) => (
              <li key={s} className="font-mono" style={{ fontSize: 10, color: C.inkFaint }}>
                {s}
              </li>
            ))}
          </ul>
          <ArrowUpRight
            size={16}
            style={{ color: C.gold, opacity: hovered ? 1 : 0, transition: "opacity 0.5s" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioApp() {
  const [navOpen, setNavOpen] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);

  const navLinks = [
    { href: "#profile", label: "Profile" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{ background: C.bg, color: C.ink, fontFamily: "'Manrope', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400;1,6..96,500&family=Manrope:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Bodoni Moda', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        ::selection { background: #D9AC5C; color: #050505; }
      `}</style>

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,90,35,0.14), transparent 70%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(80,60,20,0.10), transparent 70%)",
        }}
      />

      <header
        className="sticky top-0 z-40"
        style={{
          background: C.bgHeader,
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-serif italic text-lg" style={goldText}>
            {PROFILE.name}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono uppercase transition-colors"
                style={{ fontSize: 12, letterSpacing: "0.15em", color: C.inkMuted }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="font-mono uppercase transition-all"
              style={{
                fontSize: 12,
                letterSpacing: "0.15em",
                color: C.gold,
                border: `1px solid ${C.gold}`,
                borderRadius: 2,
                padding: "6px 16px",
              }}
            >
              Say hello
            </a>
          </nav>

          <button
            className="md:hidden"
            style={{ color: C.ink }}
            aria-label="Toggle navigation menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {navOpen && (
          <div
            className="md:hidden px-6 py-4 flex flex-col gap-4"
            style={{ borderTop: `1px solid ${C.border}` }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setNavOpen(false)}
                className="font-mono uppercase"
                style={{ fontSize: 12, letterSpacing: "0.15em", color: C.inkMuted }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-24 md:pb-36 relative overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-0 font-serif italic leading-none"
            style={{
              top: -40,
              fontSize: "min(320px, 28vw)",
              color: C.ghostNumeral,
            }}
          >
            01
          </span>

          <div className="relative">
            <div style={{ maxWidth: "52rem" }}>
              <Reveal>
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: 12, letterSpacing: "0.4em", color: C.gold, marginBottom: 24 }}
                >
                  {PROFILE.role}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h1
                  className="font-serif italic"
                  style={{
                    fontSize: "clamp(48px, 9vw, 92px)",
                    lineHeight: 0.98,
                    marginBottom: 32,
                    ...goldText,
                  }}
                >
                  {PROFILE.name}
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.7,
                    color: C.inkMuted,
                    marginBottom: 40,
                    maxWidth: "34rem",
                  }}
                >
                  {PROFILE.thesis}
                </p>
              </Reveal>

              <Reveal delay={340}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 font-mono uppercase transition-transform"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.15em",
                      color: C.bg,
                      borderRadius: 2,
                      padding: "14px 24px",
                      backgroundImage: GOLD_GRADIENT,
                      ...goldGlow,
                      transform: ctaHover ? "translateY(-2px)" : "translateY(0)",
                    }}
                    onMouseEnter={() => setCtaHover(true)}
                    onMouseLeave={() => setCtaHover(false)}
                  >
                    View selected work
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 font-mono uppercase transition-colors"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.15em",
                      color: C.ink,
                      border: `1px solid ${C.borderStrong}`,
                      borderRadius: 2,
                      padding: "14px 24px",
                    }}
                  >
                    Get in touch
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="profile"
          className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <Reveal>
            <Tab>Profile</Tab>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-[2.8fr_2.2fr] md:gap-16">
            <Reveal delay={60}>
              <p
                className="font-serif italic"
                style={{ fontSize: "clamp(24px,3vw,28px)", lineHeight: 1.3, color: C.ink }}
              >
                I am a Computer Science and Engineering student pursuing B.Tech in Artificial Intelligence at KIET Group of Institutions.
              </p>
              <p
                className="mt-6"
                style={{ fontSize: 15, lineHeight: 1.75, color: C.inkMuted, maxWidth: "min(100%, 68rem)" }}
              >
                I enjoy learning programming and building projects to improve my skills in web development and software fundamentals.
              </p>
              <p
                className="mt-6"
                style={{ fontSize: 15, lineHeight: 1.75, color: C.inkMuted, maxWidth: "min(100%, 68rem)" }}
              >
                Right now I am learning HTML, CSS, JavaScript, React, C++, Python, and Data Structures & Algorithms.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <dl className="grid gap-y-4" style={{ borderTop: `1px solid ${C.border}` }}>
                {FACTS.map((f) => (
                  <div
                    key={f.label}
                    className="grid gap-6"
                    style={{
                      gridTemplateColumns: "max-content minmax(0, 1fr)",
                      alignItems: "start",
                      padding: "1rem 0",
                      borderBottom: `1px solid ${C.border}`,
                      minWidth: 0,
                    }}
                  >
                    <dt
                      className="font-mono uppercase"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        color: C.labelMuted,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {f.label}
                    </dt>
                    <dd
                      style={{
                        fontSize: 14,
                        color: C.ink,
                        textAlign: "left",
                        minWidth: 0,
                        whiteSpace: "normal",
                      }}
                    >
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section
          id="work"
          className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <Tab>Selected work</Tab>
              <p
                className="font-mono uppercase"
                style={{ fontSize: 11, color: C.inkFaint, marginBottom: 32 }}
              >
                {PROJECTS.length} projects, 2022 — 2025
              </p>
            </div>
          </Reveal>

          <div>
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
            <div style={{ borderTop: `1px solid ${C.border}` }} />
          </div>
        </section>

        <section
          id="experience"
          className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <Reveal>
            <Tab>Experience</Tab>
          </Reveal>

          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 70}>
                <div
                  className="grid md:grid-cols-12 gap-2 md:gap-6 py-7 items-baseline"
                  style={{ borderBottom: `1px solid ${C.border}` }}
                >
                  <p
                    className="md:col-span-3 font-mono"
                    style={{ fontSize: 12, color: C.labelMuted }}
                  >
                    {e.period}
                  </p>
                  <div className="md:col-span-4">
                    <p className="font-serif italic" style={{ fontSize: 20, color: C.ink }}>
                      {e.role}
                    </p>
                    <p
                      className="font-mono uppercase mt-1"
                      style={{ fontSize: 11, letterSpacing: "0.1em", color: C.gold }}
                    >
                      {e.org}
                    </p>
                  </div>
                  <p
                    className="md:col-span-5"
                    style={{ fontSize: 14, lineHeight: 1.7, color: C.inkMuted }}
                  >
                    {e.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <Reveal>
            <Tab>Capabilities</Tab>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-10">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.group} delay={i * 80}>
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gold, marginBottom: 16 }}
                >
                  {c.group}
                </p>
                <ul className="space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item} className="font-serif italic" style={{ fontSize: 15, color: C.ink }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <Reveal>
            <Tab>Contact</Tab>
            <h2
              className="font-serif italic max-w-2xl"
              style={{ fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.05, marginBottom: 40, ...goldText }}
            >
              Have a project worth doing properly? Let's talk.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 font-mono uppercase"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  color: C.bg,
                  borderRadius: 2,
                  padding: "12px 20px",
                  backgroundImage: GOLD_GRADIENT,
                  ...goldGlow,
                }}
              >
                <Mail size={14} />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                className="inline-flex items-center gap-2 font-mono uppercase transition-colors"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  color: C.ink,
                  border: `1px solid ${C.borderStrong}`,
                  borderRadius: 2,
                  padding: "12px 20px",
                }}
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                className="inline-flex items-center gap-2 font-mono uppercase transition-colors"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  color: C.ink,
                  border: `1px solid ${C.borderStrong}`,
                  borderRadius: 2,
                  padding: "12px 20px",
                }}
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div
              className="flex flex-wrap items-center justify-between gap-4 pt-8"
              style={{ borderTop: `1px solid ${C.border}` }}
            >
              <p
                className="font-mono uppercase flex items-center gap-1.5"
                style={{ fontSize: 11, letterSpacing: "0.1em", color: C.labelMuted }}
              >
                <MapPin size={12} />
                {PROFILE.location}
              </p>
              <p
                className="font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.1em", color: C.labelMuted }}
              >
                © 2026 Vansh Agarwal
              </p>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

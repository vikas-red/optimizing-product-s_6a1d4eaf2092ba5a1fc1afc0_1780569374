import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  GraduationCap,
  Users,
  Briefcase,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cloud,
  Shield,
  Database,
  Brain,
  Zap,
  Target,
  Rocket,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Industry Integrated Credit Program | SmartBridge × NASSCOM" },
      {
        name: "description",
        content:
          "Industry-aligned experiential learning by SmartBridge in partnership with NASSCOM FSP. Build job-ready skills across AI, Cloud, Salesforce, Full Stack and more.",
      },
    ],
  }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const tracks = [
  { icon: Code2, name: "Full Stack Development (MERN)", partner: "MongoDB" },
  { icon: Cloud, name: "Salesforce Platform Developer", partner: "Salesforce" },
  { icon: Brain, name: "Salesforce Agentforce Specialist", partner: "Salesforce" },
  { icon: Cloud, name: "AWS Cloud Practitioner", partner: "Amazon Web Services" },
  { icon: Shield, name: "Cyber Security Associate (ZTCA)", partner: "Zscaler" },
  { icon: Database, name: "Snowflake Data Engineer", partner: "Snowflake" },
  { icon: Sparkles, name: "Vibe Coding with Antigravity", partner: "Google" },
  { icon: Brain, name: "AI Specialist – Healthcare", partner: "Google" },
  { icon: Brain, name: "AI Specialist – BFSI", partner: "Google" },
  { icon: Brain, name: "AI Specialist – HR & Recruitment", partner: "Google" },
  { icon: Brain, name: "AI Specialist – Growth Marketing", partner: "Google" },
  { icon: Zap, name: "Generative AI Developer", partner: "Google" },
];

const components = [
  {
    icon: Users,
    title: "Virtual Instructor-Led Training",
    hours: "40 Hours",
    desc: "Live technical sessions led by industry experts with real-world implementation walkthroughs.",
  },
  {
    icon: GraduationCap,
    title: "Self-Paced Learning",
    hours: "20 Hours",
    desc: "Structured digital modules and guided learning paths that reinforce foundational concepts.",
  },
  {
    icon: Rocket,
    title: "Project Development & Mentorship",
    hours: "30 Hours",
    desc: "Capstone projects under continuous mentor guidance with cloud deployment exposure.",
  },
];

const highlights = [
  "Industry-aligned curriculum",
  "Guided capstone projects",
  "Dedicated mentor support",
  "Agile & Design Thinking",
  "GitHub collaboration",
  "Cloud deployment exposure",
  "Industry knowledge sessions",
  "Team-based learning",
  "Course Completion Certificate",
  "Project Completion Certificate",
  "Performance Score Card",
  "Technical assessments",
];

// Shared in-view config so reveals reliably fire even on tall sections
const inView = { once: true, amount: 0.15 } as const;

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-elegant)]"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight">SmartBridge</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              × NASSCOM FSP
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#program" className="transition-colors hover:text-foreground">Program</a>
          <a href="#tracks" className="transition-colors hover:text-foreground">Tracks</a>
          <a href="#outcomes" className="transition-colors hover:text-foreground">Outcomes</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
        </nav>
        <a
          href="#enroll"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]"
        >
          Enroll Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      {/* Mesh accents */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 28%, rgba(255,255,255,0.28), transparent 42%), radial-gradient(circle at 82% 72%, rgba(120,180,255,0.35), transparent 45%), radial-gradient(circle at 50% 110%, rgba(180,140,255,0.25), transparent 50%)",
        }}
      />
      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/25 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.25, 0.4] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
          className="mx-auto max-w-4xl text-center text-primary-foreground"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Now enrolling · In partnership with NASSCOM FSP
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            Industry Integrated <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Credit Program
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
          >
            An experiential learning initiative equipping university students with real-world
            exposure to emerging technologies, enterprise tools, and job-ready skills.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#enroll"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-2xl transition-all hover:scale-105"
            >
              Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#tracks"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Explore Tracks
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { v: "90", l: "Learning Hours" },
              { v: "2", l: "Months" },
              { v: "12", l: "Tech Tracks" },
              { v: "₹2,500", l: "DBT Support" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-colors hover:bg-white/15"
              >
                <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/75">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function Partners() {
  const logos = ["MongoDB", "Salesforce", "AWS", "Google", "Snowflake", "Zscaler"];
  return (
    <section className="border-y border-border bg-secondary/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Backed by Global Technology Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-5">
          {logos.map((l, i) => (
            <motion.span
              key={l}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ delay: i * 0.06 }}
              className="text-xl font-bold tracking-tight text-foreground/55 transition-colors hover:text-primary md:text-2xl"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
  light,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      className="mx-auto max-w-2xl text-center"
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
          light
            ? "border-white/20 bg-white/10 text-white/80"
            : "border-primary/15 bg-primary/5 text-primary"
        }`}
      >
        <Star className="h-3 w-3" /> {eyebrow}
      </span>
      <h2
        className={`mt-4 text-4xl font-bold tracking-tight md:text-5xl ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 ${light ? "text-white/75" : "text-muted-foreground"}`}>{desc}</p>
      )}
    </motion.div>
  );
}

function Program() {
  return (
    <section id="program" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Program Structure"
          title="A blended learning experience built for impact"
          desc="90 hours across two months — combining live instruction, self-paced modules, and guided capstone projects."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {components.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              />
              <div className="relative">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-elegant)]"
                  style={{ backgroundImage: "var(--gradient-hero)" }}
                >
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">
                  {c.hours}
                </div>
                <h3 className="mt-2 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  return (
    <section
      id="tracks"
      className="relative py-24"
      style={{ backgroundImage: "var(--gradient-subtle)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="12 Technology Tracks"
          title="Industry-approved tracks aligned to in-demand roles"
          desc="Each track is co-designed with leading technology partners and includes a real, deployable capstone."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ delay: i * 0.035, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold leading-snug">{t.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  with {t.partner} · 90 Hrs
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <Star className="h-3 w-3" /> Program Highlights
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Everything you need to become job-ready
            </h2>
            <p className="mt-4 text-muted-foreground">
              From mentor support to certifications and real cloud deployments — the program is
              engineered for measurable employability outcomes.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Target, v: "100", l: "Total Marks" },
                { icon: Award, v: "3", l: "Certificates" },
                { icon: Briefcase, v: "1:1", l: "Mentorship" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-elegant)]"
                >
                  <s.icon className="h-6 w-6 text-primary" />
                  <div className="mt-3 text-2xl font-bold">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={inView}
            transition={{ staggerChildren: 0.05 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {highlights.map((h) => (
              <motion.li
                key={h}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium transition-colors hover:border-primary/40"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                {h}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const groups = [
    {
      icon: GraduationCap,
      title: "For Learners",
      items: [
        "Hands-on emerging tech exposure",
        "Portfolio-ready capstone projects",
        "Industry-recognized certifications",
        "Improved employability skills",
      ],
    },
    {
      icon: Briefcase,
      title: "For Institutions",
      items: [
        "Enhanced industry engagement",
        "Better placement outcomes",
        "Outcome-driven curriculum enrichment",
        "Stronger innovation ecosystem",
      ],
    },
    {
      icon: Rocket,
      title: "For Industry",
      items: [
        "Future-ready talent pipeline",
        "Adoption of emerging technologies",
        "Stronger academia collaboration",
        "Skilled workforce alignment",
      ],
    },
  ];
  return (
    <section
      id="outcomes"
      className="py-24"
      style={{ backgroundImage: "var(--gradient-subtle)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Outcomes & Impact"
          title="Built to create lasting value"
          desc="A measurable ripple effect across learners, institutions, and the industry."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          className="relative overflow-hidden rounded-[2rem] border border-border p-10 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-14"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <motion.div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                <Sparkles className="h-3 w-3" /> Program Fee
              </span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-6xl font-bold tracking-tight md:text-7xl">₹5,000</span>
                <span className="text-white/80">/ student</span>
              </div>
              <p className="mt-4 text-white/85">
                Eligible students receive <strong>₹2,500 DBT reimbursement</strong> via NASSCOM FSP
                upon successful completion.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-md">
                <Sparkles className="h-4 w-4" /> Net effective cost from ₹2,500
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Course Completion Certificate",
                "Project Completion Certificate",
                "Performance Score Card",
                "Dedicated Mentor Access",
                "Cloud Deployment Exposure",
              ].map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3.5 text-sm backdrop-blur-md transition-colors hover:bg-white/15"
                >
                  <CheckCircle2 className="h-5 w-5" /> {b}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="enroll" className="pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 text-center shadow-sm md:p-16"
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          />
          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Ready to build your future?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join thousands of students gaining industry exposure through SmartBridge × NASSCOM
              FSP credit courses.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]"
              >
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} SmartBridge × NASSCOM FSP. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Partners />
        <Program />
        <Tracks />
        <Highlights />
        <Outcomes />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

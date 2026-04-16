"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

// Map tech name → colour class
const techColor: Record<string, string> = {
  Java: "bg-red-500/10 text-red-300 border-red-500/20",
  Python: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  React: "bg-blue-400/10 text-blue-300 border-blue-400/20",
  "Next.js": "bg-slate-500/10 text-slate-300 border-slate-500/20",
  TypeScript: "bg-blue-600/10 text-blue-300 border-blue-600/20",
  "Spring Boot": "bg-green-500/10 text-green-300 border-green-500/20",
  "Spring Cloud": "bg-green-600/10 text-green-300 border-green-600/20",
  Kubernetes: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Docker: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  Kafka: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  Elasticsearch: "bg-yellow-600/10 text-yellow-300 border-yellow-600/20",
  Grafana: "bg-orange-600/10 text-orange-300 border-orange-600/20",
  Terraform: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  AWS: "bg-orange-400/10 text-orange-300 border-orange-400/20",
  "GitHub Actions": "bg-slate-400/10 text-slate-300 border-slate-400/20",
  Redis: "bg-red-400/10 text-red-300 border-red-400/20",
  PostgreSQL: "bg-blue-700/10 text-blue-300 border-blue-700/20",
  MongoDB: "bg-green-700/10 text-green-300 border-green-700/20",
  "GitHub API": "bg-slate-600/10 text-slate-300 border-slate-600/20",
  OpenAI: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  LangGraph: "bg-violet-500/10 text-violet-300 border-violet-500/20",
};

function getTagClass(tag: string) {
  return techColor[tag] ?? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20";
}

// Gradient maps for project card header
const gradients = [
  "from-[#00f0ff]/20 via-[#7c3aed]/10 to-transparent",
  "from-[#7c3aed]/20 via-[#00f0ff]/10 to-transparent",
  "from-[#f59e0b]/20 via-[#ef4444]/10 to-transparent",
  "from-[#34d399]/20 via-[#0ea5e9]/10 to-transparent",
  "from-[#f472b6]/20 via-[#7c3aed]/10 to-transparent",
  "from-[#0ea5e9]/20 via-[#34d399]/10 to-transparent",
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.15}
      className="group relative rounded-2xl overflow-hidden glass border border-white/5 hover:border-[#00f0ff]/20 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        boxShadow: hovered
          ? "0 20px 60px rgba(0,240,255,0.08), 0 0 0 1px rgba(0,240,255,0.15)"
          : "none",
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-semibold">
          <Star size={10} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Project "screenshot" placeholder */}
      <div
        className={`relative h-44 bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden`}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Project number */}
        <div className="absolute bottom-4 left-4 text-6xl font-black opacity-10 dark:text-white text-slate-800 select-none">
          {String(index + 1).padStart(2, "0")}
        </div>
        {/* Title overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00f0ff] text-black text-xs font-bold hover:bg-white transition-colors"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors border border-white/20"
          >
            <Github size={12} />
            Code
          </a>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="text-base font-bold dark:text-white text-slate-800 mb-2 group-hover:text-[#00f0ff] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-md text-xs font-medium border ${getTagClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="px-5 pb-5 flex items-center justify-between border-t border-white/5 pt-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs dark:text-slate-400 text-slate-500 hover:text-[#00f0ff] transition-colors font-medium"
        >
          <Github size={13} />
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[#00f0ff] hover:text-[#7ffffe] transition-colors font-semibold"
        >
          <ExternalLink size={13} />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
      />

      <div ref={ref} className="container-custom">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#00f0ff] tracking-[0.3em] uppercase mb-3 block">
            What I&apos;ve Built
          </span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-sm">
            A curated selection of projects that showcase my technical range —
            from enterprise backends to AI-powered tools.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* View all on GitHub */}
        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/vinaykumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-[#00f0ff]/30 dark:text-slate-300 text-slate-700 text-sm font-semibold hover:text-[#00f0ff] transition-all"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

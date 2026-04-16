"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Zap, Bot } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WebsiteInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            background:
              "linear-gradient(135deg, #00f0ff 0%, transparent 50%, #7c3aed 100%)",
          }}
        />
      </div>

      <div ref={ref} className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative glass rounded-3xl border border-[#00f0ff]/15 p-8 md:p-12 text-center overflow-hidden"
        >
          {/* Decorative corner blobs */}
          <div
            className="absolute -top-8 -left-8 w-40 h-40 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #00f0ff, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
          />

          {/* Icon row */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]"
            >
              <Zap size={18} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-[#7c3aed]/20 border border-white/10 flex items-center justify-center"
            >
              <Bot size={22} className="text-[#00f0ff]" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#a78bfa]"
            >
              <Sparkles size={18} />
            </motion.div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-4">
            Built with{" "}
            <span className="text-gradient">Antigravity AI</span>
          </h2>

          {/* Description */}
          <p className="dark:text-slate-300 text-slate-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            Powered by{" "}
            <span className="font-semibold text-[#00f0ff]">Antigravity</span> and{" "}
            <span className="font-semibold text-[#a78bfa]">Claude AI</span>, this
            portfolio showcases innovation in action — from intelligent agentic
            workflows to enterprise-grade software architecture.
          </p>

          {/* Stats chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Next.js 15", emoji: "⚡" },
              { label: "Framer Motion", emoji: "🎬" },
              { label: "TypeScript", emoji: "🔷" },
              { label: "Tailwind CSS", emoji: "🎨" },
              { label: "shadcn/ui", emoji: "🧩" },
              { label: "Antigravity AI", emoji: "🤖" },
            ].map(({ label, emoji }) => (
              <motion.span
                key={label}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-white/10 text-xs font-semibold dark:text-slate-300 text-slate-600 cursor-default"
              >
                <span>{emoji}</span> {label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

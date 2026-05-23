"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Briefcase, Coffee, Zap } from "lucide-react";
import { personalInfo, aboutPunchline, funFacts } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const highlights = [
    {
      icon: Briefcase,
      label: "Current Role",
      value: personalInfo.currentRole,
      color: "#00f0ff",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      color: "#a78bfa",
    },
    {
      icon: Coffee,
      label: "Focus",
      value: "Java & AI Systems",
      color: "#f59e0b",
    },
    { icon: Zap, label: "Passion", value: "Clean Architecture", color: "#34d399" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
      />

      <div ref={ref} className="container-custom">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#00f0ff] tracking-[0.3em] uppercase mb-3 block">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 font-medium italic text-lg max-w-2xl mx-auto">
            &ldquo;{aboutPunchline}&rdquo;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left – Bio */}
          <div>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base md:text-lg dark:text-slate-300 text-slate-700 leading-relaxed mb-6"
            >
              {personalInfo.bio}
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base dark:text-slate-400 text-slate-600 leading-relaxed mb-8"
            >
              Over the past {personalInfo.yearsOfExperience || "4+"} years, I&apos;ve had the privilege of working across
              diverse domains — from financial services to e-commerce — helping
              teams ship production-grade software that withstands real-world load.
              My sweet spot is where{" "}
              <span className="text-[#00f0ff] font-semibold">
                backend engineering
              </span>{" "}
              meets{" "}
              <span className="text-[#a78bfa] font-semibold">
                intelligent automation
              </span>
              .
            </motion.p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value, color }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  custom={3 + i * 0.5}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="glass rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${color}15`, color }}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="text-xs dark:text-slate-500 text-slate-500 mb-1 font-medium">
                    {label}
                  </div>
                  <div className="text-sm dark:text-white text-slate-800 font-semibold">
                    {value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right – Fun Facts & Values */}
          <div>
            <motion.h3
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-xl font-bold dark:text-white text-slate-800 mb-6"
            >
              A few things about me
            </motion.h3>

            <div className="space-y-4 mb-10">
              {funFacts.map(({ emoji, label }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  custom={2.5 + i * 0.2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-[#00f0ff]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.05)] transition-all group"
                >
                  <span className="text-2xl">{emoji}</span>
                  <span className="dark:text-slate-300 text-slate-700 font-medium group-hover:text-[#00f0ff] transition-colors">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <motion.div
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="glass rounded-2xl p-6 border border-[#7c3aed]/20"
            >
              <h4 className="font-bold dark:text-white text-slate-800 mb-4 text-sm uppercase tracking-widest text-[#a78bfa]">
                My Engineering Values
              </h4>
              {[
                "Clean, maintainable code over clever hacks",
                "Performance and scalability from day one",
                "Continuous learning and knowledge sharing",
                "Building with empathy — for users and teammates",
              ].map((value, i) => (
                <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] mt-2 shrink-0" />
                  <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

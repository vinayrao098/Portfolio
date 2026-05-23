"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { technicalSkills, toolsAndTech } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

// Colour palette for tool tags
const tagColors = [
  "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20",
  "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  "bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20",
  "bg-yellow-600/10 text-yellow-800 dark:text-yellow-300 border-yellow-600/20",
  "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
  "bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-500/20",
  "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
  "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden dark:bg-[#080808] bg-slate-50"
    >
      {/* Background blob */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent 70%)" }}
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
            My Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left – Technical Skills with progress bars */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-bold dark:text-white text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] text-xs font-bold">
                #1
              </span>
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalSkills.map(({ name, level }, i) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  custom={2 + i * 0.15}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold dark:text-slate-300 text-slate-700">
                      {name}
                    </span>
                    <span className="text-xs font-bold text-[#00f0ff]">
                      {level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${level}%` } : { width: 0 }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3 + i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Tools & Technologies as coloured tags */}
          <motion.div
            variants={fadeUp}
            custom={1.5}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-bold dark:text-white text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#a78bfa] text-xs font-bold">
                #2
              </span>
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {toolsAndTech.map((tool, i) => (
                <motion.span
                  key={tool}
                  variants={fadeUp}
                  custom={2 + i * 0.06}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.07, y: -2 }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-default transition-transform ${
                    tagColors[i % tagColors.length]
                  } dark:opacity-100 opacity-90`}
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            {/* Proficiency legend */}
            <motion.div
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-10 glass rounded-2xl p-5 border border-white/5"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-4">
                Proficiency Levels
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { range: "90–100%", label: "Expert", color: "bg-[#00f0ff]" },
                  { range: "75–89%", label: "Advanced", color: "bg-[#7c3aed]" },
                  { range: "60–74%", label: "Intermediate", color: "bg-yellow-400" },
                  { range: "< 60%", label: "Familiar", color: "bg-slate-500" },
                ].map(({ range, label, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                    <span className="text-xs dark:text-slate-400 text-slate-600">
                      {label}
                      <span className="ml-1 dark:text-slate-600 text-slate-400">
                        ({range})
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

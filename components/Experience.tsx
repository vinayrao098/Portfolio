"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden dark:bg-[#080808] bg-slate-50"
    >
      {/* Background */}
      <div
        className="absolute top-1/3 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
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
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900">
            Work & <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00f0ff] via-[#7c3aed] to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              custom={i * 0.2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative pl-16 mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className={`absolute left-0 w-12 h-12 rounded-xl flex items-center justify-center border-2 ${
                  exp.type === "work"
                    ? "bg-[#00f0ff]/10 border-[#00f0ff]/40 text-[#00f0ff]"
                    : "bg-[#7c3aed]/10 border-[#7c3aed]/40 text-[#a78bfa]"
                } transition-all`}
              >
                {exp.type === "work" ? (
                  <Briefcase size={18} />
                ) : (
                  <GraduationCap size={18} />
                )}
              </motion.div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-[#00f0ff]/15 transition-all group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-bold dark:text-white text-slate-800 group-hover:text-[#00f0ff] transition-colors">
                      {exp.role}
                    </h3>
                    <p
                      className={`text-sm font-semibold ${
                        exp.type === "work"
                          ? "text-[#00f0ff]"
                          : "text-[#a78bfa]"
                      }`}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1.5 text-xs dark:text-slate-400 text-slate-500">
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs dark:text-slate-500 text-slate-500">
                      <MapPin size={11} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 mt-4">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                      <div
                        className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                          exp.type === "work" ? "bg-[#00f0ff]" : "bg-[#a78bfa]"
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

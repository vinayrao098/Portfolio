"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

const taglines = personalInfo.taglines;

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const full = taglines[currentTagline];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < full.length) {
      timeout = setTimeout(() => {
        setDisplayText(full.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!isDeleting && charIndex === full.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(full.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentTagline((t) => (t + 1) % taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTagline]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { href: personalInfo.socials.github, icon: Github, label: "GitHub" },
    { href: personalInfo.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: personalInfo.socials.twitter, icon: Twitter, label: "Twitter" },
    { href: personalInfo.socials.email, icon: Mail, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="blob w-96 h-96 opacity-20 dark:opacity-20 opacity-10"
          style={{
            background: "radial-gradient(circle, #00f0ff, transparent 70%)",
            top: "10%",
            left: "5%",
          }}
        />
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="blob w-80 h-80 opacity-20 dark:opacity-20 opacity-10"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            bottom: "15%",
            right: "10%",
          }}
        />
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="blob w-64 h-64 opacity-10"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent 70%)",
            top: "40%",
            right: "20%",
          }}
        />


      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left – Text Content */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-medium mb-6"
          >
            <Sparkles size={12} />
            Available for exciting opportunities
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-none"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Vinay</span>
            <br />
            <span className="dark:text-white text-slate-900">Kumar</span>
          </motion.h1>

          {/* Dynamic tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-8 mb-6"
          >
            <p className="text-lg md:text-xl font-semibold dark:text-slate-300 text-slate-600">
              {displayText}
              <span className="typed-cursor">|</span>
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg dark:text-slate-400 text-slate-600 leading-relaxed max-w-lg mb-10"
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("experience")}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-black font-bold text-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.35)] transition-shadow"
            >
              View Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="px-7 py-3.5 rounded-xl glass border border-[#00f0ff]/30 dark:text-white text-slate-800 font-bold text-sm hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl glass border dark:border-white/10 border-black/10 flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right – Avatar */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            className="relative"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #00f0ff, #7c3aed, #00f0ff)",
                padding: 2,
                borderRadius: "50%",
              }}
            >
              <div className="w-full h-full rounded-full dark:bg-[#0a0a0a] bg-white" />
            </motion.div>

            {/* Avatar container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent m-2">
              {personalInfo.avatar ? (
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                /* Gradient placeholder avatar */
                <div className="w-full h-full bg-gradient-to-br from-[#00f0ff]/20 via-[#7c3aed]/20 to-[#0a0a0a] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl font-black text-gradient select-none">
                      VK
                    </div>
                    <div className="text-xs dark:text-slate-500 text-slate-400 mt-2 font-medium">
                      Add your photo
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass border border-[#00f0ff]/20 rounded-2xl px-3 py-2 text-xs font-semibold"
            >
              <div className="text-[#00f0ff]">{personalInfo.yearsOfExperience || "4+"} Years</div>
              <div className="dark:text-slate-400 text-slate-600">Experience</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-2 -right-4 glass border border-[#7c3aed]/20 rounded-2xl px-3 py-2 text-xs font-semibold"
            >
              <div className="text-[#a78bfa]">{personalInfo.projectsDelivered || "15+"} Projects</div>
              <div className="dark:text-slate-400 text-slate-600">Delivered</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 dark:text-slate-500 text-slate-400 hover:text-[#00f0ff] transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}

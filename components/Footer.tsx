"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: Github,
      href: personalInfo.socials.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: personalInfo.socials.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: personalInfo.socials.twitter,
      label: "Twitter",
    },
    {
      icon: Mail,
      href: personalInfo.socials.email,
      label: "Email",
    },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden dark:bg-[#060606] bg-slate-100 border-t dark:border-white/5 border-black/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#7c3aed] flex items-center justify-center font-bold text-black text-sm">
                VK
              </div>
              <span className="font-bold text-lg dark:text-white text-slate-800">
                Vinay Kumar
              </span>
            </div>
            <p className="text-sm dark:text-slate-500 text-slate-500 leading-relaxed max-w-xs">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-left text-sm dark:text-slate-400 text-slate-600 hover:text-[#00f0ff] transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
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
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="dark:border-white/5 border-black/5 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs dark:text-slate-600 text-slate-500">
            © {year} Vinay Kumar. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs dark:text-slate-600 text-slate-500">
            Made with{" "}
            <Heart size={11} className="text-red-400" fill="currentColor" />{" "}
            using{" "}
            <span className="flex items-center gap-1 text-[#00f0ff] font-semibold">
              <Zap size={11} />
              Antigravity
            </span>{" "}
            +{" "}
            <span className="dark:text-slate-400 text-slate-600 font-medium">
              Next.js
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

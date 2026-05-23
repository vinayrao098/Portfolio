"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  // { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#7c3aed] flex items-center justify-center font-bold text-black text-sm shadow-lg group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow">
                VK
              </div>
              <span className="font-bold text-lg hidden sm:block">
                <span className="text-gradient">Vinay</span>
                <span className="dark:text-white text-slate-800"> Kumar</span>
              </span>
            </motion.button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#00f0ff]"
                      : "dark:text-slate-300 text-slate-600 hover:text-[#00f0ff]"
                  }`}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-[#00f0ff]/10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center dark:text-slate-300 text-slate-600 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait">
                    {theme === "dark" ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={16} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={16} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}

              {/* Download CV */}
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-black font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-shadow"
              >
                <Download size={14} />
                Download CV
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center dark:text-slate-300 text-slate-600"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 45, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={16} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-72 z-40 glass border-l border-white/10 shadow-2xl flex flex-col pt-24 pb-8 px-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNavClick(link.href)}
                className={`text-left py-3 px-4 rounded-xl text-base font-medium transition-colors mb-1 ${
                  activeSection === link.href.substring(1)
                    ? "text-[#00f0ff] bg-[#00f0ff]/10"
                    : "dark:text-slate-300 text-slate-700 hover:text-[#00f0ff] hover:bg-[#00f0ff]/5"
                }`}
              >
                {link.label}
              </motion.button>
            ))}

            <div className="mt-6">
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-black font-semibold text-sm"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

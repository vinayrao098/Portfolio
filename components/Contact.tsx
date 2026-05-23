"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const socials = [
  {
    icon: Github,
    href: personalInfo.socials.github,
    label: "GitHub",
    color: "#ffffff",
    bg: "bg-white/5 hover:bg-white/10",
  },
  {
    icon: Linkedin,
    href: personalInfo.socials.linkedin,
    label: "LinkedIn",
    color: "#0a66c2",
    bg: "bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20",
  },
  {
    icon: Twitter,
    href: personalInfo.socials.twitter,
    label: "Twitter / X",
    color: "#1d9bf0",
    bg: "bg-[#1d9bf0]/10 hover:bg-[#1d9bf0]/20",
  },
  {
    icon: Mail,
    href: personalInfo.socials.email,
    label: "Email",
    color: "#00f0ff",
    bg: "bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send message:", data.error || "Unknown error");
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error sending message:", error);
      setStatus("error");
    }

    // Reset after 4s
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 pointer-events-none"
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
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-sm">
            Have a project in mind, or just want to chat about technology? My
            inbox is always open — I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left – Contact info */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {/* Direct email */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#00f0ff] mb-4">
                Direct Email
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 dark:text-white text-slate-800 hover:text-[#00f0ff] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff]/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="font-semibold text-sm">{personalInfo.email}</span>
              </a>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#00f0ff] mb-4">
                Social Profiles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, href, label, color, bg }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, x: 4 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl ${bg} border border-white/5 hover:border-white/10 transition-all`}
                  >
                    <Icon size={16} style={{ color }} />
                    <span className="text-sm dark:text-slate-300 text-slate-700 font-medium">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-6 border border-[#00f0ff]/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold dark:text-white text-slate-800">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                I&apos;m currently exploring senior/lead engineering roles and
                exciting freelance projects. Let&apos;s build something great together!
              </p>
            </div>
          </motion.div>

          {/* Right – Contact form */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 border border-white/5 space-y-5"
            >
              <h3 className="text-lg font-bold dark:text-white text-slate-800 mb-2">
                Send a Message
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold dark:text-slate-400 text-slate-600 mb-1.5 uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="form-input"
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold dark:text-slate-400 text-slate-600 mb-1.5 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="form-input"
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold dark:text-slate-400 text-slate-600 mb-1.5 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Vinay, I'd love to discuss..."
                  required
                  rows={5}
                  className="form-input resize-none"
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={
                  status === "idle" ? { scale: 1.02, y: -1 } : undefined
                }
                whileTap={status === "idle" ? { scale: 0.98 } : undefined}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                  status === "success"
                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                    : status === "error"
                    ? "bg-red-500/20 border border-red-500/30 text-red-400"
                    : "bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                }`}
              >
                {status === "idle" && (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
                {status === "loading" && (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending…
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={15} />
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle size={15} />
                    Try Again
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

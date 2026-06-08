"use client";

import { useState } from "react";
import { Reveal } from "@/app/components/ui/Reveal";
import { Section } from "@/app/components/ui/Section";
import { motion } from "framer-motion";
import { profile } from "@/app/Data/data";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "All fields are required." });
      return;
    }
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ type: "success", text: data.message || "Thank you! Your message was sent." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", text: data.error || "Failed to deliver message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: "Connection error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="pb-24 md:pb-32">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[var(--text-muted)] uppercase text-xs tracking-widest mb-4 font-semibold">Contacts</p>
              <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-strong)] leading-tight">
                Have a project?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-300)]">
                  {"Let's talk!"}
                </span>
              </h2>
            </div>

            <div className="space-y-6 pt-6">
              <p className="text-[var(--text-soft)] text-base max-w-md leading-relaxed">
                {"I'm always excited to collaborate on new projects, integrate intelligent AI solutions, or help scale your mobile applications. Drop a message, and let's build something exceptional!"}
              </p>

              <div className="space-y-4 pt-4">
                <motion.div whileHover={{ x: 4 }} className="border-l-4 border-[var(--brand-500)] pl-6">
                  <p className="text-[var(--text-muted)] text-sm mb-1 font-medium">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-[var(--text-strong)] font-semibold hover:text-[var(--brand-500)] transition text-lg"
                  >
                    {profile.email}
                  </a>
                </motion.div>



                <motion.div whileHover={{ x: 4 }} className="border-l-4 border-[var(--brand-500)] pl-6">
                  <p className="text-[var(--text-muted)] text-sm mb-1 font-medium">Location</p>
                  <p className="text-[var(--text-strong)] font-semibold text-lg">{profile.location}</p>
                </motion.div>
              </div>


            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--brand-500)] to-[var(--brand-300)] rounded-xl opacity-10 blur-xl -z-10" />

            <div className="bg-[var(--surface)] p-8 rounded-xl border-2 border-[var(--brand-500)] border-opacity-30 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[var(--text-strong)] font-semibold text-sm mb-3 block">Name</label>
                  <motion.input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-[var(--bg)] border-2 border-[var(--brand-500)] border-opacity-30 rounded-lg px-4 py-3 text-[var(--text-strong)] placeholder-[var(--text-muted)] focus:border-[var(--brand-500)] focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--brand-500)] focus:ring-opacity-20 transition"
                  />
                </div>

                <div>
                  <label className="text-[var(--text-strong)] font-semibold text-sm mb-3 block">Email</label>
                  <motion.input
                    type="email"
                    required
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-[var(--bg)] border-2 border-[var(--brand-500)] border-opacity-30 rounded-lg px-4 py-3 text-[var(--text-strong)] placeholder-[var(--text-muted)] focus:border-[var(--brand-500)] focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--brand-500)] focus:ring-opacity-20 transition"
                  />
                </div>

                <div>
                  <label className="text-[var(--text-strong)] font-semibold text-sm mb-3 block">Message</label>
                  <motion.textarea
                    required
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-[var(--bg)] border-2 border-[var(--brand-500)] border-opacity-30 rounded-lg px-4 py-3 text-[var(--text-strong)] placeholder-[var(--text-muted)] focus:border-[var(--brand-500)] focus:border-opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--brand-500)] focus:ring-opacity-20 transition resize-none"
                  />
                </div>

                {status && (
                  <p className={`text-sm font-medium ${status.type === "success" ? "text-emerald-500" : "text-rose-500"}`}>
                    {status.text}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02, boxShadow: loading ? "none" : "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-600)] hover:from-[var(--brand-600)] hover:to-[var(--brand-700)] text-white font-semibold py-3 rounded-lg transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </Section>
  );
}

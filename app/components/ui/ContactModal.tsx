"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
        setStatus({ type: "success", text: data.message || "Thank you! Message sent." });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          onClose();
          setStatus(null);
        }, 1800);
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            aria-label="Close modal overlay"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center p-6 pointer-events-none"
          >
            <div className="relative w-full max-w-[420px] rounded-2xl border-2 border-[var(--brand-500)] border-opacity-40 bg-[var(--surface)] p-8 shadow-2xl pointer-events-auto overflow-hidden">
              {/* Subtle Background accent */}
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--brand-500)] opacity-10 blur-2xl -z-10" />

              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg)] border border-[var(--brand-500)] border-opacity-30 text-[var(--brand-500)] hover:bg-[var(--brand-500)] hover:text-white transition-all shadow-md z-20"
                aria-label="Close modal"
              >
                <IoClose className="h-6 w-6" />
              </motion.button>

              <div className="space-y-6 relative z-10">
                {/* Header */}
                <div className="text-center pt-2">
                  <h2 className="text-3xl font-bold text-[var(--text-strong)] mb-2">
                    {"Let's Talk!"}
                  </h2>
                  <p className="text-sm text-[var(--text-soft)]">
                    {"I'd love to hear about your project or opportunity."}
                  </p>
                </div>

                {/* Simplified Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <motion.input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full bg-[var(--bg)] border-2 border-[var(--brand-500)] border-opacity-20 rounded-lg px-4 py-3 text-[var(--text-strong)] placeholder-[var(--text-muted)] focus:border-opacity-100 focus:outline-none focus:ring-1 focus:ring-[var(--brand-500)] transition"
                    />
                  </div>

                  <div>
                    <motion.input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full bg-[var(--bg)] border-2 border-[var(--brand-500)] border-opacity-20 rounded-lg px-4 py-3 text-[var(--text-strong)] placeholder-[var(--text-muted)] focus:border-opacity-100 focus:outline-none focus:ring-1 focus:ring-[var(--brand-500)] transition"
                    />
                  </div>

                  <div>
                    <motion.textarea
                      required
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full bg-[var(--bg)] border-2 border-[var(--brand-500)] border-opacity-20 rounded-lg px-4 py-3 text-[var(--text-strong)] placeholder-[var(--text-muted)] focus:border-opacity-100 focus:outline-none focus:ring-1 focus:ring-[var(--brand-500)] transition resize-none"
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
                    whileHover={{ scale: loading ? 1 : 1.02, boxShadow: loading ? "none" : "0 10px 20px rgba(6, 182, 212, 0.2)" }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-600)] text-white font-bold py-3.5 rounded-lg transition-all shadow-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

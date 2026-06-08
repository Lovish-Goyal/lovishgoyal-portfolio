"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ContactModal } from "@/app/components/ui/ContactModal";
import { ThemeToggle } from "@/app/components/system/ThemeToggle";
import { navItems, profile, socialLinks } from "@/app/Data/data";

const iconMap = {
  email: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  whatsapp: FaWhatsapp,
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-[var(--brand-500)] border-opacity-30 bg-[var(--bg)]/80 shadow-[0_0_30px_var(--brand-glow)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 w-[88%] md:w-[90%] max-w-[1440px] items-center justify-between">
          <Link href="#home" className="text-lg font-bold text-[var(--brand-500)] md:text-xl hover:text-[var(--brand-300)] transition">
            {profile.name}
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-soft)] transition hover:text-[var(--brand-300)] hover:bg-[var(--surface-soft)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2 mr-2">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              type="button"
              className="rounded-lg bg-[var(--brand-500)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--brand-600)] transition shadow-lg shadow-[var(--brand-500)]/20"
            >
              Talk to me
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--brand-500)] bg-transparent text-[var(--brand-500)] transition hover:bg-[var(--surface-soft)] lg:hidden"
          >
            <HiBars3BottomRight className="h-5 w-5" />
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                aria-label="Close menu overlay"
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed left-0 top-0 z-50 h-screen w-80 border-r-4 border-[var(--brand-500)] bg-[var(--surface)] p-8 lg:hidden overflow-y-auto"
              >
                <div className="mb-12">
                  <Link
                    href="#home"
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-[var(--brand-500)]"
                  >
                    {profile.name}
                  </Link>
                </div>

                <div className="space-y-2 mb-12">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-6 py-3 text-base font-semibold text-[var(--text-soft)] transition border-l-4 border-transparent hover:border-[var(--brand-500)] hover:text-[var(--brand-500)] hover:bg-[var(--surface-hover)]"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="my-8 h-px bg-[var(--line)]" />

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest font-semibold text-[var(--text-muted)]">Follow</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = iconMap[social.iconKey] || FiMail;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15, y: -4 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full border-2 border-[var(--brand-500)] flex items-center justify-center text-[var(--brand-500)] hover:bg-[var(--brand-500)] hover:text-white transition"
                          aria-label={social.label}
                          title={social.label}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between my-8 px-6">
                  <span className="text-sm font-semibold text-[var(--text-soft)]">Theme Mode</span>
                  <ThemeToggle />
                </div>

                <motion.div
                  className="mt-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <button
                    onClick={() => {
                      setIsContactModalOpen(true);
                      setIsOpen(false);
                    }}
                    type="button"
                    className="w-full px-6 py-3 bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-600)] text-white font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-[var(--brand-500)]/40 transition"
                  >
                    Talk to me
                  </button>
                </motion.div>

                <motion.button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ rotate: 90 }}
                  className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center border-2 border-[var(--brand-500)] rounded-full text-[var(--brand-500)] hover:bg-[var(--brand-500)] hover:text-white transition"
                  aria-label="Close menu"
                >
                  <IoClose className="h-6 w-6" />
                </motion.button>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}

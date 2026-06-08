"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { Section } from "@/app/components/ui/Section";
import { profile } from "@/app/Data/data";

const roles = profile.roles || ["Developer"];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 80));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-[var(--brand-500)] inline-flex items-center min-h-[1.2em]">
      {roles[index].substring(0, subIndex)}
      <span className="inline-block w-[3px] h-[0.8em] ml-1 bg-[var(--brand-500)] animate-pulse" />
    </span>
  );
}

export function HeroSection() {
  return (
    <Section id="home" className="py-0 pt-20 min-h-dvh lg:h-dvh flex items-center overflow-hidden relative" skipPadding>
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-3">
            <p className="text-lg text-[var(--text-muted)] font-medium">
              {profile.greeting}<span className="text-[var(--brand-500)]">,</span>
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-strong)] mb-4 tracking-tight leading-tight">
            {"I'm"} <span className="text-[var(--brand-500)]">{profile.name}</span>
          </h1>

          <div className="text-3xl md:text-4xl font-bold text-[var(--text-soft)] mb-6 h-[2.5rem] md:h-[3.2rem] flex items-center">
            <TypingText />
          </div>

          <p className="text-base md:text-lg text-[var(--text-soft)] mb-6 leading-relaxed max-w-lg">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button href="#projects">
              Get a project?
            </Button>
            <Button href={profile.resumeUrl} variant="outline" download>
              My Resume
            </Button>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {profile.featuredSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium text-[var(--brand-500)] bg-[var(--surface)] border border-[var(--brand-500)] border-opacity-40 rounded transition-all hover:border-opacity-100 hover:bg-[var(--surface-soft)] hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center h-[400px] md:h-full"
        >
          <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none select-none z-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full rounded-full bg-gradient-to-br from-[var(--brand-500)] to-[var(--brand-300)] opacity-15 blur-[90px]"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], rotate: [180, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 0.5 }}
              className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[var(--brand-600)] to-[var(--brand-500)] opacity-12 blur-[90px]"
            />
          </div>

          <div className="relative w-72 h-72 md:w-96 md:h-96 z-10">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px rgba(6, 182, 212, 0.4)",
                  "0 0 70px rgba(6, 182, 212, 0.6)",
                  "0 0 40px rgba(6, 182, 212, 0.4)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full z-0"
            />

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.45, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(circle, var(--brand-500) 0%, rgba(6, 182, 212, 0.3) 45%, transparent 75%)",
              }}
              className="absolute -inset-12 rounded-full blur-3xl z-0 pointer-events-none"
            />

            <div className="absolute inset-0 rounded-full border-4 border-[var(--brand-500)] shadow-2xl shadow-[var(--brand-500)]/30 z-10 pointer-events-none" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--brand-500)] bg-[var(--surface)] z-20">
              <Image
                src={profile.avatar}
                alt={`${profile.name} - Flutter & Full Stack Mobile App Developer`}
                fill
                className="object-cover scale-105"
                priority
              />
            </div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-16 -right-16 text-[var(--brand-500)] text-7xl opacity-30 select-none pointer-events-none"
            >
              ◄
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-16 -left-16 text-[var(--brand-500)] text-7xl opacity-30 select-none pointer-events-none"
            >
              ▶
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

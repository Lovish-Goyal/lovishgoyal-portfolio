"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { Section } from "@/app/components/ui/Section";
import { motion } from "framer-motion";
import { skillCategories } from "@/app/Data/data";

export function SkillsSection() {
  return (
    <Section id="skills" className="pt-2 md:pt-4">
      <Reveal>
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-strong)] mb-6">
            Skills
          </h2>
          <p className="text-lg text-[var(--text-soft)] max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, high-performance applications
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-300)] mx-auto mt-6 rounded-full"
          />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((skillGroup, index) => (
          <Reveal key={skillGroup.category} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)" }}
              className="group relative h-full bg-[var(--surface)] border border-[var(--brand-500)] border-opacity-30 rounded-xl p-6 hover:border-[var(--brand-500)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[var(--brand-500)] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl" />

              <motion.div
                whileHover={{ scale: 1.2, rotateZ: 10 }}
                className="text-4xl mb-4 relative z-10"
              >
                {skillGroup.icon}
              </motion.div>

              <h3 className="text-base font-bold mb-4 text-[var(--brand-500)] relative z-10">
                {skillGroup.category}
              </h3>

              <ul className="space-y-2.5 flex-grow relative z-10">
                {skillGroup.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 group/item"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-500)] flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="text-[var(--text-soft)] text-sm font-medium group-hover/item:text-[var(--brand-500)] transition-colors">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

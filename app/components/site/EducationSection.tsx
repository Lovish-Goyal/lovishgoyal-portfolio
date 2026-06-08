"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { Section } from "@/app/components/ui/Section";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiCalendar } from "react-icons/fi";
import { education, certifications } from "@/app/Data/data";

export function EducationSection() {
  return (
    <Section id="education" className="pt-2 md:pt-4">
      <Reveal>
        <SectionHeading
          eyebrow="Education & Credentials"
          title="Academic background & Certifications"
          description="My educational foundation and professional certifications that validate my expertise."
        />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* Education - 5 columns */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-bold text-[var(--text-strong)] mb-6 flex items-center gap-3">
            <FiBookOpen className="text-[var(--brand-500)] w-5 h-5" />
            Education
          </h3>
          
          {education.map((edu, idx) => (
            <Reveal key={edu.school} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.1)" }}
                className="bg-[var(--surface)] border border-[var(--brand-500)] border-opacity-20 hover:border-opacity-60 rounded-xl p-6 relative overflow-hidden transition-all duration-300"
              >
                {/* Glow accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[var(--brand-500)] opacity-5 blur-xl" />

                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--brand-300)] uppercase tracking-wider mb-3">
                  <FiCalendar className="w-3.5 h-3.5" />
                  {edu.period}
                </div>
                
                <h4 className="text-lg font-bold text-[var(--text-strong)] mb-1">
                  {edu.degree}
                </h4>
                
                <p className="text-sm font-semibold text-[var(--brand-500)] mb-3">
                  {edu.fieldOfStudy}
                </p>
                
                <p className="text-sm text-[var(--text-soft)] mb-4">
                  {edu.school}
                </p>
                
                <span className="inline-block px-3 py-1 text-xs font-bold bg-[var(--surface-soft)] text-[var(--text-strong)] border border-[var(--line)] rounded-full">
                  {edu.score}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Certifications - 7 columns */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xl font-bold text-[var(--text-strong)] mb-6 flex items-center gap-3">
            <FiAward className="text-[var(--brand-500)] w-5 h-5" />
            Certifications & Accomplishments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <Reveal key={cert.title} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.1)" }}
                  className="bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--brand-500)] hover:border-opacity-50 rounded-xl p-5 h-full transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[var(--brand-500)] text-xs font-bold uppercase tracking-wider block mb-2">
                      {cert.issuer}
                    </span>
                    <h4 className="text-base font-bold text-[var(--text-strong)] mb-2 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[var(--text-soft)] leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

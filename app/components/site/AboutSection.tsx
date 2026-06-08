"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { Section } from "@/app/components/ui/Section";
import { FiCode, FiSmartphone, FiServer, FiCloud } from "react-icons/fi";
import { motion } from "framer-motion";
import { about, services, aboutStats } from "@/app/Data/data";

const iconMap = {
  mobile: FiSmartphone,
  frontend: FiCode,
  backend: FiServer,
  devops: FiCloud,
};

export function AboutSection() {
  return (
    <Section id="about">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-[var(--brand-500)] uppercase text-xs tracking-widest mb-2 font-bold opacity-80">
              Expertise &amp; Focus
            </h3>
            
            {services.map((service, index) => {
              const Icon = iconMap[service.iconKey] || FiCode;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-5 bg-[var(--surface)] border border-[var(--brand-500)] border-opacity-10 hover:border-opacity-40 rounded-xl transition-all duration-300 shadow-sm flex items-start gap-4"
                >
                  <div className="p-3 bg-[var(--surface-soft)] rounded-lg border border-[var(--brand-500)] border-opacity-20 text-[var(--brand-500)] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[var(--text-strong)]">
                      {service.title}
                    </h4>
                    <p className="text-[var(--text-soft)] text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-6">
              {about.title}
            </h2>
            <p className="text-[var(--text-soft)] leading-relaxed mb-4">
              {about.description1}
            </p>
            <p className="text-[var(--text-soft)] leading-relaxed mb-10">
              {about.description2}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {aboutStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.15)" }}
                  className="bg-[var(--surface)] border border-[var(--brand-500)] border-opacity-30 rounded-lg p-4 text-center"
                >
                  <p className="text-3xl font-bold text-[var(--brand-500)]">{stat.value}</p>
                  <p className="text-[var(--text-muted)] text-xs uppercase tracking-wide font-medium mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Reveal>
    </Section>
  );
}

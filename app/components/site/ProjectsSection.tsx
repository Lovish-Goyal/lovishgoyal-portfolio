"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { Reveal } from "@/app/components/ui/Reveal";
import { Section } from "@/app/components/ui/Section";
import { ProjectDetailModal } from "@/app/components/ui/ProjectDetailModal";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects, Project } from "@/app/Data/data";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Section id="projects" className="pt-4 md:pt-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "150px" }}
              transition={{ duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-300)] mx-auto mt-6 rounded-full"
            />
          </div>
        </Reveal>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative h-64 lg:h-80 rounded-xl overflow-hidden border-2 border-[var(--surface)] hover:border-[var(--brand-500)] shadow-lg hover:shadow-2xl transition-all group"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} - Mobile/Web Application by Lovish Goyal`}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent flex items-end p-6"
                    >
                      <p className="text-white font-semibold text-sm">Hover to explore</p>
                    </motion.div>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-3xl md:text-4xl font-bold text-[var(--text-strong)]"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-3 py-2 text-xs font-semibold text-[var(--brand-500)] bg-[var(--surface)] border border-[var(--brand-500)] border-opacity-40 rounded-full hover:border-opacity-100 hover:shadow-md hover:shadow-[var(--brand-500)]/20 transition"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <p className="text-[var(--text-soft)] leading-relaxed text-base">
                      {project.description}
                    </p>

                    <div className="flex gap-6 pt-2 flex-wrap items-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleViewMore(project)}
                        type="button"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-600)] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[var(--brand-500)]/40 transition-all shadow-lg"
                      >
                        View More
                        <FiArrowRight className="w-4 h-4" />
                      </motion.button>
                      <motion.div whileHover={{ x: 4 }} className="flex items-center">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-[var(--brand-500)] font-semibold hover:text-[var(--brand-300)] group/link py-2"
                        >
                          GitHub
                          <FiGithub className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>
      
      <ProjectDetailModal 
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

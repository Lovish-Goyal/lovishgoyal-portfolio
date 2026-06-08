"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/Data/data";

type ProjectDetailModalProps = {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
};

export function ProjectDetailModal({ isOpen, project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            type="button"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm cursor-default h-screen w-screen"
            aria-label="Close modal overlay"
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 h-screen w-screen pointer-events-none overflow-y-auto">
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl pointer-events-auto rounded-2xl border-2 border-[var(--brand-500)] border-opacity-30 bg-[var(--surface)] p-8 shadow-2xl shadow-[var(--brand-500)]/20 relative my-8"
            >
              {/* Background accent */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--brand-500)] opacity-5 blur-3xl" />

              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                type="button"
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--brand-500)] text-[var(--brand-500)] hover:bg-[var(--brand-500)] hover:text-white transition"
                aria-label="Close modal"
              >
                <IoClose className="h-6 w-6" />
              </motion.button>

              <div className="space-y-6 relative z-10">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative h-64 w-full rounded-xl overflow-hidden border-2 border-[var(--brand-500)] border-opacity-30"
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Project Title */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-[var(--text-soft)] text-lg leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-white font-bold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="px-3 py-2 text-xs font-semibold text-[var(--brand-500)] bg-[var(--surface-soft)] border border-[var(--brand-500)] border-opacity-40 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex gap-4 pt-4 flex-col sm:flex-row"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-600)] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[var(--brand-500)]/40 transition"
                  >
                    <FiGithub className="w-5 h-5" />
                    View on GitHub
                  </Link>
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--brand-500)] text-[var(--brand-500)] font-semibold rounded-lg hover:bg-[var(--brand-500)] hover:text-white transition"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    Live Demo
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

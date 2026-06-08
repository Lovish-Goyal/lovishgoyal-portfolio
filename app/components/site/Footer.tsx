"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile, socialLinks } from "@/app/Data/data";

const iconMap = {
  email: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  whatsapp: FaWhatsapp,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--brand-500)] border-opacity-20 bg-[var(--surface)] py-12 md:py-16">
      <div className="mx-auto w-[88%] md:w-[90%] max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[var(--text-soft)] text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          
          <p className="text-[var(--text-muted)] text-sm">
            Designed and built with passion by {profile.name}
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.iconKey] || FiMail;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-[var(--brand-500)] flex items-center justify-center text-[var(--brand-500)] hover:bg-[var(--brand-500)] hover:text-white transition"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

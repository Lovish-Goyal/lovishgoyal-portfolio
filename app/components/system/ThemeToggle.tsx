"use client";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "@/app/components/system/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--text-strong)] transition hover:border-[var(--brand-600)]"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <MdOutlineLightMode className="h-5 w-5" />
      ) : (
        <MdDarkMode className="h-5 w-5" />
      )}
    </button>
  );
}


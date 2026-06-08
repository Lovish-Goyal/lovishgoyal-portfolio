import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  download?: boolean;
};

export function Button({ href, children, variant = "solid", download }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

  const style =
    variant === "solid"
      ? "bg-[var(--brand-500)] text-white hover:bg-[var(--brand-600)] shadow-md hover:shadow-lg"
      : "border-2 border-[var(--brand-500)] bg-transparent text-[var(--brand-500)] hover:bg-[var(--brand-glow)] hover:text-[var(--brand-600)]";

  return (
    <Link href={href} className={`${base} ${style}`} download={download ? "" : undefined}>
      {children}
    </Link>
  );
}

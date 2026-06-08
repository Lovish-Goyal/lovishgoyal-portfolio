import { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  skipPadding?: boolean;
};

export function Section({ id, children, className = "", skipPadding = false }: SectionProps) {
  const paddingClass = skipPadding ? "" : "py-16 md:py-24";
  return (
    <section id={id} className={`scroll-mt-24 ${paddingClass} ${className}`}>
      <div className="mx-auto w-[88%] md:w-[90%] max-w-[1440px]">{children}</div>
    </section>
  );
}

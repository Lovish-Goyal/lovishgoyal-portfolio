type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-500)] mb-4">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-strong)]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg text-[var(--text-soft)] leading-relaxed ${
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

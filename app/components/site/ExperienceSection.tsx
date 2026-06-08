import { Reveal } from "@/app/components/ui/Reveal";
import { Section } from "@/app/components/ui/Section";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { experience } from "@/app/Data/data";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Timeline of professional growth"
          description="A progression of roles focused on delivering reliable products and improving engineering velocity."
        />
      </Reveal>

      <div className="relative mt-10 space-y-6 border-l border-[var(--line)] pl-6 md:pl-10">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08}>
            <article className="relative rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--card-shadow)]">
              <span className="absolute -left-[34px] top-8 h-3 w-3 rounded-full bg-[var(--brand-500)] md:-left-[46px]" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-300)]">
                {item.period}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-[var(--text-strong)]">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--text-soft)]">{item.company}</p>
              {item.points && item.points.length > 0 ? (
                <ul className="mt-4 space-y-2 list-disc pl-5 text-sm leading-6 text-[var(--text-soft)]">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{item.summary}</p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


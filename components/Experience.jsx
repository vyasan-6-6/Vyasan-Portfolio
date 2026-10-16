import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="container-page">
        <SectionHeading index="03" label="experience" title="Experience" />
        <div className="space-y-6">
          {experience.map((job) => (
            <Reveal key={job.company + job.role}>
              <article className="rounded-xl border border-line bg-surface p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role}{" "}
                    <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-muted">{job.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
                {job.note ? (
                  <p className="mt-3 text-sm text-muted">{job.note}</p>
                ) : null}
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

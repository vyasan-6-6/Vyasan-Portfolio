import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="container-page">
        <SectionHeading index="04" label="skills" title="Skills" />
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div
                key={s.group}
                className="rounded-xl border border-line bg-surface p-5 transition hover:border-accent"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {s.group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

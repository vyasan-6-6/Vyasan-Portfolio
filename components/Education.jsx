import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, training } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section border-t border-line">
      <div className="container-page">
        <SectionHeading index="05" label="education" title="Education & training" />
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((e) => (
              <div key={e.title} className="rounded-xl border border-line bg-surface p-5">
                <p className="font-mono text-xs text-muted">{e.period}</p>
                <h3 className="mt-1 font-semibold">{e.title}</h3>
                <p className="text-sm text-muted">{e.school}</p>
              </div>
            ))}
            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-xs text-muted">{training.period}</p>
              <h3 className="mt-1 font-semibold">{training.title}</h3>
              <p className="text-sm text-muted">{training.org}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

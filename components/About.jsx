import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="container-page">
        <SectionHeading index="02" label="about" title="About me" />
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-4 leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="space-y-3 self-start rounded-xl border border-line bg-surface p-5 text-sm">
              {about.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="font-mono text-accent">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

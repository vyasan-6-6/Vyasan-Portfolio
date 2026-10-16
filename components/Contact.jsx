import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

const rows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vyasanks",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/vyasan-6-6",
    href: profile.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-line">
      <div className="container-page">
        <SectionHeading
          index="06"
          label="contact"
          title="Let's talk"
          intro={`I'm looking for an entry-level full-stack developer role. Based in ${profile.location}.`}
        />
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-wrap items-center justify-between gap-2 px-5 py-4"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    {r.label}
                  </dt>
                  <dd>
                    <a
                      href={r.href}
                      {...(r.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="text-sm transition hover:text-accent"
                    >
                      {r.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Send an email
              </a>
              <a href={profile.resume} download className="btn btn-ghost">
                Download resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

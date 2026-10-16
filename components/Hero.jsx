import { profile, architecture } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.status}
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-base text-accent sm:text-lg">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href={profile.resume} download className="btn btn-ghost">
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-accent">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-accent">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`} className="transition hover:text-accent">
              Email
            </a>
          </div>
        </div>

        <aside
          aria-label="Architecture of the flagship project"
          className="animate-rise rounded-xl border border-line bg-surface p-5 [animation-delay:150ms]"
        >
          <p className="font-mono text-xs text-muted">{architecture.label}</p>
          <ol className="mt-4 space-y-0">
            {architecture.layers.map((layer, i) => (
              <li key={layer.name} className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full border border-accent bg-bg" />
                {i < architecture.layers.length - 1 ? (
                  <span className="absolute bottom-0 left-[3.5px] top-4 w-px bg-line" />
                ) : null}
                <div className="pb-4">
                  <p className="text-sm font-medium">{layer.name}</p>
                  <p className="font-mono text-xs leading-relaxed text-muted">
                    {layer.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}

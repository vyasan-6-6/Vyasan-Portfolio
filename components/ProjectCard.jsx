export default function ProjectCard({ project, index }) {
  const { name, kind, summary, built, outcome, stack, live, github, featured } =
    project;

  return (
    <article
      className={`group rounded-xl border bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent sm:p-8 ${
        featured ? "border-accent/50" : "border-line"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-muted">
            {String(index + 1).padStart(2, "0")}
            {featured ? " · flagship" : ""}
          </p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight">{name}</h3>
          <p className="mt-1 text-sm text-accent">{kind}</p>
        </div>
        <div className="flex gap-2">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary !px-4 !py-2"
          >
            Live ↗
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost !px-4 !py-2"
          >
            Code ↗
          </a>
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-muted">{summary}</p>

      <div className="mt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          What I built
        </p>
        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed">
          {built.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Outcome
        </p>
        <p className="mt-2 text-sm">{outcome}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

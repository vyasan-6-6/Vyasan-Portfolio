export default function SectionHeading({ index, label, title, intro }) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {index} / {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-3 max-w-2xl text-muted">{intro}</p> : null}
    </div>
  );
}

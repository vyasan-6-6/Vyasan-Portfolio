import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}

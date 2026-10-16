import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-line">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="projects"
          title="Live projects"
          intro="Three deployed applications. Each one links to the running app and its source code."
        />
        <div className="space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.name}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

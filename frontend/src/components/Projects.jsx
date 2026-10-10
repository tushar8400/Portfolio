import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import useRemote from "../hooks/useRemote";
import { getProjects } from "../api";
import { fallbackProjects, profile } from "../data/siteData";

function Thumb({ src, title }) {
  const [ok, setOk] = useState(Boolean(src));
  if (ok) {
    return <img className="project__img" src={src} alt={`${title} screenshot`} loading="lazy" onError={() => setOk(false)} />;
  }
  const letters = title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="project__img project__img--empty" aria-hidden="true">
      {letters}
    </div>
  );
}

function ProjectCard({ project }) {
  const { title, description, tech = [], image, liveUrl, githubUrl } = project;
  return (
    <article className="project">
      <Thumb src={image} title={title} />
      <div className="project__body">
        <h3>{title}</h3>
        <ul className="chips">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p>{description}</p>
        <div className="project__links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="link-blue">
              Live Demo <FiArrowRight aria-hidden="true" />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="link-dark">
              GitHub <FiArrowRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      
    </article>
  );
}

export default function Projects() {
  const projects = useRemote(getProjects, fallbackProjects).filter((p) => p.featured !== false);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Featured Projects</h2>
          <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="link-blue">
            View All Projects <FiArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="projects">
          {projects.map((p) => (
            <ProjectCard key={p._id || p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

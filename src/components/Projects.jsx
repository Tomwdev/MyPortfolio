import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A brief explanation of what this project does. Keep it to 1-2 sentences.",
    tech: ["React", "Tailwind", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description: "Another cool project. Maybe a dashboard or a tool you built.",
    tech: ["Next.js", "Firebase"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden">
      <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 border-b border-white/5" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs bg-slate-900 px-2 py-1 rounded border border-slate-800 text-slate-300">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href={project.github} className="flex items-center text-sm text-slate-300 hover:text-white transition-colors">
            <Github size={16} className="mr-2" /> Code
          </Link>
          <Link href={project.live} className="flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            <ExternalLink size={16} className="mr-2" /> Live Demo
          </Link>
        </div>

      </div>
    </div>
  );
}
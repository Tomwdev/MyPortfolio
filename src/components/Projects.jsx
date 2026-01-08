import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    tech: ["React", "Tailwind", "Next.js"],
    github: "https://github.com/Tomwdev/my-portfolio",
    live: "#Hero.jsx",
    image: "/images/project1Image.png",
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
    <section id="projects" className="py-20 text-slate-900 dark:text-white transition-colors duration-300">
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
    <div className="bg-slate-200/50 dark:bg-white/5 rounded-lg border border-slate-300 dark:border-white/10 hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-sm">
      
      {/* Image section - this fills the dark area you showed */}
      <div className="h-48 w-full relative overflow-hidden border-b border-slate-300 dark:border-white/5 transition-colors duration-300">
        {project.image ?  (
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-300 dark:from-slate-800 to-slate-400 dark:to-slate-900" />
        )}
      </div>

      {/* Text section below */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm line-clamp-2 transition-colors duration-300">
          {project.description}
        </p>
<div className="flex flex-wrap gap-2 mb-6">
  {project.tech.map((t, i) => (
    <span 
      key={i} 
      className="text-xs bg-slate-800 dark:bg-slate-900 px-3 py-1.5 rounded-md border border-slate-700 dark:border-slate-800 text-white dark:text-slate-300 transition-colors duration-300 font-medium"
    >
      {t}
    </span>
  ))}
</div>
        <div className="flex gap-4">
          <Link href={project.github} className="flex items-center text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
            <Github size={16} className="mr-2" /> Code
          </Link>
          <Link href={project.live} className="flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300">
            <ExternalLink size={16} className="mr-2" /> Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
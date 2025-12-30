import Link from "next/link";
import { Github, ExternalLink } from "lucide-react"; // Import icons

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
  // Add more objects here...
];

export default function Projects() {
  return (
    // SECTION WRAPPER
    // Goal: ID for nav (#projects), padding (py-20), text-white
    <section id="projects" className="py-20 text-white">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        {/* Goal: Big bold title, margin bottom */}
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

        {/* GRID */}
        {/* Goal: 1 col mobile, 2 cols tablet, 3 cols desktop. Gap-8. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ---------------------------------------------------------
// Helper Component: Project Card
// ---------------------------------------------------------
function ProjectCard({ project }) {
  return (
    // CARD CONTAINER
    // Goal: Glass effect (bg-white/5), rounded corners, border (border-white/10).
    // Animation: Hover scale up (hover:scale-105), transition-all, duration-300.
    <div className="bg-white/5 rounded-lg border border-white/10 hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* IMAGE PLACEHOLDER */}
      {/* Goal: Height (h-48), width full, bg-gradient (to mimic an image for now), rounded-t */}
      <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 border-b border-white/5" />

      {/* CONTENT PADDING */}
      <div className="p-6">
        
        {/* TITLE */}
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        {/* DESCRIPTION */}
        <p className="text-slate-400 mb-4 text-sm line-clamp-2">
          {project.description}
        </p>

        {/* TECH STACK TAGS */}
        {/* Goal: Flex row, wrap, small gap */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs bg-slate-900 px-2 py-1 rounded border border-slate-800 text-slate-300">
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        {/* Goal: Flex row, gap-4 */}
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
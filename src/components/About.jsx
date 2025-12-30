export default function About() {
  const skills = ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Git", "Figma"];

  return (
    <section id="about" className="py-20">
      <div className=" max-w-4xl mx-auto px-6 ">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-4 text-slate-400">
            <p className="leading-relaxed">
              I started coding in 2020 and fell in love with the logic and creativity of building web applications. 
              My journey began with HTML & CSS, but I quickly moved into the JavaScript ecosystem.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not coding, you can find me exploring new Linux distros, contributing to open source, 
              or optimizing my terminal setup.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">My Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <SkillTag key={index} name={skill} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillTag({ name }) {
  return (
    <span className="rounded-full bg-gray-800 border border-gray-700 px-3 py-1 text-sm font-medium text-gray-300 hover:border-white hover:text-white transition-colors">
      {name}
    </span>
  );
}
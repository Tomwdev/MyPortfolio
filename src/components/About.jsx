export default function About() {
  const frontEnd = ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Figma"];
  const backEnd = ["Node.js", "Python", "C#", "SQL", "Docker"];
  const tools = ["Git", "Linux", "Bash"];
  const skillColours = {
    "React": "00d8ff",
    "Next.js": "000000",
    "Tailwind CSS": "38bdf8",
    "JavaScript": "f7df1e",
    "TypeScript": "3178c6",
    "Figma": "f24e1e",
    "Node.js": "339933",
    "Python": "3776ab",
    "C#": "239120",
    "SQL": "003b57",
    "Docker": "2496ed",
    "Git": "f05032",
    "Linux": "fcc624",
    "Bash": "4eaa25",
  }

  return (
    <section id="about" className="py-20">
      <div className=" max-w-4xl mx-auto px-6 ">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-400 transition-colors duration-300">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-4 text-slate-600 dark:text-slate-400 transition-colors duration-300">
            <p className="leading-relaxed">
              I began my coding journey in 2023 and fell in love with the logic and creativity of building web applications and the problem solving involved.
              My journey began with Python and web development, and I have since expanded my skill set to include modern frameworks and tools.
            </p>
            <p className="leading-relaxed">
              Over the past few years, I&apos;ve worked on a variety of projects, from small personal websites to larger applications. 
              Each project has taught me something new and helped me grow as a developer.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not coding, you can find me tweaking my home lab servers, adjusting my current Linux distribution,
              or optimizing my terminal and raspberry pi setups.
            </p>
          </div>
          <div>

            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Front End</h4>
            <div className="flex flex-wrap gap-2">
              {frontEnd.map((skill, index) => (
                <SkillTag key={index} name={skill} color={skillColours[skill]} />
              ))}
              </div>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white my-6 transition-colors duration-300">Back End</h4>
            <div className="flex flex-wrap gap-2">
              {backEnd.map((skill, index) => (
                <SkillTag key={index} name={skill} color={skillColours[skill]} /> 
              ))}
            </div>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white my-6 transition-colors duration-300">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((skill, index) => (
                <SkillTag key={index} name={skill} color={skillColours[skill]} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillTag({ name, color }) {
  return (
    <span style={{ "--skill-color": `#${color}` }} className="rounded-full bg-slate-200 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 px-3 py-1 text-sm font-medium text-slate-700 dark:text-gray-300 hover:border-[color:var(--skill-color)] dark:hover:border-[color:var(--skill-color)] hover:text-slate-900 dark:hover:text-white transition-all duration-300">
      {name}
    </span>
  );
}
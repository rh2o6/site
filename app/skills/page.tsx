import * as Icon from "developer-icons";

const skillCategories = [
  {
    title: "Front-End Development",
    skills: [
      { name: "HTML", icon: Icon.HTML5 },
      { name: "CSS", icon: Icon.CSS },
      { name: "JavaScript", icon: Icon.JavaScript },
      { name: "TypeScript", icon: Icon.TypeScript },
      { name: "React", icon: Icon.React },
      { name: "Next.js", icon: Icon.NextJs },
      { name: "Tailwind", icon: Icon.TailwindCSS },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", icon: Icon.Figma },
      { name: "Photoshop", icon: Icon.Photoshop },
    ],
  },
  {
    title: "Back-End Development",
    skills: [
      { name: "Python", icon: Icon.Python },
      { name: "Java", icon: Icon.Java },
      { name: "C", icon: Icon.C },
      { name: "NodeJS", icon: Icon.NodeJs },
      { name: "Flask", icon: Icon.FlaskDark },
      { name: "Django", icon: Icon.Django },
      { name: "Springboot", icon: Icon.Spring },
      { name: "FastAPI", icon: Icon.FastAPI },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MSS", icon: Icon.MicrosoftSQLServer },
      { name: "PostgreSQL", icon: Icon.PostgreSQL },
      { name: "OracleSQL", icon: Icon.Oracle },
      { name: "Redis", icon: Icon.Redis },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: Icon.Git },
      { name: "Docker", icon: Icon.Docker },
      { name: "Azure", icon: Icon.Azure },
      { name: "Postman", icon: Icon.Postman },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Linux", icon: Icon.Linux },
      { name: "Bash", icon: Icon.Bash },
      { name: "Powershell", icon: Icon.PowerShell },
      { name: "Cloudflare", icon: Icon.Cloudflare },
      { name: "Grafana", icon: Icon.Grafana },
    ],
  },
];

export default function Skills() {
  return (
    <main>
      <div className="flex flex-col items-center min-h-screen pb-16">
        <h1 className="text-4xl font-bold mb-6 pt-20 text-[#01065A]">
          Technical Skills
        </h1>

        <div className="mx-auto max-w-2xl px-4 text-base leading-relaxed md:text-lg md:text-center mb-8">
          <p>
            Learning new skills and technologies is something that excites me.
            I’m always eager to grow and expand my technical abilities, and
            furthermore, my philosophy is to learn by doing. I believe the best
            way to master a new skill is by applying it to real-world projects.
            As such, I’m not afraid to take on new challenges and actively seek
            opportunities to broaden my knowledge and expertise.
          </p>
        </div>

        <div className="w-full max-w-5xl px-4 space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {category.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-4 w-full">
  {category.skills.map((skill) => {
    const SkillIcon = skill.icon;

    return (
      <div
        key={skill.name}
        className="flex flex-col items-center justify-center p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow w-[140px] sm:w-[160px] bg-white"
      >
                      <span className="text-3xl mb-2 flex items-center justify-center">
                        {/* Render component as JSX tag */}
                        {SkillIcon ? <SkillIcon size={32} /> : null}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
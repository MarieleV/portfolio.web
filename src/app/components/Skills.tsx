import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Code2, Database, Layout, Server, Smartphone, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    accent: "text-violet-400",
    iconBg: "bg-violet-950/60 border border-violet-800/40",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    accent: "text-sky-400",
    iconBg: "bg-sky-950/60 border border-sky-800/40",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express / FastAPI", level: 88 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-950/60 border border-emerald-800/40",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 82 },
      { name: "Prisma / TypeORM", level: 87 },
    ],
  },
  {
    icon: Cpu,
    title: "DevOps & Cloud",
    accent: "text-amber-400",
    iconBg: "bg-amber-950/60 border border-amber-800/40",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "CI/CD", level: 83 },
      { name: "Kubernetes", level: 75 },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    accent: "text-indigo-400",
    iconBg: "bg-indigo-950/60 border border-indigo-800/40",
    skills: [
      { name: "React Native", level: 87 },
      { name: "Flutter", level: 78 },
      { name: "iOS / Android", level: 80 },
      { name: "PWA", level: 90 },
    ],
  },
  {
    icon: Layout,
    title: "Design & UX",
    accent: "text-rose-400",
    iconBg: "bg-rose-950/60 border border-rose-800/40",
    skills: [
      { name: "Figma", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Responsive Design", level: 93 },
      { name: "Animations", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4 bg-[#030816]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            Habilidades & Tecnologias
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Ferramentas e tecnologias que utilizo para criar experiências digitais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-white/[0.07] hover:border-white/[0.12] transition-all backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.iconBg}`}>
                      <Icon className={`w-5 h-5 ${category.accent}`} />
                    </div>
                    <CardTitle className={`text-base font-semibold ${category.accent}`}>
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3.5">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-slate-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-1 bg-slate-800" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

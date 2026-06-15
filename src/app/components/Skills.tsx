import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Code2, Database, Layout, Server, Smartphone, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    color: "from-purple-500 to-pink-500",
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
    color: "from-cyan-500 to-blue-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-indigo-500 to-purple-500",
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
    color: "from-pink-500 to-rose-500",
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
    <section className="py-20 px-4 bg-gradient-to-b from-black via-blue-950/20 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Habilidades & Tecnologias
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para criar experiências digitais incríveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-900/80 border-gray-700 hover:border-gray-600 transition-all backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-100">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-800"
                      />
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

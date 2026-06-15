import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nebula Dashboard",
    description: "Plataforma de análise de dados com visualizações interativas e insights em tempo real.",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBnYWxheHklMjB1bml2ZXJzZXxlbnwxfHx8fDE3ODE1NTI1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Stellar Commerce",
    description: "E-commerce moderno com sistema de pagamentos integrado e gerenciamento de inventário.",
    tags: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGVsbGF0aW9uJTIwbmlnaHQlMjBza3l8ZW58MXx8fHwxNzgxNTUyNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Cosmic Chat",
    description: "Aplicativo de mensagens em tempo real com suporte a múltiplas salas e compartilhamento de mídia.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdhbGF4eSUyMHN0YXJzJTIwbmVidWxhfGVufDF8fHx8MTc4MTU1MDIzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Orbit AI",
    description: "Assistente inteligente baseado em IA para automação de tarefas e análise de dados.",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1610209455607-89e8b3e0e393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBnYWxheHklMjB1bml2ZXJzZXxlbnwxfHx8fDE3ODE1NTI1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Galaxy Portfolio",
    description: "Template de portfólio responsivo com animações e tema customizável.",
    tags: ["Vue.js", "GSAP", "Sass", "Vite"],
    image: "https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGVsbGF0aW9uJTIwbmlnaHQlMjBza3l8ZW58MXx8fHwxNzgxNTUyNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "StarLink API",
    description: "API RESTful escalável para gerenciamento de recursos e autenticação de usuários.",
    tags: ["Node.js", "Express", "JWT", "Redis"],
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdhbGF4eSUyMHN0YXJzJTIwbmVidWxhfGVufDF8fHx8MTc4MTU1MDIzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-4 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Trabalhos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            Projetos Estelares
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Uma constelação de projetos que demonstram habilidades e paixão por tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900/60 border-white/[0.07] hover:border-white/[0.14] transition-all hover:shadow-xl hover:shadow-indigo-950/40 backdrop-blur-sm overflow-hidden"
            >
              <div
                className="h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="w-full h-full bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-slate-100 text-base font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-slate-500 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 pt-0">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-xs rounded-md border border-white/[0.08] text-slate-400 hover:text-slate-100 hover:border-white/20 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  Código
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-xs rounded-md border border-white/[0.08] text-slate-400 hover:text-slate-100 hover:border-white/20 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Demo
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

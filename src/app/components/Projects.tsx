import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
    <section className="py-20 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projetos Estelares
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma constelação de projetos que demonstram minhas habilidades e paixão por tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-purple-500/30 hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <div 
                className="h-48 bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="w-full h-full bg-gradient-to-t from-gray-900 to-transparent rounded-t-lg"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-purple-300">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Código
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

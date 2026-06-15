import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background galaxy image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdhbGF4eSUyMHN0YXJzJTIwbmVidWxhfGVufDF8fHx8MTc4MTU1MDIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl">
              🚀
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Seu Nome
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Desenvolvedor Full Stack • Explorador Digital • Criador de Experiências
        </p>
        
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Navegando pelo universo do código, criando soluções inovadoras e transformando ideias em realidade digital.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <Button variant="default" size="lg" className="bg-purple-600 hover:bg-purple-700">
            Ver Projetos
          </Button>
          <Button variant="outline" size="lg" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
            Contato
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

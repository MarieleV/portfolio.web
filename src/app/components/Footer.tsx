import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🚀</div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Seu Nome
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais inovadoras e impactantes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projetos" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#habilidades" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#insignias" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Insígnias
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-gray-800 hover:bg-purple-600 transition-colors text-gray-400 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-gray-800 hover:bg-cyan-600 transition-colors text-gray-400 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-gray-800 hover:bg-pink-600 transition-colors text-gray-400 hover:text-white"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 transition-colors text-gray-400 hover:text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-1">
            © 2026 Seu Nome. Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> e muito café ☕
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020617] border-t border-white/[0.06] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold tracking-widest text-slate-200 uppercase">
                Portfolio
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais inovadoras.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-300 mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Projetos", href: "#projetos" },
                { label: "Habilidades", href: "#habilidades" },
                { label: "Insígnias", href: "#insignias" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-300 mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Mail, href: "#", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 border border-white/[0.06] hover:border-white/[0.12] transition-colors text-slate-500 hover:text-slate-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06]">
          <p className="text-center text-slate-600 text-xs">
            © 2026 Seu Nome. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

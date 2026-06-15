import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Conquistas", href: "#insignias" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-sm font-semibold tracking-widest text-slate-200 uppercase hover:text-white transition-colors"
        >
          Portfolio
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-slate-100 transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="ml-3">
            <button
              onClick={() => handleNav("#contato")}
              className="px-4 py-2 text-sm rounded-md bg-indigo-600/80 hover:bg-indigo-500 text-white transition-colors"
            >
              Fale comigo
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur-md border-b border-white/[0.06] px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm text-slate-400 hover:text-slate-100 transition-colors rounded-md hover:bg-white/5"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <button
                onClick={() => handleNav("#contato")}
                className="w-full px-4 py-3 text-sm rounded-md bg-indigo-600/80 hover:bg-indigo-500 text-white transition-colors"
              >
                Fale comigo
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

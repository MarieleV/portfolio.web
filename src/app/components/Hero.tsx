import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface Star {
  x: number;
  y: number;
  r: number;
  speed: number;
  dx: number;
  dy: number;
  phase: number;
  phaseSpeed: number;
}

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        speed: Math.random() * 0.15 + 0.03,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.015 + 0.004,
      }));
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "rgb(2, 6, 23)";
      ctx.fillRect(0, 0, w, h);

      // Subtle nebula glow
      const gradient = ctx.createRadialGradient(w * 0.3, h * 0.4, 0, w * 0.3, h * 0.4, w * 0.5);
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.04)");
      gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      const gradient2 = ctx.createRadialGradient(w * 0.75, h * 0.6, 0, w * 0.75, h * 0.6, w * 0.4);
      gradient2.addColorStop(0, "rgba(56, 189, 248, 0.035)");
      gradient2.addColorStop(1, "rgba(56, 189, 248, 0)");
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, w, h);

      for (const star of stars) {
        star.phase += star.phaseSpeed;
        const alpha = 0.35 + Math.sin(star.phase) * 0.55;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248, 250, 252, ${Math.max(0, Math.min(1, alpha))})`;
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < -2) star.x = w + 2;
        if (star.x > w + 2) star.x = -2;
        if (star.y < -2) star.y = h + 2;
        if (star.y > h + 2) star.y = -2;
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const onResize = () => init();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background: "rgb(2, 6, 23)",
      }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-16">
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 p-[2px]">
            <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center text-5xl">
              🚀
            </div>
          </div>
        </div>

        <p className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-4">
          Desenvolvedor Full Stack
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-slate-50 leading-tight tracking-tight">
          Seu Nome
        </h1>

        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Navegando pelo universo do código, criando soluções inovadoras e
          transformando ideias em experiências digitais.
        </p>

        <div className="flex gap-3 justify-center mb-10">
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2.5 rounded-md border border-white/15 text-slate-300 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
          >
            Contato
          </a>
        </div>

        <div className="flex gap-5 justify-center">
          <a href="#" className="text-slate-500 hover:text-slate-200 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-200 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-200 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-600" />
      </div>
    </section>
  );
}

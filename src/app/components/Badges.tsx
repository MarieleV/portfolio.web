import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Award, Star, Trophy, Zap, Target, Rocket } from "lucide-react";

const badges = [
  {
    icon: Trophy,
    title: "Top Contributor",
    description: "100+ contribuições em projetos open source",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-950/50 border border-amber-800/30",
  },
  {
    icon: Star,
    title: "5 Anos de Experiência",
    description: "Desenvolvendo soluções inovadoras",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-950/50 border border-violet-800/30",
  },
  {
    icon: Zap,
    title: "Performance Expert",
    description: "Otimização e velocidade de aplicações",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-950/50 border border-sky-800/30",
  },
  {
    icon: Award,
    title: "Certificado AWS",
    description: "Solutions Architect Associate",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-950/50 border border-emerald-800/30",
  },
  {
    icon: Target,
    title: "Projetos Entregues",
    description: "50+ projetos completados com sucesso",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-950/50 border border-rose-800/30",
  },
  {
    icon: Rocket,
    title: "Innovation Leader",
    description: "Implementação de novas tecnologias",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-950/50 border border-indigo-800/30",
  },
];

const stats = [
  { value: "50+", label: "Projetos" },
  { value: "100K+", label: "Linhas de Código" },
  { value: "30+", label: "Clientes Satisfeitos" },
  { value: "5+", label: "Anos de Experiência" },
];

export function Badges() {
  return (
    <section id="insignias" className="py-24 px-4 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Conquistas
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            Insígnias & Marcos
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Reconhecimentos e marcos alcançados na jornada profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-950/30"
              >
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto mb-4">
                    <div className={`w-16 h-16 rounded-2xl ${badge.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${badge.iconColor}`} />
                    </div>
                  </div>
                  <CardTitle className="text-base font-semibold text-slate-100">{badge.title}</CardTitle>
                  <CardDescription className="text-slate-500 text-sm">
                    {badge.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-slate-900/50 border border-white/[0.07]"
            >
              <div className="text-3xl font-bold text-slate-100 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

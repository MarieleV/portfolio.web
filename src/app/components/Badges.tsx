import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Award, Star, Trophy, Zap, Target, Rocket } from "lucide-react";

const badges = [
  {
    icon: Trophy,
    title: "Top Contributor",
    description: "100+ contribuições em projetos open source",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Star,
    title: "5 Anos de Experiência",
    description: "Desenvolvendo soluções inovadoras",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance Expert",
    description: "Otimização e velocidade de aplicações",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Award,
    title: "Certificado AWS",
    description: "Solutions Architect Associate",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Target,
    title: "Projetos Entregues",
    description: "50+ projetos completados com sucesso",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Innovation Leader",
    description: "Implementação de novas tecnologias",
    color: "from-indigo-400 to-purple-500",
  },
];

export function Badges() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Insígnias & Conquistas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reconhecimentos e marcos alcançados na jornada profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:scale-105 duration-300"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${badge.color} p-0.5`}>
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-100">{badge.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {badge.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/30 rounded-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400">Projetos</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-900/30 to-transparent border border-cyan-500/30 rounded-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              100K+
            </div>
            <div className="text-gray-400">Linhas de Código</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-transparent border border-green-500/30 rounded-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              30+
            </div>
            <div className="text-gray-400">Clientes Satisfeitos</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-900/30 to-transparent border border-orange-500/30 rounded-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-400">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
}

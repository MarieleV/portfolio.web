import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contato" className="py-24 px-4 bg-[#030816]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            Vamos Conversar
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Tem um projeto em mente? Entre em contato e transformamos sua ideia em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <Card className="bg-slate-900/60 border-white/[0.07] backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-100">Envie uma Mensagem</CardTitle>
              <CardDescription className="text-slate-500 text-sm">
                Responderei em até 48 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <Input
                  placeholder="Nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-800/50 border-white/[0.08] text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500/30"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-800/50 border-white/[0.08] text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500/30"
                />
                <Textarea
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-slate-800/50 border-white/[0.08] text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500/30 min-h-32"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <Card className="bg-slate-900/50 border-white/[0.07] backdrop-blur-sm">
              <CardContent className="pt-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/40">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-200 mb-0.5">Email</h3>
                    <p className="text-slate-500 text-sm">seuemail@exemplo.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-white/[0.07] backdrop-blur-sm">
              <CardContent className="pt-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-sky-950/60 border border-sky-800/40">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-200 mb-0.5">Telefone</h3>
                    <p className="text-slate-500 text-sm">+55 (11) 99999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-white/[0.07] backdrop-blur-sm">
              <CardContent className="pt-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-violet-950/60 border border-violet-800/40">
                    <MapPin className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-200 mb-0.5">Localização</h3>
                    <p className="text-slate-500 text-sm">São Paulo, Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-white/[0.07] backdrop-blur-sm">
              <CardContent className="pt-5">
                <h3 className="text-sm font-medium text-slate-200 mb-3">Disponibilidade</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      Disponível
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Resposta</span>
                    <span className="text-slate-300">24–48 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Horário</span>
                    <span className="text-slate-300">Seg–Sex, 9h–18h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

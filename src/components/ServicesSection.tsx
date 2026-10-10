'use client';

import React from 'react';
import { Scissors, ShieldCheck, Flame, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  category: string;
  name: string;
  description: string;
  features: string[];
  duration: string;
  whatsappMsg: string;
  featured?: boolean;
}

export function ServicesSection() {
  const services: ServiceItem[] = [
    {
      id: 'corte-tesoura',
      category: 'ASSINATURA',
      name: 'Corte Masculino & Tesoura',
      description:
        'Corte sob medida desenhado para seu formato de rosto. Combinação de tesoura artesanal e máquina para alinhamento e caimento impecáveis.',
      features: [
        'Análise de visagismo masculino',
        'Corte clássico, fade ou militar',
        'Lavagem relaxante e finalização com pomada',
      ],
      duration: '45 min',
      whatsappMsg: 'Olá! Gostaria de agendar um Corte Masculino na Barbearia Elite.',
      featured: true,
    },
    {
      id: 'barboterapia',
      category: 'CUIDADO & RELAXAMENTO',
      name: 'Barboterapia & Tingimento',
      description:
        'Ritual clássico de cuidado facial e alinhamento de barba com navalha descartável, toalha quente, hidratação profunda e tingimento natural.',
      features: [
        'Preparação de pele com óleos essenciais',
        'Toalha quente aromática e navalha afiada',
        'Pigmentação/tingimento opcional para preenchimento homogêneo',
      ],
      duration: '40 min',
      whatsappMsg: 'Olá! Gostaria de agendar uma Barboterapia & Alinhamento na Barbearia Elite.',
      featured: false,
    },
    {
      id: 'raspar-acabamento',
      category: 'PRECISÃO',
      name: 'Raspar Cabelo & Acabamento',
      description:
        'Máquina com graduação precisa, raspagem zero com máquina shaver ou navalha e acabamento perfeitamente alinhado nos contornos.',
      features: [
        'Graduação uniforme e assepsia completa',
        'Contornos definidos (pezinho e costeletas)',
        'Loção pós-barba calmante e refrescante',
      ],
      duration: '30 min',
      whatsappMsg: 'Olá! Gostaria de agendar Raspar o Cabelo & Acabamento na Barbearia Elite.',
      featured: false,
    },
    {
      id: 'combo-completo',
      category: 'EXPERIÊNCIA COMPLETA',
      name: 'Combo Elite (Cabelo + Barba)',
      description:
        'O cuidado completo para renovar completamente sua imagem pessoal em uma única sessão relaxante.',
      features: [
        'Corte completo tesoura + degradê à sua escolha',
        'Barboterapia completa com toalha quente e massagem facial',
        'Finalização premium de cabelo e barba',
      ],
      duration: '1h 15 min',
      whatsappMsg: 'Olá! Gostaria de agendar o Combo Elite (Cabelo + Barba) na Barbearia Elite.',
      featured: true,
    },
    {
      id: 'platinado-nevou',
      category: 'QUÍMICA & TENDÊNCIA',
      name: 'Platinado / Nevou Global',
      description:
        'Descoloração global profissional com neutralização perfeita do tom. Tom branco platinado luminoso com proteção máxima da fibra capilar.',
      features: [
        'Teste prévio de mecha e sensibilidade',
        'Descoloração progressiva com plex protetor',
        'Matização anti-amarelamento e hidratação profunda',
      ],
      duration: '2h',
      whatsappMsg: 'Olá! Gostaria de agendar um Platinado / Nevou na Barbearia Elite.',
      featured: false,
    },
    {
      id: 'freestyle-risco',
      category: 'ARTE & IDENTIDADE',
      name: 'Acabamento Freestyle & Riscos',
      description:
        'Desenhos autorais, risquinhos precisos e linhas geométricas na navalha para personalizar seu corte com exclusividade.',
      features: [
        'Linhas nítidas e precisas na lâmina',
        'Designs geométricos ou sob referência',
        'Acabamento com contraste e pigmento opcional',
      ],
      duration: '20 min',
      whatsappMsg: 'Olá! Gostaria de incluir Acabamento Freestyle / Riscos no meu corte na Barbearia Elite.',
      featured: false,
    },
  ];

  return (
    <section id="servicos" className="relative py-24 sm:py-32 bg-[#060607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-400 font-semibold mb-3">
              Serviços & Especialidades
            </p>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase leading-tight">
              TÉCNICA APURADA PARA CADA DETALHE DO SEU ESTILO.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Atendimento com hora marcada para garantir que cada cliente receba atenção exclusiva, sem filas e com o mais alto padrão de qualidade.
          </p>
        </div>

        {/* Services Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const waLink = `https://wa.me/5549999109467?text=${encodeURIComponent(
              service.whatsappMsg
            )}`;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 border ${
                  service.featured
                    ? 'bg-[#0f0f13] border-white/20 shadow-2xl shadow-black/80 ring-1 ring-white/10'
                    : 'bg-[#0a0a0d] border-white/10 hover:border-white/25 hover:bg-[#0e0e12]'
                }`}
              >
                {/* Category & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400">
                      {service.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {service.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Card Action */}
                <div className="pt-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 active:scale-98 ${
                      service.featured
                        ? 'bg-white text-black hover:bg-zinc-200 shadow-md'
                        : 'bg-white/5 hover:bg-white/15 text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>Agendar Este Serviço</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

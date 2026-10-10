import React from 'react';
import { Scissors, Coffee, Sparkles } from 'lucide-react';

export function PillarsSection() {
  const pillars = [
    {
      tag: '01 / MESTRIA',
      title: 'EXPERIÊNCIA',
      subtitle: 'Domínio artesanal na tesoura e máquina',
      description:
        'Cortes estruturados com técnica apurada, degradês milimétricos e visagismo masculino adaptado à anatomia do seu rosto e estilo de vida.',
      icon: Scissors,
    },
    {
      tag: '02 / ESPAÇO',
      title: 'ACOLHIMENTO',
      subtitle: 'Conforto embaixo do Clube Hervalense',
      description:
        'Atendimento pontual e atencioso em um ambiente acolhedor, projetado para você desligar da correria, tomar um bom café e relaxar de verdade.',
      icon: Coffee,
    },
    {
      tag: '03 / PADRÃO',
      title: 'PRECISÃO',
      subtitle: 'Atenção minuciosa em cada acabamento',
      description:
        'Barboterapia completa com toalha quente, pigmentação natural, assepsia rigorosa e finalizações que mantêm o seu visual impecável por mais tempo.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="diferenciais" className="relative py-24 sm:py-32 bg-[#060607] border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-400 font-semibold mb-3">
            Pilares da Barbearia Elite
          </p>
          <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase leading-tight">
            O PADRÃO DE EXCELÊNCIA QUE VOCÊ MERECE.
          </h2>
        </div>

        {/* 3 Pillars Grid (Direct Image 1 Reference Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between pt-6 border-t border-white/15 transition-all duration-300 hover:border-white/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-zinc-400">
                      {item.tag}
                    </span>
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase mb-3">
                    {item.title}
                  </h3>

                  <h4 className="text-sm font-medium text-zinc-300 mb-4 tracking-wide">
                    {item.subtitle}
                  </h4>

                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 flex items-center text-xs font-semibold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  <span className="h-[1px] w-6 bg-zinc-600 group-hover:w-10 group-hover:bg-white transition-all mr-3" />
                  Elite Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

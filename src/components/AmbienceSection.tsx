import React from 'react';
import Image from 'next/image';
import { Coffee, Armchair, Clock, Music, Sparkles } from 'lucide-react';

export function AmbienceSection() {
  const perks = [
    {
      icon: Armchair,
      title: 'Cadeiras Clássicas & Ergonômicas',
      desc: 'Máximo conforto para relaxar durante o corte e a barboterapia com reclinação total.',
    },
    {
      icon: Coffee,
      title: 'Café & Bebidas de Cortesia',
      desc: 'Aprecie um café fresco enquanto aguarda ou durante a sua consultoria de estilo.',
    },
    {
      icon: Clock,
      title: 'Pontualidade Rigorosa',
      desc: 'Seu tempo é respeitado com horários marcados e atendimento sem espera desnecessária.',
    },
    {
      icon: Music,
      title: 'Atmosfera Masculina & Som Ambiente',
      desc: 'Música selecionada em volume agradável para uma pausa revigorante no seu dia.',
    },
  ];

  return (
    <section id="espaco" className="relative py-24 sm:py-32 bg-[#060607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
              <Image
                src="/images/ambiente.jpg"
                alt="Ambiente aconchegante da Barbearia Elite embaixo do Clube Hervalense"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Location Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    Ponto Tradicional
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Embaixo do Clube Hervalense • Centro
                  </p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Perks */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-400 font-semibold mb-3">
              O Espaço & Ambiente
            </p>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase leading-tight mb-6">
              MAIS QUE UM CORTE, UMA PAUSA NO SEU RITMO.
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-10">
              Instalada em um ponto tradicional e emblemático de Herval d&apos;Oeste, embaixo do Clube Hervalense, a Barbearia Elite foi projetada para oferecer uma experiência acolhedora. Aqui, a tradição do ofício se une ao conforto contemporâneo.
            </p>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                        {perk.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

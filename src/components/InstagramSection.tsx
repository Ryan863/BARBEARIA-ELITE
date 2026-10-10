import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '@/components/InstagramIcon';

export function InstagramSection() {
  const previewImages = [
    { src: '/images/corte-freestyle.png', label: 'Freestyle Navalhado' },
    { src: '/images/corte-platinado.png', label: 'Platinado Nevou' },
    { src: '/images/corte-fade-puma.png', label: 'Fade Autoral' },
    { src: '/images/visagismo.jpg', label: 'Corte na Tesoura' },
  ];

  return (
    <section className="relative py-20 bg-[#060607] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0e0e13] to-[#08080a] border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Instagram Narrative */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <InstagramIcon className="w-3.5 h-3.5 text-zinc-300" />
              <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
                Acompanhe os Bastidores
              </span>
            </div>

            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
              SIGA @BARBEARIA.ELITEE NO INSTAGRAM
            </h2>

            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Confira transformações diárias, novidades em estilos, dicas de cuidados masculinos e vagas de última hora nos stories.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="https://www.instagram.com/barbearia.elitee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-[0.14em] hover:bg-zinc-200 transition-colors shadow-md"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Seguir no Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 py-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Perfil Oficial Verificado</span>
              </div>
            </div>
          </div>

          {/* Right: Instagram 4-Grid Thumbnail Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 w-full lg:w-auto">
            {previewImages.map((img, i) => (
              <a
                key={i}
                href="https://www.instagram.com/barbearia.elitee"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square w-28 sm:w-32 rounded-xl overflow-hidden border border-white/10 bg-neutral-900 block"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

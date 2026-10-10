'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, ZoomIn, X, MessageSquare } from 'lucide-react';

const REAL_CUTS = [
  {
    id: 1,
    title: 'Acabamento Freestyle & Linhas na Navalha',
    tag: 'FREESTYLE / NAVALHADO',
    image: '/images/corte-freestyle.png',
    description: 'Linhas geométricas nítidas com transição em degradê impecável e acabamento milimétrico.',
  },
  {
    id: 2,
    title: 'Platinado / Nevou Perfeito',
    tag: 'QUÍMICA & DESCOLORAÇÃO',
    image: '/images/corte-platinado.png',
    description: 'Tom branco puro e luminoso, descoloração segura sem agressão à raiz e corte texturizado.',
  },
  {
    id: 3,
    title: 'V-Cut Fade com Detalhe Autoral & Riscos',
    tag: 'CORTE AUTORAL / ARTE',
    image: '/images/corte-fade-puma.png',
    description: 'Graduação taper/fade na nuca em V, risquinhos duplos paralelos e personalização exclusiva.',
  },
  {
    id: 4,
    title: 'Corte Estruturado na Tesoura & Barba',
    tag: 'TRADIÇÃO / VISAGISMO',
    image: '/images/visagismo.jpg',
    description: 'Alinhamento completo de cabelo e barba, harmonia facial e finalização com produto selecionado.',
  },
];

export function RealCutsGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof REAL_CUTS)[0] | null>(null);

  return (
    <section id="galeria" className="relative py-24 sm:py-32 bg-[#060607] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Camera className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
              Galeria de Cortes Autorais
            </span>
          </div>
          <h2 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase leading-tight">
            RESULTADOS REAIS NA CADEIRA DA ELITE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Sem filtros enganosos ou modelos genéricos da internet. Aqui está o trabalho genuíno realizado para os nossos clientes em Herval d&apos;Oeste.
          </p>
        </div>

        {/* 4 Cards Grid - Exactly following Image 1 reference composition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_CUTS.map((cut) => (
            <div
              key={cut.id}
              onClick={() => setSelectedPhoto(cut)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                <Image
                  src={cut.image}
                  alt={cut.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wider bg-black/70 backdrop-blur-md text-zinc-200 border border-white/10">
                    {cut.tag}
                  </span>
                </div>

                {/* Zoom Icon Hint */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                  <h3 className="font-editorial-heading text-lg font-bold text-white tracking-wide uppercase leading-snug">
                    {cut.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-300 line-clamp-2 font-normal">
                    {cut.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox for Full Inspection */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#0d0d11] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/5] sm:aspect-square w-full">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  {selectedPhoto.tag}
                </span>
                <h3 className="font-editorial-heading text-2xl font-bold text-white uppercase mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-zinc-300 mt-2">
                  {selectedPhoto.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href={`https://wa.me/5549999109467?text=${encodeURIComponent(
                      `Olá! Vi o corte "${selectedPhoto.title}" no site da Barbearia Elite e gostaria de agendar um similar.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Quero Este Estilo no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

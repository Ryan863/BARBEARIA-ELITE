'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, MessageCircle, Star } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5549999109467?text=' +
  encodeURIComponent('Olá! Gostaria de agendar um horário na Barbearia Elite.');

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#060607] overflow-hidden pt-24 pb-10 sm:pt-28">
      {/* Editorial Background Image with Soft Organic Blending */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.jpg"
            alt="Barbeiro profissional em atendimento com corte preciso na tesoura"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35 filter brightness-90 contrast-110 scale-105"
          />
          {/* Multi-layered soft vignette & masks to eliminate hard cuts */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-[#060607]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060607] via-transparent to-[#060607]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#060607_90%)]" />
        </div>
      </div>

      {/* Top subtle rating pill */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="text-[11px] font-medium tracking-wider text-zinc-300 uppercase">
            5.0 no Google • Barbearia Referência em Herval d&apos;Oeste
          </span>
        </div>
      </div>

      {/* Main Content (Central Editorial Typography) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-12">
        {/* Eyebrow Label */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-zinc-400 mb-4 sm:mb-6">
          Barbearia Tradicional & Contemporânea
        </p>

        {/* Editorial Headline */}
        <h1 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[1.05] sm:leading-[0.98] drop-shadow-md max-w-4xl mx-auto">
          TRADIÇÃO, PRECISÃO E CUIDADO COM O SEU ESTILO.
        </h1>

        {/* Refined Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Cortes clássicos, acabamento impecável e barboterapia no centro de
          Herval d&apos;Oeste. Um espaço pensado para elevar a sua presença.
        </p>

        {/* Action Button & Fast Access */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black text-sm font-bold uppercase tracking-[0.16em] hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/5 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
            <span>Agendar no WhatsApp</span>
          </a>

          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/20 hover:border-white/50 text-white text-sm font-semibold uppercase tracking-[0.16em] hover:bg-white/5 transition-all duration-300"
          >
            Conhecer Serviços
          </a>
        </div>
      </div>

      {/* Minimalist Scroll Down Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-4">
        <a
          href="#diferenciais"
          className="group inline-flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Rolar para baixo para conhecer a barbearia"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium group-hover:tracking-[0.3em] transition-all">
            Conheça a Barbearia
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-zinc-400 group-hover:text-white" />
        </a>
      </div>
    </section>
  );
}

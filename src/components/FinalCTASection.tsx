'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, ShieldCheck, Clock, MapPin, ArrowRight } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5549999109467?text=' +
  encodeURIComponent('Olá! Gostaria de escolher um horário para atendimento na Barbearia Elite.');

export function FinalCTASection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#060607] overflow-hidden border-t border-white/[0.06]">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Emblem */}
        <div className="inline-flex justify-center mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20 bg-neutral-900 shadow-xl p-1">
            <Image
              src="/images/logo-elite.png"
              alt="Barbearia Elite"
              width={64}
              height={64}
              className="object-cover rounded-full"
            />
          </div>
        </div>

        {/* Big Editorial Conversion Headline */}
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400 mb-3">
          Atendimento Exclusivo • Hora Marcada
        </p>

        <h2 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-tight leading-[1.05]">
          PRONTO PARA ELEVAR O SEU ESTILO?
        </h2>

        <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Garanta o seu horário na Barbearia Elite com antecedência e desfrute de um atendimento pontual, preciso e confortável.
        </p>

        {/* Big Primary WhatsApp Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black text-sm font-bold uppercase tracking-[0.16em] hover:bg-zinc-200 transition-all duration-300 shadow-2xl shadow-white/10 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
            <span>Reservar Horário no WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-4 text-xs text-zinc-400 font-mono">
          WhatsApp Oficial: (49) 99910-9467 • Resposta rápida
        </p>

        {/* Trust Badges */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 uppercase tracking-wider">
            <Clock className="w-4 h-4 text-zinc-400" />
            <span>Sem Espera • Pontualidade</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-zinc-400" />
            <span>Avaliação 5.0★ Google</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-zinc-400" />
            <span>Centro • Herval d&apos;Oeste</span>
          </div>
        </div>
      </div>
    </section>
  );
}

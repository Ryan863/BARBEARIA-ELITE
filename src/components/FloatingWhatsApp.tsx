'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  phone?: string;
  defaultMessage?: string;
}

export function FloatingWhatsApp({
  phone = '5549999109467',
  defaultMessage = 'Olá! Gostaria de agendar um horário na Barbearia Elite.',
}: FloatingWhatsAppProps) {
  const encodedMsg = encodeURIComponent(defaultMessage);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Atendimento no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 bg-white text-black hover:bg-zinc-200 rounded-full shadow-2xl shadow-black/80 transition-all duration-300 active:scale-95 border border-white/20"
      >
        {/* Pulsing indicator badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 fill-black stroke-[1.8]" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-[0.14em]">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
}

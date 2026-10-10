import React from 'react';
import Image from 'next/image';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { InstagramIcon } from '@/components/InstagramIcon';

export function Footer() {
  return (
    <footer className="relative bg-[#040405] text-zinc-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-neutral-900">
                <Image
                  src="/images/logo-elite.png"
                  alt="Barbearia Elite Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-editorial-heading text-xl tracking-[0.16em] text-white font-bold uppercase">
                BARBEARIA ELITE
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Tradição, precisão e cuidado masculino no coração de Herval d&apos;Oeste. Cortes clássicos na tesoura, degradês nítidos, barboterapia e procedimentos autorais.
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              CNPJ e alvará regularizados • Herval d&apos;Oeste - SC
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços & Especialidades
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Pilares de Atendimento
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Cortes Reais & Fotos
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-white transition-colors">
                  O Espaço & Ambiente
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização & Acesso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-white mb-4">
              Atendimento
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>
                  R. Nereu Ramos (embaixo do Clube Hervalense), Centro, Herval d&apos;Oeste - SC
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href="https://wa.me/5549999109467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (49) 99910-9467
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href="https://www.instagram.com/barbearia.elitee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @barbearia.elitee
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Barbearia Elite. Todos os direitos reservados.</p>
          <p>Design Editorial de Alta Conversão</p>
        </div>
      </div>
    </footer>
  );
}

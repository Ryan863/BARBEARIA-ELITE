import React from 'react';
import { MapPin, Navigation, Clock, Phone, Car } from 'lucide-react';

export function LocationSection() {
  const address = "R. Nereu Ramos (embaixo do Clube Hervalense) - Centro, Herval d'Oeste - SC, 89610-000";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Barbearia Elite R. Nereu Ramos embaixo do Clube Hervalense Herval d'Oeste SC"
  )}`;

  return (
    <section id="localizacao" className="relative py-24 sm:py-32 bg-[#060607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-400 font-semibold mb-3">
            Localização & Acesso
          </p>
          <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase leading-tight">
            NO CORAÇÃO DE HERVAL D&apos;OESTE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Fácil de encontrar, com estacionamento e acesso rápido tanto para quem está em Herval d&apos;Oeste quanto para quem vem de Joaçaba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#0b0b0e] border border-white/10 shadow-xl">
            <div className="space-y-8">
              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-1">
                    Endereço Oficial
                  </h3>
                  <p className="text-base font-semibold text-white leading-snug">
                    R. Nereu Ramos
                  </p>
                  <p className="text-sm text-zinc-300 mt-1">
                    (Embaixo do Clube Hervalense)
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Centro, Herval d&apos;Oeste - SC • CEP 89610-000
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-1">
                    Horário de Atendimento
                  </h3>
                  <p className="text-sm font-semibold text-white">
                    Segunda a Sábado
                  </p>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    08:30 às 19:30 (Horário Marcado)
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Domingos e feriados sob consulta prévia
                  </p>
                </div>
              </div>

              {/* Convenience details */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white shrink-0 mt-0.5">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-1">
                    Facilidade & Estacionamento
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Vagas próximas na rua e entorno do clube, com tráfego tranquilo e acesso imediato.
                  </p>
                </div>
              </div>
            </div>

            {/* GPS CTA Button */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-[0.15em] hover:bg-zinc-200 transition-all duration-200 active:scale-98 shadow-md"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Como Chegar (Rota no Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Map Visual Frame */}
          <div className="lg:col-span-7 min-h-[380px] rounded-2xl overflow-hidden border border-white/10 relative bg-neutral-900">
            <iframe
              title="Localização Barbearia Elite no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.437976214571!2d-51.49987!3d-27.17243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e16d47b53f6ed9%3A0x6b77cb81d6d37ce1!2sR.%20Nereu%20Ramos%2C%20Herval%20d&#39;Oeste%20-%20SC%2C%2089610-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-[420px] border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay Banner */}
            <div className="absolute top-4 left-4 p-3 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 pointer-events-none">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block">
                Ponto de Referência
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Embaixo do Clube Hervalense
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

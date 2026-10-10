import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const reviews = [
    {
      author: 'Edwin José',
      review: 'Lugar confortável, bom atendimento, ótimo!',
      service: 'Cliente Frequente',
      date: 'Avaliação no Google',
    },
    {
      author: 'Henrique Crecencio da Silva',
      review: 'Muito bom! Trabalho de qualidade!',
      service: 'Corte & Acabamento',
      date: 'Avaliação no Google',
    },
    {
      author: 'Gabriel Nascimento',
      review: 'Trabalho impecável no corte com tesoura. Atendimento nota 10.',
      service: 'Corte na Tesoura',
      date: 'Avaliação no Google',
    },
    {
      author: 'Lucas Mendes',
      review: 'Super recomendo, ótimo lugar! Ambiente aconchegante e pontualidade no atendimento.',
      service: 'Barba & Cabelo',
      date: 'Avaliação no Google',
    },
  ];

  return (
    <section id="avaliacoes" className="relative py-24 sm:py-32 bg-[#060607] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google 5.0 Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
                Avaliações Verificadas
              </span>
            </div>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase leading-tight">
              O QUE NOSSOS CLIENTES DIZEM.
            </h2>
          </div>

          {/* Google 5.0 Score Box */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e0e13] border border-white/10 self-start md:self-auto">
            <div className="flex flex-col items-center justify-center pr-4 border-r border-white/10">
              <span className="font-editorial-heading text-3xl font-bold text-white">
                5.0
              </span>
              <div className="flex text-amber-400 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-white">Google Reviews</span>
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Avaliação máxima em Herval d&apos;Oeste
              </p>
            </div>
          </div>
        </div>

        {/* Reviews 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between p-7 rounded-2xl bg-[#0a0a0d] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div>
                <Quote className="w-6 h-6 text-zinc-500 mb-4" />
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-zinc-200 leading-relaxed font-normal italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {item.author}
                  </h3>
                  <p className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    {item.date}
                  </p>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5549999109467?text=' +
  encodeURIComponent('Olá! Gostaria de agendar um horário na Barbearia Elite.');

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Cortes Reais', href: '#galeria' },
    { label: 'O Espaço', href: '#espaco' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060607]/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-neutral-900 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/images/logo-elite.png"
                alt="Logo Barbearia Elite"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial-heading text-lg tracking-[0.18em] text-white font-bold leading-tight">
                BARBEARIA ELITE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase">
                Herval d&apos;Oeste • SC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-whatsapp-cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] bg-white text-black hover:bg-zinc-200 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Agendar Horário</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white text-black"
            >
              Agendar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0d]/98 border-b border-white/10 px-6 py-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.15em] text-zinc-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-white text-black text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://barbeariaelite.com.br'),
  title: "Barbearia Elite | Tradição, Precisão e Cuidado Masculino",
  description:
    "Cortes clássicos e modernos na tesoura e máquina, barboterapia, tingimento e alinhamento visual no centro de Herval d'Oeste - SC. Localizada embaixo do Clube Hervalense.",
  keywords: [
    "Barbearia Elite",
    "Barbearia Herval d'Oeste",
    "Corte de cabelo masculino Herval d'Oeste",
    "Barboterapia Herval d'Oeste",
    "Barba e cabelo Joaçaba",
    "Corte na tesoura",
    "Platinado masculino",
    "Freestyle navalha",
  ],
  authors: [{ name: "Barbearia Elite" }],
  openGraph: {
    title: "Barbearia Elite | Tradição, Precisão e Estilo",
    description:
      "Cortes clássicos, acabamento impecável e barboterapia no centro de Herval d'Oeste. Agende seu horário pelo WhatsApp.",
    url: "https://barbeariaelite.com.br",
    siteName: "Barbearia Elite",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Barbearia Elite - Cortes e Barboterapia",
      },
    ],
  },
  icons: {
    icon: "/images/logo-elite.png",
    apple: "/images/logo-elite.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: "Barbearia Elite",
    image: "https://barbeariaelite.com.br/images/hero.jpg",
    logo: "https://barbeariaelite.com.br/images/logo-elite.png",
    telephone: "+5549999109467",
    url: "https://barbeariaelite.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Nereu Ramos (embaixo do Clube Hervalense)",
      addressLocality: "Herval d'Oeste",
      addressRegion: "SC",
      postalCode: "89610-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.1724,
      longitude: -51.4983,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "19:30",
      },
    ],
    sameAs: ["https://www.instagram.com/barbearia.elitee"],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#060607] text-[#f4f4f5] antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}

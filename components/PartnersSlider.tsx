'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';

type PartnersLang = 'de' | 'en';

const PARTNERS: { src: string; alt: string }[] = [
  { src: '/partners/ARAG_Logo_neu.svg.png', alt: 'ARAG' },
  { src: '/partners/eh_logo_5-2019.png', alt: 'Erste Group' },
  { src: '/partners/grawe-logo.svg', alt: 'GRAWE' },
  { src: '/partners/lio.jpeg', alt: 'LIO' },
  { src: '/partners/vav_versicherung_ag_logo.jpg', alt: 'VAV Versicherung' },
  { src: '/partners/images.png', alt: 'Partner' },
];

const LOGO_CLASS =
  'h-12 w-auto object-contain opacity-85 grayscale transition-all duration-300 drop-shadow-[0_0_12px_rgba(115,115,115,0.25)] hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(115,115,115,0.45)] md:h-14';

const PARTNERS_COPY = {
  de: {
    heading: 'Unsere geschätzten Geschäftspartner',
    ariaLabel: 'Partner-Logos – Animation pausiert bei Hover',
  },
  en: {
    heading: 'Our trusted partners',
    ariaLabel: 'Partner logos – animation pauses on hover',
  },
} satisfies Record<PartnersLang, { heading: string; ariaLabel: string }>;

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <li className="flex flex-shrink-0 items-center justify-center px-8">
      <Image
        src={src}
        alt={alt}
        width={140}
        height={56}
        className={LOGO_CLASS}
        draggable={false}
      />
    </li>
  );
}

export function PartnersSlider({ lang = 'de' }: { lang?: PartnersLang }) {
  const [isPaused, setIsPaused] = useState(false);
  const copy = PARTNERS_COPY[lang];

  const handlePause = useCallback(() => setIsPaused(true), []);
  const handleResume = useCallback(() => setIsPaused(false), []);

  return (
    <section
      className="w-full bg-neutral-950 py-12"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400"
            aria-hidden
          >
            SABR Partners
          </p>
          <h2
            id="partners-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            {copy.heading}
          </h2>
        </header>

        <div
          className="relative mt-8 overflow-hidden"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onFocusCapture={handlePause}
          onBlurCapture={handleResume}
          aria-label={copy.ariaLabel}
        >
          {/* Edge fade overlays – do not affect interaction or animation */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-neutral-950 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent"
            aria-hidden
          />
          <div
            className="flex w-max animate-partners-marquee gap-0 [--marquee-duration:40s] motion-reduce:!animate-none"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            <ul className="flex items-center gap-0" role="list">
              {PARTNERS.map((partner) => (
                <LogoItem
                  key={`${partner.src}-1`}
                  src={partner.src}
                  alt={partner.alt}
                />
              ))}
            </ul>
            <ul className="flex items-center gap-0 motion-reduce:hidden" role="list" aria-hidden="true">
              {PARTNERS.map((partner) => (
                <LogoItem
                  key={`${partner.src}-2`}
                  src={partner.src}
                  alt={partner.alt}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Soft divider between partners and footer */}
        <div
          className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TrustSection } from '@/components/TrustSection';
import { VisionSection } from '@/components/VisionSection';
import { PartnersSlider } from '@/components/PartnersSlider';
import { ContactLeadForm } from '@/components/ContactLeadForm';
import { ServiceIcon } from '@/components/ServiceIcon';

export const metadata: Metadata = {
  title: 'SABR Versicherungsagentur – Einfach. Ehrlich. Effizient.',
  description:
    'Wir schützen, was Ihnen am wichtigsten ist – mit zuverlässigen Versicherungen für jeden Lebensbereich.',
};

const services = [
  { slug: 'autoversicherung' as const, title: 'Autoversicherung', description: 'Schützt Sie und Ihr Fahrzeug auf jeder Fahrt.', href: '/services/autoversicherung' },
  { slug: 'motorradversicherung' as const, title: 'Motorradversicherung', description: 'Ihr Schutz für sorgenfreies Fahren auf zwei Rädern.', href: '/services/motorradversicherung' },
  { slug: 'eigenheimversicherung' as const, title: 'Eigenheimversicherung', description: 'Sichert Ihr Zuhause gegen Schäden und Verluste ab.', href: '/services/eigenheimversicherung' },
  { slug: 'rechtsschutzversicherung' as const, title: 'Rechtsschutzversicherung', description: 'Steht Ihnen bei rechtlichen Konflikten zur Seite.', href: '/services/rechtsschutzversicherung' },
  { slug: 'haushaltsversicherung' as const, title: 'Haushaltsversicherung', description: 'Schützt Ihr Eigentum im Inneren Ihres Hauses.', href: '/services/haushaltsversicherung' },
  { slug: 'unfallversicherung' as const, title: 'Unfallversicherung', description: 'Finanzielle Sicherheit bei unerwarteten Unfällen.', href: '/services/unfallversicherung' },
  { slug: 'krankenversicherung' as const, title: 'Krankenversicherung', description: 'Unterstützt Sie, wenn die Gesundheit versagt.', href: '/services/krankenversicherung' },
  { slug: 'todesfallversicherung' as const, title: 'Todesfallversicherung', description: 'Sorgt für finanzielle Absicherung Ihrer Angehörigen.', href: '/services/todesfallversicherung' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero - video is the only background; visible behind navbar and content */}
      <section className="relative min-h-[55vh] overflow-hidden sm:min-h-[70vh] lg:min-h-screen">
        {/* Video: only background, z-0 */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <video
            src="/bgvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            aria-hidden
          />
        </div>
        {/* Overlay: z-10 for text readability */}
        <div
          className="pointer-events-none absolute inset-0 z-[10] bg-gradient-to-b from-black/10 via-black/50 to-black"
          aria-hidden
        />
        {/* Content: z-20 */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 pb-6 pt-24 text-center sm:px-6 sm:pb-8 sm:pt-36 lg:px-8 lg:pb-10 lg:pt-48">
          <p className="text-xs font-medium tracking-[0.16em] text-white">
            Wir schützen, was Ihnen am wichtigsten ist – mit zuverlässigen Versicherungen
            für jeden Lebensbereich.
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            SABR Versicherungsagentur –
            <span className="block">Einfach. Ehrlich. Effizient.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
            Wir stehen an Ihrer Seite, um Sie mit klaren, verständlichen Versicherungslösungen
            im Alltag zuverlässig abzusichern.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/kontakt"
              className="bg-gold-gradient px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-md transition hover:brightness-110"
            >
              Los geht&apos;s
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-2 pb-8 sm:px-6 sm:pt-4 lg:px-8">
        {/* About us teaser with image */}
      <section className="grid min-h-[320px] gap-6 bg-black/60 py-4 px-6 sm:py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:items-center sm:min-h-[360px] md:min-h-[400px]">
        <div className="relative mx-auto h-48 w-full max-w-md sm:h-56 md:h-72">
          <Image
            src="/claim3.png"
            alt="Schadensmeldung und Unterstützung im Versicherungsfall"
            fill
            sizes="(min-width: 1024px) 320px, 50vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="space-y-5 text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-gradient">
            Über uns
          </p>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            SABR Versicherungsagentur – Ihr Partner für klaren, verlässlichen Schutz.
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Wir nehmen uns Zeit, Ihre Situation wirklich zu verstehen und übersetzen komplexe
            Versicherungsbedingungen in klare, nachvollziehbare Entscheidungen – damit Sie mit
            gutem Gefühl abgesichert sind.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center bg-gold-gradient px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-md transition hover:brightness-110"
            >
              Mehr über uns
            </Link>
          </div>
        </div>
      </section>

        {/* Leistungen section (cards) */}
      <section className="space-y-6 pt-8">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-gradient">
              Unsere Leistungen
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Umfassender Schutz für Ihr Leben.
            </h2>
          </div>
          <p className="text-sm text-slate-300 sm:text-base">
            Bei SABR bieten wir Versicherungslösungen, die sich an Ihrem Alltag orientieren.
            Ob Auto, Gesundheit, Leben oder Eigentum – wir sichern Sie rundum ab. Vertrauen
            Sie auf unseren Service, der schnell, fair und zuverlässig ist.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 hover:[&>*:not(:hover)]:opacity-60">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex min-h-[280px] flex-col rounded-md bg-gradient-to-b from-neutral-950 to-neutral-900 p-8 opacity-90 transition-all duration-300 hover:opacity-100 hover:outline hover:outline-1 hover:outline-yellow-400/80 hover:outline-offset-[-1px] hover:shadow-[0_0_32px_-8px_rgba(234,179,8,0.25)] focus-within:opacity-100 focus-within:outline focus-within:outline-1 focus-within:outline-yellow-400/80 focus-within:outline-offset-[-1px] focus-within:shadow-[0_0_32px_-8px_rgba(234,179,8,0.25)]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-sm bg-black/40">
                <ServiceIcon slug={service.slug} />
              </div>
              <h3 className="text-[15px] font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>
              <div className="mt-6">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-yellow-400 transition-colors duration-300 hover:text-yellow-300 focus:outline-none"
                >
                  MEHR LESEN
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>

      <TrustSection />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Value proposition */}
      <section className="grid gap-6 border-y border-[#f0cc69]/40 py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-gradient">
            Why Sabr
          </h2>
          <p className="text-2xl font-medium text-slate-50 sm:text-3xl">
            Calm, independent guidance in complex insurance questions.
          </p>
          <p className="max-w-xl text-sm text-slate-300">
            We sit beside your team—not across the table—to help you navigate
            risk, capital, and counterparties with a quiet, methodical approach.
          </p>
        </div>
        <dl className="grid gap-5 text-sm text-slate-200 sm:grid-cols-2">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Perspective
            </dt>
            <dd className="mt-1 text-sm">
              Independent of carriers and brokers, focused on what&apos;s right
              for your balance sheet.
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Depth
            </dt>
            <dd className="mt-1 text-sm">
              Experience across underwriting, reinsurance, and risk functions in
              European and global markets.
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Clarity
            </dt>
            <dd className="mt-1 text-sm">
              Deliverables shaped for boards, investors, and regulators—not just
              technical teams.
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Tempo
            </dt>
            <dd className="mt-1 text-sm">
              Lightweight, focused engagements that respect your internal
              bandwidth and timelines.
            </dd>
          </div>
        </dl>
      </section>
      </div>

      <VisionSection />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        {/* Contact CTA + form */}
        <section className="bg-black py-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Kontakt
                </p>
                <p className="text-sm text-white/80 sm:text-base">
                  Haben Sie Fragen zu Ihrer Versicherung? Wir beraten Sie gern – unverbindlich und persönlich.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-[#043d15] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#05501a]"
                >
                  Kontakt aufnehmen
                </Link>
                <a
                  href="mailto:office@sabr.at"
                  className="inline-flex items-center justify-center border border-white/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 transition hover:border-yellow-400 hover:text-yellow-400"
                >
                  E-Mail senden
                </a>
              </div>
            </div>
            <div className="mt-10 mx-auto max-w-xl">
              <ContactLeadForm lang="de" headline="Kontaktanfrage" />
            </div>
          </div>
        </section>
      </div>

      <PartnersSlider />
    </>
  );
}


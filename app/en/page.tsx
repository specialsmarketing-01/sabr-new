import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TrustSection } from '@/components/TrustSection';
import { VisionSection } from '@/components/VisionSection';
import { PartnersSlider } from '@/components/PartnersSlider';
import { ContactLeadForm } from '@/components/ContactLeadForm';
import { INSURANCE_CATEGORIES } from '@/lib/services-data';
import { ServiceIcon } from '@/components/ServiceIcon';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'SABR – Insurance & Risk Advisory',
  description:
    'SABR offers reliable insurance solutions for private and business clients. Simple, honest, efficient.',
  path: '/en',
  locale: 'en',
});

const SERVICE_COPY_EN: Record<
  string,
  { title: string; description: string }
> = {
  autoversicherung: {
    title: 'Car insurance',
    description:
      'Protects you and your vehicle on every journey – with cover that fits your needs and budget.',
  },
  motorradversicherung: {
    title: 'Motorcycle insurance',
    description:
      'Your protection for carefree riding on two wheels – whether you use your bike for leisure or commuting.',
  },
  eigenheimversicherung: {
    title: 'Home insurance',
    description:
      'Covers your house against damage and loss – from fire and water to storm and other natural events.',
  },
  rechtsschutzversicherung: {
    title: 'Legal protection insurance',
    description:
      'Stands by your side in legal disputes – so you can enforce your rights without fear of high costs.',
  },
  haushaltsversicherung: {
    title: 'Household insurance',
    description:
      'Protects the contents of your home – furniture, electronics and more – against theft and damage.',
  },
  unfallversicherung: {
    title: 'Accident insurance',
    description:
      'Financial security after unexpected accidents – worldwide and around the clock.',
  },
  krankenversicherung: {
    title: 'Health insurance',
    description:
      'Supports you when your health is at risk – with cover that complements state and employer schemes.',
  },
  todesfallversicherung: {
    title: 'Life insurance',
    description:
      'Provides financial security for your loved ones if the worst should happen.',
  },
};

const services = INSURANCE_CATEGORIES.map((c) => {
  const copy = SERVICE_COPY_EN[c.slug];
  return {
    slug: c.slug,
    title: copy?.title ?? c.title,
    description: copy?.description ?? c.intro,
    href: `/en/services/${c.enSlug}`,
  };
});

export default function EnHomePage() {
  return (
    <>
      {/* Hero - same as DE: video only background, visible behind navbar and content */}
      <section className="relative min-h-[55vh] overflow-hidden sm:min-h-[70vh] lg:min-h-screen">
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
        <div
          className="pointer-events-none absolute inset-0 z-[10] bg-gradient-to-b from-black/10 via-black/50 to-black"
          aria-hidden
        />
        <div className="relative z-20 mx-auto max-w-5xl px-4 pb-6 pt-24 text-center sm:px-6 sm:pb-8 sm:pt-36 lg:px-8 lg:pb-10 lg:pt-48">
          <p className="text-xs font-medium tracking-[0.16em] text-white">
            We protect what matters most to you – with reliable insurance for every area of life.
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            SABR Insurance Agency –
            <span className="block">Simple. Honest. Efficient.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
            We are at your side with clear, understandable insurance solutions you can rely on every day.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/en/contact"
              className="bg-gold-gradient px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-md transition hover:brightness-110"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid min-h-[320px] gap-6 bg-black/60 py-10 px-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:items-center sm:min-h-[360px] md:min-h-[400px]">
          <div className="relative mx-auto h-48 w-full max-w-md sm:h-56 md:h-72">
            <Image
              src="/claim3.png"
              alt="Claims reporting and support when you need it"
              fill
              sizes="(min-width: 1024px) 320px, 50vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-5 text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-gradient">
              About us
            </p>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              SABR Insurance Agency – Your partner for clear, reliable protection.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              We take the time to understand your situation and translate complex policy terms into clear, understandable decisions – so you can feel confident you&apos;re covered.
            </p>
            <div className="pt-2">
              <Link
                href="/en/about"
                className="inline-flex items-center bg-gold-gradient px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-md transition hover:brightness-110"
              >
                More about us
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-6 pt-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-gradient">
                Our services
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Comprehensive protection for your life.
              </h2>
            </div>
            <p className="text-sm text-slate-300 sm:text-base">
              At SABR we offer insurance solutions tailored to your everyday life. Whether car, health, life or property – we cover you all round. Rely on our service: fast, fair and dependable.
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
                    READ MORE
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <TrustSection lang="en" />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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

      <VisionSection lang="en" />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <section className="bg-black py-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Contact
                </p>
                <p className="text-sm text-white/80 sm:text-base">
                  Have questions about your insurance? We&apos;re happy to advise – no obligation, personal and clear.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/en/contact"
                  className="inline-flex items-center justify-center bg-[#043d15] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#05501a]"
                >
                  Get in touch
                </Link>
                <a
                  href="mailto:office@sabr.at"
                  className="inline-flex items-center justify-center border border-white/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 transition hover:border-yellow-400 hover:text-yellow-400"
                >
                  Send email
                </a>
              </div>
            </div>
            <div className="mt-10 max-w-xl">
              <ContactLeadForm lang="en" headline="Contact request" />
            </div>
          </div>
        </section>
      </div>

      <PartnersSlider lang="en" />
    </>
  );
}

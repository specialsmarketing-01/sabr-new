import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog',
  description:
    'Blog der SABR Versicherungsagentur Wien: Tipps zu Versicherung Wien, Autoversicherung Wien, Rechtsschutz, Haushalt und mehr. Wissenswertes rund um Versicherungen.',
  path: '/blog',
  locale: 'de',
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Blog
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Tipps & Neuigkeiten
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Wissenswertes rund um Versicherungen, Schadensfälle und Absicherung –
            verständlich aufbereitet vom SABR-Team.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-neutral-950/80 p-8 text-center">
          <p className="text-sm text-white/60">
            Beiträge folgen in Kürze. Schauen Sie bald wieder vorbei.
          </p>
        </div>
      </div>
    </>
  );
}

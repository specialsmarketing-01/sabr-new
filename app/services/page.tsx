import type { Metadata } from 'next';
import Link from 'next/link';
import { INSURANCE_CATEGORIES } from '@/lib/services-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Leistungen',
  description:
    'Leistungen der SABR Versicherungsagentur Wien: Autoversicherung Wien, Motorrad-, Eigenheim-, Rechtsschutz-, Haushalts-, Unfall-, Kranken- und Todesfallversicherung. Beratung in Wien.',
  path: '/services',
  locale: 'de',
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Unsere Leistungen
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Umfassender Schutz für Ihr Leben
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Bei SABR bieten wir Versicherungslösungen für jeden Lebensbereich – von der Kfz-Versicherung bis zur Absicherung von Gesundheit und Familie.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {INSURANCE_CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  className="block rounded-lg border border-white/10 bg-black/60 px-5 py-4 text-sm font-semibold text-white transition hover:border-yellow-400/50 hover:bg-black/80"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

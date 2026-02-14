import type { Metadata } from 'next';
import Link from 'next/link';
import { INSURANCE_CATEGORIES } from '@/lib/services-data';
import { buildPageMetadata } from '@/lib/seo';

const EN_TITLES: Record<string, string> = {
  autoversicherung: 'Car Insurance',
  motorradversicherung: 'Motorcycle Insurance',
  eigenheimversicherung: 'Home Insurance',
  rechtsschutzversicherung: 'Legal Protection',
  haushaltsversicherung: 'Household Insurance',
  unfallversicherung: 'Accident Insurance',
  krankenversicherung: 'Health Insurance',
  todesfallversicherung: 'Life Insurance',
};

export const metadata: Metadata = buildPageMetadata({
  title: 'Services | SABR',
  description:
    'Insurance solutions for car, motorcycle, home, legal protection, household, accident, health and life.',
  path: '/en/services',
  locale: 'en',
});

export default function EnServicesPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Our services
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Comprehensive protection for your life
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            At SABR we offer insurance solutions for every area of life – from motor insurance to health and family protection.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {INSURANCE_CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/en/services/${category.enSlug}`}
                  className="block rounded-lg border border-white/10 bg-black/60 px-5 py-4 text-sm font-semibold text-white transition hover:border-yellow-400/50 hover:bg-black/80"
                >
                  {EN_TITLES[category.slug] ?? category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

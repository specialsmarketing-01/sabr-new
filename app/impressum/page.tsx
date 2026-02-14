import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben der SABR e.U. – Versicherungsagentur Wien, Heiligenstädter Straße 7, 1190 Wien.',
  path: '/impressum',
  locale: 'de',
});

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Impressum
          </h1>
          <p className="mt-3 text-sm text-white/70">
            Rechtliche Informationen gemäß § 5 ECG und § 25 Mediengesetz.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="font-semibold text-yellow-400">Firmenname</dt>
              <dd className="mt-1 text-white/90">Sabr e.U.</dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">Adresse</dt>
              <dd className="mt-1 text-white/90">Heiligenstädter Straße 7 – 1190 Wien</dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">Kontaktdaten</dt>
              <dd className="mt-1 text-white/90">
                Tel.: +43 1 544 1638
                <br />
                E-Mail:{' '}
                <a href="mailto:office@sabr.at" className="text-yellow-400 hover:underline">
                  office@sabr.at
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">Firmenbuchnummer</dt>
              <dd className="mt-1 text-white/90">FN 638257p</dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">Firmenbuchgericht</dt>
              <dd className="mt-1 text-white/90">Handelsgericht Wien / A-1030 Wien</dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">GISA-Zahl</dt>
              <dd className="mt-1 text-white/90">34754436</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

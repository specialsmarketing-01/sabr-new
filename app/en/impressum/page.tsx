import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Imprint | SABR',
  description: 'Legal information and imprint of SABR e.U.',
  path: '/en/impressum',
  locale: 'en',
});

export default function EnImpressumPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Imprint
          </h1>
          <p className="mt-3 text-sm text-white/70">
            Legal information pursuant to § 5 ECG and § 25 Media Act.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="font-semibold text-yellow-400">Company name</dt>
              <dd className="mt-1 text-white/90">Sabr e.U.</dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">Address</dt>
              <dd className="mt-1 text-white/90">Heiligenstädter Straße 7 – 1190 Vienna</dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">Contact</dt>
              <dd className="mt-1 text-white/90">
                Tel.: +43 1 544 1638
                <br />
                Email:{' '}
                <a href="mailto:office@sabr.at" className="text-yellow-400 hover:underline">
                  office@sabr.at
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">Company register number</dt>
              <dd className="mt-1 text-white/90">FN 638257p</dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">Commercial court</dt>
              <dd className="mt-1 text-white/90">Handelsgericht Wien / A-1030 Vienna</dd>
            </div>
            <div>
              <dt className="font-semibold text-yellow-400">GISA number</dt>
              <dd className="mt-1 text-white/90">34754436</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

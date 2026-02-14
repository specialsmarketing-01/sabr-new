import type { Metadata } from 'next';
import { ContactLeadForm } from '@/components/ContactLeadForm';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Kontakt',
  description:
    'Kontakt SABR Versicherungsagentur Wien: Heiligenstädter Straße 7, 1190 Wien. Telefon +43 1 544 1638, E-Mail office@sabr.at. Beratung zu Versicherung Wien.',
  path: '/kontakt',
  locale: 'de',
});

export default function KontaktPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Kontakt
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Wir sind für Sie da
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Haben Sie Fragen zu Ihrer Versicherung oder wünschen Sie eine Beratung? Unser Team antwortet in der Regel innerhalb von 24 Stunden – per E-Mail, Telefon oder über das Kontaktformular.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr,minmax(0,1.2fr)]">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Kontaktdaten
              </h2>
              <div className="space-y-4 text-sm text-white/80">
                <div>
                  <p className="font-semibold text-white">Adresse</p>
                  <p>Heiligenstädter Straße 7 – 1190 Wien</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Telefon</p>
                  <a href="tel:+4315441638" className="hover:text-yellow-400">+43 1 544 1638</a>
                </div>
                <div>
                  <p className="font-semibold text-white">E-Mail</p>
                  <a href="mailto:office@sabr.at" className="text-yellow-400 hover:underline">office@sabr.at</a>
                </div>
              </div>
              <p className="text-xs text-white/60">
                Montag bis Freitag, 9:00–18:00 Uhr. In dringenden Fällen sind wir auch außerhalb dieser Zeiten per E-Mail erreichbar.
              </p>
            </div>
            <ContactLeadForm lang="de" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-white">
            Häufig gestellte Fragen
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li>
              <strong className="text-white">Wie kann ich SABR am besten kontaktieren?</strong>
              <br />
              Per Kontaktformular, E-Mail oder Telefon. Unser Team antwortet in der Regel innerhalb von 24 Stunden.
            </li>
            <li>
              <strong className="text-white">Wann ist der Kundenservice erreichbar?</strong>
              <br />
              Montag bis Freitag, 9:00–18:00 Uhr. In dringenden Fällen per E-Mail auch außerhalb dieser Zeiten.
            </li>
            <li>
              <strong className="text-white">Kann ich einen Beratungstermin vereinbaren?</strong>
              <br />
              Ja. Über das Kontaktformular können Sie einen Termin anfragen; ein Berater meldet sich bei Ihnen.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

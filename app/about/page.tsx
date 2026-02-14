import type { Metadata } from 'next';
import { ContactLeadForm } from '@/components/ContactLeadForm';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Über uns',
  description:
    'Über SABR Versicherungsagentur Wien: Seit über 11 Jahren Ihr Versicherungspartner in Wien. Mission, Vision und Werte – Versicherung Wien mit Vertrauen.',
  path: '/about',
  locale: 'de',
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Über uns
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Ihre Sicherheit, unsere Mission
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            SABR ist mehr als nur eine Versicherung – seit über 11 Jahren sind wir Ihr verlässlicher Partner in allen Lebenslagen. Unser Ziel ist es, Menschen mit modernen, fairen und transparenten Versicherungslösungen zu schützen. Mit einem engagierten Team und einem klaren Fokus auf Vertrauen und Kundenzufriedenheit setzen wir uns täglich dafür ein, Ihnen Sicherheit und Ruhe zu geben – heute und in Zukunft.
          </p>

          {/* Stats row */}
          <div className="mt-8 grid gap-8 text-white sm:grid-cols-2">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-400">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </span>
              <div>
                <p className="text-2xl font-semibold">
                  11<span className="align-super text-sm">+</span>
                </p>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Jahre Erfahrung
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-400">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 11a4 4 0 1 0-4-4" />
                  <path d="M17 11a4 4 0 1 0-4-4" />
                  <path d="M3 21c0-3 2-5 4-5s4 2 4 5" />
                  <path d="M13 21c0-3 2-5 4-5s4 2 4 5" />
                </svg>
              </span>
              <div>
                <p className="text-2xl font-semibold">
                  1.500<span className="align-super text-sm">+</span>
                </p>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Zufriedene Kund:innen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#043d15] md:text-2xl">
            Von einer Idee zu Ihrem sicheren Partner
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            SABR wurde mit der Vision gegründet, Versicherungen einfacher, verständlicher und menschlicher zu gestalten. Was als kleines Team mit großem Engagement begann, ist heute ein starker Partner für individuelle Sicherheitslösungen. Vertrauen, Verantwortung und Innovation prägen unsere Arbeit – damals wie heute.
          </p>
        </div>
      </section>

      {/* Values + offer form */}
      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-white">
                Vertrauen, das wir uns verdient haben
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                Seit unserer Gründung hat SABR unzählige Kund:innen erfolgreich begleitet und geschützt. Unser Engagement für Qualität, Fairness und Zuverlässigkeit spiegelt sich in jeder Versicherungslösung wider, die wir anbieten. Wir wachsen mit unseren Kund:innen – und ihr Vertrauen ist unser größter Erfolg.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: 'Über 1.500 zufriedene Kund:innen',
                    text: 'Tausende Menschen vertrauen bereits auf unsere Versicherungen – ein Beweis für unsere Stärke und Verlässlichkeit.',
                  },
                  {
                    title: 'Hohe Kundenzufriedenheit',
                    text: 'Unsere Kund:innen schätzen unseren schnellen Service, klare Kommunikation und persönliche Betreuung.',
                  },
                  {
                    title: 'Nachhaltiges Wachstum',
                    text: 'Durch stetige Innovation und Verantwortung sichern wir langfristigen Erfolg – für uns und unsere Kund:innen.',
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-3 border-l-2 border-yellow-400/60 pl-4"
                  >
                    <span
                      className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-400"
                      aria-hidden
                    >
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8.5 6.5 12 13 4" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/70">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md bg-black/70 p-5 shadow-lg shadow-black/40">
              <h3 className="text-sm font-semibold text-white">
                Angebot anfordern
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Füllen Sie das Formular aus und erhalten Sie Ihr persönliches
                Versicherungsangebot in nur wenigen Minuten.
              </p>
              <div className="mt-5">
                <ContactLeadForm
                  lang="de"
                  headline="Versicherungsangebot anfordern"
                  className="space-y-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SABR / Team */}
      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white">
            Gemeinsam für Ihre Sicherheit
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Hinter SABR steht ein engagiertes Team aus erfahrenen Versicherungsexperten. Jeder bringt Fachwissen und Motivation ein, um Ihnen den bestmöglichen Schutz zu bieten. Gemeinsam sorgen wir dafür, dass Sie sich in jeder Lebenslage sicher fühlen können.
          </p>
        </div>
      </section>

    </>
  );
}

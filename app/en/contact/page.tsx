import type { Metadata } from 'next';
import { ContactLeadForm } from '@/components/ContactLeadForm';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact | SABR',
  description: 'Contact SABR – by email, phone, or our contact form.',
  path: '/en/contact',
  locale: 'en',
});

export default function EnContactPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Contact
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Do you have questions about your insurance or need advice? Our team usually responds within 24 hours – by email, phone, or via the contact form.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
                Contact details
              </h2>
              <div className="space-y-4 text-sm text-white/80">
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>Heiligenstädter Straße 7 – 1190 Vienna</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+4315441638" className="hover:text-yellow-400">+43 1 544 1638</a>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:office@sabr.at" className="text-yellow-400 hover:underline">office@sabr.at</a>
                </div>
              </div>
              <p className="text-xs text-white/60">
                Monday to Friday, 9:00–18:00. For urgent matters we can also be reached by email outside these hours.
              </p>
            </div>
            <ContactLeadForm lang="en" headline="Send a message" />
          </div>
        </div>
      </section>
    </>
  );
}

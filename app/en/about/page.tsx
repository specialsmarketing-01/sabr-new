import type { Metadata } from 'next';
import { ContactLeadForm } from '@/components/ContactLeadForm';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'About us | SABR',
  description:
    'SABR – your reliable insurance partner for more than 11 years. Learn more about our mission, vision, and values.',
  path: '/en/about',
  locale: 'en',
});

export default function EnAboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            About SABR
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Your security, our mission
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            SABR is more than just insurance – for more than 11 years we have
            been your reliable partner in all stages of life. Our aim is to
            protect people with modern, fair and transparent insurance
            solutions. With a dedicated team and a clear focus on trust and
            customer satisfaction, we work every day to give you security and
            peace of mind – today and in the future.
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
                  Years of experience
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
                  1,500<span className="align-super text-sm">+</span>
                </p>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Satisfied clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-[#043d15] md:text-2xl">
            From an idea to your trusted partner
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            SABR was founded with the vision of making insurance simpler, more
            understandable and more human. What began as a small team with great
            commitment has grown into a strong partner for individual protection
            solutions. Trust, responsibility and innovation have shaped our work
            from the very beginning – and still do today.
          </p>
        </div>
      </section>

      {/* Values + offer form */}
      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-white">
                Trust we have earned
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                Since our founding, SABR has successfully supported and
                protected countless clients. Our commitment to quality,
                fairness and reliability is reflected in every insurance
                solution we provide. We grow together with our clients – and
                their trust is our greatest success.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: 'Over 1,500 satisfied clients',
                    text: 'Thousands of people already place their trust in our insurance solutions – clear proof of our strength and reliability.',
                  },
                  {
                    title: 'High customer satisfaction',
                    text: 'Our clients value our fast service, clear communication and personal support.',
                  },
                  {
                    title: 'Sustainable growth',
                    text: 'Through continuous innovation and responsibility we secure long-term success – for us and for our clients.',
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
                Request a quote
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Fill out the form and receive your personal insurance quote in
                just a few minutes.
              </p>
              <div className="mt-5">
                <ContactLeadForm
                  lang="en"
                  headline="Request an insurance quote"
                  className="space-y-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / why SABR */}
      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white">
            Working together for your security
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Behind SABR is a dedicated team of experienced insurance
            specialists. Each brings expertise and motivation to provide you
            with the best possible protection. Together, we make sure that you
            can feel secure in every phase of life.
          </p>
        </div>
      </section>
    </>
  );
}

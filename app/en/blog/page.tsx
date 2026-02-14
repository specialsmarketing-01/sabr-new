import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog | SABR',
  description:
    'Tips, news and useful information about insurance – from the SABR team for you.',
  path: '/en/blog',
  locale: 'en',
});

export default function EnBlogPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Blog
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Tips & News
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Useful information about insurance, claims and coverage – clearly
            explained by the SABR team.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-neutral-950/80 p-8 text-center">
          <p className="text-sm text-white/60">
            Posts coming soon. Check back later.
          </p>
        </div>
      </div>
    </>
  );
}

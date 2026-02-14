import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getAllSlugs } from '@/lib/services-data';
import { ContactLeadForm } from '@/components/ContactLeadForm';
import { buildPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: 'Service' };
  return buildPageMetadata({
    title: category.title,
    description: category.intro,
    path: `/services/${slug}`,
    locale: 'de',
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Versicherung
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            {category.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-line text-sm leading-relaxed text-white/80">
              {category.content}
            </p>
          </div>
        </div>
      </section>

      {/* Category contact form */}
      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-6 text-sm text-white/70">{category.ctaText}</p>
          <ContactLeadForm
            defaultCategory={category.slug}
            headline={category.ctaTitle}
            lang="de"
          />
        </div>
      </section>
    </>
  );
}

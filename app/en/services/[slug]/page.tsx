import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getAllEnSlugs } from '@/lib/services-data';
import { ContactLeadForm } from '@/components/ContactLeadForm';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllEnSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: 'Service' };
  const title = category.titleEn ?? category.title;
  const description = category.introEn ?? category.intro;
  return { title: `${title} | SABR`, description };
}

export default async function EnServicePage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const titleEn = category.titleEn ?? category.title;
  const introEn = category.introEn ?? category.intro;
  const contentEn = category.contentEn ?? category.content;
  const ctaTitleEn = category.ctaTitleEn ?? category.ctaTitle;
  const ctaTextEn = category.ctaTextEn ?? category.ctaText;

  return (
    <>
      <section className="bg-black pb-12 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Insurance
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            {titleEn}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            {introEn}
          </p>
        </div>
      </section>

      <section className="bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="whitespace-pre-line text-sm leading-relaxed text-white/80">
            {contentEn}
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="mb-6 text-sm text-white/70">{ctaTextEn}</p>
          <ContactLeadForm
            defaultCategory={category.slug}
            headline={ctaTitleEn}
            lang="en"
          />
        </div>
      </section>
    </>
  );
}

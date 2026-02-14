import type { Metadata } from 'next';
import { getLocalizedPath } from './i18n';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://sabr.at';

const SITE_NAME = 'SABR';
const TITLE_SUFFIX_DE = ' | SABR Versicherungsagentur';
const TITLE_SUFFIX_EN = ' | SABR';

/**
 * Build full page metadata with canonical URL, Open Graph, Twitter, and hreflang.
 * Titles get a consistent suffix (no duplicate "SABR" in one title).
 */
export function buildPageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  locale: 'de' | 'en';
}): Metadata {
  const { title, description, path, locale } = opts;
  const dePath = path.startsWith('/en') ? getLocalizedPath(path, 'de') : path;
  const enPath = path.startsWith('/en') ? path : getLocalizedPath(path, 'en');
  const canonical = `${SITE_URL}${path}`;
  const isStandaloneTitle =
    title.includes('|') || title.includes('Einfach. Ehrlich. Effizient.');
  const titleWithSuffix = isStandaloneTitle
    ? title
    : locale === 'de'
      ? `${title}${TITLE_SUFFIX_DE}`
      : `${title}${TITLE_SUFFIX_EN}`;
  return {
    title: titleWithSuffix,
    description,
    openGraph: {
      title: titleWithSuffix,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === 'de' ? 'de_AT' : 'en_AT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titleWithSuffix,
      description,
    },
    alternates: {
      canonical,
      languages: {
        'x-default': `${SITE_URL}${dePath}`,
        de: `${SITE_URL}${dePath}`,
        en: `${SITE_URL}${enPath}`,
      },
    },
  };
}

/** Primary SEO keywords – German, Vienna-focused. */
export const DEFAULT_KEYWORDS = [
  'Versicherung Wien',
  'Versicherungsagentur Wien',
  'Autoversicherung Wien',
  'SABR Versicherung',
  'Versicherung',
  'Versicherungsagentur',
  'SABR',
  'Österreich',
  'Kfz-Versicherung',
  'Autoversicherung',
  'Rechtsschutz',
  'Haushaltsversicherung',
  'Unfallversicherung',
  'Krankenversicherung',
];

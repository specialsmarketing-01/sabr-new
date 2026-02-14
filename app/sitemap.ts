import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getAllSlugs, getAllEnSlugs } from '@/lib/services-data';

const STATIC_DE = [
  '',
  '/about',
  '/kontakt',
  '/impressum',
  '/services',
  '/blog',
  '/danke',
] as const;

const STATIC_EN = [
  '/en',
  '/en/about',
  '/en/contact',
  '/en/impressum',
  '/en/services',
  '/en/blog',
] as const;

const STATIC_OTHER = ['/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_DE) {
    const url = path || '/';
    entries.push({
      url: `${base}${url}`,
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.9,
    });
  }
  for (const path of STATIC_EN) {
    entries.push({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === '/en' ? 'weekly' : 'monthly',
      priority: path === '/en' ? 0.95 : 0.85,
    });
  }
  for (const path of STATIC_OTHER) {
    entries.push({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }
  for (const slug of getAllSlugs()) {
    entries.push({
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }
  for (const enSlug of getAllEnSlugs()) {
    entries.push({
      url: `${base}/en/services/${enSlug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  return entries;
}

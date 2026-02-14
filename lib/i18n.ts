import { getEnSlug, getDeSlug } from './services-data';

export type Lang = 'de' | 'en';

/**
 * Returns the same page in the other language.
 * DE: /, /about, /kontakt, /impressum, /services, /services/autoversicherung
 * EN: /en, /en/about, /en/contact, /en/impressum, /en/services, /en/services/car-insurance
 */
export function getLocalizedPath(pathname: string, toLang: Lang): string {
  const isEn = pathname.startsWith('/en');
  const withoutLang = pathname.replace(/^\/en/, '') || '/';

  if (toLang === 'en') {
    if (isEn) return pathname;
    if (withoutLang === '/' || withoutLang === '/de') return '/en';
    if (withoutLang === '/about') return '/en/about';
    if (withoutLang === '/kontakt') return '/en/contact';
    if (withoutLang === '/impressum') return '/en/impressum';
    if (withoutLang === '/services') return '/en/services';
    const serviceMatch = withoutLang.match(/^\/services\/(.+)$/);
    if (serviceMatch) {
      const enSlug = getEnSlug(serviceMatch[1]);
      return `/en/services/${enSlug}`;
    }
    return `/en${withoutLang}`;
  }

  // toLang === 'de'
  if (!isEn) return pathname;
  if (pathname === '/en') return '/de';
  if (pathname === '/en/about') return '/about';
  if (pathname === '/en/contact') return '/kontakt';
  if (pathname === '/en/impressum') return '/impressum';
  if (pathname === '/en/services') return '/services';
  const enServiceMatch = pathname.match(/^\/en\/services\/(.+)$/);
  if (enServiceMatch) {
    const deSlug = getDeSlug(enServiceMatch[1]);
    return `/services/${deSlug}`;
  }
  return pathname.replace(/^\/en/, '') || '/';
}

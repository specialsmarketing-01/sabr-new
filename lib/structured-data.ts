import { SITE_URL } from './seo';

/** Business data for JSON-LD and metadata. */
export const BUSINESS = {
  name: 'SABR e.U.',
  legalName: 'Sabr e.U.',
  url: SITE_URL,
  description:
    'SABR Versicherungsagentur Wien – zuverlässige Versicherungen für Auto, Motorrad, Eigenheim, Rechtsschutz, Haushalt, Unfall, Kranken- und Todesfallversicherung. Einfach. Ehrlich. Effizient.',
  telephone: '+43 1 544 1638',
  email: 'office@sabr.at',
  address: {
    streetAddress: 'Heiligenstädter Straße 7',
    addressLocality: 'Wien',
    postalCode: '1190',
    addressRegion: 'Wien',
    addressCountry: 'AT',
  },
  /** Opening hours: Mo–Do 08:00–16:30, Freitag 08:00–14:00. */
  openingHours: {
    moThu: 'Mo–Do 08:00 – 16:30',
    fri: 'Freitag 08:00 – 14:00',
  },
  openingHoursDisplay: ['Mo–Do 08:00 – 16:30', 'Freitag 08:00 – 14:00'],
} as const;

/**
 * JSON-LD for InsuranceAgency (subtype of LocalBusiness) with address, phone, opening hours.
 * Single script satisfies both InsuranceAgency and LocalBusiness.
 */
export function getOrganizationStructuredData(): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['InsuranceAgency', 'LocalBusiness'],
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      postalCode: BUSINESS.address.postalCode,
      addressRegion: BUSINESS.address.addressRegion,
      addressCountry: BUSINESS.address.addressCountry,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '16:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: { '@type': 'Country', name: 'Austria' },
  };
  return JSON.stringify(data);
}

import type { Metadata } from 'next';
import HomePage from '../page';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'SABR Versicherungsagentur – Einfach. Ehrlich. Effizient.',
  description:
    'Wir schützen, was Ihnen am wichtigsten ist – mit zuverlässigen Versicherungen für jeden Lebensbereich.',
  path: '/de',
  locale: 'de',
});

export default function DeHomePage() {
  return <HomePage />;
}

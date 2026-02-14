import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact | SABR',
  description:
    'Share a brief outline of your insurance or risk question and we will schedule a short introductory conversation.',
  path: '/contact',
  locale: 'en',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

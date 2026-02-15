import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getOrganizationStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://sabr.at'),
  title: {
    default: 'SABR Versicherungsagentur – Ihr verlässlicher Versicherungspartner',
    template: '%s | SABR',
  },
  description:
    'SABR Versicherungsagentur in Wien. Persönliche Beratung für Auto-, Haushalts-, Unfall-, Kranken- und Lebensversicherung.',
  icons: {
    icon: '/fav.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getOrganizationStructuredData();

  return (
    <html lang="de">
      <body className="min-h-screen text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-black" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_URL, DEFAULT_KEYWORDS } from '@/lib/seo';
import { getOrganizationStructuredData } from '@/lib/structured-data';

const DEFAULT_TITLE = 'SABR Versicherungsagentur – Einfach. Ehrlich. Effizient.';
const DEFAULT_DESCRIPTION =
  'Versicherungsagentur Wien: Versicherung für Auto, Motorrad, Eigenheim, Rechtsschutz, Haushalt, Unfall, Kranken- und Todesfall. SABR Versicherung – Ihr Partner in Wien.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  icons: {
    icon: '/fav.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    siteName: 'SABR Versicherungsagentur',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
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


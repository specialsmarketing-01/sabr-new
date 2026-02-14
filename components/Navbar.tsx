'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../logo-sabr.png';
import { INSURANCE_CATEGORIES } from '@/lib/services-data';
import { getLocalizedPath } from '@/lib/i18n';

const EN_SERVICE_TITLES: Record<string, string> = {
  autoversicherung: 'Car Insurance',
  motorradversicherung: 'Motorcycle Insurance',
  eigenheimversicherung: 'Home Insurance',
  rechtsschutzversicherung: 'Legal Protection Insurance',
  haushaltsversicherung: 'Household Insurance',
  unfallversicherung: 'Accident Insurance',
  krankenversicherung: 'Health Insurance',
  todesfallversicherung: 'Life Insurance',
};

export function Navbar() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const pathDe = getLocalizedPath(pathname, 'de');
  const pathEn = getLocalizedPath(pathname, 'en');
  const homeHref = isEn ? '/en' : pathname.startsWith('/de') ? '/de' : '/';
  const serviceLinks = INSURANCE_CATEGORIES.map((c) => ({
    href: isEn ? `/en/services/${c.enSlug}` : `/services/${c.slug}`,
    label: isEn ? EN_SERVICE_TITLES[c.slug] ?? c.title : c.title,
  }));

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="relative flex min-h-[4rem] items-center px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl items-center">
          {/* Left: Logo */}
          <Link
            href={homeHref}
            className="absolute left-4 flex items-center sm:left-6 lg:left-8"
          >
            <Image src={Logo} alt="SABR" className="h-9 w-auto" priority />
          </Link>

          {/* Center: Nav links */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-white sm:flex" aria-label="Main">
            <Link
              href={homeHref}
              className="transition-colors hover:text-yellow-400"
            >
              Home
            </Link>

            <div className="group relative">
              <Link
                href={isEn ? '/en/services' : '/services'}
                className="flex items-center gap-1 transition-colors hover:text-yellow-400"
              >
                {isEn ? 'Services' : 'Leistungen'}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 top-full pt-2">
                <div className="invisible min-w-[220px] rounded-md border border-white/10 bg-black py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {serviceLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-yellow-400"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={isEn ? '/en/about' : '/about'}
              className="transition-colors hover:text-yellow-400"
            >
              {isEn ? 'About' : 'Über uns'}
            </Link>
            <Link
              href={isEn ? '/en/contact' : '/kontakt'}
              className="transition-colors hover:text-yellow-400"
            >
              {isEn ? 'Contact' : 'Kontakt'}
            </Link>
          </nav>

          {/* Right: Language switcher */}
          <div className="absolute right-4 flex items-center gap-1 sm:right-6 lg:right-8">
            <Link
              href={pathDe}
              className={`px-2 py-1 text-xs font-medium transition-colors ${!isEn ? 'text-yellow-400' : 'text-white/70 hover:text-white'}`}
              aria-current={!isEn ? 'true' : undefined}
            >
              DE
            </Link>
            <span className="text-white/40" aria-hidden>|</span>
            <Link
              href={pathEn}
              className={`px-2 py-1 text-xs font-medium transition-colors ${isEn ? 'text-yellow-400' : 'text-white/70 hover:text-white'}`}
              aria-current={isEn ? 'true' : undefined}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vielen Dank | SABR',
  description:
    'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden.',
  robots: {
    index: false,
    follow: false,
  },
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function DankePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto flex min-h-[80vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="animate-fade-in flex flex-col items-center gap-8">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <CheckIcon className="h-9 w-9" />
          </span>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vielen Dank für Ihre Anfrage!
            </h1>
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24
              Stunden bei Ihnen.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gold-gradient px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-md transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

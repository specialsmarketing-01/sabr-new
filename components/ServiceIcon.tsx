'use client';

type ServiceSlug =
  | 'autoversicherung'
  | 'motorradversicherung'
  | 'eigenheimversicherung'
  | 'rechtsschutzversicherung'
  | 'haushaltsversicherung'
  | 'unfallversicherung'
  | 'krankenversicherung'
  | 'todesfallversicherung';

const iconClass = 'h-8 w-8 opacity-90';

function CarIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 17h14v-5H5v5Zm2-6h1m8 0h1m-10 3h8" />
      <path d="M6 11V8l3-3h6l3 3v3" />
    </svg>
  );
}

function MotorcycleIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M6 17h6m0 0 4-6 3-1" />
      <path d="M12 11V8l4-3 2 1" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10h4v-5h6v5h4V10" />
    </svg>
  );
}

function ScalesIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v18" />
      <path d="M8 21h8" />
      <path d="M5 12h4l2-8 2 8h4" />
      <path d="M3 12h3m12 0h3" />
    </svg>
  );
}

function HouseholdIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="6" width="16" height="14" rx="1" />
      <path d="M4 10h16" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function AccidentIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M12 6v12" />
      <path d="M6 12h12" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function HealthIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 12h4l2-4 2 8 2-6 2 2h4" />
    </svg>
  );
}

function LifeIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M12 9v8" />
    </svg>
  );
}

const SLUG_TO_ICON: Record<ServiceSlug, React.ComponentType<{ className?: string }>> = {
  autoversicherung: CarIcon,
  motorradversicherung: MotorcycleIcon,
  eigenheimversicherung: HomeIcon,
  rechtsschutzversicherung: ScalesIcon,
  haushaltsversicherung: HouseholdIcon,
  unfallversicherung: AccidentIcon,
  krankenversicherung: HealthIcon,
  todesfallversicherung: LifeIcon,
};

export function ServiceIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = SLUG_TO_ICON[slug as ServiceSlug];
  if (!Icon) return <span className={className ?? iconClass} aria-hidden />;
  return (
    <span className="inline-flex items-center justify-center text-white grayscale brightness-110 contrast-125" aria-hidden>
      <Icon className={className ?? iconClass} />
    </span>
  );
}

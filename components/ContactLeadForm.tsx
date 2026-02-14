'use client';

import { useState } from 'react';
import { INSURANCE_CATEGORIES } from '@/lib/services-data';

type ContactLeadFormProps = {
  /** Pre-select this category (slug). Used on service pages. */
  defaultCategory?: string;
  /** Headline above the form, e.g. "Beratung zur Autoversicherung anfragen" */
  headline?: string;
  /** Language for labels */
  lang?: 'de' | 'en';
  /** Optional class for wrapper */
  className?: string;
};

const CATEGORY_OPTIONS_DE = [
  { value: '', label: 'Bitte wählen' },
  ...INSURANCE_CATEGORIES.map((c) => ({ value: c.slug, label: c.title })),
];

const CATEGORY_OPTIONS_EN = [
  { value: '', label: 'Please select' },
  ...INSURANCE_CATEGORIES.map((c) => ({ value: c.slug, label: c.title })),
];

export function ContactLeadForm({
  defaultCategory = '',
  headline,
  lang = 'de',
  className = '',
}: ContactLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEn = lang === 'en';
  const options = isEn ? CATEGORY_OPTIONS_EN : CATEGORY_OPTIONS_DE;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Form submitted');
    e.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        window.location.href = '/danke';
        return;
      }
      setIsSubmitting(false);
      alert(isEn ? 'Something went wrong.' : 'Etwas ist schiefgelaufen.');
    } catch {
      setIsSubmitting(false);
      alert(isEn ? 'Something went wrong.' : 'Etwas ist schiefgelaufen.');
    }
  };

  const labels = isEn
    ? {
        headline: headline ?? 'Request a callback',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        category: 'Insurance type',
        message: 'Message',
        submit: 'Send message',
        submitting: 'Sending…',
        required: 'Required',
        privacy: 'Your data will be treated confidentially and in accordance with data protection regulations.',
      }
    : {
        headline: headline ?? 'Kontaktanfrage',
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon',
        category: 'Versicherungsart',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        submitting: 'Wird gesendet…',
        required: 'Pflichtfeld',
        privacy: 'Ihre Angaben werden vertraulich behandelt und gemäß den geltenden Datenschutzbestimmungen verarbeitet.',
      };

  return (
    <form
      className={`space-y-5 rounded-lg border border-white/10 bg-black/60 px-6 py-6 ${className}`}
      aria-label={labels.headline}
      onSubmit={handleSubmit}
      noValidate
    >
      {headline && (
        <h3 className="text-sm font-semibold text-white">{headline}</h3>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
          {labels.name} <span className="text-white/50">({labels.required})</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          className="mt-2 block w-full border border-white/20 bg-black px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          placeholder={isEn ? 'Your name' : 'Ihr Name'}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
          {labels.email} <span className="text-white/50">({labels.required})</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          className="mt-2 block w-full border border-white/20 bg-black px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          placeholder={isEn ? 'you@example.com' : 'ihre@email.at'}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
          {labels.phone}
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 block w-full border border-white/20 bg-black px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          placeholder="+43 …"
        />
      </div>

      <div>
        <label htmlFor="contact-category" className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
          {labels.category}
        </label>
        <select
          id="contact-category"
          name="insurance_category"
          defaultValue={defaultCategory}
          className="mt-2 block w-full border border-white/20 bg-black px-3 py-2 text-sm text-white focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          aria-label={labels.category}
        >
          {options.map((opt) => (
            <option key={opt.value || 'empty'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
          {labels.message} <span className="text-white/50">({labels.required})</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          aria-required="true"
          className="mt-2 block w-full border border-white/20 bg-black px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          placeholder={isEn ? 'How can we help?' : 'Wie können wir Ihnen helfen?'}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center bg-[#043d15] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#05501a] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? labels.submitting : labels.submit}
      </button>
      <p className="text-[11px] text-white/50">{labels.privacy}</p>
    </form>
  );
}

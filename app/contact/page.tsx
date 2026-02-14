'use client';

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        alert('Something went wrong.');
      }
    } catch {
      alert('Error sending message.');
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
      <header className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-gradient">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Start a conversation.
        </h1>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          Share a short outline of your question or upcoming decision. We will
          respond with a proposed time for a brief introductory call and, if
          helpful, request any supporting material in advance.
        </p>
      </header>

      <section className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
        <form
          className="space-y-6 border border-[#f0cc69]/40 bg-black/60 p-6"
          aria-label="Contact form"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="mt-2 block w-full border border-slate-700 bg-black/60 px-3 py-2 text-sm text-slate-50 shadow-sm placeholder:text-slate-500 focus:border-[#f0cc69] focus:outline-none focus:ring-1 focus:ring-[#f0cc69]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 block w-full border border-slate-700 bg-black/60 px-3 py-2 text-sm text-slate-50 shadow-sm placeholder:text-slate-500 focus:border-[#f0cc69] focus:outline-none focus:ring-1 focus:ring-[#f0cc69]"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="mt-2 block w-full border border-slate-700 bg-black/60 px-3 py-2 text-sm text-slate-50 shadow-sm placeholder:text-slate-500 focus:border-[#f0cc69] focus:outline-none focus:ring-1 focus:ring-[#f0cc69]"
              placeholder="+43 …"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
            >
              Message
            </label>
            <p className="mt-1 text-[11px] text-slate-400">
              A sentence or two about your insurance or risk question is
              enough—we do not need detailed data at this stage.
            </p>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 block w-full border border-slate-700 bg-black/60 px-3 py-2 text-sm text-slate-50 shadow-sm placeholder:text-slate-500 focus:border-[#f0cc69] focus:outline-none focus:ring-1 focus:ring-[#f0cc69]"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center bg-gold-gradient px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-amber-500/30 transition hover:brightness-110"
          >
            Send message
          </button>

          <p className="text-[11px] text-slate-500">
            This form does not transmit sensitive or confidential information.
            Please avoid including personal data beyond what is necessary to
            contact you.
          </p>
        </form>

        <aside className="space-y-4 text-xs text-slate-300">
          <div className="border border-[#f0cc69]/60 bg-black/60 p-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-gradient">
              Direct contact
            </h2>
            <p className="mt-2">
              Prefer email? You can reach us directly at{' '}
              <a
                href="mailto:hello@sabr-advisory.example"
                className="text-gold-gradient hover:text-amber-200"
              >
                hello@sabr-advisory.example
              </a>
              .
            </p>
          </div>
          <div className="border border-[#f0cc69]/60 bg-black/60 p-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-gradient">
              Typical next steps
            </h2>
            <ul className="mt-2 space-y-2">
              <li>Short introductory call to understand your context.</li>
              <li>Agreement on whether and how we can help.</li>
              <li>Clear scope, timeline, and expected outcomes.</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}


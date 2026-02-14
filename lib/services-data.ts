/** EN slug for route-based i18n: /en/services/car-insurance */
export const SERVICE_SLUG_DE_TO_EN: Record<string, string> = {
  autoversicherung: 'car-insurance',
  motorradversicherung: 'motorcycle-insurance',
  eigenheimversicherung: 'home-insurance',
  rechtsschutzversicherung: 'legal-protection',
  haushaltsversicherung: 'household-insurance',
  unfallversicherung: 'accident-insurance',
  krankenversicherung: 'health-insurance',
  todesfallversicherung: 'life-insurance',
};
const EN_TO_DE = Object.fromEntries(
  Object.entries(SERVICE_SLUG_DE_TO_EN).map(([k, v]) => [v, k])
);

/** Explicit type so TS never narrows to never when accessing .title etc. */
export interface ServiceCategory {
  slug: string;
  enSlug: string;
  title: string;
  titleEn: string;
  intro: string;
  introEn: string;
  content: string;
  contentEn: string;
  ctaTitle: string;
  ctaTitleEn: string;
  ctaText: string;
  ctaTextEn: string;
}

export const INSURANCE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'autoversicherung',
    enSlug: 'car-insurance',
    title: 'Autoversicherung',
    titleEn: 'Car Insurance',
    intro: 'Schützen Sie sich und Ihr Fahrzeug auf jeder Fahrt – mit einer Autoversicherung, die zu Ihren Bedürfnissen passt.',
    introEn: 'Protect yourself and your vehicle on every journey – with car insurance that fits your needs.',
    content: `Die Kfz-Versicherung ist in Österreich gesetzlich vorgeschrieben. Sie deckt Schäden ab, die Sie mit Ihrem Fahrzeug verursachen – an anderen Fahrzeugen, Personen oder Sachen. Bei SABR finden Sie die passende Mischung aus Haftpflicht, Kasko und Zusatzbausteinen.

Wir erklären Ihnen die Optionen verständlich und helfen Ihnen, Über- und Unterversicherung zu vermeiden. Ob Neuwagen, Gebrauchtwagen oder Zweitwagen: Wir sichern Sie fair und transparent ab.`,
    contentEn: `Motor third-party liability insurance is mandatory in Austria. It covers damage you cause with your vehicle – to other vehicles, people or property. With SABR you find the right balance between liability, comprehensive cover and useful add-ons.

We explain your options in clear language and help you avoid both over- and underinsurance. Whether new car, used car or second car – we make sure you are protected fairly and transparently.`,
    ctaTitle: 'Beratung zur Autoversicherung',
    ctaTitleEn: 'Get advice on car insurance',
    ctaText: 'Lassen Sie sich unverbindlich zu Deckung, Selbstbeteiligung und Preis beraten.',
    ctaTextEn: 'Request a non-binding consultation on coverage, deductible and premium.',
  },
  {
    slug: 'motorradversicherung',
    enSlug: 'motorcycle-insurance',
    title: 'Motorradversicherung',
    titleEn: 'Motorcycle Insurance',
    intro: 'Ihr Schutz für sorgenfreies Fahren auf zwei Rädern – maßgeschneidert für Motorrad und Roller.',
    introEn: 'Protection for carefree riding on two wheels – tailored to your motorcycle or scooter.',
    content: `Die Motorradversicherung schützt Sie und Ihr Zweirad bei Unfällen, Diebstahl und Haftpflichtfällen. Je nach Nutzung (Freizeit, Pendeln, Saison) empfehlen wir die passende Deckung und Selbstbeteiligung.

SABR berät Sie zu allen gängigen Versicherern und Tarifen. Wir achten auf klare Bedingungen und faire Prämien, damit Sie mit gutem Gefühl unterwegs sind.`,
    contentEn: `Motorcycle insurance protects you and your bike in the event of accidents, theft and liability claims. Depending on how you use your vehicle (leisure, commuting, seasonally), we recommend suitable cover and deductibles.

SABR advises you on all major insurers and tariffs. We focus on clear terms and fair premiums so that you can enjoy every ride with confidence.`,
    ctaTitle: 'Motorradversicherung anfragen',
    ctaTitleEn: 'Request motorcycle insurance',
    ctaText: 'Sprechen Sie mit uns über Ihr Bike und Ihren gewünschten Schutz.',
    ctaTextEn: 'Talk to us about your bike and the protection you need.',
  },
  {
    slug: 'eigenheimversicherung',
    enSlug: 'home-insurance',
    title: 'Eigenheimversicherung',
    titleEn: 'Home Insurance',
    intro: 'Sichert Ihr Zuhause gegen Schäden und Verluste ab – für Haus und Grund.',
    introEn: 'Protects your home against damage and loss – for both building and land.',
    content: `Die Eigenheimversicherung (Gebäudeversicherung) deckt Schäden am Haus ab: Feuer, Leitungswasser, Sturm, Hagel und weitere Naturgefahren. Für viele Kreditgeber ist sie Pflicht.

Wir bei SABR prüfen mit Ihnen, welche Gefahren in Ihrer Region relevant sind und welche Deckungssummen sinnvoll sind. So sind Sie weder über- noch unterversichert.`,
    contentEn: `Home insurance (building insurance) covers damage to your house: fire, escape of water, storm, hail and other natural hazards. For many lenders it is a requirement.

Together with you, SABR reviews which risks are relevant in your region and which sums insured make sense. This way you are neither over- nor underinsured.`,
    ctaTitle: 'Schutz für Ihr Eigenheim',
    ctaTitleEn: 'Protect your home',
    ctaText: 'Vereinbaren Sie eine Beratung zu Gebäude- und optionaler Elementarschaden-Deckung.',
    ctaTextEn: 'Arrange a consultation on building cover and optional natural hazard protection.',
  },
  {
    slug: 'rechtsschutzversicherung',
    enSlug: 'legal-protection',
    title: 'Rechtsschutzversicherung',
    titleEn: 'Legal Protection Insurance',
    intro: 'Steht Ihnen bei rechtlichen Konflikten zur Seite – im Privat- und Berufsleben.',
    introEn: 'Stands by your side in legal disputes – in your private and professional life.',
    content: `Eine Rechtsschutzversicherung übernimmt unter bestimmten Bedingungen Anwalts- und Gerichtskosten. Typische Bereiche: Verkehr, Wohnen, Arbeit, Verträge und Privat.

SABR hilft Ihnen, den passenden Tarif zu finden – mit klaren Leistungsgrenzen und ohne versteckte Ausschlüsse. So können Sie im Ernstfall Ihr Recht durchsetzen, ohne finanzielle Risiken zu fürchten.`,
    contentEn: `Legal protection insurance covers lawyers' and court costs under certain conditions. Typical areas: traffic, housing, employment, contracts and private life.

SABR helps you find the right tariff – with clear limits of cover and no hidden exclusions. This allows you to assert your rights in a dispute without having to fear high legal costs.`,
    ctaTitle: 'Rechtsschutz absichern',
    ctaTitleEn: 'Secure legal protection',
    ctaText: 'Erfahren Sie, welche Bausteine für Sie sinnvoll sind und was die Police abdeckt.',
    ctaTextEn: 'Find out which modules suit you and what the policy covers.',
  },
  {
    slug: 'haushaltsversicherung',
    enSlug: 'household-insurance',
    title: 'Haushaltsversicherung',
    titleEn: 'Household Insurance',
    intro: 'Schützt Ihr Eigentum im Inneren Ihres Zuhauses – gegen Diebstahl, Leitungswasser und mehr.',
    introEn: 'Protects the contents of your home – against theft, water damage and more.',
    content: `Die Haushaltsversicherung ersetzt Schäden an Ihrem Hausrat: z. B. durch Einbruchdiebstahl, Leitungswasser, Feuer oder Sturm. Oft ist auch eine Haftpflichtkomponente enthalten.

Wir beraten Sie zu Deckungssummen, Unterversicherungsverzicht und optionalen Bausteinen wie Fahrraddiebstahl oder Glas. So ist Ihr Hab und Gut passend abgesichert.`,
    contentEn: `Household insurance replaces damage to your household contents – for example due to burglary, escape of water, fire or storm. Often a personal liability component is also included.

We advise you on sums insured, waiver of underinsurance and optional modules such as bicycle theft or glass cover, so that your belongings are appropriately protected.`,
    ctaTitle: 'Hausrat versichern',
    ctaTitleEn: 'Insure your household contents',
    ctaText: 'Lassen Sie sich zu Umfang und Prämie Ihrer Haushaltsversicherung beraten.',
    ctaTextEn: 'Get advice on the scope and premium of your household insurance.',
  },
  {
    slug: 'unfallversicherung',
    enSlug: 'accident-insurance',
    title: 'Unfallversicherung',
    titleEn: 'Accident Insurance',
    intro: 'Finanzielle Sicherheit bei unerwarteten Unfällen – weltweit, rund um die Uhr.',
    introEn: 'Financial security after unexpected accidents – worldwide, around the clock.',
    content: `Die private Unfallversicherung leistet bei Unfallfolgen (Invalidität, Tod), oft mit optionaler Unfallrente und Krankenhaustagegeld. Sie gilt in der Regel weltweit und 24/7 – nicht nur im Beruf.

SABR erklärt Ihnen die Unterschiede zu gesetzlicher und betrieblicher Absicherung und hilft bei der Wahl von Leistungssummen und Vertragslaufzeit.`,
    contentEn: `Private accident insurance pays out after the consequences of an accident (disability, death), often with optional accident pension and daily hospital benefits. It usually applies worldwide and 24/7 – not only at work.

SABR explains the differences compared with statutory and employer cover and helps you choose benefit levels and contract terms.`,
    ctaTitle: 'Unfallschutz anfragen',
    ctaTitleEn: 'Request accident cover',
    ctaText: 'Sichern Sie sich und Ihre Familie mit einer passenden Unfallversicherung ab.',
    ctaTextEn: 'Protect yourself and your family with suitable accident insurance.',
  },
  {
    slug: 'krankenversicherung',
    enSlug: 'health-insurance',
    title: 'Krankenversicherung',
    titleEn: 'Health Insurance',
    intro: 'Unterstützt Sie, wenn die Gesundheit versagt – mit privater Zusatzabsicherung.',
    introEn: 'Supports you when your health is at risk – with private supplementary cover.',
    content: `Zusätzlich zur gesetzlichen Krankenversicherung können Sie sich mit privaten Zusatzversicherungen absichern: bessere Spitalsleistungen, Wahlarzt, Zahn oder tägliche Geldleistungen im Krankheitsfall.

Wir bei SABR vergleichen Angebote und erklären, welche Bausteine zu Ihrer Situation passen – ohne Überverkauf, mit Fokus auf verständliche Bedingungen.`,
    contentEn: `In addition to statutory health insurance you can protect yourself with private supplementary policies: better hospital benefits, choice of doctor, dental cover or daily allowances in the event of illness.

At SABR we compare offers and explain which modules suit your situation – without overselling and with a focus on clear, understandable terms.`,
    ctaTitle: 'Krankenzusatzversicherung beraten',
    ctaTitleEn: 'Health insurance advice',
    ctaText: 'Besprechen Sie mit uns Ihre Wünsche an Zusatzleistungen und Budget.',
    ctaTextEn: 'Discuss your needs for additional benefits and budget with us.',
  },
  {
    slug: 'todesfallversicherung',
    enSlug: 'life-insurance',
    title: 'Todesfallversicherung',
    titleEn: 'Life Insurance',
    intro: 'Sorgt für finanzielle Absicherung Ihrer Angehörigen im Todesfall.',
    introEn: 'Provides financial security for your dependants in the event of death.',
    content: `Die Todesfallversicherung (Risiko-Lebensversicherung) zahlt eine vereinbarte Summe an Ihre Begünstigten, wenn Sie versterben. So können z. B. Kredite abgesichert oder die Familie abgesichert werden.

SABR berät Sie zu Laufzeit, Versicherungssumme und Begünstigten. Wir achten auf faire Prämien und klare Vertragsbedingungen.`,
    contentEn: `Term life insurance pays an agreed lump sum to your beneficiaries if you die. This can be used, for example, to repay loans or secure your family’s standard of living.

SABR advises you on term, sum insured and beneficiaries. We focus on fair premiums and clear contract conditions.`,
    ctaTitle: 'Todesfallabsicherung planen',
    ctaTitleEn: 'Plan life cover',
    ctaText: 'Schützen Sie Ihre Angehörigen – wir helfen bei der passenden Absicherung.',
    ctaTextEn: 'Protect your dependants – we help you find the right level of cover.',
  },
];

export type ServiceSlug = ServiceCategory['slug'];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  const byDe = INSURANCE_CATEGORIES.find((c) => c.slug === slug);
  if (byDe) return byDe;
  const deSlug = EN_TO_DE[slug];
  return deSlug ? INSURANCE_CATEGORIES.find((c) => c.slug === deSlug) : undefined;
}

export function getAllSlugs(): string[] {
  return INSURANCE_CATEGORIES.map((c) => c.slug);
}

export function getAllEnSlugs(): string[] {
  return INSURANCE_CATEGORIES.map((c) => c.enSlug);
}

export function getEnSlug(deSlug: string): string {
  return SERVICE_SLUG_DE_TO_EN[deSlug] ?? deSlug;
}
export function getDeSlug(enSlug: string): string {
  return EN_TO_DE[enSlug] ?? enSlug;
}

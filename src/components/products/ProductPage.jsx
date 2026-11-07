'use client';

import PageHero from '../PageHero';
import { useLocalized } from '@/i18n/LanguageProvider';
import { PRODUCTS_BN } from '@/i18n/bn/products';

function ProductLineIcon({ name }) {
  const icons = {
    academic: <path d="M3 7.5 12 4l9 3.5-9 3.5L3 7.5Zm3 2.2v4.1c0 1.3 2.7 2.7 6 2.7s6-1.4 6-2.7V9.7" />,
    exam: <path d="M8 3h8l4 4v14H8zM16 3v4h4M10 12h6M10 16h6M10 8h2" />,
    fee: <path d="M12 3v18M16.5 7.5c0-1.7-1.8-3-4.5-3s-4.5 1.3-4.5 3 1.8 3 4.5 3 4.5 1.3 4.5 3-1.8 3-4.5 3-4.5-1.3-4.5-3" />,
    library: <path d="M5 5h11a2 2 0 0 1 2 2v12H7a2 2 0 0 0-2 2V5Zm0 0v16m4-11h5m-5 4h5" />,
    transport: <path d="M5 16V8l2-3h10l2 3v8M7 16h10M8 19a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />,
    sms: <path d="M4 6h16v10H7l-3 3V6Zm3 4h10m-10 3h7" />,
    accounting: <path d="M6 4h12v16H6zM9 8h6M9 12h6M9 16h3" />,
    user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />,
    hr: <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 10v-2a4 4 0 0 0-3-3.9M15 5.2a3 3 0 0 1 0 5.6" />,
    hostel: <path d="M4 20h16M6 20V8l6-4 6 4v12M9 12h1m4 0h1m-6 4h1m4 0h1" />,
    analytics: <path d="M5 19V9m7 10V5m7 14v-7M3 19h18" />,
    inventory: <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4" />,
    attendance: <path d="M8 3v3M16 3v3M4 9h16M5 6h14v14H5zM9 14l2 2 4-4" />,
    payroll: <path d="M7 4h10v16H7zM9 8h6M9 12h6M9 16h4" />,
    profile: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6 9v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />,
    appraisal: <path d="M12 17.5 6.1 20l1.1-6.3L3 9.6l6.4-.9L12 3l2.6 5.7 6.4.9-4.2 4.1 1.1 6.3z" />,
    broadcast: <path d="M4 12a8 8 0 0 1 8-8m0 16a8 8 0 0 0 8-8M8 12a4 4 0 0 1 4-4m0 8a4 4 0 0 0 4-4M12 12h.01" />,
    contact: <path d="M7 5h10v14H7zM9 9h6M9 13h6M9 17h4" />,
    event: <path d="M8 3v3M16 3v3M4 9h16M5 6h14v14H5zM9 13h6" />,
    member: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 1a2.5 2.5 0 1 0 0-5M3.5 21a5.5 5.5 0 0 1 11 0M15.5 21a4.5 4.5 0 0 0-3-4.2" />,
    poll: <path d="M5 19V9m5 10V5m5 14v-7m5 7V3" />,
    fundraising: <path d="M12 21s-6.5-4.3-8.5-8.4C2 9.8 3.6 6 7.3 6c2 0 3.1 1.1 4.7 3 1.6-1.9 2.7-3 4.7-3 3.7 0 5.3 3.8 3.8 6.6C18.5 16.7 12 21 12 21Z" />,
    budget: <path d="M4 19h16M6 16l3-4 3 2 5-6" />,
    agm: <path d="M4 20h16M6 20V8l6-4 6 4v12M9 12h6M9 16h6" />,
    document: <path d="M8 3h8l4 4v14H8zM16 3v4h4M10 12h6M10 16h4" />,
    website: <path d="M3 5h18v14H3zM3 9h18M8 5v14M13 9h5M13 13h5" />,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name] ?? icons.analytics}
    </svg>
  );
}

function ModuleCard({ icon, name, description }) {
  return (
    <article className="prod-module-card">
      <div className="prod-module-meta">
        <div className="prod-module-head">
          <div className="prod-module-icon">
            <ProductLineIcon name={icon} />
          </div>
          <h3 className="prod-module-name">{name}</h3>
        </div>
        <div className="prod-module-divider" />
        <p className="prod-module-desc">{description}</p>
      </div>
    </article>
  );
}

const NO_OVERLAY = {};

export default function ProductPage({ data: englishData }) {
  const data = useLocalized(englishData, PRODUCTS_BN[englishData.slug] ?? NO_OVERLAY);
  const { hero, intro, modules = [] } = data;
  const colorClass = `prod-color-${hero.color || 'blue'}`;

  return (
    <div className={`prod-page ${colorClass}`}>
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        theme="blue"
        compact
      />

      <section className="prod-system-section">
        <div className="container">
          {intro && (
            <section className="prod-intro-block">
              <h2 className="prod-intro-title">{intro.title}</h2>
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="prod-intro-text">{paragraph}</p>
              ))}
            </section>
          )}

          <div className="prod-module-grid-clean">
            {modules.map((module) => (
              <ModuleCard key={module.name} {...module} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

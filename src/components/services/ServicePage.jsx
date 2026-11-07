'use client';

import { useEffect, useRef } from 'react';
import PageHero from '../PageHero';
import { useLocalized } from '@/i18n/LanguageProvider';
import { SERVICES_BN, SERVICE_PAGE_UI } from '@/i18n/bn/services';

function ServiceVisual({ theme, side = 'left', ui }) {
  if (theme === 'software') {
    return (
      <div className={`svc-story-visual svc-story-visual-software svc-story-${side}`} aria-hidden="true">
        <div className="svc-window-card">
          <div className="svc-window-bar"><span /><span /><span /></div>
          <div className="svc-window-body">
            <div className="svc-code-row long" />
            <div className="svc-code-row mid" />
            <div className="svc-code-row short" />
            <div className="svc-code-row long" />
          </div>
        </div>
        <div className="svc-floating-note svc-note-a">{ui.secureBuild}</div>
        <div className="svc-floating-note svc-note-b">{ui.agileSprint}</div>
      </div>
    );
  }

  if (theme === 'mobile') {
    return (
      <div className={`svc-story-visual svc-story-visual-mobile svc-story-${side}`} aria-hidden="true">
        <div className="svc-phone-stack">
          <div className="svc-phone-card svc-phone-back" />
          <div className="svc-phone-card svc-phone-front">
            <div className="svc-phone-notch" />
            <div className="svc-phone-screen">
              <div className="svc-phone-header" />
              <div className="svc-phone-tile" />
              <div className="svc-phone-tile" />
              <div className="svc-phone-tile small" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'webapp') {
    return (
      <div className={`svc-story-visual svc-story-visual-webapp svc-story-${side}`} aria-hidden="true">
        <div className="svc-browser-card">
          <div className="svc-window-bar"><span /><span /><span /></div>
          <div className="svc-browser-layout">
            <div className="svc-browser-sidebar" />
            <div className="svc-browser-main">
              <div className="svc-browser-panels">
                <div />
                <div />
                <div />
              </div>
              <div className="svc-browser-chart" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'sms') {
    return (
      <div className={`svc-story-visual svc-story-visual-sms svc-story-${side}`} aria-hidden="true">
        <div className="svc-sms-board">
          <div className="svc-sms-bubble left" />
          <div className="svc-sms-bubble right" />
          <div className="svc-sms-bubble left wide" />
        </div>
      </div>
    );
  }

  if (theme === 'hosting') {
    return (
      <div className={`svc-story-visual svc-story-visual-hosting svc-story-${side}`} aria-hidden="true">
        <div className="svc-hosting-shell">
          <div className="svc-domain-pill">yourdomain.com</div>
          <div className="svc-server-column">
            <div className="svc-server-rack" />
            <div className="svc-server-rack" />
            <div className="svc-server-rack" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function StorySection({ section, theme, ui, reverse = false }) {
  return (
    <section className="svc-section">
      <div className={`container svc-story-grid${reverse ? ' is-reverse' : ''}`}>
        <div className="svc-story-media animate-on-scroll">
          <ServiceVisual theme={theme} side={reverse ? 'right' : 'left'} ui={ui} />
        </div>
        <div className="svc-story-copy animate-on-scroll">
          <span className="svc-section-kicker">{section.label}</span>
          <h2 className="svc-section-title">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="svc-section-text">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftwareFeatureTree({ features }) {
  return (
    <div className="svc-tree-grid">
      {features.map((feature) => (
        <article key={feature.title} className="svc-tree-card">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

function MobileFeatureNodes({ title, features, ui }) {
  const topRow = features.slice(0, 3);
  const bottomRow = features.slice(3, 6);

  return (
    <div className="svc-mobile-feature-layout">
      <div className="svc-mobile-feature-row">
        {topRow.map((feature) => (
          <article key={feature.title} className="svc-mobile-hex-card">
            <div className="svc-mobile-hex-inner">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="svc-mobile-feature-core">
        <div className="svc-mobile-core-panel">
          <div className="svc-mobile-core-copy">
            <span>{ui.mobileApp}</span>
            <strong>{title}</strong>
          </div>
          <div className="svc-mobile-core-device">
            <div className="svc-mobile-core-phone">
              <div className="svc-mobile-core-notch" />
              <div className="svc-mobile-core-screen">
                <div className="svc-mobile-core-bar" />
                <div className="svc-mobile-core-card" />
                <div className="svc-mobile-core-card small" />
                <div className="svc-mobile-core-card" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="svc-mobile-feature-row svc-mobile-feature-row-bottom">
        {bottomRow.map((feature) => (
          <article key={feature.title} className="svc-mobile-hex-card">
            <div className="svc-mobile-hex-inner">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function WebFeatureFlow({ features }) {
  return (
    <div className="svc-web-flow">
      {features.map((feature, index) => (
        <article key={feature.title} className="svc-web-flow-card">
          <span className="svc-web-flow-step">{String(index + 1).padStart(2, '0')}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

function SmsFeatureCards({ features }) {
  return (
    <div className="svc-sms-card-grid">
      {features.map((feature) => (
        <article key={feature.title} className="svc-sms-card">
          <div className="svc-sms-card-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

function HostingChecklist({ features }) {
  return (
    <div className="svc-hosting-list">
      {features.map((feature, index) => (
        <article key={feature.title} className="svc-hosting-item">
          <div className="svc-hosting-count">{String(index + 1).padStart(2, '0')}</div>
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function FeatureSection({ data, ui }) {
  const { featureSectionTitle, featureSectionLabel, featureStyle, features, headline } = data;

  return (
    <section className="svc-section svc-section-features">
      <div className="container">
        <div className="svc-section-head animate-on-scroll">
          <span className="svc-section-kicker">{featureSectionLabel}</span>
          <h2 className="svc-section-title">{featureSectionTitle}</h2>
        </div>

        <div className="animate-on-scroll">
          {featureStyle === 'mobile-nodes' && <MobileFeatureNodes title={headline} features={features} ui={ui} />}
          {featureStyle === 'web-flow' && <WebFeatureFlow features={features} />}
          {featureStyle === 'sms-cards' && <SmsFeatureCards features={features} />}
          {featureStyle === 'hosting-checklist' && <HostingChecklist features={features} />}
          {featureStyle === 'tree-cards' && <SoftwareFeatureTree features={features} />}
        </div>
      </div>
    </section>
  );
}

const NO_OVERLAY = {};

export default function ServicePage({ data: englishData }) {
  const data = useLocalized(englishData, SERVICES_BN[englishData.slug] ?? NO_OVERLAY);
  const ui = useLocalized(SERVICE_PAGE_UI.en, SERVICE_PAGE_UI.bn);
  const { submenuName, shortDescription, theme, introSection, supportSection } = data;
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.12 });

    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`service-redesign-page theme-${theme}`} ref={ref}>
      <PageHero title={submenuName} subtitle={shortDescription} theme="teal" compact />

      <StorySection section={introSection} theme={theme} ui={ui} />
      <FeatureSection data={data} ui={ui} />
      <StorySection section={supportSection} theme={theme} ui={ui} reverse />
    </div>
  );
}

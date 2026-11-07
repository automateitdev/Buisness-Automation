'use client';

import Link from 'next/link';
import PageHero from './PageHero';
import { ROUTE_UI_EN } from './routeUi';
import { ROUTE_UI_BN } from '@/i18n/bn/routeUi';
import { useLocalized } from '@/i18n/LanguageProvider';
import { useLocalizedLinks } from '@/lib/localizedLinks';

export default function RoutePageTemplate({
  bn,
  relatedLinks: relatedLinksProp = [],
  ...props
}) {
  const ui = useLocalized(ROUTE_UI_EN, ROUTE_UI_BN);
  const content = useLocalized(props, bn);
  const relatedLinks = useLocalizedLinks(relatedLinksProp);
  const {
    title,
    summary,
    introTitle,
    introText = [],
    highlights = [],
    detailCards = [],
    pillars = [],
    ctaTitle,
    ctaText,
  } = content;

  return (
    <>
      <PageHero title={title} subtitle={summary} theme="blue" compact />

      <section className="route-content">
        <div className="container">
          <div className="route-main-grid">
            <div className="route-illustration-panel">
              <div className="route-illustration-shell">
                <div className="route-illustration-orb"></div>
                <div className="route-illustration-device">
                  <div className="route-illustration-device-bar"></div>
                  <div className="route-illustration-device-block"></div>
                  <div className="route-illustration-device-line"></div>
                  <div className="route-illustration-device-line short"></div>
                </div>
              </div>
            </div>

            <div className="route-copy-panel">
              <h2>{introTitle}</h2>
              {introText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {highlights.length > 0 && (
                <div className="route-highlight-list">
                  {highlights.map((item) => (
                    <div key={item} className="route-highlight-item">
                      <span className="route-highlight-mark"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {detailCards.length > 0 && (
            <div className="route-card-grid">
              {detailCards.map((card) => (
                <article key={card.title} className="route-card">
                  <div className="route-card-bar"></div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          )}

          {pillars.length > 0 && (
            <section className="route-pillars">
              <div className="section-header">
                <span className="section-label">{ui.keyFocus}</span>
                <h2 className="section-h2">{ui.builtAround}</h2>
              </div>
              <div className="route-pillar-grid">
                {pillars.map((pillar) => (
                  <div key={pillar} className="route-pillar">
                    <span className="route-pillar-count"></span>
                    <p>{pillar}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="route-cta">
            <div>
              <span className="section-label">{ui.nextStep}</span>
              <h2>{ctaTitle}</h2>
              <p>{ctaText}</p>
            </div>
            <div className="route-cta-actions">
              <Link href="/contact" className="btn-primary">{ui.contactUs}</Link>
            </div>
          </section>

          {relatedLinks.length > 0 && (
            <section className="route-related">
              <div className="section-header">
                <span className="section-label">{ui.exploreMore}</span>
                <h2 className="section-h2">{ui.relatedPages}</h2>
              </div>
              <div className="route-related-grid">
                {relatedLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="route-related-card">
                    <h3>{item.label}</h3>
                    <p>{item.description}</p>
                    <span>{ui.openPage}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}

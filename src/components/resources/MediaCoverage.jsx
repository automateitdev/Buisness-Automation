'use client';

import { useState } from 'react';
import { mediaCoverageData } from './resourcesData';
import { useLocalized } from '@/i18n/LanguageProvider';
import { RESOURCES_BN, RESOURCES_UI_BN } from '@/i18n/bn/resources';
import { RESOURCES_UI_EN } from './resourcesUi';
import PageHero from '../PageHero';

const INITIAL_COUNT = 4;

const TYPE_STYLES = {
  'Feature Article': { bg: '#eff6ff', color: '#1d4ed8', icon: '📰' },
  'Interview':       { bg: '#f0fdf4', color: '#15803d', icon: '🎙️' },
  'Award':           { bg: '#fef3c7', color: '#92400e', icon: '🏆' },
  'Speaker':         { bg: '#f5f3ff', color: '#6d28d9', icon: '🎤' },
  'Press Release':   { bg: '#fff1f2', color: '#be123c', icon: '📢' },
};

function CoverageCard({ outlet, type, typeKey, title, date, excerpt, link, index, openLabel }) {
  const ts = TYPE_STYLES[typeKey] || { bg: '#f0f6ff', color: '#0057A8', icon: '📄' };
  return (
    <article className="media-card blog-card-animated" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="media-card-accent-bar" />
      <div className="media-card-body">
        <div className="media-card-header">
          <div className="media-outlet-wrap">
            <div className="media-outlet-icon">{ts.icon}</div>
            <span className="media-outlet">{outlet}</span>
          </div>
          <span className="media-type-badge" style={{ background: ts.bg, color: ts.color }}>
            {type}
          </span>
        </div>
        <h3 className="media-card-title">{title}</h3>
        <p className="media-card-excerpt">{excerpt}</p>
        <div className="media-card-footer">
          <span className="media-date">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            {date}
          </span>
          <a href={link} target="_blank" rel="noreferrer" className="media-read-more">
            {openLabel}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function MilestoneTimeline({ milestones }) {
  return (
    <div className="media-timeline">
      {milestones.map((m, i) => (
        <div key={m.year} className="media-timeline-item" style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="media-timeline-year">{m.year}</div>
          <div className="media-timeline-line" />
          <div className="media-timeline-content">
            <p>{m.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MediaCoverage() {
  const d = useLocalized(mediaCoverageData, RESOURCES_BN.mediaCoverage);
  const ui = useLocalized(RESOURCES_UI_EN, RESOURCES_UI_BN);
  const { hero, featured, milestones } = d;
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? featured : featured.slice(0, INITIAL_COUNT);
  const hasMore = featured.length > INITIAL_COUNT && !showAll;

  return (
    <div className="resource-clean-page media-page">

      <PageHero title={hero.title} subtitle={hero.subtitle} theme="violet" compact />


      {/* ── Coverage Cards ── */}
      <section className="resource-clean-section">
        <div className="container">
          <div className="media-section-head">
            <h2 className="media-section-h2">{ui.coverage}</h2>
          </div>
          <div className="resource-clean-grid media-cards-grid">
            {visibleItems.map((item, index) => (
              <CoverageCard key={mediaCoverageData.featured[index].link} {...item} typeKey={mediaCoverageData.featured[index].type} openLabel={ui.openArticle} index={index} />
            ))}
          </div>
          {hasMore && (
            <div className="resource-see-more-wrap">
              <button
                className="resource-see-more-btn"
                type="button"
                onClick={() => setShowAll(true)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                {ui.seeMore}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Milestones ── */}
      {milestones && milestones.length > 0 && (
        <section className="media-milestones-section">
          <div className="container">
            <div className="media-section-head">
              <div className="media-section-label">{ui.ourJourney}</div>
              <h2 className="media-section-h2">{ui.companyMilestones}</h2>
            </div>
            <MilestoneTimeline milestones={milestones} />
          </div>
        </section>
      )}

    </div>
  );
}

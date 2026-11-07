'use client';

import { useState } from 'react';
import { testimonialsData } from './resourcesData';
import { useLocalized } from '@/i18n/LanguageProvider';
import { RESOURCES_BN, RESOURCES_UI_BN } from '@/i18n/bn/resources';
import { RESOURCES_UI_EN } from './resourcesUi';
import PageHero from '../PageHero';

const INITIAL_TESTIMONIAL_COUNT = 4;

function StarRating({ rating }) {
  return (
    <div className="testi-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? '#f59e0b' : '#e2e8f0'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TextTestimonialCard({ name, role, organization, rating, text, product, index }) {
  return (
    <article
      className="testi-text-card blog-card-animated"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="testi-text-card-top">
        <StarRating rating={rating} />
        <span className="testi-product-tag">{product}</span>
      </div>
      <blockquote className="testi-quote">{`"${text}"`}</blockquote>
      <div className="testi-author">
        <div className="testi-author-avatar">
          {name.split(' ').slice(0, 2).map(w => w[0]).join('')}
        </div>
        <div className="testi-author-info">
          <strong>{name}</strong>
          <span>{role} · {organization}</span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const d = useLocalized(testimonialsData, RESOURCES_BN.testimonials);
  const ui = useLocalized(RESOURCES_UI_EN, RESOURCES_UI_BN);
  const { hero, intro, testimonials } = d;
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, INITIAL_TESTIMONIAL_COUNT);
  const hasMore = testimonials.length > INITIAL_TESTIMONIAL_COUNT && !showAll;

  return (
    <div className="resource-clean-page testi-page">

      <PageHero title={hero.title} subtitle={hero.subtitle} theme="amber" compact />

      {/* ── Written Testimonials ── */}
      <section className="testi-written-section">
        <div className="container">
          <div className="testi-section-head">
            <div className="testi-section-label">{ui.clientReviews}</div>
            <h2 className="testi-section-h2">{intro.heading}</h2>
          </div>
          <div className="testi-text-grid">
            {visibleTestimonials.map((t, index) => (
              <TextTestimonialCard key={testimonialsData.testimonials[index].name} {...t} index={index} />
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

    </div>
  );
}

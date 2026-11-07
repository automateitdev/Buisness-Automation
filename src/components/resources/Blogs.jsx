'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogsData } from './resourcesData';
import { useLocalized } from '@/i18n/LanguageProvider';
import { RESOURCES_BN, RESOURCES_UI_BN } from '@/i18n/bn/resources';
import { RESOURCES_UI_EN } from './resourcesUi';
import PageHero from '../PageHero';

const INITIAL_POST_COUNT = 6;

const CATEGORY_COLORS = {
  Product: { bg: '#eff6ff', color: '#1d4ed8', dot: '#3b82f6' },
  Implementation: { bg: '#f0fdf4', color: '#15803d', dot: '#22c55e' },
  Industry: { bg: '#fef3c7', color: '#92400e', dot: '#f59e0b' },
  Technology: { bg: '#f5f3ff', color: '#6d28d9', dot: '#8b5cf6' },
  Business: { bg: '#fff1f2', color: '#be123c', dot: '#f43f5e' },
};

function BlogCard({ category, colorKey, title, excerpt, readTime, date, slug, index, readLabel }) {
  const cat = CATEGORY_COLORS[colorKey] || { bg: '#f0f6ff', color: '#0057A8', dot: '#0096D6' };
  return (
    <article
      className="blog-card blog-card-animated"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="blog-card-inner">
        <div className="blog-card-top">
          <span className="blog-category-pill" style={{ background: cat.bg, color: cat.color }}>
            <span className="blog-category-dot" style={{ background: cat.dot }} />
            {category}
          </span>
          <span className="blog-date-chip">{date}</span>
        </div>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-footer">
          <span className="blog-read-time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {readTime}
          </span>
          <Link href={`/resources/blogs/${slug}`} className="blog-read-link">
            {readLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Blogs() {
  const d = useLocalized(blogsData, RESOURCES_BN.blogs);
  const ui = useLocalized(RESOURCES_UI_EN, RESOURCES_UI_BN);
  const { hero, featuredPosts } = d;
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? featuredPosts : featuredPosts.slice(0, INITIAL_POST_COUNT);
  const hasMore = featuredPosts.length > INITIAL_POST_COUNT && !showAll;

  return (
    <div className="resource-clean-page blogs-page">

      <PageHero title={hero.title} subtitle={hero.subtitle} theme="blue" compact />

      {/* ── Grid ── */}
      <section className="blogs-grid-section">
        <div className="container">
          <div className="blogs-section-head">
            <div className="blogs-section-label">{ui.latestArticles}</div>
            <h2 className="blogs-section-h2">{ui.browseBlogs}</h2>
          </div>
          <div className="resource-clean-grid blog-posts-grid">
            {visiblePosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} colorKey={blogsData.featuredPosts[index].category} readLabel={ui.readArticle} index={index} />
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

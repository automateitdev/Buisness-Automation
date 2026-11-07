'use client';

import Image from 'next/image';
import { useState } from 'react';
import { testimonialsData as d } from './resourcesData';
import PageHero from '../PageHero';

const INITIAL_TESTIMONIAL_COUNT = 4;

function getYoutubeVideoId(url) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([^&?/]+)/);
  return match?.[1] ?? '';
}

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

function VideoTestimonialCard({ title, client, youtubeUrl, index }) {
  const videoId = getYoutubeVideoId(youtubeUrl);
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  return (
    <a
      className="resource-video-card testi-video-card"
      href={youtubeUrl}
      target="_blank"
      rel="noreferrer"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="resource-video-thumb-wrap">
        {thumbnail
          ? (
            <Image
              src={thumbnail}
              alt={title}
              className="resource-video-thumb"
              width={480}
              height={360}
              unoptimized
            />
          )
          : <div className="resource-video-thumb resource-video-thumb-fallback" />}
        <span className="testi-play-btn" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </span>
        <div className="testi-video-overlay">
          <span className="testi-client-badge">{client}</span>
        </div>
      </div>
      <div className="resource-video-copy">
        <span className="resource-video-tag">Client Testimonial</span>
        <h3>{title}</h3>
        <p className="testi-yt-label">
          <svg width="14" height="10" viewBox="0 0 20 14" fill="#E8431A"><path d="M19.582 2.186A2.506 2.506 0 0017.818.413C16.254 0 10 0 10 0S3.746 0 2.182.413A2.506 2.506 0 00.418 2.186C0 3.76 0 7 0 7s0 3.24.418 4.814a2.506 2.506 0 001.764 1.773C3.746 14 10 14 10 14s6.254 0 7.818-.413a2.506 2.506 0 001.764-1.773C20 10.24 20 7 20 7s0-3.24-.418-4.814zM8 10V4l5.2 3L8 10z"/></svg>
          Watch on YouTube
        </p>
      </div>
    </a>
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
      <blockquote className="testi-quote">"{text}"</blockquote>
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
  const { hero, intro, videos, testimonials } = d;
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, INITIAL_TESTIMONIAL_COUNT);
  const hasMore = testimonials.length > INITIAL_TESTIMONIAL_COUNT && !showAll;

  return (
    <div className="resource-clean-page testi-page">

      <PageHero title={hero.title} subtitle={hero.subtitle} theme="amber" compact />

      {/* ── Video Testimonials ── */}
      {videos && videos.length > 0 && (
        <section className="testi-videos-section">
          <div className="container">
            <div className="testi-section-head">
              <div className="testi-section-label">Client Videos</div>
              <h2 className="testi-section-h2">Hear from Our Clients</h2>
            </div>
            <div className="resource-clean-grid resource-video-grid">
              {videos.map((video, index) => (
                <VideoTestimonialCard key={video.title} {...video} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Written Testimonials ── */}
      <section className="testi-written-section">
        <div className="container">
          <div className="testi-section-head">
            <div className="testi-section-label">Client Reviews</div>
            <h2 className="testi-section-h2">{intro.heading}</h2>
          </div>
          {testimonials.length === 0 ? (
            <p className="resource-empty-note">
              We are collecting written and on-camera stories from the institutions using our
              systems, and will publish them here with their permission. Want to speak to a
              reference institution before you decide? Ask us and we will arrange it.
            </p>
          ) : (
            <div className="testi-text-grid">
              {visibleTestimonials.map((t, index) => (
                <TextTestimonialCard key={t.name} {...t} index={index} />
              ))}
            </div>
          )}
          {hasMore && (
            <div className="resource-see-more-wrap">
              <button
                className="resource-see-more-btn"
                type="button"
                onClick={() => setShowAll(true)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                See More
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

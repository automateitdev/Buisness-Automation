'use client';

import Image from 'next/image';
import { useState } from 'react';
import { tutorialsData } from './resourcesData';
import { useLocalized } from '@/i18n/LanguageProvider';
import { RESOURCES_BN, RESOURCES_UI_BN } from '@/i18n/bn/resources';
import { RESOURCES_UI_EN } from './resourcesUi';
import PageHero from '../PageHero';

const INITIAL_VIDEO_COUNT = 6;

function getYoutubeVideoId(url) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([^&?/]+)/);
  return match?.[1] ?? '';
}

const CATEGORY_COLORS = {
  'Academic ERP': { from: '#0057A8', to: '#0096D6' },
  Accounting: { from: '#16a34a', to: '#22c55e' },
  'Hospital ERP': { from: '#dc2626', to: '#f87171' },
  'HR and Payroll': { from: '#7c3aed', to: '#a78bfa' },
  'SMS System': { from: '#d97706', to: '#fbbf24' },
  Reporting: { from: '#0891b2', to: '#22d3ee' },
  Dealership: { from: '#0f766e', to: '#2dd4bf' },
};

function TutorialVideoCard({ title, category, colorKey, duration, youtubeUrl, index, watchLabel }) {
  const videoId = getYoutubeVideoId(youtubeUrl);
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
  const cat = CATEGORY_COLORS[colorKey] || { from: '#0057A8', to: '#0096D6' };

  return (
    <a
      className="tut-video-card tut-video-card-upgraded"
      href={youtubeUrl}
      target="_blank"
      rel="noreferrer"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="tut-video-thumb-wrap">
        {thumbnail
          ? (
            <Image
              src={thumbnail}
              alt={title}
              className="tut-video-thumb"
              width={480}
              height={360}
              unoptimized
            />
          )
          : <div className="tut-video-thumb tut-video-thumb-fallback" />}
        <div className="tut-play-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </div>
        <div className="tut-duration-chip">{duration}</div>
      </div>
      <div className="tut-video-body">
        <span
          className="tut-video-category"
          style={{ background: `linear-gradient(135deg, ${cat.from}, ${cat.to})`, color: '#fff', borderRadius: '999px', padding: '4px 12px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em' }}
        >
          {category}
        </span>
        <h3 className="tut-video-title">{title}</h3>
        <div className="tut-video-meta">
          <span className="tut-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            {duration}
          </span>
          <span className="tut-meta-item tut-yt-badge">
            <svg width="13" height="10" viewBox="0 0 20 14" fill="currentColor"><path d="M19.582 2.186A2.506 2.506 0 0017.818.413C16.254 0 10 0 10 0S3.746 0 2.182.413A2.506 2.506 0 00.418 2.186C0 3.76 0 7 0 7s0 3.24.418 4.814a2.506 2.506 0 001.764 1.773C3.746 14 10 14 10 14s6.254 0 7.818-.413a2.506 2.506 0 001.764-1.773C20 10.24 20 7 20 7s0-3.24-.418-4.814zM8 10V4l5.2 3L8 10z" /></svg>
            {watchLabel}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Tutorials() {
  const d = useLocalized(tutorialsData, RESOURCES_BN.tutorials);
  const ui = useLocalized(RESOURCES_UI_EN, RESOURCES_UI_BN);
  const { hero, videos } = d;
  const [showAll, setShowAll] = useState(false);
  const visibleVideos = showAll ? videos : videos.slice(0, INITIAL_VIDEO_COUNT);
  const hasMore = videos.length > INITIAL_VIDEO_COUNT && !showAll;

  return (
    <div className="resource-clean-page tutorials-page">
      <PageHero title={hero.title} subtitle={hero.subtitle} theme="violet" compact />

      <section className="resource-clean-section">
        <div className="container">
          <div className="resource-clean-grid">
            {visibleVideos.map((video, index) => (
              <TutorialVideoCard key={video.youtubeUrl + index} {...video} colorKey={tutorialsData.videos[index].category} watchLabel={ui.watchOnYoutube} index={index} />
            ))}
          </div>
          {hasMore && (
            <div className="resource-see-more-wrap">
              <button
                className="resource-see-more-btn"
                type="button"
                onClick={() => setShowAll(true)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                {ui.seeMore}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

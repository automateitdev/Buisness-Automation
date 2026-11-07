'use client';

import { useState } from 'react';
import PageHero from '../PageHero';
import { ABOUT_DETAIL_PAGES } from '@/data/siteContent';
import { ABOUT_DETAIL_PAGES_BN } from '@/i18n/bn/siteContent';
import { ABOUT_UI_EN } from './aboutUi';
import { ABOUT_UI_BN } from '@/i18n/bn/about';
import { useLocalized } from '@/i18n/LanguageProvider';

function ProfileAvatar({ member }) {
  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return <div className="about-profile-avatar-fallback">{initials}</div>;
}

export default function OurTeam() {
  const teamPage = useLocalized(ABOUT_DETAIL_PAGES['our-team'], ABOUT_DETAIL_PAGES_BN['our-team']);
  const t = useLocalized(ABOUT_UI_EN, ABOUT_UI_BN).ourTeam;
  const [selectedMemberId, setSelectedMemberId] = useState(teamPage.teamMembers?.[0]?.id ?? null);
  const [expandedMemberId, setExpandedMemberId] = useState(null);
  const primaryMember = teamPage.teamMembers?.find((member) => member.id === selectedMemberId) ?? teamPage.teamMembers?.[0] ?? null;
  const isExpanded = primaryMember ? expandedMemberId === primaryMember.id : false;
  const visibleSpeech = primaryMember
    ? isExpanded
      ? primaryMember.fullSpeech ?? primaryMember.speech
      : primaryMember.speech
    : '';

  function handleMemberSelect(memberId) {
    setSelectedMemberId(memberId);
    setExpandedMemberId(null);
  }

  return (
    <div className="ot-page">
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        theme="navy"
        compact
      />

      {teamPage.teamMembers?.length > 0 && primaryMember && (
        <section className="about-detail-section about-detail-team-section">
          <div className="container">
            <div className="about-detail-section-header">
              <h2 className="about-detail-heading">{teamPage.teamSectionTitle}</h2>
              <p className="about-detail-text about-team-section-text">{teamPage.teamSectionDescription}</p>
            </div>

            <div className="about-team-layout">
              <div className="about-profile-grid" role="tablist" aria-label={t.leadershipAria}>
                {teamPage.teamMembers.map((member) => (
                  <button
                    key={member.id}
                    type="button"
                    className={`about-profile-button${primaryMember.id === member.id ? ' active' : ''}`}
                    onClick={() => handleMemberSelect(member.id)}
                  >
                    <span className="about-profile-avatar">
                      <ProfileAvatar member={member} />
                    </span>
                    <span className="about-profile-meta">
                      <span className="about-profile-name">{member.name}</span>
                      <span className="about-profile-position">{member.position}</span>
                    </span>
                  </button>
                ))}
              </div>

              <article key={`${primaryMember.id}-${isExpanded ? 'open' : 'closed'}`} className="about-speech-card about-speech-card-animated">
                <div className="about-speech-visual">
                  <div className="about-speech-avatar about-speech-avatar-large">
                    <ProfileAvatar member={primaryMember} />
                  </div>
                </div>
                <div className="about-speech-header">
                  <div>
                    <h3>{primaryMember.name}</h3>
                    <p>{primaryMember.position}</p>
                  </div>
                </div>
                {visibleSpeech && <blockquote className="about-speech-quote">{`"${visibleSpeech}"`}</blockquote>}
                {primaryMember.summary && <p className="about-speech-summary">{primaryMember.summary}</p>}
                {primaryMember.fullSpeech && primaryMember.fullSpeech !== primaryMember.speech && (
                  <button
                    type="button"
                    className="about-read-more-button"
                    onClick={() => setExpandedMemberId(isExpanded ? null : primaryMember.id)}
                  >
                    {isExpanded ? t.viewLess : t.viewMore}
                  </button>
                )}
              </article>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

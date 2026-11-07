'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ourCompanyData as ourCompanyEn } from '@/components/about/ourCompanyData';
import { useLocalized } from '@/i18n/LanguageProvider';
import { ABOUT_HOME_BN, HOME_BN } from '@/i18n/bn/home';
import { HOME_EN } from './homeUi';

export default function About() {
  const sectionRef = useRef(null);
  const ourCompanyData = useLocalized(ourCompanyEn, ABOUT_HOME_BN);
  const t = useLocalized(HOME_EN, HOME_BN).about;
  const description = ourCompanyData.intro.paragraphs.slice(0, 2);
  const featureCards = ourCompanyData.capabilities.slice(0, 4);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements?.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef} aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual animate-on-scroll" aria-hidden="true">
            <div className="about-home-visual">
              <div className="about-home-visual-card">
                <span className="about-home-chip">{t.chip}</span>
                <h3>{ourCompanyData.intro.heading}</h3>
                <div className="about-home-badges">
                  {ourCompanyData.hero.badges.map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>
              </div>
              <div className="about-home-feature-grid">
                {featureCards.map((item) => (
                  <div key={item.area} className="about-home-feature">
                    <strong>{item.area}</strong>
                    <p>{item.items[0]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="section-header left animate-on-scroll">
              <span className="section-label">{ourCompanyData.hero.eyebrow}</span>
              <h2 className="section-h2" id="about-heading">{ourCompanyData.intro.heading}</h2>
            </div>
            <p className="about-lead animate-on-scroll">{description[0]}</p>
            <p className="about-body animate-on-scroll">{description[1]}</p>
            <div className="feature-list home-about-feature-list">
              {ourCompanyData.whyUs.map((feature) => (
                <div key={feature.label} className="feature-item animate-on-scroll">
                  <div className="feature-icon">
                    <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="feature-text">{feature.stat} {feature.label} · {feature.description}</span>
                </div>
              ))}
            </div>
            <div className="about-ctas animate-on-scroll">
              <Link href="/aboutus/our-company" className="btn-secondary">{t.readMore}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

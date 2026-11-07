'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useLocalized } from '@/i18n/LanguageProvider';
import { HOME_BN } from '@/i18n/bn/home';
import { HOME_EN } from './homeUi';

export default function About() {
  const sectionRef = useRef(null);
  const t = useLocalized(HOME_EN, HOME_BN).about;

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
                <h3>{t.mission}</h3>
                <div className="about-home-badges">
                  {t.badges.map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>
              </div>
              <div className="about-home-feature-grid">
                {t.stats.map((item) => (
                  <div key={item.label} className="about-home-feature">
                    <strong className="about-home-stat">{item.value}</strong>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="section-header left animate-on-scroll">
              <span className="section-label">{t.eyebrow}</span>
              <h2 className="section-h2" id="about-heading">{t.heading}</h2>
            </div>
            <p className="about-lead animate-on-scroll">{t.paragraphs[0]}</p>
            {t.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph} className="about-body animate-on-scroll">{paragraph}</p>
            ))}
            <div className="about-ctas animate-on-scroll">
              <Link href="/aboutus/our-company" className="btn-secondary">{t.readMore}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

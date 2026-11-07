'use client';

import { useEffect, useRef } from 'react';
import { useLang, useLocalized } from '@/i18n/LanguageProvider';
import { HOME_BN } from '@/i18n/bn/home';
import { HOME_EN } from './homeUi';

function easeOutQuad(t) {
  return t * (2 - t);
}

export default function StatsBar() {
  const { lang } = useLang();
  const t = useLocalized(HOME_EN, HOME_BN).stats;
  const stats = t.items;
  const numberLocale = lang === 'bn' ? 'bn-BD' : 'en-US';
  const refs = useRef([]);
  const started = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((element) => revealObserver.observe(element));

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = refs.current.indexOf(entry.target);
        if (idx === -1 || started.current[idx]) return;
        started.current[idx] = true;
        const { target, suffix } = stats[idx];
        let startTime = null;
        const duration = 2000;

        const step = (ts) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          const value = Math.floor(easeOutQuad(progress) * target);
          if (entry.target) entry.target.textContent = value.toLocaleString(numberLocale) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    refs.current.forEach((element) => element && counterObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [stats, numberLocale]);

  return (
    <section className="home-trust-section" ref={sectionRef} aria-labelledby="trust-stats-heading" style={{ background: '#f8fafc', padding: '100px 0' }}>
      <div className="container">
        <div className="section-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-h2" id="trust-stats-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>{t.heading}</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>{t.sub}</p>
        </div>
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        {stats.map((item, index) => (
          <div 
            key={HOME_EN.stats.items[index].label}
            className="animate-on-scroll" 
            style={{ 
              background: '#fff', 
              borderRadius: '24px', 
              padding: '40px 24px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              boxShadow: '0 10px 40px -10px rgba(15,23,42,0.06)', 
              border: '1px solid #f1f5f9', 
              transition: 'transform 0.3s, box-shadow 0.3s' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(15,23,42,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(15,23,42,0.06)';
            }}
          >
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '18px', 
              background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#0284c7', 
              fontWeight: '800', 
              fontSize: '1.2rem', 
              marginBottom: '24px' 
            }}>
              {item.icon}
            </div>
            <span
              key={lang}
              ref={(element) => {
                refs.current[index] = element;
              }}
              style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a', lineHeight: '1', letterSpacing: '-0.03em' }}
            >
              {item.target.toLocaleString(numberLocale)}{item.suffix}
            </span>
            <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600', marginTop: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

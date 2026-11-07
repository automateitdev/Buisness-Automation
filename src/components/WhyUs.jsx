'use client';

import { useEffect, useRef } from 'react';
import { useLocalized } from '@/i18n/LanguageProvider';
import { HOME_BN } from '@/i18n/bn/home';
import { HOME_EN } from './homeUi';

export default function WhyUs() {
  const ref = useRef(null);

  const t = useLocalized(HOME_EN, HOME_BN).whyUs;
  const strengths = t.strengths;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    ref.current?.querySelectorAll('.animate-on-scroll').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="whyus-section whyus-section-refined" ref={ref} aria-labelledby="whyus-heading">
      <div className="container">
        <div className="whyus-layout-refined">
          <div className="whyus-intro-refined animate-on-scroll">
            <span className="section-label">{t.label}</span>
            <h2 className="section-h2" id="whyus-heading">{t.heading}</h2>
            <p className="section-sub whyus-sub-refined">
              {t.sub}
            </p>
          </div>

          <div className="whyus-grid-refined">
            {strengths.map((item, index) => (
              <article key={item.title} className="whyus-card-refined animate-on-scroll" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="whyus-card-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

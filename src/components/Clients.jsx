'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocalizedClients } from './OurClientPageClient';
import { CLIENTS_UI_EN } from './routeUi';
import { CLIENTS_UI_BN } from '@/i18n/bn/routeUi';
import { useLocalized } from '@/i18n/LanguageProvider';

export default function Clients() {
  const ref = useRef(null);
  const t = useLocalized(CLIENTS_UI_EN, CLIENTS_UI_BN);
  const clients = useLocalizedClients();

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
    <section id="clients" className="clients-section clients-section-refined" ref={ref} aria-labelledby="clients-heading">
      <div className="container">
        <div className="clients-hero-refined animate-on-scroll">
          <div className="clients-copy-refined">
            <span className="section-label">{t.label}</span>
            <h2 className="section-h2" id="clients-heading">{t.homeHeading}</h2>
            <p className="section-sub clients-sub-refined">
              {t.homeSub}
            </p>
          </div>
          <div className="clients-visual-refined" aria-hidden="true">
            <div className="clients-visual-cloud" />
            <div className="clients-visual-card">
              <div className="clients-visual-row clients-visual-row-lg" />
              <div className="clients-visual-row clients-visual-row-md" />
              <div className="clients-visual-grid">
                <span /><span /><span /><span />
              </div>
            </div>
          </div>
        </div>

        <div className="clients-logo-area animate-on-scroll home-clients-grid">
          {clients.slice(0, 12).map((client) => (
            <div key={client.name} className="clients-logo-pill home-clients-logo-pill">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="home-clients-logo-img" src={client.logo} alt="" loading="lazy" width="54" height="54" />
              <span>{client.name}</span>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll home-clients-actions">
          <Link href="/our-client" className="btn-secondary">{t.viewAll}</Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CLIENTS } from './OurClientPageClient';

export default function Clients() {
  const ref = useRef(null);

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
            <span className="section-label">Our Clients</span>
            <h2 className="section-h2" id="clients-heading">Meet our clients</h2>
            <p className="section-sub clients-sub-refined">
              Institutions across Bangladesh run admissions, attendance, fees, exams and guardian communication on our systems.
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

        {CLIENTS.length > 0 && (
          <div className="clients-logo-area animate-on-scroll home-clients-grid">
            {CLIENTS.slice(0, 12).map((client) => (
              <div key={client.name} className="clients-logo-pill home-clients-logo-pill">
                <span className="home-clients-logo-mark" style={{ background: client.color }}>{client.abbr}</span>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        )}

        <div className="animate-on-scroll home-clients-actions">
          <Link href="/our-client" className="btn-secondary">See the sectors we serve →</Link>
        </div>
      </div>
    </section>
  );
}

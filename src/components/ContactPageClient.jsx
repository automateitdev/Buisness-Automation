'use client';

import { useState } from 'react';
import PageHero from './PageHero';
import { useLocalized } from '../i18n/LanguageProvider';
import { CONTACT_BN } from '../i18n/bn/contact';

const CONTACT_EN = {
  title: 'Contact Us',
  subtitle: 'You can contact us at any time for support. We value our customers more than anything & put our best to provide you with the best quality support.',
  formHeading: 'Send Us a Message',
  successTitle: 'Message Sent!',
  successText: 'Thank you for reaching out. We will get back to you soon.',
  labels: { org: 'Organization Name', email: 'Email', phone: 'Phone Number', subject: 'Subject', message: 'Message' },
  placeholders: {
    org: 'Your organization or company name',
    email: 'your@email.com',
    phone: '+880 XXXXXXXXXX',
    subject: 'What is this about?',
    message: 'Write your message here...',
  },
  sending: 'Sending...',
  send: 'Send Message',
  headOffice: 'Head Office',
  phoneText: '09613-241234',
  address: 'House- 34/A, Road- 13/2, Block- K, South Banasree, Dhaka-1219',
  hours: 'Sun – Thu: 9:00 AM – 6:00 PM',
  mapTitle: 'Automate IT Limited — Head Office Location',
  mapPlace: 'South Banasree, Dhaka-1219',
  openMap: 'Open in Google Maps',
};

export default function ContactPageClient() {
  const t = useLocalized(CONTACT_EN, CONTACT_BN);
  const [form, setForm] = useState({
    org: '', email: '', phone: '', subject: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        theme="blue"
      />

      <section className="cp-form-section">
        <div className="container cp-form-grid">

          {/* Left: form */}
          <div className="cp-form-left">
            <h2 className="cp-form-heading">{t.formHeading}</h2>

            {sent ? (
              <div className="cp-success">
                <span className="cp-success-icon">✓</span>
                <div>
                  <strong>{t.successTitle}</strong>
                  <p>{t.successText}</p>
                </div>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit} noValidate>
                <div className="cp-form-group">
                  <label className="cp-label" htmlFor="org">{t.labels.org}</label>
                  <input
                    id="org" name="org" type="text"
                    className="cp-input" placeholder={t.placeholders.org}
                    value={form.org} onChange={handleChange} required
                  />
                </div>
                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="email">{t.labels.email}</label>
                    <input
                      id="email" name="email" type="email"
                      className="cp-input" placeholder={t.placeholders.email}
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="phone">{t.labels.phone}</label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="cp-input" placeholder={t.placeholders.phone}
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="cp-form-group">
                  <label className="cp-label" htmlFor="subject">{t.labels.subject}</label>
                  <input
                    id="subject" name="subject" type="text"
                    className="cp-input" placeholder={t.placeholders.subject}
                    value={form.subject} onChange={handleChange} required
                  />
                </div>
                <div className="cp-form-group">
                  <label className="cp-label" htmlFor="message">{t.labels.message}</label>
                  <textarea
                    id="message" name="message" rows={5}
                    className="cp-input cp-textarea" placeholder={t.placeholders.message}
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                <button type="submit" className="cp-submit" disabled={loading}>
                  {loading ? (
                    <><span className="cp-spinner" />{t.sending}</>
                  ) : (
                    <>{t.send} <span className="cp-arrow">→</span></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: single office + map */}
          <div className="cp-contact-info">
            {/* Head Office Card */}
            <div className="cp-office-card" style={{ marginBottom: 24 }}>
              <div className="cp-office-icon-wrap" style={{ background: '#0057A8' }}>
                <span className="cp-office-icon">🏢</span>
              </div>
              <div className="cp-office-body">
                <h3 className="cp-office-name">{t.headOffice}</h3>
                <ul className="cp-office-details">
                  <li>
                    <span className="cp-detail-icon">📞</span>
                    <a href="tel:09613241234" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {t.phoneText}
                    </a>
                  </li>
                  <li>
                    <span className="cp-detail-icon">✉</span>
                    <a href="mailto:info@automate.com.bd" style={{ color: 'inherit', textDecoration: 'none' }}>
                      info@automate.com.bd
                    </a>
                  </li>
                  <li>
                    <span className="cp-detail-icon">🌐</span>
                    <a href="https://automate.com.bd" target="_blank" rel="noopener noreferrer" style={{ color: '#0057A8', textDecoration: 'none' }}>
                      automate.com.bd
                    </a>
                  </li>
                  <li>
                    <span className="cp-detail-icon">📍</span>
                    <span>{t.address}</span>
                  </li>
                  <li>
                    <span className="cp-detail-icon">🕐</span>
                    <span>{t.hours}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Embedded Google Map — Dhaka, Bangladesh (current location) */}
            <div style={{
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,87,168,0.12)',
              border: '1.5px solid #dde4f0',
              width: '100%',
            }}>
              <iframe
                title={t.mapTitle}
                src="https://maps.google.com/maps?q=23.75582,90.440597&z=17&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                padding: '12px 16px',
                background: '#f0f4ff',
                fontSize: 13,
                color: '#444',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                📍 <strong>{t.mapPlace}</strong>
                &nbsp;—&nbsp;
                <a
                  href="https://maps.app.goo.gl/pFkFPns2sck1x5nH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0057A8', fontWeight: 600, textDecoration: 'none' }}
                >
                  {t.openMap} →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

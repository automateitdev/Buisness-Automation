'use client';

import { dealershipData } from './resourcesData';
import { useLocalized } from '@/i18n/LanguageProvider';
import { RESOURCES_BN, RESOURCES_UI_BN } from '@/i18n/bn/resources';
import { RESOURCES_UI_EN } from './resourcesUi';
import PageHero from '../PageHero';

function getYoutubeVideoId(url) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([^&?/]+)/);
  return match?.[1] ?? '';
}

function DealershipForm({ form }) {
  return (
    <form className="deal-form-card" id="dealership-form">
      <div className="deal-form-header-area">
        <div className="deal-form-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0057A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <div>
          <h2 className="deal-form-title">{form.heading}</h2>
          <p className="deal-form-desc">{form.description}</p>
        </div>
      </div>
      <div className="deal-form-grid">
        {form.fields.map((field) => (
          <label key={field.name} className="deal-form-field">
            <span>{field.label}</span>
            <input type={field.type} name={field.name} placeholder={field.placeholder} />
          </label>
        ))}
      </div>
      <div className="deal-form-stack">
        <label className="deal-form-field">
          <span>{form.interestLabel}</span>
          <select name="interestLevel" defaultValue={form.interestOptions[0]}>
            {form.interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="deal-form-field">
          <span>{form.messageLabel}</span>
          <textarea name="message" rows="5" placeholder={form.messagePlaceholder} />
        </label>
      </div>
      <button type="submit" className="deal-submit-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        {form.submitLabel}
      </button>
    </form>
  );
}

function BenefitCard({ icon, title, description, index }) {
  return (
    <div className="deal-benefit-card blog-card-animated" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="deal-benefit-icon">{icon}</div>
      <h3 className="deal-benefit-title">{title}</h3>
      <p className="deal-benefit-desc">{description}</p>
    </div>
  );
}

function TierCard({ name, requirements, benefits, highlight, popularLabel }) {
  return (
    <div className={`deal-tier-card${highlight ? ' deal-tier-highlighted' : ''}`}>
      {highlight && <div className="deal-tier-popular">{popularLabel}</div>}
      <div className="deal-tier-name">{name}</div>
      <div className="deal-tier-req">{requirements}</div>
      <ul className="deal-tier-benefits">
        {benefits.map((b) => (
          <li key={b}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ step, title, description, index }) {
  return (
    <div className="deal-process-step blog-card-animated" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="deal-process-num">{step}</div>
      <div className="deal-process-title">{title}</div>
      <div className="deal-process-desc">{description}</div>
    </div>
  );
}

export default function Dealership() {
  const d = useLocalized(dealershipData, RESOURCES_BN.dealership);
  const ui = useLocalized(RESOURCES_UI_EN, RESOURCES_UI_BN);
  const { hero, intro, heroVideo, form, benefits, tiers, process } = d;
  const videoId = getYoutubeVideoId(heroVideo.youtubeUrl);
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  return (
    <div className="resource-clean-page deal-page">

      <PageHero title={hero.title} subtitle={hero.subtitle} theme="teal" compact />

      {/* ── Intro ── */}
      <div className="deal-intro-strip">
        <div className="container deal-intro-inner">
          <div className="deal-intro-icon">🤝</div>
          <p className="deal-intro-text">{intro.heading}</p>
        </div>
      </div>

      {/* ── Benefits ── */}
      {benefits && (
        <section className="deal-benefits-section">
          <div className="container">
            <div className="deal-section-head">
              <div className="deal-section-label">{ui.partnershipBenefits}</div>
              <h2 className="deal-section-h2">{ui.whyPartner}</h2>
            </div>
            <div className="deal-benefits-grid">
              {benefits.map((b, i) => (
                <BenefitCard key={b.title} {...b} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Process ── */}
      {process && (
        <section className="deal-process-section">
          <div className="container">
            <div className="deal-section-head">
              <div className="deal-section-label">{ui.howItWorks}</div>
              <h2 className="deal-section-h2">{ui.onboardingProcess}</h2>
            </div>
            <div className="deal-process-steps">
              {process.map((step, i) => (
                <ProcessStep key={step.step} {...step} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Tiers ── */}
      {tiers && (
        <section className="deal-tiers-section">
          <div className="container">
            <div className="deal-section-head">
              <div className="deal-section-label">{ui.partnerTiers}</div>
              <h2 className="deal-section-h2">{ui.chooseLevel}</h2>
            </div>
            <div className="deal-tiers-grid">
              {tiers.map((t) => (
                <TierCard key={t.name} {...t} popularLabel={ui.mostPopular} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Application Form ── */}
      <section className="deal-form-section">
        <div className="container">
          <div className="deal-section-head">
            <div className="deal-section-label">{ui.applyNow}</div>
            <h2 className="deal-section-h2">{ui.submitRequest}</h2>
            <p className="deal-section-sub">{intro.paragraphs[0]}</p>
          </div>
          <DealershipForm form={form} />
        </div>
      </section>

    </div>
  );
}

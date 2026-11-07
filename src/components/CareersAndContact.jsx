'use client';
import { useState, useEffect, useRef } from 'react';
import { useLocalized } from '../i18n/LanguageProvider';
import { CC_BN } from '../i18n/bn/careersContact';

const JOBS = [
  { title: 'Software Developer (.NET / AngularJS)', dept: 'Engineering', location: 'Dhaka' },
  { title: 'Business Development Executive', dept: 'Sales', location: 'Dhaka (Multiple)' },
  { title: 'Technical Support Engineer', dept: 'Support', location: 'Dhaka' },
];

const INFO = [
  // TODO: replace with the full registered office address
  { label: 'Head Office', value: 'Dhaka, Bangladesh', icon: 'pin' },
  { label: 'Phone', value: '09613-241234', icon: 'phone' },
  { label: 'Email', value: 'info@automate.com.bd', icon: 'mail', isLink: true },
  { label: 'Website', value: 'automate.com.bd', icon: 'mail', isLink: false, isWebsite: true },
  { label: 'Office Hours', value: 'Saturday–Thursday, 9:00 AM – 6:00 PM (Bangladesh Time)', icon: 'clock' },
];

const SUBJECTS = ['Academy IMS Inquiry','Accounting ERP Inquiry','Hospital ERP Inquiry','HRM & Payroll Inquiry','Web Development','Mobile App Development','Hardware & Networking','Computer Training','General Inquiry'];

const CC_EN = {
  jobs: JOBS,
  info: INFO,
  subjects: SUBJECTS,
  statLabels: ['Specialists', 'Head Office', 'Culture', 'Balance'],
  statNums: ['50+', 'Dhaka', 'Growth', 'Work-Life'],
  careersLabel: 'CAREERS',
  careersHeading: "Join Bangladesh's Leading IT Company",
  careersBody: 'Be part of a team of 200+ passionate professionals driving digital transformation across Bangladesh. We offer competitive salaries, growth opportunities, and the chance to work on impactful enterprise projects.',
  applyNow: 'Apply Now',
  noRole: "Don't see your role?",
  sendCv: 'Send us your CV',
  contactLabel: 'CONTACT US',
  contactHeading: "Let's Start Your Digital Transformation",
  contactSub: 'Reach out for a free demo, product inquiry, or any questions.',
  getInTouch: 'Get in Touch',
  followUs: 'Follow Us:',
  social: ['Facebook', 'LinkedIn', 'Twitter', 'YouTube'],
  mapAddress: 'House- 34/A, Road- 13/2, Block- K, South Banasree, Dhaka-1219',
  viewMap: 'View on Google Maps',
  formTitle: 'Send us a Message',
  labels: { fname: 'Full Name *', company: 'Company Name', email: 'Email Address *', phone: 'Phone Number', subject: 'Subject *', message: 'Message *' },
  placeholders: { fname: 'Your full name', company: 'Your organization', email: 'your@email.com', phone: '01XXX-XXXXXX', message: 'Tell us about your project or question...' },
  selectSubject: '— Select a subject —',
  agree: 'I agree to receive communications from Automate IT Limited.',
  sending: 'Sending...',
  send: 'Send Message →',
  successTitle: 'Message Sent!',
  successSub: 'Thank you! Our team will get back to you within 24 hours.',
  sendAnother: 'Send Another Message',
};

const PinIcon = () => <svg width="20" height="20" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const PhoneIcon = () => <svg width="20" height="20" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9.82 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
const MailIcon = () => <svg width="20" height="20" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const ClockIcon = () => <svg width="20" height="20" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const LocationIcon = () => <svg width="14" height="14" fill="none" stroke="#6B7280" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;


export default function CareersAndContact() {
  const t = useLocalized(CC_EN, CC_BN);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fname:'', company:'', email:'', phone:'', subject:'', message:'', agree: false });
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fname || !form.email || !form.subject || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ fname:'', company:'', email:'', phone:'', subject:'', message:'', agree: false });
  };

  const getIcon = (type) => type === 'pin' ? <PinIcon/> : type === 'phone' ? <PhoneIcon/> : type === 'mail' ? <MailIcon/> : <ClockIcon/>;

  return (
    <div ref={ref}>
      {/* Careers */}
      <section id="careers" className="careers-section" aria-labelledby="careers-heading">
        <div className="container">
          <div className="careers-grid">
            <div>
              <span className="section-label">{t.careersLabel}</span>
              <h2 className="section-h2" id="careers-heading" style={{marginTop:'12px'}}>{t.careersHeading}</h2>
              <p className="about-body">{t.careersBody}</p>
            </div>
            <div className="culture-stats">
              {t.statNums.map((n,i) => [n,t.statLabels[i]]).map(([n,l],i) => (
                <div key={i} className={`culture-stat animate-on-scroll${i>=2?' ':''}`.trim()}
                  style={i===2?{background:'linear-gradient(135deg,#F0F7FF,#DCF0FF)',borderColor:'#DBEAFE'}:i===3?{background:'linear-gradient(135deg,#F0FDF4,#DCFCE7)',borderColor:'#BBF7D0'}:{}}>
                  <span className="culture-stat-num" style={i>=2?{color:i===2?'#0057A8':'#16A34A',fontSize:'1.1rem'}:{}}>{n}</span>
                  <span className="culture-stat-label">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-on-scroll">
            {t.jobs.map((j,ji) => (
              <div key={ji} className="job-card">
                <div>
                  <div className="job-title">{j.title}<span className="job-dept">{j.dept}</span></div>
                  <div className="job-location"><LocationIcon/>{j.location}</div>
                </div>
                <button className="btn-outline-blue" style={{fontSize:'0.82rem',padding:'10px 20px',whiteSpace:'nowrap'}}>{t.applyNow} →</button>
              </div>
            ))}
          </div>
          <p className="careers-note">{t.noRole} <a href="mailto:info@automate.com.bd">{t.sendCv} →</a></p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">{t.contactLabel}</span>
            <h2 className="section-h2" id="contact-heading">{t.contactHeading}</h2>
            <p className="section-sub">{t.contactSub}</p>
          </div>
          <div className="contact-grid">
            {/* Left info */}
            <div className="animate-on-scroll">
              <h3 className="contact-h3">{t.getInTouch}</h3>
              {t.info.map(item => (
                <div key={item.icon + item.label} className="info-block">
                  <div className="info-icon">{getIcon(item.icon)}</div>
                  <div>
                    <span className="info-label">{item.label}</span>
                    {item.isLink
                      ? <span className="info-value"><a href={`mailto:${item.value}`} style={{color:'var(--primary)'}}>{item.value}</a></span>
                      : item.isWebsite
                      ? <span className="info-value"><a href={`https://${item.value}`} target="_blank" rel="noopener noreferrer" style={{color:'var(--primary)'}}>{item.value}</a></span>
                      : <span className="info-value" style={{whiteSpace:'pre-line'}}>{item.value}</span>
                    }
                  </div>
                </div>
              ))}
              {/* Social */}
              <p style={{fontSize:'0.78rem',fontWeight:'700',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'10px'}}>{t.followUs}</p>
              <div className="social-row">
                {[
                  ['fb', 'https://www.facebook.com/automateitbd', 0, 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'],
                  ['li', 'https://www.linkedin.com/company/automateitbd/', 1, 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'],
                  ['yt', 'https://www.youtube.com/@automateitlimited', 3, 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z'],
                ].map(([cls, url, si, d]) => (
                  <a key={cls} href={url} target="_blank" rel="noopener noreferrer" className={`social-btn ${cls}`} aria-label={t.social[si]} title={t.social[si]}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d={d}/>{cls==='yt'&&<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>}</svg>
                  </a>
                ))}
              </div>
              <div className="map-placeholder">
                <svg width="36" height="36" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p>{t.mapAddress}</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">{t.viewMap} →</a>
              </div>
            </div>

            {/* Right form */}
            <div className="animate-on-scroll">
              <div className="form-card">
                <h3>{t.formTitle}</h3>
                {!submitted ? (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="fname" className="form-label">{t.labels.fname}</label>
                        <input id="fname" type="text" className="form-input" placeholder={t.placeholders.fname} required value={form.fname} onChange={e=>setForm({...form,fname:e.target.value})}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="company" className="form-label">{t.labels.company}</label>
                        <input id="company" type="text" className="form-input" placeholder={t.placeholders.company} value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">{t.labels.email}</label>
                        <input id="email" type="email" className="form-input" placeholder={t.placeholders.email} required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">{t.labels.phone}</label>
                        <input id="phone" type="tel" className="form-input" placeholder={t.placeholders.phone} value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
                      </div>
                    </div>
                    <div className="form-row" style={{gridTemplateColumns:'1fr'}}>
                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">{t.labels.subject}</label>
                        <select id="subject" className="form-select" required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}>
                          <option value="">{t.selectSubject}</option>
                          {t.subjects.map(s=><option key={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="form-row" style={{gridTemplateColumns:'1fr'}}>
                      <div className="form-group">
                        <label htmlFor="message" className="form-label">{t.labels.message}</label>
                        <textarea id="message" className="form-textarea" rows={5} placeholder={t.placeholders.message} required value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
                      </div>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" id="agree" checked={form.agree} onChange={e=>setForm({...form,agree:e.target.checked})}/>
                      <label htmlFor="agree">{t.agree}</label>
                    </div>
                    <button type="submit" className="btn-primary form-submit" disabled={loading}>
                      {loading ? t.sending : t.send}
                    </button>
                  </form>
                ) : (
                  <div className="form-success">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                      <circle cx="30" cy="30" r="30" fill="#F0FDF4"/>
                      <circle cx="30" cy="30" r="22" fill="#22C55E"/>
                      <polyline points="20,30 27,37 40,23" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3 className="success-title">{t.successTitle}</h3>
                    <p className="success-sub">{t.successSub}</p>
                    <span className="success-link" onClick={resetForm}>{t.sendAnother}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

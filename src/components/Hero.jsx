'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLang, useLocalized } from '@/i18n/LanguageProvider';
import { MOCKUP_BN } from '@/i18n/bn/mockup';
import { HERO_SLIDES_BN } from '@/i18n/bn/hero';

const SLIDES = [
  {
    step: '1/4',
    title: 'Academic ERP',
    sub: 'A complete academic platform for admissions, fees, attendance, exams, communication, and everyday institutional operations.',
    cta1: { label: 'Read More', href: '/products/academic-erp' },
    cta2: { label: 'Contact Us', href: '/contact' },
    highlights: ['Admissions and registration', 'Exam and result workflows', 'Student and parent communication'],
    accent: 'linear-gradient(90deg,#38bdf8,#818cf8)',
    color1: '#38bdf8', color2: '#818cf8',
    chart: 'academic',
  },
  {
    step: '2/4',
    title: 'Accounting Solution',
    sub: 'Bring ledgers, billing, reporting, reconciliation, and financial visibility into one reliable accounting workflow.',
    cta1: { label: 'Read More', href: '/products/accounting-solution' },
    cta2: { label: 'Contact Us', href: '/contact' },
    highlights: ['VAT and ledger management', 'Real-time financial reporting', 'Audit-friendly transaction history'],
    accent: 'linear-gradient(90deg,#34d399,#10b981)',
    color1: '#34d399', color2: '#10b981',
    chart: 'accounting',
  },
  {
    step: '3/4',
    title: 'HR & Payroll Management',
    sub: 'Manage employee records, attendance, leave, payroll, and approvals with a smoother HR operation from one dashboard.',
    cta1: { label: 'Read More', href: '/products/hr-and-payroll-management' },
    cta2: { label: 'Contact Us', href: '/contact' },
    highlights: ['Attendance and leave tracking', 'Payroll and compliance workflow', 'Employee lifecycle records'],
    accent: 'linear-gradient(90deg,#fbbf24,#f59e0b)',
    color1: '#fbbf24', color2: '#f59e0b',
    chart: 'hr',
  },
  {
    step: '4/4',
    title: 'Automate Software Academy',
    sub: 'Learn practical software skills through hands-on, industry-focused training — built by the team that develops real ERP and business software.',
    cta1: { label: 'Enquire Now', href: '/contact' },
    cta2: { label: 'About Us', href: '/about' },
    highlights: ['Hands-on, project-based learning', 'Taught by working software professionals', 'Career-focused skill development'],
    accent: 'linear-gradient(90deg,#e879f9,#a855f7)',
    color1: '#e879f9', color2: '#a855f7',
    chart: 'academy',
  },
];

function useMock() {
  const { lang } = useLang();
  return (s) => (lang === 'bn' ? (MOCKUP_BN[s] ?? s) : s);
}

/* ── Inline chart mockups ── */
function AccountingChart({ c1, c2 }) {
  const m = useMock();
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      {/* Grid lines */}
      {[20, 60, 100, 140].map(y => (
        <line key={y} x1="30" y1={y} x2="250" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      ))}
      {/* Bar chart */}
      {[
        { x: 45, h: 80, label: 'Jan' },
        { x: 85, h: 110, label: 'Feb' },
        { x: 125, h: 65, label: 'Mar' },
        { x: 165, h: 130, label: 'Apr' },
        { x: 205, h: 95, label: 'May' },
      ].map(({ x, h, label }) => (
        <g key={label}>
          <rect x={x} y={160 - h} width={24} height={h} rx="4"
            fill={`url(#bg${label})`} opacity="0.9" />
          <text x={x + 12} y="157" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)">{m(label)}</text>
        </g>
      ))}
      {/* Gradient defs */}
      <defs>
        {['Jan','Feb','Mar','Apr','May'].map(l => (
          <linearGradient key={l} id={`bg${l}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        ))}
      </defs>
      {/* Pie chart mini */}
      <circle cx="210" cy="55" r="30" fill="none" stroke={c1} strokeWidth="14"
        strokeDasharray="60 130" strokeDashoffset="-10" opacity="0.9" />
      <circle cx="210" cy="55" r="30" fill="none" stroke={c2} strokeWidth="14"
        strokeDasharray="40 150" strokeDashoffset="50" opacity="0.7" />
      <circle cx="210" cy="55" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="14"
        strokeDasharray="30 160" strokeDashoffset="90" />
      <text x="210" y="58" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">68%</text>
      <text x="210" y="69" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.6)">{m("Revenue")}</text>
    </svg>
  );
}

function HRChart({ c1, c2 }) {
  const m = useMock();
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="hrLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
        <linearGradient id="hrFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c1} stopOpacity="0.3" />
          <stop offset="100%" stopColor={c2} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {[30, 70, 110, 145].map(y => (
        <line key={y} x1="20" y1={y} x2="250" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      ))}
      {/* Area fill */}
      <path d="M30 120 C65 90 100 110 135 70 C170 30 205 55 240 40 L240 150 L30 150 Z"
        fill="url(#hrFill)" />
      {/* Line */}
      <path d="M30 120 C65 90 100 110 135 70 C170 30 205 55 240 40"
        stroke="url(#hrLine)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Points */}
      {[{x:30,y:120},{x:135,y:70},{x:240,y:40}].map((p,i)=>(
        <circle key={i} cx={p.x} cy={p.y} r="4" fill={c1} stroke="white" strokeWidth="2"/>
      ))}
      {/* Labels */}
      {['Jan','Mar','May','Jul','Sep','Nov'].map((l,i)=>(
        <text key={l} x={30 + i*42} y="157" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)">{m(l)}</text>
      ))}
      {/* Mini stat boxes */}
      {[
        { x: 20, label: 'Staff', val: '248' },
        { x: 105, label: 'On Leave', val: '12' },
        { x: 185, label: 'Payroll', val: '৳2.4M' },
      ].map(({ x, label, val }) => (
        <g key={label}>
          <rect x={x} y="2" width="70" height="24" rx="6" fill="rgba(255,255,255,0.08)" />
          <text x={x + 35} y="11" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.5)">{m(label)}</text>
          <text x={x + 35} y="21" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">{val}</text>
        </g>
      ))}
    </svg>
  );
}

function AcademicChart({ c1, c2 }) {
  const m = useMock();
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="acg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      {/* Donut */}
      <circle cx="75" cy="85" r="45" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="18" />
      <circle cx="75" cy="85" r="45" fill="none" stroke={c1} strokeWidth="18"
        strokeDasharray="170 113" strokeDashoffset="-20" strokeLinecap="round" opacity="0.9" />
      <circle cx="75" cy="85" r="45" fill="none" stroke={c2} strokeWidth="18"
        strokeDasharray="80 203" strokeDashoffset="150" strokeLinecap="round" opacity="0.7" />
      <text x="75" y="81" textAnchor="middle" fontSize="18" fill="white" fontWeight="bold">92%</text>
      <text x="75" y="95" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)">{m("Pass Rate")}</text>

      {/* Right stats */}
      {[
        { label: 'Students', val: '3,240', y: 25 },
        { label: 'Teachers', val: '186', y: 65 },
        { label: 'Courses', val: '48', y: 105 },
        { label: 'Attendance', val: '94%', y: 145 },
      ].map(({ label, val, y }) => (
        <g key={label}>
          <rect x="145" y={y - 16} width="100" height="30" rx="8" fill="rgba(255,255,255,0.07)" />
          <text x="155" y={y - 2} fontSize="8" fill="rgba(255,255,255,0.5)">{m(label)}</text>
          <text x="155" y={y + 10} fontSize="11" fill="white" fontWeight="bold">{val}</text>
        </g>
      ))}
    </svg>
  );
}

function DashboardMockup({ slide }) {
  const m = useMock();
  const { color1, color2, chart } = slide;
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480 }}>

      {/* ── Laptop frame ── */}
      <div style={{
        background: 'linear-gradient(145deg,#1e2d4a,#0f1a2e)',
        borderRadius: '16px 16px 6px 6px',
        padding: '12px 12px 0',
        boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
        position: 'relative',
      }}>
        {/* Camera dot */}
        <div style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          margin: '0 auto 8px',
        }} />
        {/* Screen */}
        <div style={{
          background: 'linear-gradient(160deg,#0d1b35,#112244)',
          borderRadius: '8px 8px 0 0',
          padding: '14px',
          minHeight: 230,
          overflow: 'hidden',
        }}>
          {/* Top bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 5 }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{
              fontSize: 10, color: 'rgba(255,255,255,0.4)',
              background: 'rgba(255,255,255,0.05)',
              padding: '2px 10px', borderRadius: 10,
            }}>
              {slide.title} {m("Dashboard")}
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[color1, color2].map((c, i) => (
                <div key={i} style={{ width: 18, height: 6, borderRadius: 3, background: c, opacity: 0.7 }} />
              ))}
            </div>
          </div>
          {/* Chart area */}
          {chart === 'accounting' && <AccountingChart c1={color1} c2={color2} />}
          {chart === 'hr' && <HRChart c1={color1} c2={color2} />}
          {chart === 'academic' && <AcademicChart c1={color1} c2={color2} />}
        </div>
      </div>

      {/* ── Laptop base / hinge ── */}
      <div style={{
        height: 10, background: 'linear-gradient(180deg,#1a2840,#111e33)',
        borderRadius: '0 0 4px 4px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
      }} />
      <div style={{
        height: 4, background: '#0d1525',
        borderRadius: '0 0 20px 20px',
        margin: '0 10%',
      }} />

      {/* ── Mobile frame (overlapping bottom-right) ── */}
      <div style={{
        position: 'absolute',
        bottom: -30, right: -24,
        width: 110,
        background: 'linear-gradient(145deg,#1e2d4a,#0f1a2e)',
        borderRadius: 20,
        padding: '8px 6px',
        boxShadow: '0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
        zIndex: 2,
      }}>
        {/* Notch */}
        <div style={{ width: 30, height: 5, background: '#0d1525', borderRadius: 10, margin: '0 auto 6px' }} />
        {/* Mobile screen */}
        <div style={{
          background: 'linear-gradient(160deg,#0d1b35,#112244)',
          borderRadius: 14,
          padding: 8,
          minHeight: 140,
        }}>
          {/* Mini sparkline or pie */}
          <svg viewBox="0 0 90 110" fill="none" style={{ width: '100%', height: 'auto' }}>
            {/* Mini pie */}
            <circle cx="45" cy="40" r="28" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="12" />
            <circle cx="45" cy="40" r="28" fill="none" stroke={color1} strokeWidth="12"
              strokeDasharray="100 76" strokeDashoffset="-10" strokeLinecap="round" />
            <circle cx="45" cy="40" r="28" fill="none" stroke={color2} strokeWidth="12"
              strokeDasharray="50 126" strokeDashoffset="90" strokeLinecap="round" opacity="0.7" />
            <text x="45" y="37" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">76%</text>
            <text x="45" y="48" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.5)">{m("Growth")}</text>
            {/* Mini bars */}
            {[18, 28, 14, 34, 22].map((h, i) => (
              <rect key={i} x={8 + i * 16} y={82 - h} width={10} height={h} rx="2"
                fill={i % 2 === 0 ? color1 : color2} opacity="0.85" />
            ))}
            <line x1="5" y1="82" x2="85" y2="82" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </svg>
        </div>
        {/* Home bar */}
        <div style={{ width: 30, height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 10, margin: '6px auto 0' }} />
      </div>

      {/* ── Floating metric badge ── */}
      <div style={{
        position: 'absolute', top: 18, left: -20,
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 14, padding: '8px 14px',
        display: 'flex', alignItems: 'center', gap: 8,
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: `linear-gradient(135deg,${color1},${color2})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14,
        }}>📊</div>
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', lineHeight: 1 }}>{m("Live Report")}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>{m("Real-time")}</div>
        </div>
      </div>

      {/* ── Floating success badge ── */}
      <div style={{
        position: 'absolute', top: -16, right: 60,
        background: 'rgba(52,211,153,0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(52,211,153,0.3)',
        borderRadius: 12, padding: '6px 12px',
        fontSize: 12, color: '#34d399', fontWeight: 600,
        display: 'flex', alignItems: 'center', gap: 6,
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', display: 'inline-block', animation: 'hero-pulse 1.5s infinite' }} />
        {m("System Online")}
      </div>
    </div>
  );
}

export default function Hero() {
  const slides = useLocalized(SLIDES, HERO_SLIDES_BN);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, dragging: false });

  const goTo = useCallback((idx) => { setActive(idx); }, []);
  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo, slides.length]);
  const back = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo, slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const startDrag = useCallback((clientX) => {
    dragState.current = { startX: clientX, dragging: true };
    setIsDragging(true);
  }, []);

  const endDrag = useCallback((clientX) => {
    if (!dragState.current.dragging) return;
    const delta = clientX - dragState.current.startX;
    dragState.current.dragging = false;
    setIsDragging(false);
    if (Math.abs(delta) < 50) return;
    if (delta < 0) next();
    if (delta > 0) back();
  }, [back, next]);

  const slide = slides[active];

  return (
    <>
      <style>{`
        @keyframes hero-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
        @keyframes hero-floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes hero-floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
        .hero-device-wrap { animation: hero-floatA 5s ease-in-out infinite; }
        .hero-blue-right { display:flex; align-items:center; justify-content:center; }
        #hero.hero-blue-section { padding-top: 0 !important; margin-top: 0 !important; }
      `}</style>

      <section id="hero" className="hero-blue-section" aria-label="Hero banner">
        <div className="hero-blue-bg-orb hero-blue-orb-a" aria-hidden="true" />
        <div className="hero-blue-bg-orb hero-blue-orb-b" aria-hidden="true" />
        <div className="hero-blue-grid-overlay" aria-hidden="true" />

        <div
          className="hero-blue-container container"
          style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onTouchEnd={(e) => endDrag(e.changedTouches[0].clientX)}
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseUp={(e) => endDrag(e.clientX)}
          onMouseLeave={(e) => endDrag(e.clientX)}
        >
          {/* ── Left text ── */}
          <div className="hero-blue-left" key={`left-${active}`}>
            <h1 className="hero-blue-h1">{slide.title}</h1>
            <p className="hero-blue-sub">{slide.sub}</p>

            <div className="hero-blue-trust">
              {slide.highlights.map((item) => (
                <span key={item} className="hero-blue-trust-item">
                  <span className="hero-blue-trust-icon">✓</span> {item}
                </span>
              ))}
            </div>

            <div className="hero-blue-ctas">
              <Link href={slide.cta1.href} className="hero-blue-btn-primary">{slide.cta1.label}</Link>
              <Link href={slide.cta2.href} className="hero-blue-btn-ghost">{slide.cta2.label}</Link>
            </div>

            {/* Slide dots */}
            <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
              {slides.map((_, i) => (
                <button
                  key={i} type="button"
                  onClick={(e) => { e.stopPropagation(); goTo(i); }}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: i === active ? 28 : 8, height: 8,
                    borderRadius: 4, border: 'none', cursor: 'pointer',
                    background: i === active
                      ? slide.color1
                      : 'rgba(255,255,255,0.25)',
                    transition: 'all .35s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Right device mockup ── */}
          <div className="hero-blue-right" key={`right-${active}`}>
            <div className="hero-device-wrap" style={{ width: '100%', maxWidth: 460, padding: '40px 30px 50px' }}>
              {slide.chart === 'academy' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/academy-logo.webp"
                  alt="Automate Software Academy"
                  style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.35))' }}
                  draggable={false}
                />
              ) : (
                <DashboardMockup slide={slide} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

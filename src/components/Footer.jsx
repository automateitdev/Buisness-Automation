'use client';

import Link from 'next/link';
import { NAV_ITEMS } from '@/data/siteContent';

const productLinks = NAV_ITEMS.find((item) => item.href === '/products')?.children ?? [];
const serviceLinks = NAV_ITEMS.find((item) => item.href === '/services')?.children ?? [];
const otherLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Careers', href: '/careers' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Delete Account', href: '/delete-account' },
];

export default function Footer() {
  return (
    <footer id="footer" className="dn-footer" role="contentinfo">
      <div className="dn-footer-top">
        <div className="container dn-footer-grid">
          <div className="dn-footer-brand">
            <div className="dn-footer-logo">
              <svg width="40" height="40" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                <rect width="38" height="38" rx="8" fill="rgba(255,255,255,0.15)" />
                <path d="M10 8h8c6.627 0 12 5.373 12 12s-5.373 12-12 12h-8V8z" fill="white" />
                <path d="M10 14h6c3.314 0 6 2.686 6 6s-2.686 6-6 6h-6V14z" fill="rgba(0,102,178,0.5)" />
                <circle cx="16" cy="20" r="2" fill="white" />
                <path d="M24 12L28 12L28 28L24 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="28" cy="12" r="1.5" fill="#00c6ff" />
                <circle cx="28" cy="20" r="1.5" fill="#00c6ff" />
                <circle cx="28" cy="28" r="1.5" fill="#00c6ff" />
              </svg>
              <span>Automate IT Limited</span>
            </div>
            <div className="dn-footer-social">
              <a href="#" aria-label="Facebook" className="dn-social-btn">f</a>
              <a href="#" aria-label="LinkedIn" className="dn-social-btn">in</a>
              <a href="#" aria-label="YouTube" className="dn-social-btn">▶</a>
            </div>
          </div>

          <div className="dn-footer-col">
            <h4 className="dn-footer-col-title">Our Products</h4>
            <ul>
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="dn-footer-link">→ {item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="dn-footer-col">
            <h4 className="dn-footer-col-title">Our Services</h4>
            <ul>
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="dn-footer-link">→ {item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="dn-footer-col">
            <h4 className="dn-footer-col-title">Other Links</h4>
            <ul>
              {otherLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="dn-footer-link">→ {item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="dn-footer-col">
            <h4 className="dn-footer-col-title">Contact Us</h4>
            <ul className="dn-footer-contact">
              <li>
                <span className="dn-fc-icon">📍</span>
                {/* TODO: replace with the full registered office address */}
                <span>Dhaka, Bangladesh</span>
              </li>
              <li>
                <span className="dn-fc-icon">📞</span>
                <span>09678-221323</span>
              </li>
              <li>
                <span className="dn-fc-icon">✉</span>
                <span>
                    <a href="mailto:info@automate.com.bd" style={{color:'inherit'}}>info@automate.com.bd</a>
                    <br />
                    <a href="https://automate.com.bd" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>automate.com.bd</a>
                  </span>
              </li>
              <li>
                <span className="dn-fc-icon">🕐</span>
                <span>Sat - Thu: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dn-footer-bottom">
        <div className="container dn-footer-bottom-inner">
          <p>© 2026 Automate IT Limited. All Rights Reserved.</p>
          <p>Academic ERP, Software &amp; IT Services | Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}

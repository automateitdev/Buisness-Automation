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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" width="40" height="40" alt="" aria-hidden="true" />

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
                <span>House- 34/A, Road- 13/2, Block- K,<br />South Banasree, Dhaka-1219</span>
              </li>
              <li>
                <span className="dn-fc-icon">📞</span>
                <span>09613-241234</span>
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
          <p>IRD Certified ERP Provider | Bangladesh&apos;s Trusted Technology Partner</p>
        </div>
      </div>
    </footer>
  );
}

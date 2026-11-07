'use client';

import Link from 'next/link';
import { NAV_ITEMS } from '@/data/siteContent';
import { useLocalized } from '@/i18n/LanguageProvider';
import { NAV_ITEMS_BN } from '@/i18n/bn/nav';
import { UI_EN } from '@/i18n/ui';
import { UI_BN } from '@/i18n/bn/ui';

const OTHER_HREFS = ['/contact', '/careers', '/portfolio', '/privacy-policy', '/terms', '/delete-account'];

export default function Footer() {
  const navItems = useLocalized(NAV_ITEMS, NAV_ITEMS_BN);
  const ui = useLocalized(UI_EN, UI_BN);
  const f = ui.footer;
  const productLinks = navItems.find((item) => item.href === '/products')?.children ?? [];
  const otherLinks = OTHER_HREFS.map((href, i) => ({ href, label: f.otherLinks[i] }));

  return (
    <footer id="footer" className="dn-footer" role="contentinfo">
      <div className="dn-footer-top">
        <div className="container dn-footer-grid">
          <div className="dn-footer-brand">
            <div className="dn-footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" width="40" height="40" alt="" aria-hidden="true" />

              <span>{ui.siteName}</span>
            </div>
            <div className="dn-footer-social">
              <a href="#" aria-label="Facebook" className="dn-social-btn">f</a>
              <a href="#" aria-label="LinkedIn" className="dn-social-btn">in</a>
              <a href="#" aria-label="YouTube" className="dn-social-btn">▶</a>
            </div>
          </div>

          <div className="dn-footer-col">
            <h4 className="dn-footer-col-title">{f.productsTitle}</h4>
            <ul>
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="dn-footer-link">→ {item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="dn-footer-col">
            <h4 className="dn-footer-col-title">{f.otherTitle}</h4>
            <ul>
              {otherLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="dn-footer-link">→ {item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="dn-footer-col">
            <h4 className="dn-footer-col-title">{f.contactTitle}</h4>
            <ul className="dn-footer-contact">
              <li>
                <span className="dn-fc-icon">📍</span>
                <span>{f.address[0]}<br />{f.address[1]}</span>
              </li>
              <li>
                <span className="dn-fc-icon">📞</span>
                <span>{f.phone}</span>
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
                <span>{f.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dn-footer-bottom">
        <div className="container dn-footer-bottom-inner">
          <p>{f.copyright}</p>
          <p>{f.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

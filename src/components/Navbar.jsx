'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_ITEMS } from '@/data/siteContent';

const LogoIcon = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/logo.png" width="38" height="38" alt="" aria-hidden="true" style={{ display: 'block', objectFit: 'contain' }} />
);

function isActivePath(pathname, href, children) {
  if (href === '/') return pathname === '/';
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  return children?.some((item) => pathname === item.href) ?? false;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAcc, setOpenAcc] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const prefetchedRoutes = useRef(new Set());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMenus() {
    setMobileOpen(false);
    setOpenAcc(null);
    setOpenDropdown(null);
  }

  function prefetchRoute(href) {
    if (!href || prefetchedRoutes.current.has(href)) {
      return;
    }

    prefetchedRoutes.current.add(href);
    router.prefetch(href);
  }

  function prefetchNavItem(item) {
    prefetchRoute(item.href);
    item.children?.forEach((child) => prefetchRoute(child.href));
  }

  const navClass = ['navbar', scrolled ? 'scrolled' : ''].filter(Boolean).join(' ');
  const menuClass = ['mobile-menu', mobileOpen ? 'open' : ''].filter(Boolean).join(' ');

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <header className={navClass} id="navbar">
        <nav className="nav-inner" aria-label="Main navigation">
          <Link href="/" className="nav-logo" aria-label="Automate IT Limited home">
            <LogoIcon />
            <div className="nav-logo-text">
              <span className="nav-logo-name">Automate IT Limited</span>
            </div>
          </Link>

          <ul className="nav-links" role="menubar">
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href, item.children);

              if (item.children) {
                const isDropdownOpen = openDropdown === item.href;

                return (
                  <li
                    key={item.href}
                    className={`has-dropdown${isDropdownOpen ? ' open' : ''}`}
                    role="none"
                    onMouseEnter={() => {
                      prefetchNavItem(item);
                      setOpenDropdown(item.href);
                    }}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onFocusCapture={() => {
                      prefetchNavItem(item);
                      setOpenDropdown(item.href);
                    }}
                    onBlurCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className={`nav-link nav-link-btn${active ? ' active' : ''}`}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : item.href)}
                    >
                      {item.label} <span className="nav-caret">+</span>
                    </button>
                    <div className="dropdown" role="menu">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="dropdown-item"
                          role="menuitem"
                          onClick={closeMenus}
                        >
                          <div className="dropdown-icon">
                            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="dropdown-title">{child.label}</span>
                            <span className="dropdown-sub">{child.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href} role="none">
                  <Link href={item.href} className={`nav-link${active ? ' active' : ''}`} role="menuitem" onClick={closeMenus}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="hamburger" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
            <span className="bar" style={mobileOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}}></span>
            <span className="bar" style={mobileOpen ? { opacity: 0 } : {}}></span>
            <span className="bar" style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}}></span>
          </button>
        </nav>
      </header>

      <div className={menuClass} id="mobile-menu">
        <div className="mobile-menu-inner">
          {NAV_ITEMS.map((item) => {
            if (!item.children) {
              return (
                <div key={item.href} className="mobile-nav-item">
                  <div className="mobile-nav-link">
                    <Link href={item.href} onClick={closeMenus}>{item.label}</Link>
                  </div>
                </div>
              );
            }

            const isOpen = openAcc === item.href;

            return (
              <div key={item.href} className="mobile-nav-item">
                <div
                  className="mobile-nav-link"
                  onClick={() => {
                    prefetchNavItem(item);
                    setOpenAcc((current) => current === item.href ? null : item.href);
                  }}
                >
                  <span className="mobile-nav-label">{item.label}</span>
                  <span className={`mobile-acc-icon${isOpen ? ' open' : ''}`}>+</span>
                </div>
                <div className={`mobile-sub-menu${isOpen ? ' open' : ''}`}>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="mobile-sub-item" onClick={closeMenus}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

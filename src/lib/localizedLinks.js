'use client';

import { NAV_ITEMS } from '@/data/siteContent';
import { NAV_ITEMS_BN } from '@/i18n/bn/nav';
import { useLocalized } from '@/i18n/LanguageProvider';

/**
 * Localize related-link cards ({ href, label, description }) produced by
 * getRelatedLinks() on the server. Looks each link up by href in the localized nav.
 */
export function useLocalizedLinks(relatedLinks = []) {
  const nav = useLocalized(NAV_ITEMS, NAV_ITEMS_BN);
  const byHref = {};
  nav.forEach((item) => {
    byHref[item.href] = item;
    (item.children ?? []).forEach((child) => {
      byHref[child.href] = child;
    });
  });
  return relatedLinks.map((link) => ({ ...link, ...(byHref[link.href] ?? {}), href: link.href }));
}

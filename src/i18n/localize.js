/**
 * Overlay Bangla content on top of the English source of truth.
 *
 * The Bangla file mirrors the SHAPE of the English data. Any key that is
 * missing (or empty) in the Bangla object falls back to English, so the site
 * never shows blanks while translation is in progress.
 *
 *  - objects  → merged key by key
 *  - arrays   → merged index by index (Bangla array may be shorter)
 *  - strings  → Bangla value wins when it is a non-empty string
 */
export function localize(base, overlay) {
  if (overlay === undefined || overlay === null) return base;

  if (Array.isArray(base)) {
    if (!Array.isArray(overlay)) return base;
    return base.map((item, i) => localize(item, overlay[i]));
  }

  if (base && typeof base === 'object') {
    if (typeof overlay !== 'object') return base;
    const out = { ...base };
    for (const key of Object.keys(overlay)) {
      out[key] = key in base ? localize(base[key], overlay[key]) : overlay[key];
    }
    return out;
  }

  if (typeof overlay === 'string') return overlay.trim() === '' ? base : overlay;
  return overlay;
}

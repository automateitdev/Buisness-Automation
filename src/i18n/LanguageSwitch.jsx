'use client';

import { useLang } from './LanguageProvider';

export default function LanguageSwitch({ className = '' }) {
  const { lang, setLang } = useLang();

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label="Language / ভাষা">
      <button
        type="button"
        className={`lang-switch-btn${lang === 'en' ? ' active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        lang="en"
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-switch-btn${lang === 'bn' ? ' active' : ''}`}
        onClick={() => setLang('bn')}
        aria-pressed={lang === 'bn'}
        lang="bn"
      >
        বাং
      </button>
    </div>
  );
}

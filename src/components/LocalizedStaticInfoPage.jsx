'use client';

import StaticInfoPage from './StaticInfoPage';
import { useLocalized } from '../i18n/LanguageProvider';

/** Client wrapper: renders StaticInfoPage with Bangla overlay when the site language is Bangla. */
export default function LocalizedStaticInfoPage({ bn, ...english }) {
  const content = useLocalized(english, bn);
  return <StaticInfoPage {...content} />;
}

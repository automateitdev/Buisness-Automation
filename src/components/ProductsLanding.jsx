'use client';

import PageHero from './PageHero';
import Products from './Products';
import { useLocalized } from '@/i18n/LanguageProvider';

const UI_EN = {
  title: 'Our Products',
  subtitle: 'Explore the products we build and maintain.',
};

const UI_BN = {
  title: 'আমাদের পণ্য',
  subtitle: 'আমরা যেসব পণ্য তৈরি ও রক্ষণাবেক্ষণ করি, সেগুলো দেখুন।',
};

export default function ProductsLanding() {
  const t = useLocalized(UI_EN, UI_BN);

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} theme="navy" compact />
      <Products />
    </>
  );
}

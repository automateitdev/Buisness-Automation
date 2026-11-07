import {
  ABOUT_DETAIL_PAGES,
  ABOUT_SUBPAGES,
  CLIENT_PAGE,
  PRODUCT_PAGES,
  RESOURCE_SUBPAGES,
  TOP_LEVEL_PAGES,
  getChildLinks,
} from '@/data/siteContent';
import {
  accountingSolutionData,
  dynamicAcademicErpData,
  dynamicAmsData,
  hospitalErpData,
  hrPayrollData,
  smsSystemData,
} from '@/components/products/data';
import {
  AccountingSolutionPage,
  DynamicAcademicErpPage,
  DynamicAmsPage,
  HospitalErpPage,
  HrPayrollPage,
  SmsSystemPage,
} from '@/components/products/pages';

export const topLevelPageKeys = {
  about: 'about',
  products: 'products',
  resources: 'resources',
  'our-client': 'ourClient',
  contact: 'contact',
  account: 'account',
};

export const aboutSlugs = Object.keys(ABOUT_SUBPAGES);
export const productSlugs = Object.keys(PRODUCT_PAGES);
export const resourceSlugs = Object.keys(RESOURCE_SUBPAGES);

export const productComponentData = {
  'academy-ims': dynamicAcademicErpData,
  'hospital-erp': hospitalErpData,
  'accounting-solution': accountingSolutionData,
  'hr-payroll': hrPayrollData,
  'sms-system': smsSystemData,
  'dynamic-ams': dynamicAmsData,
};

export const productPageComponents = {
  'academy-ims': DynamicAcademicErpPage,
  'hospital-erp': HospitalErpPage,
  'accounting-solution': AccountingSolutionPage,
  'hr-payroll': HrPayrollPage,
  'sms-system': SmsSystemPage,
  'dynamic-ams': DynamicAmsPage,
};



export function getTopLevelPage(slug) {
  const key = topLevelPageKeys[slug];
  return key ? TOP_LEVEL_PAGES[key] : null;
}

export function getAboutPage(slug) {
  return ABOUT_SUBPAGES[slug] ?? null;
}

export function getAboutDetailPage(slug) {
  return ABOUT_DETAIL_PAGES[slug] ?? null;
}

export function getProductPage(slug) {
  return PRODUCT_PAGES[slug] ?? null;
}


export function getResourcePage(slug) {
  return RESOURCE_SUBPAGES[slug] ?? null;
}

export function getRelatedLinks(parentHref, currentSlug) {
  return getChildLinks(parentHref).filter((item) => !item.href.endsWith(`/${currentSlug}`));
}

export function getClientPageBadges() {
  return CLIENT_PAGE.spotlight.map((item) => item.title);
}

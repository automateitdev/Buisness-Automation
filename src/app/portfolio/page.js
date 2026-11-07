import LocalizedStaticInfoPage from '@/components/LocalizedStaticInfoPage';
import { PORTFOLIO_BN } from '@/i18n/bn/staticPages';

export const metadata = {
  title: 'Portfolio — Automate IT Limited',
  description: 'Browse the solution areas, delivery strengths, and client-oriented capabilities of Automate IT Limited.',
};

export default function PortfolioPage() {
  return (
    <LocalizedStaticInfoPage
      bn={PORTFOLIO_BN}
      title="Portfolio"
      eyebrow="Company / Portfolio"
      summary="A snapshot of product lines, service delivery strengths, and implementation outcomes across the sectors we support."
      introTitle="Work shaped by operational problems worth solving"
      introText={[
        'Our portfolio spans ERP products, custom software, web applications, mobile apps, hosting, and communication services.',
        'Each engagement is approached with attention to the workflow, reporting, support model, and long-term value the client needs.',
      ]}
      highlights={['ERP and vertical software products', 'Custom development services', 'Deployment and support capability']}
      pillars={['Education', 'Healthcare', 'Finance and HR', 'Communication and Membership']}
      ctaTitle="Want to discuss a similar project?"
      ctaText="Contact us and we can walk through the product or service combination that best matches your requirements."
    />
  );
}

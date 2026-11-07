import LocalizedStaticInfoPage from '@/components/LocalizedStaticInfoPage';
import { CAREERS_BN } from '@/i18n/bn/staticPages';

export const metadata = {
  title: 'Careers — Automate IT Limited',
  description: 'Explore career opportunities and growth paths at Automate IT Limited.',
};

export default function CareersPage() {
  return (
    <LocalizedStaticInfoPage
      bn={CAREERS_BN}
      title="Careers"
      eyebrow="Company / Careers"
      summary="Explore opportunities to build products, support clients, and grow with a delivery-focused software team."
      introTitle="A workplace built around learning and execution"
      introText={[
        'Our careers page highlights the kind of work, team culture, and growth environment candidates can expect when joining Automate IT Limited.',
        'We value curiosity, accountability, and practical problem solving across engineering, operations, implementation, and client support roles.',
      ]}
      highlights={['Collaborative cross-functional teams', 'Projects with real client impact', 'Growth-oriented learning culture']}
      pillars={['Engineering', 'Implementation', 'Client Success', 'Business Operations']}
      ctaTitle="Interested in joining the team?"
      ctaText="Use the contact page to share your profile and tell us which role or department fits your background."
    />
  );
}

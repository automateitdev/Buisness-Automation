import LocalizedStaticInfoPage from '@/components/LocalizedStaticInfoPage';
import { DELETE_ACCOUNT_BN } from '@/i18n/bn/staticPages';

export const metadata = {
  title: 'Delete Account — Automate IT Limited',
  description: 'Request assistance related to account access or account deletion at Automate IT Limited.',
};

export default function DeleteAccountPage() {
  return (
    <LocalizedStaticInfoPage
      bn={DELETE_ACCOUNT_BN}
      title="Delete Account"
      eyebrow="Support / Delete Account"
      summary="Account removal and access-change requests can be reviewed through our support and client service channels."
      introTitle="We can help with account deletion requests"
      introText={[
        'If you need to delete an account or review access associated with one of our services, the fastest path is to contact our team with the account details and organization context.',
        'This helps us verify the request and route it correctly before making irreversible account changes.',
      ]}
      highlights={['Identity and account verification', 'Support-led request handling', 'Confirmation before irreversible changes']}
      pillars={['Request review', 'Verification', 'Action confirmation', 'Support follow-up']}
      ctaTitle="Ready to submit an account request?"
      ctaText="Please contact our support team with the relevant account and organization details so we can assist safely."
    />
  );
}

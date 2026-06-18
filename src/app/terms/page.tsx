import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Datoflow terms of service for use of the Datoflow website, application, data integrations, AI enrichments, and reports.',
};

const sections = [
  {
    title: '1. Agreement to these Terms',
    body: [
      'These Terms of Service govern your access to and use of Datoflow, including our website, application, data integrations, AI enrichments, reports, and related services.',
      'By accessing or using Datoflow, you agree to these Terms. If you use Datoflow on behalf of an organization, you represent that you have authority to bind that organization to these Terms.',
    ],
  },
  {
    title: '2. The Datoflow service',
    body: [
      'Datoflow helps teams collect, organize, enrich, analyze, and report on social, news, web, uploaded, and first-party data sources.',
      'Some features depend on third-party platforms and APIs. Availability, limits, data fields, and permitted uses may change when those providers change their services or policies.',
    ],
  },
  {
    title: '3. Accounts and organizations',
    body: [
      'You are responsible for keeping your account credentials secure and for all activity under your account. You must provide accurate account information and promptly update it if it changes.',
      'Organization administrators are responsible for managing users, permissions, connected accounts, imported data, billing, and compliance for their workspace.',
    ],
  },
  {
    title: '4. Connected services and Google Search Console',
    body: [
      'You may connect third-party services, including Google Search Console, to Datoflow. By connecting a service, you authorize Datoflow to access and process data from that service as needed to provide the features you request.',
      'For Google Search Console, Datoflow requests read-only access and uses it to import Search Analytics data for properties your connected Google account can access. You are responsible for ensuring you have permission to connect each account and use the imported data.',
      'You can disconnect a connected service from Datoflow. Disconnection prevents future imports from that connection but does not automatically delete data already imported into your workspace.',
    ],
  },
  {
    title: '5. Customer data and responsibility',
    body: [
      'You retain ownership of data you upload, connect, import, generate, or configure in Datoflow, subject to rights granted to Datoflow to operate and improve the service.',
      'You are responsible for the legality, accuracy, quality, and permitted use of your data, including compliance with applicable laws, platform terms, privacy obligations, and rights of third parties.',
    ],
  },
  {
    title: '6. Acceptable use',
    body: [
      'You may not use Datoflow to violate laws, infringe rights, bypass access controls, scrape or import data in violation of applicable platform rules, transmit malware, abuse the service, interfere with other users, or attempt to reverse engineer non-public parts of Datoflow.',
      'You may not use Datoflow outputs as the sole basis for decisions that have legal or similarly significant effects on individuals without appropriate human review and compliance controls.',
    ],
  },
  {
    title: '7. AI-generated outputs',
    body: [
      'Datoflow may use AI systems to classify, summarize, enrich, transform, or generate reports from your data. AI outputs may be incomplete, inaccurate, or unsuitable for a particular use.',
      'You are responsible for reviewing AI outputs before relying on them, publishing them, or using them in client, business, legal, regulatory, or public communications.',
    ],
  },
  {
    title: '8. Billing and credits',
    body: [
      'Datoflow may charge based on usage, credits, subscriptions, or custom agreements. Prices, limits, and billing mechanics are shown in the product or in an order form where applicable.',
      'You are responsible for fees incurred by your account or organization. Credits, if provided, may be subject to usage limits, expiration, non-transferability, or other rules described in the product or applicable agreement.',
    ],
  },
  {
    title: '9. Confidentiality and security',
    body: [
      'Each party may receive confidential information from the other. The receiving party will use reasonable care to protect confidential information and will use it only for purposes related to the service.',
      'Datoflow uses reasonable technical and organizational measures designed to protect customer data, but no system is completely secure.',
    ],
  },
  {
    title: '10. Intellectual property',
    body: [
      'Datoflow and its licensors own all rights in the service, software, designs, documentation, and underlying technology. These Terms do not grant you ownership of Datoflow intellectual property.',
      'You may provide feedback or suggestions. Datoflow may use feedback without restriction or obligation to you.',
    ],
  },
  {
    title: '11. Service changes and availability',
    body: [
      'We may modify, suspend, or discontinue parts of Datoflow, including integrations and features, to improve the service, address security or legal issues, or respond to third-party platform changes.',
      'We work to keep Datoflow reliable, but we do not guarantee uninterrupted or error-free operation unless a separate written agreement states otherwise.',
    ],
  },
  {
    title: '12. Disclaimers and limitation of liability',
    body: [
      'Datoflow is provided on an as-is and as-available basis, except as expressly stated in a separate written agreement. We disclaim warranties to the maximum extent permitted by law.',
      'To the maximum extent permitted by law, Datoflow will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, revenues, goodwill, or data.',
    ],
  },
  {
    title: '13. Termination',
    body: [
      'You may stop using Datoflow at any time. We may suspend or terminate access if you violate these Terms, create security or legal risk, fail to pay amounts due, or misuse the service.',
      'After termination, we may retain or delete data according to our Privacy Policy, legal obligations, and backup retention practices.',
    ],
  },
  {
    title: '14. Changes to these Terms',
    body: [
      'We may update these Terms from time to time. When we make material changes, we will update the date above and may provide additional notice inside the product or by email.',
    ],
  },
  {
    title: '15. Contact',
    body: [
      'For questions about these Terms, contact us at legal@datoflow.com.',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms that govern access to Datoflow, including connected data sources, Google Search Console imports, AI enrichments, reports, and usage-based billing."
      updatedAt="June 18, 2026"
      sections={sections}
    />
  );
}

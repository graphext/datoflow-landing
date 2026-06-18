import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Datoflow privacy policy describing how Datoflow collects, uses, stores, and protects user data and Google Search Console data.',
};

const sections = [
  {
    title: '1. Overview',
    body: [
      'Datoflow is a social listening, media intelligence, and research platform operated by Datoflow. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you use our website, application, and connected data integrations.',
      'By using Datoflow, you agree to the collection and use of information as described in this Privacy Policy.',
    ],
  },
  {
    title: '2. Information we collect',
    body: [
      'We collect account information such as your name, email address, organization, login provider, and settings you choose inside the product.',
      'We collect workspace content that you create or import into Datoflow, including projects, data feeds, uploaded files, queries, reports, enrichments, comments, and configuration metadata.',
      'We collect technical information such as IP address, device and browser information, logs, usage events, error reports, and security audit records so we can operate, secure, debug, and improve the service.',
    ],
  },
  {
    title: '3. Google account and Search Console data',
    body: [
      'If you connect a Google account, Datoflow requests only the permissions needed to provide the selected integration. For Google Search Console imports, Datoflow requests read-only access to Search Console data, together with basic profile information such as email address, name, and profile image so we can show which account is connected.',
      'Datoflow uses Google Search Console access to let you select and import Search Analytics rows for properties your Google account can access. Imported rows may include dimensions such as date, query, page, country, device, search appearance, clicks, impressions, CTR, and average position.',
      'Datoflow does not use Google user data for advertising. Datoflow does not sell Google user data. Datoflow does not transfer Google user data to third parties except as necessary to provide and secure the Datoflow service, comply with law, or with your explicit direction.',
      'Datoflow stores OAuth access and refresh tokens encrypted on the server. We use those tokens only to refresh access and run imports you initiate or schedule. You can disconnect Google Search Console from Datoflow, which revokes the connection in Datoflow and prevents future imports from using that account.',
      'Datoflow use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.',
    ],
  },
  {
    title: '4. How we use information',
    body: [
      'We use information to provide Datoflow features, authenticate users, manage organizations and permissions, run data imports, generate reports, apply AI enrichments, process payments, provide support, and maintain security.',
      'We may use aggregated or de-identified product analytics to understand service performance and improve Datoflow. We do not attempt to re-identify de-identified information.',
    ],
  },
  {
    title: '5. AI processing',
    body: [
      'Datoflow may process imported or uploaded content with AI models to classify, summarize, enrich, transform, or report on that content. AI processing is performed to provide product functionality requested by you or your organization.',
      'You are responsible for ensuring that content you upload or connect to Datoflow may be lawfully processed for your intended use.',
    ],
  },
  {
    title: '6. Sharing and subprocessors',
    body: [
      'We may share information with infrastructure, database, analytics, payment, email, authentication, AI, and hosting providers that help us operate Datoflow. These providers may process information only as needed to provide services to us.',
      'We may disclose information if required by law, to protect the rights and safety of Datoflow, our users, or others, or in connection with a business transfer such as a merger, acquisition, financing, or sale of assets.',
    ],
  },
  {
    title: '7. Data retention and deletion',
    body: [
      'We retain account, workspace, imported, and generated data for as long as needed to provide Datoflow, comply with legal obligations, resolve disputes, and enforce agreements.',
      'You may delete data feeds, reports, projects, and other workspace content inside the product where those controls are available. You may request deletion of account or organization data by contacting us.',
      'If you disconnect a Google account, Datoflow stops using that connection for future imports. Data previously imported from Google Search Console remains in your workspace until you or your organization delete it, unless otherwise required by law.',
    ],
  },
  {
    title: '8. Security',
    body: [
      'We use technical and organizational measures designed to protect information, including encrypted transport, server-side access controls, encrypted token storage, role-based authorization, monitoring, and audit logging.',
      'No internet service can guarantee absolute security. If you believe your account or data has been compromised, contact us immediately.',
    ],
  },
  {
    title: '9. International processing',
    body: [
      'Datoflow and its service providers may process information in countries other than your country of residence. Where required, we use appropriate safeguards for international transfers.',
    ],
  },
  {
    title: '10. Your choices',
    body: [
      'You can access and update account information in Datoflow. You can disconnect third-party integrations, delete workspace content where product controls are available, and request account deletion or data export by contacting us.',
      'You may also control cookies and similar technologies through your browser settings, though some parts of Datoflow may not function properly without them.',
    ],
  },
  {
    title: '11. Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. When we make material changes, we will update the date above and may provide additional notice inside the product or by email.',
    ],
  },
  {
    title: '12. Contact',
    body: [
      'For privacy questions, data requests, or security concerns, contact us at privacy@datoflow.com.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Datoflow collects, uses, stores, and protects account, workspace, imported, generated, and Google integration data."
      updatedAt="June 18, 2026"
      sections={sections}
    />
  );
}

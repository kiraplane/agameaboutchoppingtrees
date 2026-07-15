import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Privacy Policy | A Game About Chopping Trees Wiki',
    description:
      'Privacy policy for A Game About Chopping Trees Wiki, an independent guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#07140f] py-12 text-[#f8f1dc]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#a8c7b2]">
          A Game About Chopping Trees Wiki is an independent guide site. We do
          not require accounts for browsing the wiki, beginner guides, upgrade
          advice, co-op notes, achievement help, or official-link pages.
        </p>
        <p className="leading-8 text-[#a8c7b2]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#a8c7b2]">
          Remote media may be loaded from official storefronts or YouTube when a
          page embeds official artwork, store links, screenshots, or guide
          videos.
        </p>
        <p className="leading-8 text-[#a8c7b2]">
          Privacy questions can be sent to hello@agameaboutchoppingtrees.wiki.
        </p>
      </Container>
    </div>
  );
}

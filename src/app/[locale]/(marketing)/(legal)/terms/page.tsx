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
    title: 'Terms of Service | A Game About Chopping Trees Wiki',
    description:
      'Terms for using A Game About Chopping Trees Wiki, an independent game guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#07140f] py-12 text-[#f8f1dc]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#a8c7b2]">
          This site provides independent A Game About Chopping Trees guides,
          source notes, and official-link guidance. It is not affiliated with,
          endorsed by, sponsored by, or operated by Space Raccoon Game Studio,
          Spaghetti Cat, Valve, Steam, Discord, or YouTube.
        </p>
        <p className="leading-8 text-[#a8c7b2]">
          Upgrade costs, co-op behavior, controls, achievements, routes, and
          platform support can change after game updates. Treat guide pages as
          community-oriented guidance and verify important details in your
          current build.
        </p>
        <p className="leading-8 text-[#a8c7b2]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, paid files, trainers, or automation
          scripts.
        </p>
        <p className="leading-8 text-[#a8c7b2]">
          Questions about these terms can be sent to
          hello@agameaboutchoppingtrees.wiki.
        </p>
      </Container>
    </div>
  );
}

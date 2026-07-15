import { FaqSection } from '@/components/a-game-about-chopping-trees/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/a-game-about-chopping-trees/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
} from '@/data/a-game-about-chopping-trees/localized';
import { siteFacts } from '@/data/a-game-about-chopping-trees/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Axe,
  BookOpen,
  ExternalLink,
  Gamepad2,
  Gauge,
  Map,
  ShieldCheck,
  TrainFront,
  Trophy,
  Users,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const problemRoutes = [
  {
    title: 'Cutting feels too slow',
    text: 'Choose Axe, Endurance or Woodgrip by the delay you can actually see.',
    href: '/guides/upgrades-and-progression',
    icon: Axe,
  },
  {
    title: 'Co-op cash looks wrong',
    text: 'Separate the shared forest from each player’s personal money and upgrades.',
    href: '/guides/co-op-guide',
    icon: Users,
  },
  {
    title: 'The next grove feels far',
    text: 'Plan Handcar investment, bridge repairs and Birch-to-Oak travel.',
    href: '/guides/handcar-biomes-and-bridges',
    icon: TrainFront,
  },
  {
    title: 'An achievement is missing',
    text: 'Check all 15 official goals, including the pirate ship and lighthouse.',
    href: '/guides/achievements-and-secrets',
    icon: Trophy,
  },
  {
    title: 'Sprint or gamepad fails',
    text: 'Verify progression, bindings and input state before reinstalling.',
    href: '/guides/controls-gamepad-and-sprint',
    icon: Gamepad2,
  },
  {
    title: 'A demo guide conflicts',
    text: 'Use App IDs to separate demo advice from the July 15 full release.',
    href: '/guides/demo-vs-full-game',
    icon: ShieldCheck,
  },
] as const;

export function ChoppingTreesHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featured = getLocalizedFeaturedGuides(locale);
  const facts = getLocalizedGameFacts(locale);
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: content.intro,
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/logo.svg`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        url: siteFacts.officialSteamUrl,
        image: `${siteFacts.domain}${siteFacts.officialCoverImage}`,
        datePublished: '2026-07-15',
        gamePlatform: ['Windows', 'SteamOS + Linux'],
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: { '@type': 'Organization', name: siteFacts.publisher },
      },
      {
        '@type': 'VideoObject',
        name: 'A Game About Chopping Trees - RELEASE Trailer',
        thumbnailUrl: 'https://i.ytimg.com/vi/7mcnshXZBXI/hqdefault.jpg',
        uploadDate: '2026-07-15',
        embedUrl: `https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#07140f] text-[#f8f1dc]">
      <JsonLd data={graph} />
      <section className="relative overflow-hidden border-[#315b42] border-b">
        <Image
          src={siteFacts.officialHeroImage}
          alt="Sunny Birch Grove work site in A Game About Chopping Trees"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,15,.98)_0%,rgba(7,20,15,.86)_48%,rgba(7,20,15,.5)_100%)]" />
        <Container className="relative px-4 py-7 lg:py-9">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.76fr)]">
            <div className="min-w-0">
              <Badge className="w-fit bg-[#f2b84b] text-[#07140f]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.03] md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#a8c7b2] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto whitespace-normal bg-[#f2b84b] px-4 py-3 text-[#07140f] hover:bg-[#63c174]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto whitespace-normal border-[#63c174] bg-[#07140f]/60 px-4 py-3 text-[#f8f1dc] hover:bg-[#183824]"
                >
                  <LocaleLink href="/guides/upgrades-and-progression">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" />
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#83a98d]">
                {content.scopeNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#315b42] bg-black shadow-2xl shadow-black/40">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                title="Official A Game About Chopping Trees release trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-8">
            <MobileWikiNav currentPath="/" locale={locale} />

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-[#315b42] bg-[#10251a] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#63c174]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#a8c7b2]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section className="rounded-2xl border border-[#315b42] bg-[#10251a] p-5 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#63c174]">
                    Solve the current bottleneck
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    What is slowing the next logging run?
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-[#f2b84b] text-sm underline underline-offset-4"
                >
                  Browse all guides <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {problemRoutes.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="group rounded-xl border border-[#315b42] bg-[#07140f] p-5 transition hover:-translate-y-0.5 hover:border-[#63c174] hover:bg-[#183824]"
                  >
                    <item.icon className="size-6 text-[#f2b84b]" />
                    <h3 className="mt-4 font-display text-xl font-bold group-hover:text-[#f2b84b]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#a8c7b2]">
                      {item.text}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#315b42] bg-[#10251a] p-5 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#63c174]">
                    Start here
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Six guides for the whole forest loop
                  </h2>
                </div>
                <BookOpen className="size-7 text-[#f2b84b]" />
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {featured.map((guide) => (
                  <article
                    key={guide.slug}
                    className="overflow-hidden rounded-xl border border-[#315b42] bg-[#07140f]"
                  >
                    <div className="relative aspect-video border-[#315b42] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07140f]/80 to-transparent" />
                      <Badge className="absolute bottom-3 left-3 bg-[#f2b84b] text-[#07140f]">
                        {guide.category}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#a8c7b2]">
                        {guide.summary}
                      </p>
                      <LocaleLink
                        href={guide.path}
                        className="mt-4 inline-flex items-center gap-2 text-[#63c174] text-sm font-semibold"
                      >
                        Open guide <ArrowRight className="size-4" />
                      </LocaleLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#315b42] bg-[#10251a] p-6">
                <Gauge className="size-7 text-[#f2b84b]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Launch facts, without guesswork
                </h2>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-[#a8c7b2]">
                  <p>Released July 15, 2026 on Steam.</p>
                  <p>Windows and SteamOS + Linux are currently listed.</p>
                  <p>15 achievements cover upgrades, zones and exploration.</p>
                  <p>PS5, Xbox and macOS are not currently listed.</p>
                </div>
                <LocaleLink
                  href="/guides/platforms-release-and-price"
                  className="mt-4 inline-flex items-center gap-2 text-[#f2b84b] text-sm font-semibold"
                >
                  Check platform status <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="rounded-2xl border border-[#315b42] bg-[#10251a] p-6">
                <Map className="size-7 text-[#63c174]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Official destinations
                </h2>
                <div className="mt-4 grid gap-3 text-sm">
                  {[
                    ['Steam store', siteFacts.officialSteamUrl],
                    ['Steam community', siteFacts.officialCommunityUrl],
                    [
                      'Steam achievements',
                      'https://steamcommunity.com/stats/4512570/achievements/',
                    ],
                    ['Developer YouTube', siteFacts.officialYouTubeUrl],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-[#315b42] bg-[#07140f] px-4 py-3 text-[#f8f1dc] hover:border-[#63c174]"
                    >
                      {label} <ExternalLink className="size-4 text-[#63c174]" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#315b42] bg-[#10251a] p-5 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#63c174]">
                Search routes covered at launch
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                One focused answer for each real question
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.keywordRoutes.map((item) => (
                  <LocaleLink
                    key={`${item.keyword}-${item.route}`}
                    href={item.route}
                    title={item.intent}
                    className="rounded-full border border-[#315b42] bg-[#07140f] px-3 py-2 text-[#a8c7b2] text-xs hover:border-[#63c174] hover:text-[#f8f1dc]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
              <p className="mt-5 border-[#315b42] border-t pt-4 text-sm leading-7 text-[#a8c7b2]">
                {content.scopeNote}
              </p>
            </section>

            <FaqSection
              items={content.faq}
              title="A Game About Chopping Trees FAQ"
            />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}

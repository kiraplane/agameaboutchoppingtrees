import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  routeLabels: Record<string, string>;
  keywordRoutes: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export const routeLabels: Record<string, string> = {
  '/': 'A Game About Chopping Trees Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/upgrades-and-progression': 'Upgrades & Progression',
  '/guides/co-op-guide': 'Co-op Guide',
  '/guides/handcar-biomes-and-bridges': 'Handcar, Biomes & Bridges',
  '/guides/achievements-and-secrets': 'Achievements & Secrets',
  '/guides/controls-gamepad-and-sprint': 'Controls & Sprint',
  '/guides/demo-vs-full-game': 'Demo vs Full Game',
  '/guides/platforms-release-and-price': 'Release, Price & Platforms',
  '/system-requirements': 'System Requirements',
  '/review': 'Should You Buy?',
  '/download': 'Official Download',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const keywordRoutes = keywordMatrix
    .filter((matrixItem) => ['keep', 'watch'].includes(matrixItem.status))
    .filter((matrixItem) => matrixItem.route !== 'none')
    .map((matrixItem) => ({
      keyword: matrixItem.keyword,
      route: matrixItem.route,
      label: routeLabels[matrixItem.route.split('#')[0]] ?? matrixItem.route,
      intent: matrixItem.intent,
    }));

  return {
    badge: 'Independent Steam guide hub · Updated July 16, 2026',
    metadataTitle: 'A Game About Chopping Trees Wiki - Guides & Achievements',
    title: 'A Game About Chopping Trees Wiki',
    intro:
      'Make every logging run smoother. Find practical help for upgrades, co-op money, handcar travel, Birch and Oak zones, achievements, controls and the full Steam release.',
    primaryCta: 'Start the beginner guide',
    secondaryCta: 'Choose the next upgrade',
    scopeNote:
      'Released-build facts take priority. Demo-era controls and balance notes stay clearly labeled so an old guide cannot become a false current rule.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is A Game About Chopping Trees?',
        answer:
          'It is a relaxing first-person simulation by Space Raccoon Game Studio. You chop, process and sell timber, improve your abilities, travel by handcar and replant the forest alone or in online co-op.',
      },
      {
        question: 'When did A Game About Chopping Trees release?',
        answer:
          'The full game released on Steam on July 15, 2026. It is Steam App 4512570.',
      },
      {
        question: 'Does it support co-op?',
        answer:
          'Yes. Steam lists online co-op. The official demo update states that each player has personal money and upgrades.',
      },
      {
        question: 'How many Steam achievements are there?',
        answer:
          'The released game currently lists 15 achievements covering upgrades, zones, bridges, exploration, raccoons, coffee and economy goals.',
      },
      {
        question: 'Is it on PS5 or Xbox?',
        answer:
          'No PS5 or Xbox release is currently listed. Steam confirms Windows and SteamOS + Linux.',
      },
      {
        question: 'Are there codes or a tier list?',
        answer:
          'No redeem-code system or ranked roster is supported by the current game. This wiki does not create fake template pages.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.length} focused guides`,
    title: 'A Game About Chopping Trees Guide Hub',
    intro:
      'Choose the question in front of you: the next upgrade, personal co-op money, a distant biome, a missing achievement, a controller problem, demo confusion or platform support.',
    readGuide: 'Open guide',
    faq: [
      {
        question: 'Are these guides for the full release?',
        answer:
          'Yes. Current Steam and release facts take priority. Demo material is used only when its scope is explicit and the mechanic still has official support.',
      },
      {
        question: 'Which guide should I read first?',
        answer:
          'Start with the beginner guide, then use Upgrades & Progression when you can identify whether cutting, carrying, stamina or travel is slowing the loop.',
      },
      {
        question: 'Why are there only 11 guides?',
        answer:
          'The game is focused and newly released. Eleven substantive answer pages are more useful than thin codes, tier-list or database pages with no real mechanic behind them.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Walkthrough cross-check:',
    videoSuffix:
      'The written guide keeps current Steam facts and demo/full-build boundaries in control.',
    officialTitle: 'Check the live Steam build',
    officialBody:
      'A Game About Chopping Trees released on July 15, 2026. Live tooltips, current Steam data and newer developer notes take priority over demo balance and old workarounds.',
    officialLinkLabel: 'Open the official Steam page',
    faqTitle: 'A Game About Chopping Trees FAQ',
    categoryLabels: {
      Start: 'Start',
      Progression: 'Progression',
      Exploration: 'Exploration',
      'Co-op': 'Co-op',
      Reference: 'Reference',
      Review: 'Review',
      Safety: 'Safety',
      Status: 'Current status',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Reference: 'Reference',
      Status: 'Current status',
    },
  };
}

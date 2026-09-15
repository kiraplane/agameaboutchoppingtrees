import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-09-15';

export const siteFacts = {
  siteName: 'A Game About Chopping Trees Wiki',
  domain: 'https://www.agameaboutchoppingtrees.wiki',
  canonicalHost: 'www.agameaboutchoppingtrees.wiki',
  gameName: 'A Game About Chopping Trees',
  creator: 'Space Raccoon Game Studio',
  publisher: 'Spaghetti Cat',
  officialSteamUrl:
    'https://store.steampowered.com/app/4512570/A_Game_About_Chopping_Trees/',
  officialDemoUrl:
    'https://store.steampowered.com/app/4738320/A_Game_About_Chopping_Trees_Demo/',
  officialCommunityUrl: 'https://steamcommunity.com/app/4512570/',
  officialGuidesUrl: 'https://steamcommunity.com/app/4512570/guides/',
  officialWebsiteUrl: '',
  officialDiscordUrl:
    'https://steamcommunity.com/linkfilter/?u=https%3A%2F%2Fdiscord.gg%2F3AWfyJMvtm',
  officialYouTubeUrl: 'https://www.youtube.com/@GamesbySpaceRaccoonGameStudio',
  supportEmail: 'hello@agameaboutchoppingtrees.wiki',
  releaseDate: 'July 15, 2026',
  steamAppId: '4512570',
  demoAppId: '4738320',
  soundtrackAppId: '4848700',
  officialCoverImage: '/a-game-about-chopping-trees/header.jpg',
  officialHeroImage: '/a-game-about-chopping-trees/screenshots/0.jpg',
  officialScreenshot: '/a-game-about-chopping-trees/screenshots/6.jpg',
  officialTrailerId: '7mcnshXZBXI',
} as const;

export const siteDescription =
  'A Game About Chopping Trees Wiki with practical help for upgrades, co-op, handcar travel, achievements, controls, the demo and Steam launch status.';

export const gameFacts: GameFact[] = [
  {
    label: 'Core loop',
    value:
      'Chop, process and sell logs, then spend cash on permanent upgrades.',
  },
  {
    label: 'Progression',
    value: 'Improve the axe, endurance, carrying, chain reactions and handcar.',
  },
  {
    label: 'World',
    value:
      'Travel between work sites, repair bridges and replant cleared forest.',
  },
  {
    label: 'Co-op',
    value:
      'Play solo or online with a friend; money and upgrades are personal.',
  },
  {
    label: 'Platforms',
    value: 'Steam currently lists Windows and SteamOS + Linux.',
  },
  {
    label: 'Release',
    value: 'Released July 15, 2026 by Space Raccoon Game Studio.',
  },
];

export const achievements = [
  ['Sharp axe', 'Full Axe upgrade'],
  ['Texas chainsaw', 'Earn a chainsaw'],
  ['Birch zone', 'Complete birch zone'],
  ['Real pirate', 'Sink the ship'],
  ['A real lumberjack', 'Cut down 100 trees'],
  ['Strong Grip', 'Full Woodgrip upgrade'],
  ['Cash fund', 'Earn 5000 bucks'],
  ['Hardy', 'Full Endurance upgrade'],
  ['Oak zone', 'Complete oak zone'],
  ['Domino effect', 'Full Chainfall upgrade'],
  ['Machinist', 'Full Handcar upgrade'],
  ['Bridge repairman', 'Repair all bridges'],
  ['Lighthouse keeper', 'Explore the lighthouse'],
  ['Raccoon collecter', 'Collect all raccoons in game'],
  ['Coffee lover', 'Spend 300 bucks on a coffee'],
] as const;

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'Official Hot Fix #9 announcement',
    url: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840944183777346',
    checkedAt,
    confidence: 'high',
    note: 'Primary source for the August 13 progression-blocking bug fix.',
  },
  {
    type: 'official',
    label: 'Official Hot Fix #8 announcement',
    url: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314354594',
    checkedAt,
    confidence: 'high',
    note: 'Primary source for restoring the New Game Plus reset and dog house state on older saves.',
  },
  {
    type: 'official',
    label: 'Official Hot Fix #7 announcement',
    url: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314352280',
    checkedAt,
    confidence: 'high',
    note: 'Primary source for the Ent 1 HP, dropped-radio music, end-statistics and dog-house fixes.',
  },
  {
    type: 'official',
    label: 'Official Hot Fix #6 announcement',
    url: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314347821',
    checkedAt,
    confidence: 'high',
    note: 'Primary source for Husky summoning, boss health, post-boss autosave, planting-tool and key-rebind fixes.',
  },
  {
    type: 'official',
    label: 'Official August 7 content update',
    url: 'https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314345981',
    checkedAt,
    confidence: 'high',
    note: 'Primary source for multiple saves, secret location, axe skins, Husky commands and the New Game Plus result flow.',
  },
  {
    type: 'official',
    label: 'Official Hot Fix #1 announcement',
    url: 'https://steamcommunity.com/games/4512570/announcements/detail/1838407329257330',
    checkedAt,
    confidence: 'high',
    note: 'Primary source for the July 16 progression, planting, stamina, quest, coffee, beehive and sawmill-save changes.',
  },
  {
    type: 'official',
    label: 'A Game About Chopping Trees Steam store',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary identity, release, platform, feature, requirement, screenshot and trailer record for App 4512570.',
  },
  {
    type: 'official',
    label: 'Official Steam launch announcement',
    url: 'https://steamcommunity.com/games/4512570/announcements/detail/1838407329254209',
    checkedAt,
    confidence: 'high',
    note: 'Confirms the full release, solo/co-op play, replanting and handcar exploration.',
  },
  {
    type: 'official',
    label: 'Official Steam achievement schema',
    url: 'https://steamcommunity.com/stats/4512570/achievements/',
    checkedAt,
    confidence: 'high',
    note: 'Public source for the 15 current achievement names and descriptions.',
  },
  {
    type: 'official',
    label: 'Official demo store',
    url: siteFacts.officialDemoUrl,
    checkedAt,
    confidence: 'high',
    note: 'Separate App 4738320. Useful for named demo upgrades and Birch Grove context, never as a substitute for the released build.',
  },
  {
    type: 'developer',
    label: 'Demo tutorial and handcar update',
    url: 'https://steamcommunity.com/app/4512570',
    checkedAt,
    confidence: 'medium',
    note: 'Developer post covering tutorial, stumps, handcar, separate co-op money/upgrades, stamina and controller-era issues.',
  },
  {
    type: 'youtube',
    label: 'Official release trailer',
    url: 'https://www.youtube.com/watch?v=7mcnshXZBXI',
    checkedAt,
    confidence: 'high',
    note: 'Uploaded July 15 by Games by Space Raccoon Game Studio; used as the homepage trust video.',
  },
  {
    type: 'youtube',
    label: 'GameEdged full-release gameplay',
    url: 'https://www.youtube.com/watch?v=gZjTs1fGnj8',
    checkedAt,
    confidence: 'medium',
    note: 'Launch-day full-build footage used to cross-check the opening progression loop.',
  },
  {
    type: 'youtube',
    label: 'Blitz upgrade-loop gameplay',
    url: 'https://www.youtube.com/watch?v=UkyBrMcoVZI',
    checkedAt,
    confidence: 'medium',
    note: 'High-traction demo footage used only for upgrade decision context that remains visible in official release data.',
  },
  {
    type: 'youtube',
    label: 'MGAceman secret achievement run',
    url: 'https://www.youtube.com/watch?v=zkWKgmipJio',
    checkedAt,
    confidence: 'medium',
    note: 'Exact pirate/Birch achievement footage, cross-checked against the public Steam achievement schema.',
  },
  {
    type: 'youtube',
    label: 'GameSmyth all 10 raccoon locations',
    url: 'https://www.youtube.com/watch?v=w5PbFuAqkUU',
    checkedAt,
    confidence: 'medium',
    note: 'Complete released-build landmark run for all 10 raccoon statues, cross-checked against the official Raccoon Collecter achievement.',
  },
  {
    type: 'competitor',
    label: 'Steam Community Guides',
    url: siteFacts.officialGuidesUrl,
    checkedAt,
    confidence: 'high',
    note: 'The launch catalog is empty, leaving high-intent guide coverage open.',
  },
  {
    type: 'competitor',
    label: 'LadiesGamers demo impressions',
    url: 'https://ladiesgamers.com/a-game-about-chopping-trees-demo-impressions/',
    checkedAt,
    confidence: 'medium',
    note: 'Concrete demo-loop observations; all facts remain labeled as demo-era unless officially confirmed.',
  },
  {
    type: 'search',
    label: 'Google autocomplete and current web results',
    url: 'https://www.google.com/search?q=a+game+about+chopping+trees',
    checkedAt,
    confidence: 'medium',
    note: 'Current derivatives center on Steam, release, price, demo, PS5 and Xbox. Mechanic terms remain thin at launch.',
  },
];

const item = (
  keyword: string,
  intent: string,
  route: string,
  priority: KeywordMatrixItem['priority'],
  status: KeywordMatrixItem['status'],
  evidence: string,
  notes: string
): KeywordMatrixItem => ({
  keyword,
  intent,
  route,
  priority,
  status,
  evidence,
  notes,
});

export const keywordMatrix: KeywordMatrixItem[] = [
  item(
    'a game about chopping trees',
    'Find the exact Steam game.',
    '/',
    'P0',
    'keep',
    'Official Steam entity.',
    'Homepage head term.'
  ),
  item(
    'a game about chopping trees wiki',
    'Find structured help.',
    '/',
    'P0',
    'keep',
    'User request and empty Steam guide catalog.',
    'Homepage wiki intent.'
  ),
  item(
    'a game about chopping trees guide',
    'Browse player help.',
    '/guides',
    'P0',
    'keep',
    'Current search and Steam guide intent.',
    'Guide hub.'
  ),
  item(
    'a game about chopping trees beginner guide',
    'Learn the first session.',
    '/guides/beginner-guide',
    'P0',
    'keep',
    'Full-release video discovery.',
    'First-session route.'
  ),
  item(
    'a game about chopping trees walkthrough',
    'Progress through the forest.',
    '/guides/beginner-guide',
    'P0',
    'keep',
    'Launch-day playthrough discovery.',
    'Merged with beginner intent.'
  ),
  item(
    'a game about chopping trees upgrades',
    'Choose the next upgrade.',
    '/guides/upgrades-and-progression',
    'P0',
    'keep',
    'Official achievements and gameplay.',
    'Axe, Endurance, Woodgrip, Chainfall and Handcar.'
  ),
  item(
    'a game about chopping trees co op',
    'Understand online co-op.',
    '/guides/co-op-guide',
    'P0',
    'keep',
    'Official feature list and exact community issue.',
    'Separate money/upgrades.'
  ),
  item(
    'a game about chopping trees achievements',
    'Complete all goals.',
    '/guides/achievements-and-secrets',
    'P0',
    'keep',
    '15-item official Steam schema.',
    'Includes pirate, lighthouse and raccoons.'
  ),
  item(
    'a game about chopping trees raccoon locations',
    'Collect all ten raccoon statues.',
    '/guides/raccoon-statue-locations',
    'P0',
    'keep',
    'Official achievement plus a complete released-build location run.',
    'One focused page for every named landmark.'
  ),
  item(
    'a game about chopping trees demo',
    'Compare the demo and release.',
    '/guides/demo-vs-full-game',
    'P0',
    'keep',
    'Google autocomplete and App 4738320.',
    'Keep App IDs distinct.'
  ),
  item(
    'a game about chopping trees release date',
    'Confirm launch status.',
    '/guides/platforms-release-and-price',
    'P0',
    'keep',
    'Google autocomplete and Steam.',
    'Released July 15, 2026.'
  ),
  item(
    'a game about chopping trees price',
    'Check current price.',
    '/guides/platforms-release-and-price',
    'P0',
    'keep',
    'Google autocomplete.',
    'Link Steam for regional price.'
  ),
  item(
    'a game about chopping trees steam',
    'Install the official game.',
    '/download',
    'P0',
    'keep',
    'Google autocomplete.',
    'Steam-only safety route.'
  ),
  item(
    'a game about chopping trees ps5',
    'Check console status.',
    '/guides/platforms-release-and-price',
    'P0',
    'keep',
    'Google autocomplete.',
    'Not currently listed.'
  ),
  item(
    'a game about chopping trees xbox',
    'Check console status.',
    '/guides/platforms-release-and-price',
    'P0',
    'keep',
    'Google autocomplete.',
    'Not currently listed.'
  ),
  item(
    'a game about chopping trees handcar',
    'Plan travel and upgrades.',
    '/guides/handcar-biomes-and-bridges',
    'P1',
    'keep',
    'Official store and achievement.',
    'Combine route progression.'
  ),
  item(
    'a game about chopping trees controls',
    'Configure input.',
    '/guides/controls-gamepad-and-sprint',
    'P1',
    'keep',
    'Official controller support and community issue.',
    'Include sprint checks.'
  ),
  item(
    'a game about chopping trees system requirements',
    'Check hardware.',
    '/system-requirements',
    'P1',
    'keep',
    'Official Steam tables.',
    'Windows and Linux.'
  ),
  item(
    'a game about chopping trees steam deck',
    'Check handheld support.',
    '/system-requirements',
    'P1',
    'watch',
    'Linux/controller support but no verified Deck rating.',
    'Do not promise compatibility.'
  ),
  item(
    'a game about chopping trees review',
    'Decide whether to buy.',
    '/review',
    'P1',
    'keep',
    'Launch-day buyer intent.',
    'No-score decision page.'
  ),
  item(
    'a game about chopping trees codes',
    'Find redeem codes.',
    'none',
    'P3',
    'ignore',
    'No redeem mechanic found.',
    'Do not publish a fake page.'
  ),
  item(
    'a game about chopping trees tier list',
    'Rank entities.',
    'none',
    'P3',
    'ignore',
    'No roster or ranked build system.',
    'Upgrade choices are contextual.'
  ),
  item(
    'a game about chopping trees apk crack',
    'Find an unsafe copy.',
    '/download',
    'P2',
    'keep',
    'Predictable unsafe intent.',
    'Official Steam route only.'
  ),
  item(
    'a game about chopping trees español français deutsch',
    'Read localized help.',
    '/',
    'P2',
    'localize_later',
    'Steam supports seven interface languages.',
    'English core first.'
  ),
];

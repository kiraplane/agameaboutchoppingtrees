# A Game About Chopping Trees Wiki PRD and Implementation Plan

Checked: 2026-07-16 (Asia/Shanghai)

## 1. Product decision

Build an English, guide-first Steam wiki at `https://www.agameaboutchoppingtrees.wiki` for Steam App `4512570`. The game released on July 15, 2026 and has a narrow but useful decision surface: chopping and selling, upgrade order, stamina, carrying, handcar travel, bridges, two named zones, co-op ownership rules, controller behavior, achievements, demo/full-game separation, price and platform status.

This is a thin new-release game, not a 4X database project. Launch with 13 non-legal English routes: homepage, guide hub and 11 focused answer pages. Do not publish codes, tier lists, item databases or invented mechanics.

## 2. Confirmed identity and source boundary

- Game: A Game About Chopping Trees
- Site: A Game About Chopping Trees Wiki
- Canonical host: `www.agameaboutchoppingtrees.wiki`
- Steam store: https://store.steampowered.com/app/4512570/A_Game_About_Chopping_Trees/
- Steam App ID: `4512570`
- Developer: Space Raccoon Game Studio
- Publisher: Spaghetti Cat
- Release: July 15, 2026
- Platforms confirmed by Steam: Windows and SteamOS + Linux
- Features confirmed by Steam: single-player, multiplayer, co-op, online co-op, Steam Achievements, full controller support, Steam Cloud and Family Sharing
- Independent official website: not verified; the Steam record currently has no website URL
- Official base-game release trailer: https://www.youtube.com/watch?v=7mcnshXZBXI from Games by Space Raccoon Game Studio
- Separate Demo App: `4738320`; removed before the full release and not interchangeable with the base game
- Separate Soundtrack App: `4848700`; contains no playable base game

Current full-game facts outrank demo behavior. Demo reviews and videos may support interaction explanations only when the article labels the scope and cross-checks the released Steam record or current full-release footage.

## 3. Current official facts

- Core loop: chop trees, move and process logs, earn cash, buy upgrades, travel by handcar and replant saplings.
- Official launch note confirms no timers, solo or co-op play, replanting and handcar exploration.
- Official Steam schema exposes 15 achievements: Sharp axe, Texas chainsaw, Birch zone, Real pirate, A real lumberjack, Strong Grip, Cash fund, Hardy, Oak zone, Domino effect, Machinist, Bridge repairman, Lighthouse keeper, Raccoon collecter and Coffee lover.
- Official demo update confirms an in-game tutorial, removable stumps, item-slot reordering, handcar access in the first biome, separate cash and upgrades per co-op player, lower stamina use, flexible stamina refills, key rebinding and hold-to-swing.
- Version boundary: those demo-update facts are useful context, but the live full build and current tooltips are final authority.
- U.S. Steam API snapshot on July 16 showed a base price of `$7.99` and a launch discount, but public pages should direct readers to Steam for current regional price rather than freeze a temporary sale price.

## 4. Keyword matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
|---|---|---:|---:|---|---|---|
| a game about chopping trees | Find the game/entity | `/` | P0 | keep | Exact Steam entity and current search results | Homepage head term |
| a game about chopping trees wiki | Find structured help | `/` | P0 | keep | User request and empty Steam guide ecosystem | Homepage wiki intent |
| a game about chopping trees guide | Browse useful help | `/guides` | P0 | keep | Search results, Steam guide category | Guide hub |
| a game about chopping trees beginner guide | Learn the first loop | `/guides/beginner-guide` | P0 | keep | Video searches and mechanic depth | First-session route |
| a game about chopping trees walkthrough | Progress through all zones | `/guides/beginner-guide` | P0 | keep | Full-release playthrough discovery | Merge with beginner route |
| a game about chopping trees upgrades | Decide what to buy | `/guides/upgrades-and-progression` | P0 | keep | Official/demo descriptions and exact videos | Axe, Endurance, Woodgrip, Chainfall, Handcar |
| a game about chopping trees co op | Understand shared progress | `/guides/co-op-guide` | P0 | keep | Official feature list and Steam co-op questions | Separate money/upgrades warning |
| a game about chopping trees achievements | Complete official goals | `/guides/achievements-and-secrets` | P0 | keep | Steam Achievements plus official 15-item schema | Include pirate/lighthouse/raccoons |
| a game about chopping trees demo | Compare demo and release | `/guides/demo-vs-full-game` | P0 | keep | Google autocomplete and separate App ID | Demo is offline/independent |
| a game about chopping trees release date | Check launch status | `/guides/platforms-release-and-price` | P0 | keep | Google autocomplete and official release | July 15, 2026 |
| a game about chopping trees price | Check purchase cost | `/guides/platforms-release-and-price` | P0 | keep | Google autocomplete | Do not freeze regional sale price |
| a game about chopping trees steam | Find official install | `/download` | P0 | keep | Google autocomplete | Official Steam only |
| a game about chopping trees ps5 | Check console support | `/guides/platforms-release-and-price` | P0 | keep | Google autocomplete | No PS5 release currently listed |
| a game about chopping trees xbox | Check console support | `/guides/platforms-release-and-price` | P0 | keep | Google autocomplete | No Xbox release currently listed |
| a game about chopping trees handcar | Unlock/use travel | `/guides/handcar-biomes-and-bridges` | P1 | keep | Official store, demo update and achievement | Combine travel and bridge progression |
| a game about chopping trees biomes | Understand zones | `/guides/handcar-biomes-and-bridges` | P1 | keep | Demo store and official achievements | Birch and Oak confirmed; avoid invented map |
| a game about chopping trees sprint not working | Diagnose sprint | `/guides/controls-gamepad-and-sprint` | P1 | keep | Exact Steam discussion | Upgrade/state checks before bug claim |
| a game about chopping trees controller | Configure input | `/guides/controls-gamepad-and-sprint` | P1 | keep | Full controller support and official demo update | Bluetooth issue was demo-era |
| a game about chopping trees system requirements | Check hardware | `/system-requirements` | P1 | keep | Official Steam requirements | Windows and Linux tables |
| a game about chopping trees steam deck | Check handheld fit | `/system-requirements` | P1 | watch | Linux and controller support, no verified Deck rating | State unknown, no compatibility promise |
| a game about chopping trees review | Decide whether to buy | `/review` | P1 | keep | Search results and launch-day buyer intent | No-score decision page |
| a game about chopping trees codes | Find redeem codes | none | P3 | ignore | No redeem system or mechanic support | Do not create fake page |
| a game about chopping trees tier list | Rank entities | none | P3 | ignore | No ranked roster/build system | Upgrades need decision logic, not tiers |
| a game about chopping trees apk / crack | Unsafe download | `/download` | P2 | keep | Predictable unsafe download intent | Steam-only safety answer |
| a game about chopping trees español / français / deutsch | Localized help | English routes | P2 | localize_later | Steam supports several interfaces | English core first |

## 5. Competitor benchmark

### Steam Community Guides

- URL: https://steamcommunity.com/app/4512570/guides/
- Current state: empty guide catalog at launch; only generic Steam category filters are visible.
- Must match: official store link, recognizable game identity.
- Improve: provide a real guide index, intent-aligned URLs, article schema, FAQs and deliberate related routes.

### GameFAQs

- URL: https://gamefaqs.gamespot.com/pc/641849-a-game-about-chopping-trees
- Current state: entity card, release data, platform labels and empty achievements/Q&A shells.
- Must match: accurate developer, publisher, date and platform identity.
- Improve: answer progression, co-op, achievements, controls and platform questions rather than presenting empty tabs.

### LadiesGamers demo impressions

- URL: https://ladiesgamers.com/a-game-about-chopping-trees-demo-impressions/
- Current state: the strongest readable third-party demo explanation. It covers chopping, processing, money, Lumberjack/Endurance/Grip Strength, stamina refills, sprint, coffee, Birch Grove and future handcar travel.
- Must match: concrete loop explanation and human decision context.
- Improve: label demo scope, cross-check the released build, separate each search intent and add next-step navigation.

### JEU.VIDEO launch page

- URL: https://jeu.video/en/article/a-game-about-chopping-trees-launch-trailer-unconfirmed
- Current state: short bilingual release/status article with fact cards, FAQ and source links.
- Must match: concise official-source discipline.
- Improve: the developer now has an attributable release trailer, and the site can offer deeper player help rather than a single news page.

### Alpha Beta Gamer / general discovery pages

- URL: https://www.alphabetagamer.com/a-game-about-chopping-trees-beta-demo/
- Current state: short demo discovery coverage.
- Improve: full-release boundaries, structured navigation, achievements and current buying/platform answers.

### Page breadth recommendation

No competitor has a mature wiki or a broad current guide set. The opportunity is quality and speed, not page-count inflation. Launch 13 non-legal English routes and expand only when GSC or current Steam questions reveal new intents.

## 6. Video selection

| Use | Video | Channel | Date / traction checked July 16 | Decision |
|---|---|---|---|---|
| Homepage trust frame | `7mcnshXZBXI` — A Game About Chopping Trees - RELEASE Trailer | Games by Space Raccoon Game Studio | Jul 15, 2026; official, low views | keep as official identity source |
| Beginner/full-release cross-check | `gZjTs1fGnj8` — This is Definitely The Next BIG Simulation Game... | GameEdged | Jul 15, 2026; ~3.2K views | keep; current full-release footage |
| Upgrade loop | `UkyBrMcoVZI` — I made a living chopping trees | Blitz | Jun 21, 2026; ~36K views | keep with demo-era label |
| Co-op completion | `Ygpj_ZPGPBQ` — Cleaning Up the Forest!...with the Wife | Fambolic | Jun 6, 2026; low views | keep only as direct co-op visual cross-check |
| Secret achievement | `zkWKgmipJio` — I Sunk A Pirate Ship For A Secret Achievement! | MGAceman | Jun 8, 2026; 119 views | keep for exact pirate/Birch intent; verify with Steam schema |
| First-look context | `mrGhniKGC6c` — First Look NEW Simulator | FloppySims | May 30, 2026; ~11.7K views | optional demo-scope support |
| Full completion | `1np-EuKIKmI` — full forest/100% playthrough | Titan100 | Jul 15, 2026; ~2.2K views; German | watch; current but not needed for English launch embeds |
| Rejected confusion | `2jJXsYHpsCo` and other one-year-old exact-title videos | unrelated older game/identity | predates this game's reveal | reject; same-name confusion |

Articles present researched advice directly. Videos are supporting media, not transcripts or article bodies.

## 7. Route and content map

1. `/` — compact wiki homepage, official trailer, problem routes, launch facts, keyword hub and FAQ.
2. `/guides` — category hub with all guide cards and ItemList schema.
3. `/guides/beginner-guide` — first session, processing, cash, stamina, replanting and stop rules.
4. `/guides/upgrades-and-progression` — Axe, Endurance, Woodgrip, Chainfall and Handcar decisions.
5. `/guides/co-op-guide` — online co-op, separate cash/upgrades, role split and troubleshooting boundary.
6. `/guides/handcar-biomes-and-bridges` — Birch/Oak evidence, handcar, bridge repairs and route planning.
7. `/guides/achievements-and-secrets` — all 15 official achievement names/descriptions plus safe strategy.
8. `/guides/controls-gamepad-and-sprint` — full controller support, key rebinding, hold-to-swing and sprint checks.
9. `/guides/demo-vs-full-game` — App ID boundary, demo closure and what carries over conceptually.
10. `/guides/platforms-release-and-price` — release date, Windows/Linux, PS5/Xbox status and regional pricing.
11. `/system-requirements` — official Windows/Linux minimum and recommended hardware; cautious Steam Deck note.
12. `/review` — no-score buyer decision for a focused, low-pressure loop.
13. `/download` — official Steam purchase/install and safe-download warning.
14. `/disclaimer`, `/privacy`, `/terms`, `/cookie` — legal surfaces.

## 8. Data and implementation

- Data namespace: `src/data/a-game-about-chopping-trees/`
- Route group: `src/app/[locale]/(a-game-about-chopping-trees)/`
- Component namespace: `src/components/a-game-about-chopping-trees/`
- Asset namespace: `public/a-game-about-chopping-trees/`
- Guide data retains source strategy, search queries, source notes, selected video metadata, checked date and related routes.
- Every guide uses `constructMetadata`, Article/BreadcrumbList schema, exact-intent H1, FAQ and related next steps.
- Homepage uses WebSite, Organization, VideoGame, VideoObject and FAQPage schema.
- Guide hub uses ItemList and BreadcrumbList schema.

## 9. Visual direction

Use official Steam screenshots and header art. The game is bright, green and golden rather than the dark maritime palette of the source template.

- Background: deep forest green `#07140f`
- Surface: `#10251a`
- Border: `#315b42`
- Primary: warm sawmill gold `#f2b84b`
- Secondary: fresh leaf green `#63c174`
- Text: warm cream `#f8f1dc`
- Muted text: `#a8c7b2`

Keep the homepage hero compact. Place the official developer trailer beside the copy, expose Beginner, Upgrades, Co-op, Achievements, Biomes and Steam quick links, and show the next information band in the first viewport. Use a desktop sticky grouped wiki sidebar and a mobile expandable menu.

## 10. Migration and launch checks

- Remove all source-template data, routes, components, assets, IDs, domains and documentation.
- Confirm no Adsterra routes, components, declarations or `ADSTERRA_*` variables exist.
- Replace GA measurement ID only after GA4 creation; do not carry the template ID.
- Run `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm next:build` and `pnpm build`.
- Inspect desktop/mobile homepage, guide hub, a long-title article, system requirements, sitemap, robots and manifest.
- Secret-scan the tracked tree before creating the default-private GitHub repository.
- Deploy Worker `agameaboutchoppingtrees`, bind apex and `www`, and redirect apex to canonical `www`.
- Create/reuse GA4, create and verify `sc-domain:agameaboutchoppingtrees.wiki`, submit `https://www.agameaboutchoppingtrees.wiki/sitemap.xml`, update GA-GTM registries, then upsert exactly two Shipmanager core links.

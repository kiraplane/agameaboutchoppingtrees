import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-07-29';

const videos = {
  officialTrailer: {
    id: '7mcnshXZBXI',
    title: 'A Game About Chopping Trees - RELEASE Trailer',
    channel: 'Games by Space Raccoon Game Studio',
    url: 'https://www.youtube.com/watch?v=7mcnshXZBXI',
    thumbnailUrl: '/a-game-about-chopping-trees/guides/release-trailer.jpg',
    publishedAt: '2026-07-15',
    viewCountLabel: 'Official release trailer',
    checkedAt,
  },
  launchGameplay: {
    id: 'gZjTs1fGnj8',
    title: 'This is Definitely The Next BIG Simulation Game...',
    channel: 'GameEdged',
    url: 'https://www.youtube.com/watch?v=gZjTs1fGnj8',
    thumbnailUrl: '/a-game-about-chopping-trees/guides/beginner-guide.jpg',
    publishedAt: '2026-07-15',
    viewCountLabel: 'About 3.2K views when checked',
    checkedAt,
  },
  upgradeLoop: {
    id: 'UkyBrMcoVZI',
    title: 'I made a living chopping trees',
    channel: 'Blitz',
    url: 'https://www.youtube.com/watch?v=UkyBrMcoVZI',
    thumbnailUrl: '/a-game-about-chopping-trees/guides/upgrades.jpg',
    publishedAt: '2026-06-21',
    viewCountLabel: 'About 36K views when checked',
    checkedAt,
  },
  coOp: {
    id: 'Ygpj_ZPGPBQ',
    title:
      'Cleaning Up the Forest! Finishing A Game About Chopping Trees demo with the Wife',
    channel: 'Fambolic',
    url: 'https://www.youtube.com/watch?v=Ygpj_ZPGPBQ',
    thumbnailUrl: '/a-game-about-chopping-trees/guides/co-op.jpg',
    publishedAt: '2026-06-06',
    viewCountLabel: 'Direct co-op demo cross-check',
    checkedAt,
  },
  achievements: {
    id: 'zkWKgmipJio',
    title:
      'I Sunk A Pirate Ship For A Secret Achievement! | A Game About Chopping Trees Part 2',
    channel: 'MGAceman',
    url: 'https://www.youtube.com/watch?v=zkWKgmipJio',
    thumbnailUrl: '/a-game-about-chopping-trees/guides/achievements.jpg',
    publishedAt: '2026-06-08',
    viewCountLabel: 'Exact secret-achievement cross-check',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export const guides: Guide[] = [
  {
    slug: 'hotfix-5-linux-coop-progress',
    path: '/guides/hotfix-5-linux-coop-progress',
    title: 'A Game About Chopping Trees Hot Fix #5',
    seoTitle: 'A Game About Chopping Trees Hot Fix #5 Guide',
    seoDescription:
      'Review Hot Fix #5 for Linux leaves, Stump Killer co-op progress, husky behavior and missing player progress when a co-op player leaves.',
    summary:
      'Hot Fix #5 targets Linux leaf rendering and three co-op trouble spots: Stump Killer logic, husky behavior and progress lost when someone leaves before a save.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/a-game-about-chopping-trees/screenshots/6.jpg',
    publishedAt: '2026-07-27',
    updatedAt: '2026-07-28',
    sourceStrategy: 'official',
    sourceNotes:
      'Summarized from the official July 27 Steam Hot Fix #5 announcement. The notes describe fixes, not a new content branch.',
    videoSearchQueries: [
      'A Game About Chopping Trees Hot Fix 5',
      'A Game About Chopping Trees co-op progress fix',
    ],
    tags: ['Hotfix', 'Co-op', 'Linux'],
    relatedRoutes: [
      '/guides/co-op-guide',
      '/guides/achievements-and-secrets',
      '/guides/hotfix-3-4-save-crash-fixes',
      '/guides/upgrades-and-progression',
    ],
    body: [
      {
        heading: 'Update every co-op player before retesting',
        paragraphs: [
          'Hot Fix #5 fixes missing co-op progress when a player leaves before the group saves. Have every participant update first, then load the host save, complete one short objective and save before anyone disconnects. This creates a clean test without risking a long session.',
          'The fix does not mean every old unsaved action can be reconstructed. Keep the original save and verify cash, upgrades, achievements and objective progress before replacing backups.',
        ],
      },
      {
        heading: 'Stump Killer and husky fixes',
        paragraphs: [
          'The Stump Killer achievement logic has been corrected for co-op. Recheck it with the same host and client roles on the current build instead of repeating an older workaround.',
          'The patch also fixes unspecified husky behavior bugs. Because the official note does not list every affected animation or interaction, confirm the exact live behavior before assuming a separate husky problem is solved.',
        ],
        bullets: [
          'Use the same save and player roles when retesting Stump Killer.',
          'Save once before a client leaves the session.',
          'Record any remaining husky issue with host/client role and location.',
        ],
      },
      {
        heading: 'Linux leaf rendering',
        paragraphs: [
          'The developer made another attempt to correct incorrect leaf rendering on Linux. Restart the game after updating and compare the same forest before changing graphics settings.',
          'If leaves are still wrong, note the Linux distribution, GPU and driver. The wording “try fix” means the developer is addressing the issue, but it is not a guarantee for every Linux configuration.',
        ],
      },
    ],
    faq: [
      {
        question: 'What does Hot Fix #5 change?',
        answer:
          'It targets Linux leaf rendering, Stump Killer co-op logic, husky behavior and progress missing when a co-op player leaves before saving.',
      },
      {
        question: 'Can a player safely leave before the host saves now?',
        answer:
          'The related progress-loss bug is listed as fixed, but saving before anyone disconnects remains the safest workflow.',
      },
      {
        question: 'Does Hot Fix #5 add new content?',
        answer:
          'No new content is listed. It is a rendering, localization, achievement, behavior and co-op progress hotfix.',
      },
    ],
  },
  {
    slug: 'july-18-content-fixes-update',
    path: '/guides/july-18-content-fixes-update',
    title: 'A Game About Chopping Trees July 18 Update',
    seoTitle: 'A Game About Chopping Trees July 18 Update Guide',
    seoDescription:
      'Review the July 18 A Game About Chopping Trees update: Dark Forest igloo, new achievements, Polaroids, sawmill speed upgrades and co-op fixes.',
    summary:
      'The first post-hotfix update adds a repairable Dark Forest igloo, two achievements, more Polaroids and a sawmill-speed branch while repairing several co-op and save problems.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/a-game-about-chopping-trees/screenshots/6.jpg',
    publishedAt: '2026-07-19',
    updatedAt: '2026-07-19',
    sourceStrategy: 'official',
    sourceNotes:
      'Summarized from the official July 18 Steam announcement. The developer also confirmed a larger free update is in production, but did not publish its feature list or date.',
    videoSearchQueries: [
      'A Game About Chopping Trees July 18 update',
      'A Game About Chopping Trees igloo beehive achievements',
    ],
    tags: ['Update', 'Dark Forest', 'Co-op'],
    relatedRoutes: [
      '/guides/hotfix-1-patch-notes',
      '/guides/achievements-and-secrets',
      '/guides/upgrades-and-progression',
      '/guides/co-op-guide',
    ],
    body: [
      {
        heading: 'New Dark Forest objectives',
        paragraphs: [
          'The Dark Forest now contains an ice igloo that can be repaired. The update also adds achievements for repairing beehives and the igloo, plus more Polaroids around the map. Revisit older areas after updating because the developer specifically fixed beehive visibility in existing saves.',
          'Treat the igloo as a repair objective, not a new biome. Follow the current interaction prompt and keep the old save until the repaired state and achievement register.',
        ],
      },
      {
        heading: 'Sawmill and progression changes',
        paragraphs: [
          'A new Quality of Life upgrade branch increases sawmill speed with each purchase. This changes the production bottleneck: after cutting and hauling become fast, compare the next sawmill-speed upgrade against another axe, grip, or endurance purchase.',
          'Ice pines can now be sold, so old Dark Forest routes that ignored them should be retested. The patch also adds more Polaroids, which makes another exploration pass worthwhile before assuming a collectible is missing.',
        ],
      },
      {
        heading: 'Co-op and save fixes to retest',
        paragraphs: [
          'The trolley upgrade should now share correctly in co-op, client interactions should stop locking, and the Windows-to-Steam-Deck cloud-save issue is addressed. Large-tree replication, camera clipping, shovel audio, and interaction speed were also adjusted.',
          'Update every co-op player before retesting. For cloud saves, confirm the expected file and progress on the original device before switching platforms.',
        ],
        bullets: [
          'Recheck the trolley upgrade with both players on the same build.',
          'Open an older save to verify beehive visibility.',
          'Confirm cloud progress before replacing a local save.',
          'Do not treat the promised major free update as released content yet.',
        ],
      },
    ],
    faq: [
      {
        question: 'What was added in the July 18 update?',
        answer:
          'It adds a repairable Dark Forest igloo, two achievements, more Polaroids and a Quality of Life sawmill-speed upgrade branch.',
      },
      {
        question: 'Can ice pines be sold now?',
        answer:
          'Yes. The official July 18 notes say ice pines can now be sold.',
      },
      {
        question: 'Is the major free update already available?',
        answer:
          'No. The developer says it is being prepared, but its content and release date are not yet announced.',
      },
    ],
  },
  {
    slug: 'hotfix-1-patch-notes',
    path: '/guides/hotfix-1-patch-notes',
    title: 'A Game About Chopping Trees Hot Fix #1',
    seoTitle: 'A Game About Chopping Trees Hot Fix #1 Patch Notes',
    seoDescription:
      'See what Hot Fix #1 changed in A Game About Chopping Trees, including coffee, the Oak beehive, progression fixes, stamina, planting and sawmill saves.',
    summary:
      'The first release hotfix fixes progression, chainsaw, planting and sawmill-save problems, while changing stamina regeneration, planting costs and the final quest.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/a-game-about-chopping-trees/screenshots/6.jpg',
    publishedAt: '2026-07-17',
    updatedAt: '2026-07-17',
    sourceStrategy: 'official',
    sourceNotes:
      'Summarized from the official July 16 Steam Hot Fix #1 announcement. The current in-game build remains the authority for exact balance.',
    videoSearchQueries: [
      'A Game About Chopping Trees Hot Fix 1',
      'A Game About Chopping Trees patch notes',
    ],
    tags: ['Hotfix', 'Patch notes', 'Progression'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/upgrades-and-progression',
      '/guides/handcar-biomes-and-bridges',
      '/guides/achievements-and-secrets',
    ],
    body: [
      {
        heading: 'What Hot Fix #1 adds',
        paragraphs: [
          'The first post-launch hotfix adds two small but useful interactions: coffee can now be consumed even when stamina is full, and a beehive has been added to the Oak forest. Coffee is therefore no longer blocked by a full bar when the player wants to trigger the interaction or work toward the related achievement.',
          'The Oak beehive is a world addition rather than a new progression branch. Check the live Oak route after updating instead of relying on demo-era placement footage.',
        ],
      },
      {
        heading: 'Progression and save fixes',
        paragraphs: [
          'The patch fixes incorrect progression counting on some clients, a missing final chainsaw-damage upgrade, repeated planting on the same location, a planting-cost exploit, and sawmill money that could fail to arrive after loading a save. If one of these problems blocked a run, fully update and restart the game before retesting the affected save.',
          'The developers also fixed localization typos and adjusted several props. These changes should not require a new save. Keep the original save until the updated build has loaded and the expected money or progression state is visible.',
        ],
        bullets: [
          'Progression counters should now advance correctly on affected clients.',
          'The final chainsaw damage upgrade should no longer disappear.',
          'One planting location can no longer accept multiple overlapping trees.',
          'Loaded saves should correctly receive pending sawmill money.',
        ],
      },
      {
        heading: 'Balance changes that affect normal routes',
        paragraphs: [
          'Stamina regeneration is slower, while planting costs are higher to stop an overly profitable plant-and-cut loop in one spot. Players who used constant local replanting should return to a normal forest rotation and budget coffee around a planned work batch.',
          'The final quest no longer requires an ice log. That removes one old completion blocker, so follow the current quest text rather than an earlier walkthrough. The developers also say a larger content update is in development, but no feature list or release date is confirmed yet.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the latest A Game About Chopping Trees patch?',
        answer:
          'Hot Fix #1 was published on July 16, 2026 and is the latest official patch covered by this page.',
      },
      {
        question: 'Did the hotfix repair missing sawmill money?',
        answer:
          'Yes. The official notes fix missing sawmill payouts after loading a game.',
      },
      {
        question: 'Does the last quest still require an ice log?',
        answer:
          'No. Hot Fix #1 removes the ice-log requirement from the final quest.',
      },
    ],
  },
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'A Game About Chopping Trees Beginner Guide',
    seoTitle: 'A Game About Chopping Trees Beginner Guide & Walkthrough',
    seoDescription:
      'Start efficiently in A Game About Chopping Trees: chop, process and sell logs, manage stamina, choose upgrades and prepare for the next forest.',
    summary:
      'Turn the first clearing into a calm, repeatable loop: cut nearby trees, process every log, spend only on the bottleneck and leave the area ready to grow again.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: videos.launchGameplay.thumbnailUrl,
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'The released Steam description and July 15 full-build footage anchor the route. Demo-era details are used only where the official update still names the same system.',
    videoSearchQueries: [
      'A Game About Chopping Trees beginner guide',
      'A Game About Chopping Trees full game gameplay',
      'A Game About Chopping Trees walkthrough',
    ],
    video: videos.launchGameplay,
    tags: ['First hour', 'Walkthrough', 'Stamina'],
    relatedRoutes: [
      '/guides/upgrades-and-progression',
      '/guides/handcar-biomes-and-bridges',
      '/guides/co-op-guide',
      '/guides/achievements-and-secrets',
    ],
    body: [
      {
        heading: 'Make the first loop short and visible',
        paragraphs: [
          'Begin with the trees closest to the saw, selling point and upgrade table. The shortest route teaches the whole economy without wasting stamina on hauling. Fell one small group, move every usable log to processing, wait for the sale to register and check the cash total before cutting a second group. This makes it obvious whether time is being lost to chopping, carrying, travel or an unprocessed log left on the ground.',
          'A clean loop matters more than clearing a dramatic patch of forest. If the ground around the cabin is covered with loose logs, finish the current batch before opening another. The game is designed around a calm rhythm, and the same discipline that keeps the area tidy also prevents confusion about missing money. Treat each batch as cut, collect, process, sell, inspect, then spend.',
        ],
        bullets: [
          'Cut the closest safe trees first.',
          'Process and sell the entire batch before expanding the work area.',
          'Check stamina and cash after each batch instead of guessing.',
          'Keep one clear path between the forest, processor and upgrade table.',
        ],
      },
      {
        heading: 'Spend on the step that is actually slow',
        paragraphs: [
          'Do not buy every upgrade evenly. If a tree takes too many swings, improve the axe. If the walk back is dominated by repeated carrying trips, improve Woodgrip. If chopping stops while profitable trees are still within reach, Endurance is the immediate fix. Later systems such as Chainfall and the Handcar become more valuable when the basic cut-and-haul loop is already efficient.',
          'Stamina refills are a bridge, not a permanent substitute for progression. A refill makes sense when one more batch will finish an objective or fund a meaningful upgrade. Repeatedly paying only to continue an inefficient loop delays the upgrade that would remove the problem. After each purchase, run one complete batch and decide whether the bottleneck moved before spending again.',
        ],
        bullets: [
          'Slow cutting: Axe first.',
          'Too many carrying trips: Woodgrip first.',
          'Frequent forced pauses: Endurance first.',
          'Long route between work sites: save toward Handcar progression.',
        ],
      },
      {
        heading: 'Clear responsibly and prepare the next route',
        paragraphs: [
          'A cleared area is not finished until it is navigable. Remove stumps when the live build allows it, collect stragglers and plant saplings rather than leaving an unusable field. Replanting is part of the official full-game loop, so it should be treated as progression maintenance rather than decoration. A tidy clearing makes later hauling and handcar movement easier and gives the next growth cycle room to work.',
          'The official achievement list confirms Birch and Oak zone completion, bridge repair and full Handcar progression. Use those as direction markers, not permission to rush. Before leaving a work site, make sure the current upgrades support the longer route, outstanding logs are processed and any reachable bridge or track interaction has been checked. The next biome should expand a stable loop, not hide an unfinished one.',
        ],
      },
      {
        heading: 'Know when the first session is successful',
        paragraphs: [
          'A good first session does not require every achievement or a maxed tool. It ends when you can identify the slow step, afford upgrades without random spending and move through the work area without losing logs. You should understand how money arrives, how stamina changes the pace and which upgrade will solve the next problem. That knowledge is more reusable than a rigid minute-by-minute build order.',
          'In co-op, repeat the same check for both players because cash and upgrades are personal. One strong player cannot assume the partner received the same progression. Agree on the next objective, let each player confirm their own balance, then split tasks in a way that still gives both people a chance to earn and upgrade. If progress behaves differently from the current interface, treat it as a version or session issue and verify on Steam before restarting.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I upgrade first in A Game About Chopping Trees?',
        answer:
          'Upgrade the current bottleneck: Axe for slow cutting, Woodgrip for too many carrying trips, or Endurance for frequent stamina stops.',
      },
      {
        question: 'Should I clear every tree before buying upgrades?',
        answer:
          'No. Sell small complete batches and reinvest when an upgrade will shorten the next batch. Waiting too long can make the opening unnecessarily slow.',
      },
      {
        question: 'Do I need to replant trees?',
        answer:
          'Replanting is part of the official full-game loop and keeps cleared woodland productive. Finish processing and tidy the route before moving on.',
      },
    ],
  },
  {
    slug: 'upgrades-and-progression',
    path: '/guides/upgrades-and-progression',
    title: 'A Game About Chopping Trees Upgrades and Progression',
    seoTitle: 'A Game About Chopping Trees Upgrades Guide',
    seoDescription:
      'Choose Axe, Endurance, Woodgrip, Chainfall and Handcar upgrades by bottleneck, then use achievements to track full progression.',
    summary:
      'Build the tool that removes today’s slowest step, then rebalance when faster cutting creates a new hauling, stamina or travel problem.',
    category: 'Progression',
    difficulty: 'Intermediate',
    coverImageUrl: videos.upgradeLoop.thumbnailUrl,
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Official achievement descriptions confirm the maxable upgrade families. The selected high-traction demo video supplies visual context, not final balance values.',
    videoSearchQueries: [
      'A Game About Chopping Trees upgrades guide',
      'A Game About Chopping Trees best upgrades',
      'A Game About Chopping Trees axe endurance grip',
    ],
    video: videos.upgradeLoop,
    tags: ['Upgrades', 'Axe', 'Handcar'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/handcar-biomes-and-bridges',
      '/guides/achievements-and-secrets',
      '/guides/controls-gamepad-and-sprint',
    ],
    body: [
      {
        heading: 'Read the upgrade board as a workflow',
        paragraphs: [
          'The official achievement schema names five progression families: Axe, Woodgrip, Endurance, Chainfall and Handcar. Those names describe different parts of one production line. Axe controls how quickly timber falls. Woodgrip affects how much can be moved. Endurance controls how long work continues before recovery. Chainfall rewards efficient felling once the basics are strong. Handcar improves travel between increasingly distant work sites.',
          'The best upgrade is therefore not a universal item. It is the one that removes the largest share of idle time in the current route. Watch one full batch. Count whether more time is spent swinging, walking back for another load, waiting on stamina or crossing empty ground. Buy for the largest delay, then run the same route again. Progress becomes predictable when purchases are measured against a visible job.',
        ],
      },
      {
        heading: 'Build a balanced early sequence',
        paragraphs: [
          'Axe power is an attractive first purchase because faster felling immediately feels better, but cutting speed can outrun hauling. When logs accumulate faster than they can be moved, one more Axe level has little practical value. Switch to Woodgrip until a normal batch reaches processing in fewer trips. If both cutting and carrying are smooth but the stamina bar interrupts every cycle, Endurance becomes the better investment.',
          'Chainfall belongs after the player can control where and when trees fall without leaving a mess. It can improve the reward from a well-planned stand of trees, but it does not solve a weak carrying limit or a long walk. Handcar investment becomes valuable when the map route, bridges and distant grove travel dominate the session. Avoid maxing a late system only for its achievement while a basic bottleneck still consumes every minute.',
        ],
        bullets: [
          'First pass: one or two levels in the system causing the visible delay.',
          'Second pass: rebalance cutting, carrying and stamina.',
          'Route pass: add Handcar investment when travel becomes meaningful.',
          'Completion pass: max upgrade families for achievements after the loop is stable.',
        ],
      },
      {
        heading: 'Use the official achievements as milestones',
        paragraphs: [
          'Sharp axe, Strong Grip, Hardy, Domino effect and Machinist mark full upgrades in Axe, Woodgrip, Endurance, Chainfall and Handcar. Texas chainsaw confirms a separate chainsaw acquisition goal. These achievements are useful completion markers because they reveal the intended progression families without requiring an unofficial tier list or guessed maximum values.',
          'Do not confuse an achievement target with the optimal next purchase. A completion run may intentionally finish one family, while a normal first playthrough should keep the whole route functional. If maxing Endurance delays the carrying upgrade that would halve every trip, the achievement can wait. Track full-upgrade goals in the background and return when the economy makes the final levels comfortable.',
        ],
      },
      {
        heading: 'Stop buying when the purchase has no job',
        paragraphs: [
          'Before spending, name the next job: clear a stand, carry a batch, reach Oak, repair a bridge or complete an achievement. If the upgrade will not change that job, keep the cash. This is especially important near a new route, where the next biome may reveal whether travel or hauling is the real constraint. A small reserve also prevents every stamina refill or bridge interaction from becoming a forced grind.',
          'In co-op, repeat the decision separately. The developer’s demo update states that money and upgrades are personal, so one player’s maxed Axe does not improve the partner. A useful team can specialize temporarily, but both players should understand how they earn and spend. Alternate roles when needed, confirm balances after sales and avoid assuming one purchase applied to the whole session.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a best upgrade order?',
        answer:
          'There is no fixed best order. Axe, Woodgrip and Endurance solve different bottlenecks; Handcar and Chainfall gain value later when route distance and planned felling matter.',
      },
      {
        question: 'Which upgrades have full-upgrade achievements?',
        answer:
          'Steam currently lists achievements for fully upgrading Axe, Woodgrip, Endurance, Chainfall and Handcar.',
      },
      {
        question: 'Are upgrades shared in co-op?',
        answer:
          'The official demo update says each player has separate upgrades and money. Check the live full-build interface because balance and credit behavior can change.',
      },
    ],
  },
  {
    slug: 'co-op-guide',
    path: '/guides/co-op-guide',
    title: 'A Game About Chopping Trees Co-op Guide',
    seoTitle: 'A Game About Chopping Trees Co-op Guide - Money & Upgrades',
    seoDescription:
      'Set up A Game About Chopping Trees online co-op, divide logging jobs, understand personal money and upgrades, and diagnose missing cash safely.',
    summary:
      'Co-op is a shared forest with personal progression. Plan jobs together, but verify each player’s cash, upgrades and session state independently.',
    category: 'Co-op',
    difficulty: 'Beginner',
    coverImageUrl: videos.coOp.thumbnailUrl,
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Steam confirms online co-op. The official demo update confirms personal cash/upgrades; the selected co-op video is demo-era and used only for task-flow context.',
    videoSearchQueries: [
      'A Game About Chopping Trees co op',
      'A Game About Chopping Trees multiplayer gameplay',
      'A Game About Chopping Trees co op money',
    ],
    video: videos.coOp,
    tags: ['Online co-op', 'Money', 'Hosting'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/upgrades-and-progression',
      '/guides/controls-gamepad-and-sprint',
      '/download',
    ],
    body: [
      {
        heading: 'Treat the world as shared and progression as personal',
        paragraphs: [
          'Steam lists multiplayer, co-op and online co-op for the released game. The developer’s June update also states that each co-op player has separate upgrades and separate money. That distinction should shape the whole session: both players can work in the same clearing, but neither should assume a sale or upgrade changed the other person’s account.',
          'At the start, have each player check cash and the upgrade board. Sell one small batch and check both balances again. This creates a clean baseline before the forest is covered with logs. If only one balance changes, do not immediately call the save broken; first identify who cut, carried, processed and completed the sale. The live interface and current patch are the final authority for credit rules.',
        ],
      },
      {
        heading: 'Divide jobs without hiding who needs progress',
        paragraphs: [
          'A simple two-person route has one player felling and grouping trees while the other moves logs toward processing. Swap after a complete batch. The swap matters because personal upgrades can make one role feel dramatically faster, and repeating the same roles may leave one player unable to fund the next improvement. When both players need a specific purchase, use smaller alternating batches instead of one huge shared pile.',
          'Keep the work area legible. Agree on one collection point, do not open several distant stands at once and finish loose logs before taking the handcar to another site. Co-op speed can create more clutter than solo play, which makes missing sales and items harder to diagnose. A tidy route also reduces the chance that both players grab or move the same object at the same time.',
        ],
        bullets: [
          'Baseline both players’ cash before the first batch.',
          'Alternate selling or task ownership when both need upgrades.',
          'Use one shared staging area for logs.',
          'Finish the current grove before splitting across distant routes.',
        ],
      },
      {
        heading: 'Handle missing cash as a reproducible issue',
        paragraphs: [
          'A demo-era Steam discussion reported that only one player received cash while selling together. That report is evidence of a question, not proof that every full-release session follows the same rule. If it happens, stop generating new logs. Record both balances, let the other player perform a complete small batch alone and compare the result. Then swap roles and repeat once.',
          'If one player still never receives credit, return to the main menu only after noting the host, build version and exact action that failed. Restart the session, verify Steam has updated both clients and test a single sale near the starting area. Persistent issues belong in the official Steam discussions or developer Discord with reproducible steps. Avoid deleting a save or reinstalling before a controlled test shows the problem is not session-specific.',
        ],
      },
      {
        heading: 'Keep the session synchronized through travel',
        paragraphs: [
          'Before using bridges or the handcar, gather both players and finish the active sale. Progress interactions can be difficult to interpret if one player is still in an old work site. Confirm that both clients see the same route state, then move together for the first trip. If an interaction is unavailable to the guest, let the host trigger it and verify the result before spending more cash.',
          'A good co-op session ends with both players understanding their next purchase. One may specialize in cutting and the other in hauling, but personal progression should not become accidental dependence. Keep enough money on each side to recover stamina or buy the next useful level, and rotate the enjoyable jobs. The game’s low-pressure design works best when optimization supports the shared rhythm instead of turning one player into a permanent assistant.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does A Game About Chopping Trees have online co-op?',
        answer:
          'Yes. Steam lists multiplayer, co-op and online co-op for the released game.',
      },
      {
        question: 'Are money and upgrades shared in co-op?',
        answer:
          'The official June update says each player has personal money and upgrades. Test a small sale in the current build to understand exactly how credit is assigned.',
      },
      {
        question: 'What should I do if only one player gets cash?',
        answer:
          'Stop, record both balances, test one complete small batch per player, confirm both clients are updated, then report reproducible full-build behavior through official channels.',
      },
    ],
  },
  {
    slug: 'handcar-biomes-and-bridges',
    path: '/guides/handcar-biomes-and-bridges',
    title: 'Handcar, Biomes and Bridges Progression Guide',
    seoTitle: 'A Game About Chopping Trees Handcar, Biomes & Bridges',
    seoDescription:
      'Plan handcar upgrades, Birch and Oak zone progression, bridge repairs and tidy travel routes in A Game About Chopping Trees.',
    summary:
      'Use the handcar to shorten a stable logging route, not to abandon an unfinished grove. Birch, Oak and bridge goals provide safe progression markers.',
    category: 'Exploration',
    difficulty: 'Intermediate',
    coverImageUrl: '/a-game-about-chopping-trees/screenshots/0.jpg',
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official',
    sourceNotes:
      'Official store copy, launch notes and achievement descriptions confirm the handcar, Birch, Oak, bridges and lighthouse. No unofficial map is treated as final.',
    videoSearchQueries: [
      'A Game About Chopping Trees handcar',
      'A Game About Chopping Trees biomes',
      'A Game About Chopping Trees bridge',
    ],
    tags: ['Handcar', 'Biomes', 'Bridges'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/upgrades-and-progression',
      '/guides/achievements-and-secrets',
      '/guides/demo-vs-full-game',
    ],
    body: [
      {
        heading: 'Unlock travel only after the local loop works',
        paragraphs: [
          'The handcar connects work sites, but it does not fix weak cutting, hauling or stamina. Before committing cash to travel, run one complete batch in the current grove. If most time is still spent swinging or carrying a tiny load, basic upgrades will produce a larger return. Handcar progression becomes valuable when the route itself is the slow step and the next objective lies beyond comfortable walking distance.',
          'Finish loose work before leaving. Process staged logs, clear the track area and replant where the full build allows. A half-cleared site creates two problems after travel: the old area remains inefficient, and the player may no longer remember which logs were sold. Treat each grove as a contained job with an entry route, processing loop and exit checklist.',
        ],
      },
      {
        heading: 'Use confirmed zone names, not an invented map',
        paragraphs: [
          'Steam currently exposes achievements for completing the Birch zone and the Oak zone. The former demo description focused on Birch Grove and promised additional environments, while the released achievement list now confirms at least those two named completion goals. This is enough to plan a route without claiming every biome, unlock condition or map edge before it is verified in the current build.',
          'When a new zone opens, inspect its tree spacing, processor distance, track access and bridge interactions before buying again. A route with longer carrying distance may make Woodgrip or Handcar more valuable than another Axe level. A denser stand may reward Chainfall once the player can control the fall pattern. Let the geography change the build rather than carrying the opening order unchanged into every grove.',
        ],
        bullets: [
          'Birch zone: confirmed by the official achievement list.',
          'Oak zone: confirmed by the official achievement list.',
          'Bridge repair: confirmed as an all-bridges achievement.',
          'Lighthouse: confirmed as an exploration achievement, not a separate platform or DLC.',
        ],
      },
      {
        heading: 'Repair bridges with a route purpose',
        paragraphs: [
          'Bridge repair should open a named advantage: shorter hauling, access to the next stand, a collectible route or the path toward another objective. Inspect both sides before paying or delivering resources. If the far side does not help the current job, finish the local upgrade that improves every batch first. The Bridge repairman achievement rewards completing all bridges eventually, but it does not require every repair to be the earliest purchase.',
          'After a repair, make a dry trip without a load. Confirm the surface is navigable, the handcar or walking path connects cleanly and no staging point blocks the crossing. Then move a small batch through the new route. This test exposes awkward turns and excessive carrying distance before a large pile is committed. In co-op, move together the first time so both clients see the same world state.',
        ],
      },
      {
        heading: 'Finish Handcar progression when travel dominates',
        paragraphs: [
          'Machinist is the official achievement for fully upgrading the Handcar. Chase it when travel is a repeated part of the normal loop, not simply because the upgrade exists. A faster or stronger travel system produces little value if it sits beside one unfinished grove. Once multiple routes are active and the player regularly returns to sell, replant or collect, the full upgrade becomes a meaningful completion target.',
          'Use the handcar as a boundary between phases. Arrive with a clear objective, complete the work site, then return with the area organized. That pattern keeps exploration from turning into scattered chores. If the next route appears blocked, check current bridges, upgrades and local interactions before assuming a hidden quest. The game is new, so live tooltips and official patch notes should outrank an old demo video or speculative map.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which biomes are confirmed?',
        answer:
          'The current Steam achievements explicitly name Birch zone and Oak zone. This guide does not invent additional zone names.',
      },
      {
        question: 'When should I upgrade the Handcar?',
        answer:
          'Upgrade it when travel between active work sites is the main delay. Fix cutting, carrying and stamina first if those still dominate each batch.',
      },
      {
        question: 'Is there an achievement for every bridge?',
        answer:
          'Yes. Bridge repairman currently requires repairing all bridges, but individual costs and unlock order should be checked in the live build.',
      },
    ],
  },
  {
    slug: 'achievements-and-secrets',
    path: '/guides/achievements-and-secrets',
    title: 'A Game About Chopping Trees Achievements and Secrets',
    seoTitle: 'A Game About Chopping Trees Achievements - All 15 Goals',
    seoDescription:
      'See all 15 A Game About Chopping Trees achievements and plan upgrades, Birch and Oak zones, the pirate ship, lighthouse, raccoons and coffee.',
    summary:
      'Group the 15 official Steam achievements into upgrade, zone, economy and exploration goals so a completion run stays organized.',
    category: 'Reference',
    difficulty: 'Reference',
    coverImageUrl: videos.achievements.thumbnailUrl,
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'All names and descriptions come from the public Steam achievement page. The selected video supports the pirate/Birch route without replacing the official list.',
    videoSearchQueries: [
      'A Game About Chopping Trees achievements',
      'A Game About Chopping Trees Real pirate',
      'A Game About Chopping Trees lighthouse raccoons',
    ],
    video: videos.achievements,
    tags: ['15 achievements', 'Secrets', '100%'],
    relatedRoutes: [
      '/guides/upgrades-and-progression',
      '/guides/handcar-biomes-and-bridges',
      '/guides/beginner-guide',
      '/guides/demo-vs-full-game',
    ],
    body: [
      {
        heading: 'The complete official achievement list',
        paragraphs: [
          'The released Steam game currently has 15 achievements. Their public descriptions are short, which is useful: they identify the intended completion systems without forcing guessed requirements. Work through them in groups rather than chasing a secret across an unfinished map. Upgrade goals naturally advance during normal play, zone goals follow progression, and exploration goals are easier after bridges and travel are established.',
          'The exact list is current as of July 16, 2026. A patch can add or change achievements, so compare the live Steam page if the in-client list differs. The spelling Raccoon collecter and the term Woodgrip are reproduced from Steam rather than silently corrected into different in-game labels.',
        ],
        bullets: [
          'Sharp axe — Full Axe upgrade.',
          'Texas chainsaw — Earn a chainsaw.',
          'Birch zone — Complete birch zone.',
          'Real pirate — Sink the ship.',
          'A real lumberjack — Cut down 100 trees.',
          'Strong Grip — Full Woodgrip upgrade.',
          'Cash fund — Earn 5000 bucks.',
          'Hardy — Full Endurance upgrade.',
          'Oak zone — Complete oak zone.',
          'Domino effect — Full Chainfall upgrade.',
          'Machinist — Full Handcar upgrade.',
          'Bridge repairman — Repair all bridges.',
          'Lighthouse keeper — Explore the lighthouse.',
          'Raccoon collecter — Collect all raccoons in game.',
          'Coffee lover — Spend 300 bucks on a coffee.',
        ],
      },
      {
        heading: 'Finish the upgrade and economy goals together',
        paragraphs: [
          'Sharp axe, Strong Grip, Hardy, Domino effect and Machinist each require a full upgrade family. Cash fund rewards total earnings, while A real lumberjack tracks 100 trees. These goals overlap naturally if the player keeps selling complete batches and buys the upgrade that improves the current route. Avoid grinding a max level in isolation when another bottleneck makes every batch slower.',
          'Coffee lover is a spending goal rather than an efficiency recommendation. Coffee can help bridge a stamina gap, but repeatedly buying it solely for the counter may delay Endurance. Let normal recovery purchases accumulate first. Near the end of the run, check the remaining spend and finish it deliberately. The same principle applies to the chainsaw: treat Texas chainsaw as a progression reward and verify the live unlock condition instead of following an old demo shortcut.',
        ],
      },
      {
        heading: 'Pair zone completion with travel objectives',
        paragraphs: [
          'Birch zone and Oak zone belong beside Bridge repairman and Machinist. Before leaving a zone, finish reachable processing, inspect bridge routes and confirm the handcar is ready for the longer trip. This prevents a completion run from becoming a series of returns for one forgotten route interaction. Replanting and stump removal can also keep the old work site readable if the player revisits it.',
          'Lighthouse keeper asks only that the lighthouse be explored. Do not assume it requires a collectible, combat encounter or special platform feature unless the current game says so. Once its route is open, enter and inspect the location fully, then check the Steam overlay or achievement list after the trigger. If it does not pop, leave and re-enter once before restarting the entire save.',
        ],
      },
      {
        heading: 'Handle pirate and raccoon secrets without risky shortcuts',
        paragraphs: [
          'Real pirate requires sinking the ship. Current gameplay discovery points to an environmental interaction rather than a code, mod or external tool. Explore the relevant coast carefully, look for a usable in-world mechanism and confirm the achievement after the action completes. The guide intentionally avoids distributing save files, trainers or scripts; none are necessary for an official achievement.',
          'Raccoon collecter is the long-tail cleanup goal. Keep a simple zone checklist and search one area completely before moving on. Look around buildings, route edges, bridge approaches and landmarks such as the lighthouse. If a count is not exposed, record discoveries manually. Before assuming the final collectible is bugged, verify all bridges and zones are open, then check current Steam discussions for a confirmed full-build issue rather than importing a demo map.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many achievements are in A Game About Chopping Trees?',
        answer:
          'Steam currently lists 15 achievements for the released base game.',
      },
      {
        question: 'How do I get Real pirate?',
        answer:
          'The official description is “Sink the ship.” Explore for the relevant in-world interaction; no code, mod or trainer is required.',
      },
      {
        question: 'Why did a zone achievement not unlock?',
        answer:
          'Finish the current zone objective, wait for processing or completion state to settle, re-enter once if needed, then check the live Steam discussions before risking the save.',
      },
    ],
  },
  {
    slug: 'controls-gamepad-and-sprint',
    path: '/guides/controls-gamepad-and-sprint',
    title: 'Controls, Gamepad and Sprint Troubleshooting',
    seoTitle: 'A Game About Chopping Trees Controls & Sprint Fixes',
    seoDescription:
      'Check keyboard rebinding, hold-to-swing, full controller support, Bluetooth gamepad issues and sprint progression in A Game About Chopping Trees.',
    summary:
      'Separate an unavailable ability from a broken input: confirm progression, rebind the action, test a wired path and only then report a full-build bug.',
    category: 'Reference',
    difficulty: 'Status',
    coverImageUrl: '/a-game-about-chopping-trees/screenshots/6.jpg',
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Steam confirms full controller support. Key rebinding, hold-to-swing, haptics and Bluetooth notes come from official demo updates and require live-build verification.',
    videoSearchQueries: [
      'A Game About Chopping Trees controls',
      'A Game About Chopping Trees sprint not working',
      'A Game About Chopping Trees controller',
    ],
    tags: ['Controls', 'Controller', 'Sprint'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/upgrades-and-progression',
      '/guides/co-op-guide',
      '/system-requirements',
    ],
    body: [
      {
        heading: 'Check whether the action is unlocked',
        paragraphs: [
          'When sprint or another action appears unresponsive, first decide whether the game currently grants that ability. Demo impressions described sprint as progression rather than an always-available opening control. Look at the live upgrade table, current tutorial prompt and control menu. If the action has no binding yet or the upgrade is not active, changing hardware will not unlock it.',
          'Test in a clear flat area with enough stamina and no carried object. Some games change movement while hauling, interacting or exhausted, and those states can look like a dead key. Release the object, let the stamina state recover, close the upgrade interface and try again. Record what the HUD does when the input is pressed; a changing icon suggests the control is recognized even if movement is limited.',
        ],
      },
      {
        heading: 'Rebind before reinstalling',
        paragraphs: [
          'The developer added key rebinding during the demo to address layouts such as AZERTY. Open the current control settings and assign sprint or the affected action to an unused key. Save, return to play and test once. Then bind it back to the preferred key. This refreshes the mapping without touching the save or installation.',
          'Hold-to-swing was also added as an alternative to repeated clicking. If the option exists in the released build, use it to reduce unnecessary input strain. Confirm the setting does not conflict with an interaction bind. Avoid third-party macros or automated input tools; the game already provides an official accessibility path, and external automation can violate platform or game rules.',
        ],
        bullets: [
          'Verify the action or upgrade is available.',
          'Test with empty hands and recovered stamina.',
          'Bind the action to a different key or button.',
          'Restart only after saving the control change.',
        ],
      },
      {
        heading: 'Isolate gamepad and Bluetooth problems',
        paragraphs: [
          'Steam lists full controller support for the released game. A June developer update nevertheless noted Bluetooth gamepad issues in the demo. That is a historical diagnostic clue, not a claim that the current build is broken. If a wireless controller fails, connect it by cable when possible, disable duplicate virtual controllers and test the same action from keyboard.',
          'Steam Input can help or conflict depending on the device profile. Change one layer at a time: default Steam Input, then the game’s own binding, then a wired connection. Do not install an unknown remapper while troubleshooting. If keyboard works and the wired pad works but Bluetooth does not, the report is already narrow enough to send to the developer with controller model, operating system and current build date.',
        ],
      },
      {
        heading: 'Report the smallest reproducible failure',
        paragraphs: [
          'Before posting, restart the game once and confirm Steam has no pending update. Note the platform, input device, whether the action is unlocked, the exact binding and whether it works in a new or existing session. In co-op, test in solo if possible. A solo success and co-op failure points toward session state rather than the physical key.',
          'Use the official Steam discussions or developer-linked Discord for a persistent full-build issue. Include steps and avoid stating that every controller or save is affected. This game launched on July 15, so patches can invalidate old workarounds quickly. The safest order remains progression check, state check, rebind, alternate input, restart, update verification, then report.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does A Game About Chopping Trees support controllers?',
        answer:
          'Yes. Steam lists full controller support for the released game.',
      },
      {
        question: 'Why is sprint not working?',
        answer:
          'Confirm sprint is unlocked and bound, test with empty hands and enough stamina, then rebind it. Demo coverage suggests sprint can be progression-dependent.',
      },
      {
        question: 'Should I use a controller remapper?',
        answer:
          'Test native bindings, Steam Input and a wired connection first. Avoid unknown third-party tools when the game and Steam already provide supported input options.',
      },
    ],
  },
  {
    slug: 'demo-vs-full-game',
    path: '/guides/demo-vs-full-game',
    title: 'Demo vs Full Game: What Changed at Release',
    seoTitle: 'A Game About Chopping Trees Demo vs Full Game',
    seoDescription:
      'Compare the separate Steam demo with the July 15 full release, including App IDs, zones, achievements, saves and which old advice remains useful.',
    summary:
      'The demo and full release are separate Steam apps. Keep their facts, saves and troubleshooting advice separate even when the basic chopping loop looks familiar.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: videos.officialTrailer.thumbnailUrl,
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official',
    sourceNotes:
      'Steam App 4738320 and official prelaunch news define the demo boundary; App 4512570 and the release note define the current game.',
    videoSearchQueries: [
      'A Game About Chopping Trees demo',
      'A Game About Chopping Trees full release',
      'A Game About Chopping Trees release trailer',
    ],
    video: videos.officialTrailer,
    tags: ['Demo', 'Full release', 'App ID'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/platforms-release-and-price',
      '/guides/achievements-and-secrets',
      '/download',
    ],
    body: [
      {
        heading: 'Use the App ID to identify the build',
        paragraphs: [
          'The full game is Steam App 4512570. The demo is a separate product, App 4738320, and the soundtrack is App 4848700. A screenshot, review or video can use the correct title while still describing the demo. Check the store URL or library entry before treating an old upgrade cost, zone boundary or bug as current full-game behavior.',
          'The developer announced one week before release that the demo would be taken offline to focus on the final build and avoid splitting the player base. Availability can change later, but that announcement means the demo should not be presented as the primary download path after launch. The official full-game Steam page is the stable destination.',
        ],
      },
      {
        heading: 'What the demo established',
        paragraphs: [
          'The demo introduced Birch Grove, the cut-process-sell loop and core upgrades around axe damage, stamina or Endurance and carrying or Grip Strength. Developer updates added a tutorial, handcar access in the first biome, stump removal, item-slot reordering, hold-to-swing, key rebinding and separate co-op money and upgrades. Those facts explain the design vocabulary players still use.',
          'They do not freeze balance or unlock conditions. The developer explicitly used demo feedback for stability, UI clarity and balance changes before launch. Whenever a demo guide gives a price, number of levels, trigger or controller workaround, compare it with the live upgrade table and current Steam notes. The broad mechanic may survive while the exact value does not.',
        ],
      },
      {
        heading: 'What the full release confirms',
        paragraphs: [
          'The July 15 release supports single-player and online co-op, replanting and handcar exploration. Steam lists 15 achievements across upgrades, Birch and Oak zones, bridges, the lighthouse, a pirate ship, raccoons, coffee and economy goals. Windows and SteamOS + Linux are the current listed platforms, with full controller support and Steam Cloud.',
          'The full game also has its own price, bundles and soundtrack offer. A demo review cannot determine final value, performance or completion length by itself. Use current full-release footage and the live store page for a purchase decision. Keep the demo useful as a low-level mechanic reference, particularly when a tutorial prompt or control name remains the same.',
        ],
      },
      {
        heading: 'Do not promise save transfer',
        paragraphs: [
          'No verified official statement used for this guide promises that demo saves transfer into App 4512570. Because the apps are separate and the demo was removed before launch, assume progression should be started and verified in the full game unless the current client explicitly offers an import. Copying files between app folders can create more problems than it solves.',
          'If Steam Cloud presents a conflict, identify which app and timestamp each save belongs to before choosing. Do not overwrite the newer full-release save with a demo file. Screenshots and clips can be kept separately, as the developer recommended before the demo closed. For any future demo return, check the store page and official announcement rather than an old third-party download mirror.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the demo App ID?',
        answer:
          'The separate A Game About Chopping Trees Demo is Steam App 4738320. The full game is App 4512570.',
      },
      {
        question: 'Does the demo save transfer to the full game?',
        answer:
          'No verified official transfer promise was found. Treat the apps as separate unless the current full game explicitly offers an import.',
      },
      {
        question: 'Can I still use demo guides?',
        answer:
          'Use them for broad loop and control context, but verify balance values, unlocks, bugs and map details in the released build.',
      },
    ],
  },
  {
    slug: 'platforms-release-and-price',
    path: '/guides/platforms-release-and-price',
    title: 'Release Date, Price and Platform Status',
    seoTitle: 'A Game About Chopping Trees PS5, Xbox, Price & Release',
    seoDescription:
      'Check the July 15 release, current Steam price path, Windows and Linux support, and PS5, Xbox, Mac and Steam Deck status.',
    summary:
      'The game is released on Steam for Windows and Linux. Check the live store for regional price; PS5, Xbox and macOS are not currently listed.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/a-game-about-chopping-trees/screenshots/9.jpg',
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official',
    sourceNotes:
      'Current Steam app data is the sole authority for price, release and listed platforms. Search demand for consoles is answered without predicting ports.',
    videoSearchQueries: [
      'A Game About Chopping Trees release date',
      'A Game About Chopping Trees PS5 Xbox',
      'A Game About Chopping Trees price',
    ],
    tags: ['Release', 'PS5 & Xbox', 'Price'],
    relatedRoutes: [
      '/download',
      '/system-requirements',
      '/review',
      '/guides/demo-vs-full-game',
    ],
    body: [
      {
        heading: 'The game is out now on Steam',
        paragraphs: [
          'A Game About Chopping Trees released on July 15, 2026. The official store is Steam App 4512570, and the developer’s launch announcement confirms the full game is available. Older pages that say coming soon or planned release are stale. The separate demo and soundtrack use different App IDs and should not be mistaken for the base game.',
          'The current Steam record lists Space Raccoon Game Studio as developer and Spaghetti Cat as publisher. It supports single-player, online co-op, achievements, full controller support, Steam Cloud and Family Sharing. If a third-party storefront presents a different publisher, platform or release state, return to the Steam record before buying.',
        ],
      },
      {
        heading: 'Windows and Linux are the confirmed platforms',
        paragraphs: [
          'Steam currently marks Windows and SteamOS + Linux as supported. It does not mark macOS. That means a Mac purchase should not be assumed compatible simply because another game from the studio supports it. Check the platform icons and requirements on the live store immediately before purchase, especially if the page has been updated after this guide.',
          'Steam Deck status is more specific than Linux support. The game has full controller support and a native Linux listing, both encouraging signs, but no verified Deck compatibility rating was used here. Until Valve or the developer provides a current rating, treat Deck play as unconfirmed and use Steam’s refund rules rather than a compatibility promise from an independent guide.',
        ],
      },
      {
        heading: 'PS5 and Xbox are not currently listed',
        paragraphs: [
          'Google autocomplete shows active PS5 and Xbox interest, but the official store currently lists only Steam platforms. No PlayStation 5 or Xbox Series release is confirmed by the sources used for this launch guide. Do not interpret controller support as console support; it only describes using a controller with the Steam build.',
          'A future port remains possible, but predicting one would create a false release page. Track the official Steam news, developer channel and publisher announcements. A real console announcement should name the platform, store page and date. Until that exists, the accurate answer is that PS5 and Xbox versions are not currently listed.',
        ],
      },
      {
        heading: 'Price depends on region and live promotions',
        paragraphs: [
          'The U.S. Steam API showed a regular price of $7.99 and a temporary launch discount when checked on July 16. Steam prices vary by currency, region, tax and promotion, so this site does not freeze the sale figure as a permanent answer. Open the official store while signed into the correct region to see the actual checkout price.',
          'The game may also appear in game, soundtrack or publisher bundles. Read the bundle contents before purchasing: the soundtrack is additional audio content and does not replace the base game. If a key seller advertises a dramatically different platform or executable, prefer Steam. The official listing provides the clearest refund, update and co-op path for this launch.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did A Game About Chopping Trees release?',
        answer: 'It released on Steam on July 15, 2026.',
      },
      {
        question: 'Is A Game About Chopping Trees on PS5 or Xbox?',
        answer:
          'No PS5 or Xbox release is currently listed by the official Steam record or verified launch sources.',
      },
      {
        question: 'How much does the game cost?',
        answer:
          'The U.S. regular price was $7.99 when checked, but regional pricing and promotions change. Use the official Steam page for the current price.',
      },
    ],
  },
  {
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'A Game About Chopping Trees System Requirements',
    seoTitle: 'A Game About Chopping Trees System Requirements & Deck Status',
    seoDescription:
      'Official Windows and Linux minimum and recommended requirements for A Game About Chopping Trees, plus a cautious Steam Deck compatibility check.',
    summary:
      'Plan for 8 GB RAM, a GTX 1660-class minimum GPU and 4 GB storage; Windows and Ubuntu requirements are listed, while Steam Deck status is unverified.',
    category: 'Reference',
    difficulty: 'Reference',
    coverImageUrl: '/a-game-about-chopping-trees/screenshots/2.jpg',
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official',
    sourceNotes:
      'All hardware values come from the current official Steam store. No performance estimate is presented as a benchmark.',
    videoSearchQueries: [
      'A Game About Chopping Trees system requirements',
      'A Game About Chopping Trees Steam Deck',
      'A Game About Chopping Trees Linux',
    ],
    tags: ['PC', 'Linux', 'Steam Deck'],
    relatedRoutes: [
      '/guides/platforms-release-and-price',
      '/guides/controls-gamepad-and-sprint',
      '/download',
      '/review',
    ],
    body: [
      {
        heading: 'Windows minimum and recommended hardware',
        paragraphs: [
          'Steam lists Windows 10, a 64-bit processor and operating system, a quad-core Intel or AMD processor at 2.5 GHz or faster, 8 GB RAM, an NVIDIA GTX 1660 or Radeon RX 5500 XT, DirectX 11, broadband internet and 4 GB available storage as the minimum. These are official entry requirements, not a promise of a specific frame rate at every resolution.',
          'The recommended Windows target keeps the same processor description and Windows 10 base, raises memory to 16 GB, and names an NVIDIA RTX 3060 or AMD Radeon RX 6600 XT with DirectX 12. Steam still lists 4 GB storage and broadband. Leave extra free disk space for updates, shader caches and temporary installation files rather than filling a drive to the exact number.',
        ],
        bullets: [
          'Minimum: Windows 10 64-bit, quad-core 2.5 GHz CPU, 8 GB RAM.',
          'Minimum GPU: GTX 1660 or Radeon RX 5500 XT; DirectX 11.',
          'Recommended: 16 GB RAM and RTX 3060 or RX 6600 XT; DirectX 12.',
          'Storage: 4 GB listed, plus practical headroom for updates.',
        ],
      },
      {
        heading: 'Linux requirements',
        paragraphs: [
          'The official Linux minimum is Ubuntu 20.04 or later, 64-bit, with the same quad-core 2.5 GHz processor, 8 GB RAM, GTX 1660 or Radeon RX 5500 XT, broadband and 4 GB storage. The recommended target is Ubuntu 22.04 or later with 16 GB RAM and an RTX 3060 or RX 6600 XT.',
          'A native Linux listing is stronger evidence than assuming Proton support, but distributions and drivers still vary. Update the GPU driver, confirm the correct graphics device is active and test the default settings before applying aggressive launch options. If a problem appears only on one distribution, include that distribution, kernel, driver and game build in the report.',
        ],
      },
      {
        heading: 'Steam Deck support is not yet verified here',
        paragraphs: [
          'Steam lists full controller support, playable-without-timed-input accessibility and SteamOS + Linux. Those features make the game relevant to Deck owners, but they do not equal a Valve Verified or Playable badge. No current official Deck rating was used for this guide, so the site does not promise performance, text size or default input behavior.',
          'Before buying specifically for Deck, check the current Steam compatibility panel. If no rating exists, test the opening within Steam’s refund window, keep default graphics first and verify cloud saves before moving between desktop and handheld. Report device-specific issues as Deck issues rather than treating them as general Linux failures.',
        ],
      },
      {
        heading: 'Diagnose performance before lowering everything',
        paragraphs: [
          'Start with the game’s auto-detected settings, then change one expensive option at a time. The developer previously fixed video auto-detection and optimization issues during the demo, so an old preset recommendation may not describe the release build. Check Steam for a current patch before comparing performance with a pre-release video.',
          'If frame pacing drops, note the location, player count and amount of loose timber. Compare solo and co-op once, close overlays you do not need and confirm the dedicated GPU is selected on a laptop. A reproducible location is more useful than a generic “runs badly” report. Avoid downloading unofficial optimization executables or modified clients.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much RAM does A Game About Chopping Trees need?',
        answer:
          'Steam lists 8 GB RAM minimum and 16 GB recommended for both Windows and Linux.',
      },
      {
        question: 'Does it run on Linux?',
        answer:
          'Steam officially lists SteamOS + Linux, with Ubuntu 20.04 minimum and Ubuntu 22.04 recommended.',
      },
      {
        question: 'Is it Steam Deck Verified?',
        answer:
          'No verified Deck rating was used for this guide. Check the live Steam compatibility panel before purchasing specifically for Deck.',
      },
    ],
  },
  {
    slug: 'review',
    path: '/review',
    title: 'Should You Buy A Game About Chopping Trees?',
    seoTitle: 'A Game About Chopping Trees Review - Should You Buy It?',
    seoDescription:
      'A no-score buyer guide to A Game About Chopping Trees: core loop, upgrades, co-op, pacing, platforms and who will enjoy the focused Steam release.',
    summary:
      'Buy it for a focused, low-pressure logging loop and relaxed co-op—not for combat, a huge open-world sandbox or a story-heavy simulation.',
    category: 'Review',
    difficulty: 'Reference',
    coverImageUrl: '/a-game-about-chopping-trees/screenshots/6.jpg',
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'This is a no-score decision guide based on released Steam features, official launch positioning and current full-build footage. It does not invent a review aggregate.',
    videoSearchQueries: [
      'A Game About Chopping Trees review',
      'A Game About Chopping Trees full release gameplay',
      'A Game About Chopping Trees worth it',
    ],
    video: videos.launchGameplay,
    tags: ['Review', 'Buyer guide', 'Cozy'],
    relatedRoutes: [
      '/guides/platforms-release-and-price',
      '/guides/beginner-guide',
      '/guides/co-op-guide',
      '/download',
    ],
    body: [
      {
        heading: 'The whole appeal is the work loop',
        paragraphs: [
          'A Game About Chopping Trees is unusually honest about its center: fell timber, move and process logs, earn cash, improve the work and travel to another forest. There are no timers pushing the player forward. Progress comes from making the same physical loop smoother through a stronger axe, more endurance, better carrying, chain reactions and handcar travel.',
          'That focus is the buying decision. Players who enjoy cleaning, power-washing, mowing or other satisfying-job games may appreciate the visible before-and-after change. Players who need combat, dense crafting trees, many NPC quests or a constantly changing mission structure should not assume those systems are hidden behind the opening. The official pitch is tranquility and repetition with progression, not a broad survival game.',
        ],
      },
      {
        heading: 'Co-op changes the rhythm, not the genre',
        paragraphs: [
          'Online co-op lets two players share the forest and split cutting, hauling and processing. It can turn a repetitive solo route into a quiet social session, but the developer has stated that money and upgrades are personal. A good pair alternates jobs and makes sure both people can progress rather than using one character as a permanent carrier.',
          'Buy for co-op only if both players enjoy the underlying labor. Co-op does not transform the game into a competitive challenge or campaign with separate classes. It mainly improves company and throughput. Because the release is new, buyers who depend on flawless networking should check current Steam discussions for launch patches before planning a long session.',
        ],
      },
      {
        heading: 'Progression has clear completion hooks',
        paragraphs: [
          'The 15 Steam achievements give the focused loop useful goals: max five upgrade families, earn the chainsaw, complete Birch and Oak zones, repair bridges, explore the lighthouse, find raccoons, sink a ship and hit tree, cash and coffee milestones. These objectives create a completion path without pretending the game has a giant database.',
          'The tradeoff is that players who optimize quickly may see the structure sooner than they would in a sprawling sandbox. The pleasure has to come from the feel of chopping, the sound and motion of processing, the changing forest and the satisfaction of a cleaner route. If repetition becomes a chore after ten minutes, more efficient tools may not change the fundamental fit.',
        ],
      },
      {
        heading: 'Use the current price and refund window',
        paragraphs: [
          'The U.S. regular price was $7.99 when checked, with a temporary launch offer. Regional prices and promotions vary, so open the official Steam page for the real amount. At this scale, value depends less on a universal hours-per-dollar score and more on whether the loop is personally relaxing and whether co-op will be used.',
          'Check the hardware page first, especially for Steam Deck or non-Ubuntu Linux use. Start with a complete cut-process-sell cycle and one upgrade decision. If the physical rhythm, movement and sound are already unpleasant, do not assume a later system changes the genre. Steam’s current refund policy is safer than buying from an unofficial key or download source with weaker update and support paths.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is A Game About Chopping Trees a survival game?',
        answer:
          'The official release is positioned as a relaxing simulation with no timers or stress. Do not buy expecting combat or a broad survival-crafting sandbox.',
      },
      {
        question: 'Is it good for co-op?',
        answer:
          'It supports online co-op and works best for two players who both enjoy the logging loop. Personal money and upgrades require deliberate task sharing.',
      },
      {
        question: 'Does this review give a score?',
        answer:
          'No. The game launched very recently, so this page focuses on fit, confirmed features and current buying risks instead of inventing an aggregate score.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'A Game About Chopping Trees Official Download',
    seoTitle: 'A Game About Chopping Trees Download - Official Steam Only',
    seoDescription:
      'Download A Game About Chopping Trees safely from Steam App 4512570. Avoid fake APKs, cracks, trainers and confusing demo or soundtrack listings.',
    summary:
      'Use Steam App 4512570 for the base game. The demo and soundtrack are separate products, and there is no official mobile APK.',
    category: 'Safety',
    difficulty: 'Reference',
    coverImageUrl: '/a-game-about-chopping-trees/header.jpg',
    publishedAt: '2026-07-16',
    updatedAt: '2026-07-16',
    sourceStrategy: 'official',
    sourceNotes:
      'The Steam store is the only base-game download route endorsed here. No executable, mirror, modded client or APK is redistributed.',
    videoSearchQueries: [
      'A Game About Chopping Trees download',
      'A Game About Chopping Trees Steam',
      'A Game About Chopping Trees demo download',
    ],
    tags: ['Steam', 'Safe download', 'App 4512570'],
    relatedRoutes: [
      '/guides/platforms-release-and-price',
      '/system-requirements',
      '/guides/demo-vs-full-game',
      '/review',
    ],
    body: [
      {
        heading: 'Open the exact Steam base-game page',
        paragraphs: [
          'The official base game is A Game About Chopping Trees, Steam App 4512570. Confirm that the store page names Space Raccoon Game Studio as developer and Spaghetti Cat as publisher before purchasing or installing. Steam supplies updates, achievements, cloud support and the supported online co-op path for this release.',
          'The demo is App 4738320 and the soundtrack is App 4848700. Neither is the paid base game. A soundtrack purchase adds audio content but cannot launch the game by itself. The developer announced that the demo would close before the full release, so an old page promising a permanent free demo may no longer describe current availability.',
        ],
        bullets: [
          'Base game: Steam App 4512570.',
          'Demo: separate Steam App 4738320.',
          'Soundtrack: separate Steam App 4848700.',
          'Current official platforms: Windows and SteamOS + Linux.',
        ],
      },
      {
        heading: 'There is no official mobile APK',
        paragraphs: [
          'Steam currently lists Windows and Linux, not Android or iOS. A site offering an A Game About Chopping Trees APK, mobile port or modified installer is not supplying a platform listed by the official release record. Do not enter Steam credentials into a mirror or disable device security for an unofficial package.',
          'The same warning applies to cracks, trainers, injectors and pre-unlocked achievement saves. The game does not require those tools for progression, co-op or secrets. They add account, malware and save-corruption risk while removing the supported update path. This wiki provides strategy and links, never paid files or modified clients.',
        ],
      },
      {
        heading: 'Install and verify the correct build',
        paragraphs: [
          'After purchase, install from the Steam Library entry whose App ID is 4512570. Let Steam complete the download and any first-run components. Before troubleshooting, use Steam’s installed-files verification rather than copying files from the old demo folder. The two apps can have different saves, settings and build behavior.',
          'For co-op, both players should update before joining. If one client is on a stale build, world interactions, money or route state can be difficult to reproduce. Confirm the same release version, then test a small first-area batch. Keep cloud-save conflicts separate from installation problems and never overwrite the newest save without checking timestamps.',
        ],
      },
      {
        heading: 'Check price and platform at purchase time',
        paragraphs: [
          'Steam uses regional pricing and temporary promotions. The U.S. API snapshot on July 16 showed a $7.99 regular price and a launch discount, but that number is not universal or permanent. The live cart is the authority for currency, tax, bundle discount and refund eligibility.',
          'Windows and SteamOS + Linux are listed; macOS, PS5 and Xbox are not currently listed. Full controller support does not imply a console version. If the intended device is Steam Deck, check the live compatibility panel because Linux support alone is not a Verified rating. Buying through the correct store page keeps those platform notices visible before checkout.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download A Game About Chopping Trees?',
        answer: 'Use the official Steam base-game page for App 4512570.',
      },
      {
        question: 'Is there a free APK?',
        answer:
          'No official Android release or APK is listed. Avoid mirrors, modified packages and sites asking for Steam credentials.',
      },
      {
        question: 'Is the demo the full game?',
        answer:
          'No. The demo is a separate App 4738320, while the released base game is App 4512570.',
      },
    ],
  },
  {
    slug: 'hotfix-3-4-save-crash-fixes',
    path: '/guides/hotfix-3-4-save-crash-fixes',
    title: 'Hot Fixes 3 and 4: Save, Crash and Tree Fixes',
    seoTitle: 'A Game About Chopping Trees Hot Fixes 3 & 4',
    seoDescription:
      'Review Hot Fixes 3 and 4 for CPU crashes, tree detection, save speed, camera FOV, raccoon achievements, New Game Plus and co-op.',
    summary:
      'The July 21–22 hotfix pair repairs current-generation CPU crashes and several progression states that can make tree counts, saves, achievements or New Game Plus look wrong.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/a-game-about-chopping-trees/hero.jpg',
    publishedAt: '2026-07-24',
    updatedAt: '2026-07-24',
    sourceStrategy: 'official',
    sourceNotes:
      'Summarized from official Steam Hot Fix #3 and Hot Fix #4. New games may be required for the New Game Plus quest-retrigger correction.',
    videoSearchQueries: [
      'A Game About Chopping Trees Hot Fix 4',
      'A Game About Chopping Trees CPU crash',
      'A Game About Chopping Trees raccoon achievement',
    ],
    tags: ['Hot Fix 4', 'Save', 'Co-op'],
    relatedRoutes: [
      '/guides/achievements-and-secrets',
      '/guides/co-op-guide',
      '/guides/upgrades-and-progression',
      '/guides/controls-gamepad-and-sprint',
    ],
    body: [
      {
        heading: 'Hot Fix 4 targets launch crashes and tree detection',
        paragraphs: [
          'Hot Fix #4 attempts to resolve a client crash seen on newer-generation CPUs and improves tree detection inside zone volumes. Update before changing compatibility settings or assuming the zone objective is permanently blocked.',
          'Retest the same tree area after the patch. If the count still fails, note the zone, tree type, whether the tree fully fell and whether the save began before the update.',
        ],
      },
      {
        heading: 'Hot Fix 3 repairs several saved states',
        paragraphs: [
          'The previous patch fixes the saved speed attribute, camera field of view after using the polaroid, missing soundtrack DLC tracks and a raccoon achievement that could fail on some clients. It also corrects falling-tree counts used by zone volumes.',
          'Restart the game after updating and retest the existing profile before replaying an achievement. For the raccoon goal, confirm all statues remain collected and let Steam synchronize before forcing a new save.',
        ],
      },
      {
        heading: 'New Game Plus has one important limitation',
        paragraphs: [
          'The quest-retrigger correction for completed zones is documented as working only for new games created after the fix. An older New Game Plus profile may therefore retain the previous bad state.',
          'Keep the old save as a backup, then create a fresh post-patch game when the blocked quest matters more than preserving that run. Do not overwrite the only working profile while testing.',
        ],
      },
      {
        heading: 'Co-op phantom players should be gone',
        paragraphs: [
          'Hot Fix 3 includes a correction for phantom players in co-op. Both players should update and restart before loading the shared route.',
          'If a ghost slot remains, have the host close the session cleanly, verify the current build on both clients and retry once without changing the world save.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which patch targets newer CPU crashes?',
        answer: 'Official Hot Fix #4 lists that attempted fix.',
      },
      {
        question: 'Will the New Game Plus quest fix repair every old save?',
        answer:
          'No. The developer says the retrigger correction works for newly created games.',
      },
    ],
  },
];

export const featuredGuides = guides.filter((guide) =>
  [
    'beginner-guide',
    'upgrades-and-progression',
    'co-op-guide',
    'handcar-biomes-and-bridges',
    'achievements-and-secrets',
    'controls-gamepad-and-sprint',
  ].includes(guide.slug)
);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

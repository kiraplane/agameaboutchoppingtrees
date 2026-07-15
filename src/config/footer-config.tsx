'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        { title: 'Should You Buy?', href: Routes.Review, external: false },
      ],
    },
    {
      title: 'Progress',
      items: [
        {
          title: 'Upgrades',
          href: Routes.UpgradesProgression,
          external: false,
        },
        {
          title: 'Handcar & Biomes',
          href: Routes.HandcarBiomesBridges,
          external: false,
        },
        {
          title: 'Achievements',
          href: Routes.AchievementsSecrets,
          external: false,
        },
      ],
    },
    {
      title: 'Play',
      items: [
        { title: 'Co-op Guide', href: Routes.CoOpGuide, external: false },
        {
          title: 'Controls & Sprint',
          href: Routes.ControlsGamepadSprint,
          external: false,
        },
        {
          title: 'Demo vs Full Game',
          href: Routes.DemoFullGame,
          external: false,
        },
      ],
    },
    {
      title: 'Steam',
      items: [
        {
          title: 'Release & Platforms',
          href: Routes.PlatformsReleasePrice,
          external: false,
        },
        {
          title: 'System Requirements',
          href: Routes.SystemRequirements,
          external: false,
        },
        { title: 'Official Download', href: Routes.Download, external: false },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        { title: 'Privacy', href: Routes.PrivacyPolicy, external: false },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookies', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}

'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  Axe,
  BookOpen,
  Download,
  Gamepad2,
  TrainFront,
  Trophy,
  Users,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'All 11 current guides in one focused index.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'Build a clean cut, process, sell and upgrade loop.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Axe className="size-4" />,
        },
        {
          title: 'Upgrades',
          description: 'Choose Axe, Endurance, Woodgrip and travel upgrades.',
          href: Routes.UpgradesProgression,
          external: false,
          icon: <Axe className="size-4" />,
        },
      ],
    },
    {
      title: 'Progress',
      href: Routes.HandcarBiomesBridges,
      external: false,
      icon: <TrainFront className="size-4" />,
      items: [
        {
          title: 'Handcar & biomes',
          description: 'Plan Birch, Oak, bridges and the travel loop.',
          href: Routes.HandcarBiomesBridges,
          external: false,
          icon: <TrainFront className="size-4" />,
        },
        {
          title: 'Achievements',
          description: 'Track all 15 official goals and secrets.',
          href: Routes.AchievementsSecrets,
          external: false,
          icon: <Trophy className="size-4" />,
        },
        {
          title: 'Co-op guide',
          description:
            'Share the forest while money and upgrades stay personal.',
          href: Routes.CoOpGuide,
          external: false,
          icon: <Users className="size-4" />,
        },
      ],
    },
    {
      title: 'Steam',
      href: Routes.PlatformsReleasePrice,
      external: false,
      icon: <Gamepad2 className="size-4" />,
      items: [
        {
          title: 'Release & platforms',
          description: 'Check price, Windows/Linux and console status.',
          href: Routes.PlatformsReleasePrice,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Controls & sprint',
          description: 'Diagnose gamepad, binding and sprint problems.',
          href: Routes.ControlsGamepadSprint,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Use Steam App 4512570 and avoid fake APKs.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}

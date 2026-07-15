import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/a-game-about-chopping-trees/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Axe,
  BookOpen,
  ChevronDown,
  Compass,
  Download,
  Gamepad2,
  Gauge,
  Menu,
  ShieldCheck,
  TrainFront,
  Trophy,
  Users,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: BookOpen,
    routes: ['/', '/guides', '/guides/beginner-guide', '/review'],
  },
  {
    title: 'Progression',
    icon: Axe,
    routes: [
      '/guides/upgrades-and-progression',
      '/guides/handcar-biomes-and-bridges',
      '/guides/achievements-and-secrets',
    ],
  },
  {
    title: 'Co-op & Controls',
    icon: Users,
    routes: ['/guides/co-op-guide', '/guides/controls-gamepad-and-sprint'],
  },
  {
    title: 'Release & Install',
    icon: ShieldCheck,
    routes: [
      '/guides/demo-vs-full-game',
      '/guides/platforms-release-and-price',
      '/system-requirements',
      '/download',
      '/disclaimer',
    ],
  },
] as const;

const routeCount = wikiNavRoutes.reduce(
  (count, group) => count + group.routes.length,
  0
);

function isCurrentPath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function WikiLink({
  currentPath,
  href,
}: { currentPath?: string; href: string }) {
  const active = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal rounded-lg border px-3 py-2 text-left text-sm leading-6 transition',
        active
          ? 'border-[#f2b84b] bg-[#f2b84b] font-semibold text-[#07140f]'
          : 'border-[#315b42] bg-[#07140f] text-[#a8c7b2] hover:border-[#63c174] hover:bg-[#183824] hover:text-[#f8f1dc]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#07140f]' : 'text-[#63c174]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return wikiNavRoutes.map((group) => {
    const active = group.routes.some((route) =>
      isCurrentPath(currentPath, route)
    );

    return (
      <details
        key={group.title}
        open={active}
        className={cn(
          'group rounded-lg border p-3',
          active
            ? 'border-[#f2b84b]/70 bg-[#f2b84b]/8'
            : 'border-[#315b42] bg-[#07140f]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f8f1dc] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#63c174]" />
            <span className="min-w-0 break-words">{group.title}</span>
            <span className="text-[#a8c7b2] text-xs">
              {group.routes.length}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#f2b84b] transition group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2">
          {group.routes.map((route) => (
            <WikiLink key={route} currentPath={currentPath} href={route} />
          ))}
        </div>
      </details>
    );
  });
}

export function WikiRouteSidebar({
  children,
  currentPath,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <aside className="sticky top-24 hidden w-[272px] shrink-0 self-start space-y-4 lg:block">
      <div className="rounded-xl border border-[#315b42] bg-[#10251a] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#63c174]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 break-words font-display text-lg font-bold text-[#f8f1dc]">
              Chopping Trees
            </h2>
          </div>
          <Compass className="size-5 shrink-0 text-[#f2b84b]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
        <p className="mt-4 border-[#315b42] border-t pt-3 text-[#83a98d] text-xs">
          {routeCount} focused wiki routes
        </p>
      </div>

      {sectionLinks.length ? (
        <div className="rounded-xl border border-[#315b42] bg-[#10251a] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#63c174]">
            On this page
          </p>
          <div className="mt-3 grid gap-2">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-w-0 break-words rounded-lg border border-[#315b42] bg-[#07140f] px-3 py-2 text-[#a8c7b2] text-sm leading-6 hover:border-[#63c174] hover:text-[#f8f1dc]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {children}
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <details className="group mt-5 rounded-xl border border-[#315b42] bg-[#10251a] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#f8f1dc] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <Menu className="size-4 text-[#63c174]" />
          Open wiki menu
          <Badge className="bg-[#f2b84b] text-[#07140f]">{routeCount}</Badge>
        </span>
        <ChevronDown className="size-4 text-[#f2b84b] transition group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-3 border-[#315b42] border-t pt-4">
        <NavGroups currentPath={currentPath} />
        {sectionLinks.length ? (
          <details className="rounded-lg border border-[#315b42] bg-[#07140f] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[#f8f1dc]">
              On this page
            </summary>
            <div className="mt-3 grid gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="break-words rounded-lg border border-[#315b42] px-3 py-2 text-[#a8c7b2] text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </details>
  );
}

export function QuickWikiLinks({ className }: { className?: string }) {
  const routes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    {
      href: '/guides/upgrades-and-progression',
      label: 'Upgrades',
      icon: Gauge,
    },
    { href: '/guides/co-op-guide', label: 'Co-op', icon: Users },
    {
      href: '/guides/handcar-biomes-and-bridges',
      label: 'Biomes',
      icon: TrainFront,
    },
    {
      href: '/guides/achievements-and-secrets',
      label: 'Achievements',
      icon: Trophy,
    },
    {
      href: '/guides/controls-gamepad-and-sprint',
      label: 'Controls',
      icon: Gamepad2,
    },
    { href: '/download', label: 'Steam', icon: Download },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#315b42] bg-[#07140f]/85 px-2.5 py-1.5 text-[#f8f1dc] text-xs transition hover:border-[#63c174] hover:bg-[#183824] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#63c174]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}

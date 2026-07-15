'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="A Game About Chopping Trees Wiki logo"
      title="A Game About Chopping Trees Wiki"
      className={cn(
        'relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg',
        'bg-[#07140f] shadow-[0_0_24px_rgba(242,184,75,0.2)]',
        className
      )}
    >
      <Image
        src="/logo.svg"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
      />
    </span>
  );
}

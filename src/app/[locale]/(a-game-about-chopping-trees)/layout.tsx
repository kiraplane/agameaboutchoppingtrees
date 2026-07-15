import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function ChoppingTreesLayout({
  children,
}: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#07140f]">
      <Navbar scroll={true} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

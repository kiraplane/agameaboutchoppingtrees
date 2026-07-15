import type { GuideFaq } from '@/data/a-game-about-chopping-trees/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-xl border border-[#315b42] bg-[#10251a] p-5 md:p-6',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#f8f1dc]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#315b42] bg-[#07140f] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#f8f1dc] transition group-open:text-[#f2b84b]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#a8c7b2]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

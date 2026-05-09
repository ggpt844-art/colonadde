"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
};

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm divide-y divide-black/5 overflow-hidden">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c89535] focus-visible:ring-inset"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-[15px] text-[#1a1a1a] leading-tight">
                {item.q}
              </span>
              <span className="grid place-items-center w-7 h-7 rounded-full bg-[#c89535]/15 text-[#a67a1f] shrink-0">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[14.5px] text-[#2c2c2c] leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import ToothMark from "./ToothMark";

type Props = {
  phone: string;
};

export default function FloatingNav({ phone }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-3 z-40 w-[calc(100%-1.5rem)] max-w-2xl transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-2 rounded-full border border-black/5 bg-white/95 backdrop-blur-md px-3 py-2 shadow-xl shadow-black/10">
        <Link
          href="/"
          aria-label="Colonnade Dental — home"
          className="flex items-center gap-2 pl-1 pr-2 text-[#1a1a1a]"
        >
          <ToothMark size={30} />
          <span className="text-[14px] font-bold tracking-tight">Home</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-[13.5px] font-semibold text-[#1a1a1a]/75 px-2">
          <Link href="/about" className="hover:text-[#0e6e7d] transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-[#0e6e7d] transition-colors">
            Services
          </Link>
          <Link href="/#reviews" className="hover:text-[#0e6e7d] transition-colors">
            Reviews
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/#book"
            className="rounded-full border border-[#0e6e7d] text-[#0e6e7d] px-3.5 py-1.5 text-[13px] font-semibold hover:bg-[#0e6e7d]/5 transition-colors flex items-center gap-1.5"
          >
            <Calendar size={13} />
            Book
          </Link>
          <a
            href={`tel:${phone}`}
            className="rounded-full bg-[#0e6e7d] text-white px-3.5 py-1.5 text-[13px] font-bold hover:bg-[#08515c] transition-colors flex items-center gap-1.5"
            aria-label="Call Colonnade Dental"
          >
            <Phone size={13} />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}

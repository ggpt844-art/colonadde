import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";
import ToothMark from "./ToothMark";
import MobileMenu from "./MobileMenu";
import { CLINIC, NAV_LINKS } from "@/lib/clinic";

/**
 * Shared header used on every page.
 * - Lives on cream (light) backgrounds.
 * - Mobile nav lives in <MobileMenu>; desktop nav inline.
 * - "Book Now" sends to home #book section so all pages funnel to one CTA.
 */
export default function SiteHeader() {
  return (
    <header className="relative z-30 flex items-center justify-between gap-4 px-5 md:px-10 pt-5 pb-4">
      <Link
        href="/"
        aria-label="Colonnade Dental — home"
        className="flex items-center gap-3"
      >
        <ToothMark size={48} />
        <div className="leading-[0.95]">
          <div className="font-black tracking-wide text-[15px] text-[#1a1a1a]">
            COLONNADE
          </div>
          <div className="text-[#0e6e7d] text-[9px] tracking-[0.3em] font-bold mt-0.5">
            DENTAL
          </div>
          <div className="text-[#2c2c2c] text-[8px] tracking-wider mt-0.5">
            {CLINIC.doctor.name} &amp; Associates
          </div>
        </div>
      </Link>

      <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#1a1a1a]/75">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="hover:text-[#0e6e7d] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={`https://wa.me/${CLINIC.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="hidden md:inline-grid place-items-center w-10 h-10 rounded-full bg-[#25d366] text-white hover:bg-[#1ebe57] transition-colors"
        >
          <MessageCircle size={18} />
        </a>
        <Link
          href="/#book"
          className="hidden sm:inline-flex rounded-full bg-[#0e6e7d] text-white px-5 py-2.5 text-sm font-bold hover:bg-[#08515c] transition-colors items-center gap-2 shadow-md shadow-[#0e6e7d]/20"
        >
          <Calendar size={15} />
          Book Now
        </Link>
        <MobileMenu
          phone={CLINIC.phone}
          phoneDisplay={CLINIC.phoneDisplay}
          whatsapp={CLINIC.whatsapp}
        />
      </div>
    </header>
  );
}

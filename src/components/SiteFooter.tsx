import { Phone, MessageCircle, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { hours } from "@/lib/content";
import { InstagramIcon, FacebookIcon, GoogleIcon } from "./SocialIcons";
import Reveal from "./Reveal";

/**
 * Shared dark-themed footer.
 * Contains the contact rows, embedded Google Map, working hours, and socials.
 */
export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="px-5 pt-20 pb-10 bg-[#1a1a1a] text-white"
    >
      <div className="max-w-md mx-auto">
        <p className="text-[#f3deaa] text-[11px] tracking-[0.25em] uppercase font-bold mb-3 text-center">
          Visit Us
        </p>
        <h2 className="font-display text-[34px] font-black leading-[1.05] tracking-tight text-center">
          We&apos;d love to see your smile.
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          <a
            href={`tel:${CLINIC.phone}`}
            className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#c89535] text-[#1a1a1a]">
              <Phone size={18} />
            </span>
            <div>
              <div className="text-white/80 text-[12px] uppercase tracking-wider">
                Phone
              </div>
              <div className="font-semibold">{CLINIC.phoneDisplay}</div>
            </div>
          </a>
          <a
            href={`https://wa.me/${CLINIC.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#25d366]">
              <MessageCircle size={18} />
            </span>
            <div>
              <div className="text-white/80 text-[12px] uppercase tracking-wider">
                WhatsApp
              </div>
              <div className="font-semibold">Chat with the front desk</div>
            </div>
          </a>
          <a
            href={`mailto:${CLINIC.email}`}
            className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#c89535] text-[#1a1a1a]">
              <Mail size={18} />
            </span>
            <div>
              <div className="text-white/80 text-[12px] uppercase tracking-wider">
                Email
              </div>
              <div className="font-semibold">{CLINIC.email}</div>
            </div>
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#c89535] text-[#1a1a1a]">
              <MapPin size={18} />
            </span>
            <div>
              <div className="text-white/80 text-[12px] uppercase tracking-wider">
                Address
              </div>
              <div className="font-semibold leading-tight">
                {CLINIC.address.line1}
                <br />
                <span className="text-white/85 text-sm font-normal">
                  {CLINIC.address.line2}
                </span>
                <br />
                <span className="text-white/80 text-[12px] font-normal block mt-1.5">
                  Free patient parking on site · Wheelchair-accessible entrance ·
                  Ground floor of The Colonnade building (NW corner of
                  Hurontario &amp; Dundas)
                </span>
              </div>
            </div>
            <ChevronRight size={18} className="ml-auto text-white/75 self-center" />
          </a>
        </div>

        <Reveal>
          <div className="mt-4 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#222] aspect-[4/3] relative">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CLINIC.mapsQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              title="Colonnade Dental — Mississauga, ON"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#c89535]/10 rounded-3xl" />
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[#f3deaa] text-sm font-semibold hover:gap-2 hover:text-white transition-all"
          >
            Get directions
            <ChevronRight size={16} />
          </a>
        </Reveal>

        <div className="mt-8 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
          <div className="flex items-center gap-2 mb-4 text-[#f3deaa]">
            <Clock size={16} />
            <h3 className="font-bold uppercase tracking-wider text-sm">
              Office Hours
            </h3>
          </div>
          <ul className="flex flex-col gap-2.5">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between text-[14px]"
              >
                <span className="text-white/85">{h.day}</span>
                <span
                  className={`font-semibold ${
                    h.time === "Closed" ? "text-white/75" : "text-white"
                  }`}
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={CLINIC.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#c89535] hover:text-[#1a1a1a] transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href={CLINIC.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#c89535] hover:text-[#1a1a1a] transition-colors"
          >
            <FacebookIcon />
          </a>
          <a
            href={CLINIC.social.google}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Reviews"
            className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#c89535] hover:text-[#1a1a1a] transition-colors"
          >
            <GoogleIcon />
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/75 text-xs">
          © 2026 Colonnade Dental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

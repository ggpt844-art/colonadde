import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  Phone,
  ShieldCheck,
  Check,
  Sparkles,
  Microscope,
  Zap,
  CreditCard,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import SmileDiagram from "@/components/SmileDiagram";
import InsurancePlate from "@/components/InsurancePlate";
import { CLINIC } from "@/lib/clinic";
import { services, treatments } from "@/lib/content";
import { IMAGE_BLUR } from "@/lib/imageBlur";

export const metadata: Metadata = {
  title: "Dental Services — Colonnade Dental",
  description:
    "All 13 services from Colonnade Dental in Mississauga: hygiene, tooth restoration, bonding, veneers, whitening, crowns, periodontal therapy, root canals, extractions, cosmetic dentistry, implants, dentures, and Chao Pinhole® gum rejuvenation. Microscope and laser tech included.",
  alternates: { canonical: "https://colonnadedental.com/services" },
};

export default function ServicesPage() {
  return (
    <main id="main" className="relative bg-[#faf6ee] text-[#1a1a1a]">
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      {/* Header band */}
      <section className="relative bg-[#faf6ee] overflow-hidden">
        <div aria-hidden className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#c89535] opacity-[0.18] blur-[120px]" />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Dental Services
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              Modern dentistry for the{" "}
              <span className="text-[#a67a1f] italic">whole family.</span>
            </h1>
            <p className="mt-5 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              Our team is well-experienced in every area of modern dentistry — preventative,
              cosmetic, restorative, and surgical — all under one roof, all with surgical-microscope
              and laser tech included at no extra cost.
            </p>
            <div className="mt-7">
              <Link
                href="/#book"
                className="inline-flex items-center gap-2 rounded-full bg-[#c89535] text-[#1a1a1a] px-7 py-3.5 font-bold text-sm hover:bg-[#a67a1f] hover:text-white transition-colors shadow-md shadow-[#c89535]/30"
              >
                <Calendar size={16} />
                Book a New Patient Visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Smile zones */}
      <section
        id="what-we-treat"
        className="px-5 py-20 bg-white border-y border-black/5"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.05fr] gap-12 items-center">
          <Reveal>
            <SmileDiagram className="max-w-[460px] mx-auto" />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                What We Treat
              </p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-black leading-tight tracking-tight">
                Every smile zone, <span className="text-[#a67a1f] italic">one trusted team</span>.
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15.5px] leading-relaxed">
                Whether it&apos;s a routine cleaning, a chipped front tooth, a deep-decay molar, or
                gum disease — every concern gets the same gentle, microscope-precise approach.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  { area: "Front teeth", note: "Veneers, whitening, bonding" },
                  { area: "Smile design", note: "Cosmetic & full makeovers" },
                  { area: "Molars", note: "Crowns, fillings, root canals" },
                  { area: "Gums", note: "Cleanings, periodontal & Chao Pinhole®" },
                ].map((it) => (
                  <li
                    key={it.area}
                    className="rounded-2xl bg-[#faf6ee] ring-1 ring-black/5 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-[#a67a1f]" strokeWidth={2.5} />
                      <span className="font-bold text-[15px]">{it.area}</span>
                    </div>
                    <p className="mt-1 text-[#2c2c2c] text-[13px] leading-relaxed">
                      {it.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core service pillars — 3 big cards */}
      <section id="services" className="px-5 py-20 bg-[#faf6ee]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Three Pillars
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-[1.05] tracking-tight">
              How we help.
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-md mx-auto">
              Three core service pillars, all delivered with the same patient-first approach.
            </p>
          </Reveal>
        </div>

        <ul className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} as="li">
              <article className="group rounded-3xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-[22px] font-black leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[#2c2c2c] text-[14.5px] leading-relaxed flex-1">
                    {s.blurb}
                  </p>
                  <Link
                    href="/#book"
                    className="mt-5 inline-flex items-center gap-1.5 text-[#a67a1f] font-bold text-sm hover:gap-2 transition-all"
                  >
                    Book a visit <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* All 13 treatments grid — pulled directly from his /dental-services */}
      <section
        id="treatments"
        className="px-5 py-20 bg-[#f0e6cf] border-y border-black/5"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              All 13 Services
            </p>
            <h2 className="font-display text-[34px] sm:text-[40px] font-black leading-[1.05] tracking-tight">
              Every treatment <span className="text-[#a67a1f] italic">we offer</span>.
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[14.5px] max-w-lg mx-auto leading-relaxed">
              The full menu pulled from colonnadedental.com/dental-services — the actual
              services Dr. How and the team perform every week.
            </p>
          </Reveal>
        </div>
        <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {treatments.map((t, i) => (
            <Reveal key={t.title} delay={i * 60} as="li">
              <div className="rounded-2xl p-6 bg-white ring-1 ring-black/5 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-[#a67a1f]" />
                  <h3 className="font-bold text-[16.5px] leading-tight">
                    {t.title}
                  </h3>
                </div>
                <p className="text-[#2c2c2c] text-[14px] leading-relaxed">
                  {t.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Featured tech: microscope + laser (real differentiators) */}
      <section className="px-5 py-20 bg-[#1a1a1a] text-white relative bg-noise">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#c89535] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Included on Every Visit
              </p>
              <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
                Microscope-enhanced.{" "}
                <span className="text-[#c89535] italic">Laser-assisted.</span>
              </h2>
              <p className="mt-4 text-white/80 text-[15px] max-w-xl mx-auto leading-relaxed">
                Both are routine here — never an upgrade or upcharge.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            <Reveal delay={120}>
              <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-7 h-full">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#c89535] text-[#1a1a1a] mb-5">
                  <Microscope size={22} />
                </span>
                <h3 className="font-display text-[22px] font-black leading-tight">
                  Surgical Microscope
                </h3>
                <p className="text-[#c89535] text-[12px] tracking-wider uppercase font-bold mt-1">
                  Up to 12× magnification
                </p>
                <p className="mt-3 text-white/85 text-[14.5px] leading-relaxed">
                  At low magnification a cavity may not be obvious; at 8× it becomes apparent and
                  the tooth can be restored with maximum conservation of healthy structure. Live video
                  feed and image capture make every finding clear to you.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-7 h-full">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#c89535] text-[#1a1a1a] mb-5">
                  <Zap size={22} />
                </span>
                <h3 className="font-display text-[22px] font-black leading-tight">
                  Laser Dentistry
                </h3>
                <p className="text-[#c89535] text-[12px] tracking-wider uppercase font-bold mt-1">
                  KaVo K.E.Y · Fotona Lightwalker AT-S
                </p>
                <p className="mt-3 text-white/85 text-[14.5px] leading-relaxed">
                  From simple incisions to soft-tissue surgery and root-canal disinfection
                  via Fotona&apos;s SWEEPS technology — gentler, less painful, less bleeding,
                  often with less anaesthetic and faster healing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Financial / billing — verified from /financial-arrangements */}
      <section className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3 inline-flex items-center gap-2">
                <CreditCard size={13} /> Fees &amp; Billing
              </p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-black leading-tight tracking-tight">
                Predictable pricing. <span className="text-[#a67a1f] italic">Direct billing.</span>
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-lg mx-auto">
                Our fees follow the current Ontario Dental Association fee guide. Before treatment,
                fees and arrangements are discussed openly so there are no surprises.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-3 gap-3">
            {[
              {
                title: "ODA Fee Guide",
                body: "Pricing follows the current Ontario Dental Association schedule — predictable and transparent.",
              },
              {
                title: "Direct Insurance Billing",
                body: "We bill your insurance and submit co-insurance forms on your behalf at no extra charge.",
              },
              {
                title: "Flexible Payment",
                body: "Visa, MasterCard, Debit, Cash, and personal cheques accepted. NSF cheques: standard $25 charge.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 100} as="li">
                <div className="rounded-2xl bg-[#faf6ee] ring-1 ring-black/5 p-5 h-full">
                  <span className="grid place-items-center w-10 h-10 mb-3 rounded-full bg-[#c89535]/15 text-[#a67a1f]">
                    <Check size={18} strokeWidth={2.5} />
                  </span>
                  <h3 className="font-bold text-[15.5px] text-[#1a1a1a] leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-[#2c2c2c] text-[13.5px] leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={350}>
            <p className="mt-6 text-center text-[#2c2c2c] text-[12.5px] leading-relaxed max-w-lg mx-auto">
              Bring your dental benefit booklet on your first visit and we&apos;ll
              confirm coverage. Please give 24 hours&apos; notice for cancellations
              (a $75 charge may apply for no-shows).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Insurance plate */}
      <section
        id="insurance"
        className="px-5 py-20 bg-[#f0e6cf]"
      >
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 text-[#6f8a7f] text-[11px] tracking-[0.18em] uppercase font-bold mb-3">
                <ShieldCheck size={13} />
                Direct billing available
              </span>
              <h2 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                We work with all major Canadian dental insurers.
              </h2>
              <p className="mt-3 text-[#2c2c2c] text-[14.5px] max-w-md mx-auto leading-relaxed">
                Our team will happily verify your benefits before your visit and
                submit claims directly. Just call or WhatsApp the front desk
                and we&apos;ll handle the rest.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <InsurancePlate />
          </Reveal>
          <p className="mt-6 text-center text-[#2c2c2c] text-[12.5px]">
            Not on the list? Most extended-health and dental plans cover
            general dentistry.{" "}
            <a
              href={`tel:${CLINIC.phone}`}
              className="text-[#a67a1f] font-semibold hover:underline"
            >
              Call us
            </a>{" "}
            and we&apos;ll check yours.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 bg-white border-t border-black/5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[28px] sm:text-[32px] font-black leading-tight">
            Ready for a smile you love?
          </h2>
          <p className="mt-3 text-[#2c2c2c] text-[15px] leading-relaxed">
            Book a visit — most new patients are seen within the week.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c89535] text-[#1a1a1a] px-7 py-4 font-bold text-[15px] hover:bg-[#a67a1f] hover:text-white transition-colors shadow-lg shadow-[#c89535]/30"
            >
              <Calendar size={16} />
              Book a Visit
            </Link>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a1a1a]/25 text-[#1a1a1a] px-7 py-4 font-semibold text-[15px] hover:bg-[#1a1a1a]/5 transition-colors"
            >
              <Phone size={16} />
              {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

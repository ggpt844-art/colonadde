import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Phone,
  Calendar,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Check,
  Microscope,
  Zap,
  ScanSearch,
  Stethoscope,
  Award as AwardIcon,
} from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import HeroVideo from "@/components/HeroVideo";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Quiz from "@/components/Quiz";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AwardBadge from "@/components/AwardBadge";
import ColonnadeMark from "@/components/ColonnadeMark";
import { InstagramIcon } from "@/components/SocialIcons";
import { CLINIC } from "@/lib/clinic";
import {
  features,
  faqItems,
  firstVisitSteps,
  promiseCards,
  awards,
  affiliations,
  smileGalleryCategories,
  treatments,
} from "@/lib/content";
import { IMAGE_BLUR, PHOTOS } from "@/lib/imageBlur";

export default function Home() {
  return (
    <main id="main" className="relative bg-[#faf6ee] text-[#1a1a1a]">
      <span id="top" aria-hidden />
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      {/* ────────────────────────── HERO ────────────────────────── */}
      <section className="relative bg-[#faf6ee] text-[#1a1a1a] overflow-hidden">
        <div aria-hidden className="drift-x pointer-events-none absolute -top-40 -right-40 w-[460px] h-[460px] rounded-full bg-[#c89535] opacity-[0.18] blur-[120px]" />
        <div aria-hidden className="drift-y pointer-events-none absolute top-1/3 -left-40 w-[360px] h-[360px] rounded-full bg-[#c89535] opacity-[0.14] blur-[120px]" />

        <SiteHeader />

        <div className="relative px-5 pt-8 md:pt-14 pb-14 lg:pb-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#c89535]/30 px-3.5 py-1.5 text-[11px] tracking-widest uppercase text-[#a67a1f] font-bold mb-7 shadow-sm">
              <Sparkles size={12} />
              Family Practice · {CLINIC.yearsServing} Years in Mississauga
            </div>
            <h1 className="font-display text-[44px] sm:text-[60px] md:text-[72px] leading-[0.98] font-black tracking-[-0.02em]">
              A beautiful smile{" "}
              <span className="text-[#a67a1f] italic">never goes out of style.</span>
            </h1>
            <p className="mt-7 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-lg mx-auto">
              Family-owned dentistry in Mississauga led by{" "}
              <strong className="text-[#1a1a1a]">{CLINIC.doctor.name}, {CLINIC.doctor.credentials}</strong>.
              Surgical microscopes and laser dentistry on every visit — at no extra cost.
            </p>

            <div className="mt-9 grid sm:grid-cols-[auto_auto] gap-3 justify-center items-center">
              <a
                href="#book"
                className="group rounded-full bg-[#c89535] text-[#1a1a1a] px-7 py-4 font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#a67a1f] hover:text-white transition-all shadow-xl shadow-[#c89535]/35 hover:shadow-[#a67a1f]/40 hover:-translate-y-0.5"
              >
                <Calendar size={18} />
                Book a New Patient Visit
              </a>
              <a
                href={`tel:${CLINIC.phone}`}
                className="rounded-full border border-[#1a1a1a]/25 text-[#1a1a1a] px-6 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#1a1a1a]/5 transition-colors"
              >
                <Phone size={18} />
                {CLINIC.phoneDisplay}
              </a>
            </div>

            <div className="mt-5 inline-flex items-center gap-3 text-[12.5px] text-[#2c2c2c]">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#6f8a7f] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6f8a7f]" />
                </span>
                <strong className="text-[#1a1a1a]">Now welcoming new patients</strong>
              </span>
              <span aria-hidden className="opacity-30">·</span>
              <span>Direct billing to insurance</span>
            </div>

            <ul className="mt-6 flex flex-wrap justify-center gap-1.5 text-[11.5px] text-[#2c2c2c]">
              {[
                "Surgical microscope · 12× magnification",
                "KaVo K.E.Y + Fotona Lightwalker AT-S laser",
                "ODA fee guide pricing",
              ].map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-black/5 px-3 py-1 shadow-sm"
                >
                  <Check size={11} className="text-[#6f8a7f]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={150}>
            <HeroVideo
              src="https://videos.pexels.com/video-files/4269030/4269030-uhd_2560_1440_25fps.mp4"
              poster={PHOTOS.heroVideoPoster}
              className="mt-12 max-w-md lg:max-w-lg mx-auto rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl shadow-black/15 ring-1 ring-black/5"
            />
            <div className="relative max-w-md lg:max-w-lg mx-auto -mt-20 px-6 pb-1 z-10 flex items-end justify-between">
              <div className="absolute -top-44 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-[#1a1a1a] ring-1 ring-black/10 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#c89535] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c89535]" />
                </span>
                Now booking
              </div>
              <div className="flex items-center gap-2 text-[#1a1a1a] text-sm font-semibold">
                <ColonnadeMark size={36} />
                Colonnade Dental · Mississauga
              </div>
              <div className="flex items-center gap-1 text-[#a67a1f] text-[12px] font-bold uppercase tracking-wider">
                <Microscope size={13} />
                Microscope
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── BY THE NUMBERS — REAL FACTS ──────────────────────────
          No fabricated patient counts, ratings, or reviews — only verified facts. */}
      <section
        aria-label="Colonnade Dental at a glance"
        className="relative bg-white border-y border-black/5 px-5 py-10"
      >
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            {
              value: <>{CLINIC.yearsServing}</>,
              suffix: "yrs",
              label: "Serving Mississauga",
            },
            {
              value: <>12×</>,
              label: "Surgical-microscope magnification",
            },
            {
              value: <>2</>,
              label: "Laser systems · KaVo + Fotona",
            },
            {
              value: <>13</>,
              label: "Dental services under one roof",
            },
          ].map((stat) => (
            <li key={stat.label} className="flex flex-col items-center px-2">
              <div className="font-display text-[34px] sm:text-[42px] font-black text-[#a67a1f] leading-none flex items-baseline gap-1">
                <span>{stat.value}</span>
                {stat.suffix && (
                  <span className="text-[18px] font-bold text-[#a67a1f]/80">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="mt-2 text-[12px] sm:text-[13px] text-[#2c2c2c] uppercase tracking-wider font-semibold leading-snug max-w-[170px]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ────────────────────────── ABOUT TEASER ────────────────────────── */}
      <section id="about-teaser" className="px-5 py-20 bg-[#faf6ee]">
        <div className="max-w-2xl mx-auto grid sm:grid-cols-[auto_1fr] gap-7 items-center">
          <Reveal>
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-md mx-auto">
              <Image
                src={PHOTOS.drHow}
                alt={`${CLINIC.doctor.name}, ${CLINIC.doctor.credentials}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 200px, 200px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Meet Dr. How
              </p>
              <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight tracking-tight">
                Twenty years of <span className="text-[#a67a1f] italic">microscope-precision</span> dentistry in Mississauga.
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
                {CLINIC.doctor.name} graduated from the {CLINIC.doctor.school} in {CLINIC.doctor.gradYear} and
                completed a residency at {CLINIC.doctor.residency}. He is a member of the Ontario, Canadian, and
                International dental associations — and treats every patient as he would his own family.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] text-white px-5 py-2.5 font-bold text-sm hover:bg-[#c89535] hover:text-[#1a1a1a] transition-colors shadow-md shadow-black/15"
                >
                  Read his full story <ChevronRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#1a1a1a]/25 text-[#1a1a1a] px-5 py-2.5 font-semibold text-sm hover:bg-[#1a1a1a]/5 transition-colors"
                >
                  See what we treat
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── TECHNOLOGY (REAL DIFFERENTIATOR) ────────────────────────── */}
      <section id="technology" className="px-5 py-20 bg-[#1a1a1a] text-white relative bg-noise">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#c89535] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                The Tech, Included
              </p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-[1.05] tracking-tight">
                One of the few clinics in Ontario using{" "}
                <span className="text-[#c89535] italic">microscopes and lasers</span> on every visit.
              </h2>
              <p className="mt-4 text-white/80 text-[15px] leading-relaxed max-w-xl mx-auto">
                These tools are routine here, never an upcharge. Greater visibility means more
                accurate diagnosis, gentler treatment, and longer-lasting results.
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
                  Surgical microscope · up to 12× magnification
                </h3>
                <ul className="mt-4 flex flex-col gap-2 text-[14px] text-white/85 leading-relaxed">
                  {[
                    "Shadow-free integrated lighting at high magnification",
                    "Live video feed with image capture for clear communication",
                    "Earlier detection — minor issues spotted before they grow",
                    "Maximum conservation of healthy tooth structure",
                  ].map((b) => (
                    <li key={b} className="flex gap-2">
                      <Check size={16} className="text-[#c89535] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-7 h-full">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#c89535] text-[#1a1a1a] mb-5">
                  <Zap size={22} />
                </span>
                <h3 className="font-display text-[22px] font-black leading-tight">
                  Laser dentistry · KaVo K.E.Y + Fotona Lightwalker AT-S
                </h3>
                <ul className="mt-4 flex flex-col gap-2 text-[14px] text-white/85 leading-relaxed">
                  {[
                    "Gentle, less painful, less bleeding — often less anesthetic needed",
                    "No vibration, no drilling noise",
                    "SWEEPS technology disinfects deep, hard-to-reach root canals",
                    "Targeted treatment, faster wound healing, minimal post-op",
                  ].map((b) => (
                    <li key={b} className="flex gap-2">
                      <Check size={16} className="text-[#c89535] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={350}>
            <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 flex items-center gap-3 text-[13.5px] text-white/85">
              <ScanSearch size={20} className="text-[#c89535] shrink-0" />
              <span>
                Both microscope and laser technology are available to{" "}
                <strong className="text-white">all patients at no additional cost</strong> —
                they&apos;re part of how we deliver care, not an add-on.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── SERVICES PREVIEW ────────────────────────── */}
      <section id="services-preview" className="px-5 py-20 bg-[#faf6ee]">
        <div className="max-w-md mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Our Services
            </p>
            <h2 className="font-display text-[36px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
              13 services · <span className="text-[#a67a1f] italic">one trusted chair.</span>
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
              From a child&apos;s first cleaning to gum rejuvenation, implants, and full smile
              makeovers — Dr. How and the team treat the whole family in one place.
            </p>
          </Reveal>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {treatments.slice(0, 9).map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <div className="h-full rounded-2xl bg-white ring-1 ring-black/5 p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-[#c89535]/15 text-[#a67a1f] mb-3">
                  <Stethoscope size={16} />
                </span>
                <h3 className="font-bold text-[15.5px] text-[#1a1a1a] leading-tight">
                  {t.title}
                </h3>
                <p className="text-[#2c2c2c] text-[13.5px] mt-1.5 leading-relaxed">
                  {t.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={600}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#c89535] hover:text-[#1a1a1a] transition-colors shadow-md shadow-black/15"
            >
              See all 13 services
              <ChevronRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── FIRST VISIT ────────────────────────── */}
      <section id="first-visit" className="px-5 py-20 bg-[#f0e6cf] border-y border-black/5">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              What to Expect
            </p>
            <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
              Your <span className="text-[#a67a1f] italic">First Visit</span>
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
              Simple, calm, and stress-free. Here&apos;s exactly what happens
              from the moment you book.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 max-w-md mx-auto relative">
          <div
            aria-hidden
            className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[#c89535]/60 via-[#c89535]/30 to-transparent"
          />
          <ol className="flex flex-col gap-8">
            {firstVisitSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110} as="li">
                <div className="flex gap-5">
                  <span className="relative shrink-0 grid place-items-center w-14 h-14 rounded-full bg-[#1a1a1a] text-white font-black text-[15px] shadow-lg shadow-black/25 ring-4 ring-[#f0e6cf]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="font-bold text-[18px] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                      {step.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={firstVisitSteps.length * 110}>
          <div className="mt-12 text-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#c89535] text-[#1a1a1a] px-7 py-4 font-bold text-[15px] hover:bg-[#a67a1f] hover:text-white transition-colors shadow-lg shadow-[#c89535]/30"
            >
              <Calendar size={16} />
              Book Your Visit
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── WHY CHOOSE US ────────────────────────── */}
      <section id="why" className="px-5 py-20">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Why Choose Us
          </p>
          <h2 className="text-[34px] font-black leading-[1.05] tracking-tight font-display">
            Modern. Gentle. <br />
            Built around <span className="text-[#a67a1f] italic">you</span>.
          </h2>
        </div>
        <div className="mt-10 max-w-md mx-auto flex flex-col gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="rounded-2xl p-6 bg-white ring-1 ring-black/5 shadow-sm flex gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-[#c89535]/15 text-[#a67a1f]">
                  <f.icon size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-[17px]">{f.title}</h3>
                  <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                    {f.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ────────────────────────── PROMISE ────────────────────────── */}
      <section id="promise" className="px-5 py-16 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold text-center mb-3">
              Our Promise
            </p>
            <h2 className="text-center font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
              Transparent fees. <span className="text-[#a67a1f] italic">No upcharges.</span>
            </h2>
            <p className="mt-4 text-center text-[#2c2c2c] text-[15px] max-w-md mx-auto leading-relaxed">
              Our pricing follows the current{" "}
              <strong className="text-[#1a1a1a]">Ontario Dental Association fee guide</strong>.
              Insurance is billed directly. Microscope and laser tech are included.
            </p>
          </Reveal>
          <ul className="mt-9 grid sm:grid-cols-3 gap-4">
            {promiseCards.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} as="li">
                <div className="rounded-2xl bg-[#faf6ee] ring-1 ring-black/5 p-6 h-full">
                  <span className="grid place-items-center w-10 h-10 mb-4 rounded-full bg-[#c89535]/15 text-[#a67a1f]">
                    <Check size={18} strokeWidth={2.5} />
                  </span>
                  <h3 className="font-bold text-[16.5px] text-[#1a1a1a]">{p.title}</h3>
                  <p className="text-[#2c2c2c] text-[14px] mt-1.5 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ────────────────────────── SMILE GALLERY (categories from real site) ──────────────────────────
          Replaces the fabricated "patient quotes" section. Drives traffic to the real
          colonnadedental.com smile gallery for proof rather than inventing testimonials. */}
      <section id="gallery" className="px-5 py-20 bg-[#faf6ee]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Smile Gallery
          </p>
          <h2 className="font-display text-[40px] sm:text-[48px] font-black leading-[1.02] tracking-tight">
            Twenty years of <span className="text-[#a67a1f] italic">before &amp; afters.</span>
          </h2>
          <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-lg mx-auto">
            Restoration, gum rejuvenation, cosmetic, implant, orthodontic and laser cases —
            browse the full gallery to see Dr. How&apos;s real patient outcomes.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {smileGalleryCategories.map((cat, i) => (
            <Reveal key={cat} delay={i * 60}>
              <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5 text-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <span className="grid place-items-center w-10 h-10 mx-auto mb-3 rounded-full bg-[#c89535]/15 text-[#a67a1f]">
                  <Sparkles size={16} />
                </span>
                <p className="font-bold text-[14px] text-[#1a1a1a] leading-tight">
                  {cat}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={smileGalleryCategories.length * 60}>
          <div className="mt-8 max-w-3xl mx-auto">
            <a
              href="https://colonnadedental.com/smile-gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#1a1a1a] text-white px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#c89535] hover:text-[#1a1a1a] transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-[#c89535] text-[#1a1a1a]">
                  <AwardIcon size={16} />
                </span>
                <span className="font-bold text-[15px]">
                  Visit the full smile gallery
                </span>
              </span>
              <ChevronRight size={18} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── QUIZ ────────────────────────── */}
      <section id="quiz" className="px-5 py-16 bg-white border-y border-black/5">
        <Reveal>
          <div className="max-w-md mx-auto text-center mb-6">
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Not sure if it&apos;s for you?
            </p>
            <h2 className="font-display text-[28px] sm:text-[32px] font-black leading-tight tracking-tight">
              Take a 30-second check.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <Quiz phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />
        </Reveal>
      </section>

      {/* ────────────────────────── AWARDS & AFFILIATIONS (REAL) ────────────────────────── */}
      <section id="awards" className="px-5 py-20 bg-[#faf6ee]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Recognition & Memberships
              </p>
              <h2 className="font-display text-[34px] sm:text-[40px] font-black leading-[1.05] tracking-tight">
                The credentials behind <span className="text-[#a67a1f] italic">Dr. How.</span>
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-xl mx-auto">
                Every award and membership listed here is published in
                Dr. How&apos;s bio on colonnadedental.com — no inflated rankings,
                no invented honours.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap justify-center gap-4">
              {awards.map((a) => (
                <AwardBadge key={a.title} {...a} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7">
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold text-center mb-4">
                Professional Memberships
              </p>
              <ul className="flex flex-wrap justify-center gap-2.5">
                {affiliations.map((m) => (
                  <li
                    key={m}
                    className="rounded-full bg-[#f0e6cf] text-[#1a1a1a] px-4 py-2 text-[13px] font-semibold ring-1 ring-[#c89535]/20"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── INSTAGRAM ────────────────────────── */}
      <section id="instagram" className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Follow Along
            </p>
            <h2 className="font-display text-[32px] font-black leading-tight tracking-tight">
              On <span className="text-[#a67a1f] italic">Instagram</span>
            </h2>
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[#2c2c2c] text-[14px] hover:text-[#a67a1f] transition-colors"
            >
              <InstagramIcon size={16} />
              @colonnadedental
            </a>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 text-center">
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 font-bold text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              <InstagramIcon size={16} />
              Follow us on Instagram
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── BOOK CTA ────────────────────────── */}
      <section
        id="book"
        className="divider-curve-down px-5 py-20 bg-[#1a1a1a] text-white relative overflow-hidden bg-noise"
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#c89535] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#c89535] blur-3xl" />
        </div>
        <div className="relative max-w-md mx-auto text-center">
          <p className="text-[#c89535] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Book Today
          </p>
          <h2 className="font-display text-[36px] font-black leading-tight tracking-tight">
            Ready to book your visit?
          </h2>
          <p className="mt-4 text-white/85 text-[15px] leading-relaxed">
            Call, WhatsApp, or text the front desk. Most new patients are seen within the week.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className="rounded-full bg-[#c89535] text-[#1a1a1a] px-6 py-4 font-bold text-[16px] inline-flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg shadow-[#c89535]/30"
            >
              <Phone size={18} />
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25d366] text-white px-6 py-4 font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${CLINIC.email}`}
              className="rounded-full border border-white/40 text-white px-6 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              {CLINIC.email}
            </a>
          </div>
          <p id="visit" className="mt-6 text-white/85 text-[12.5px]">
            <Sparkles size={11} className="inline mr-1" />
            {CLINIC.locationNote}
          </p>
        </div>
      </section>

      {/* ────────────────────────── FAQ ────────────────────────── */}
      <section id="faq" className="divider-curve-down relative px-5 py-20 bg-[#faf6ee]">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Common Questions
            </p>
            <h2 className="text-[34px] font-black leading-[1.05] tracking-tight font-display">
              Frequently Asked
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <SiteFooter />

      {/* FAQ rich-result schema */}
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

    </main>
  );
}

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
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import SmileDiagram from "@/components/SmileDiagram";
import InsurancePlate from "@/components/InsurancePlate";
import { CLINIC } from "@/lib/clinic";
import { services, treatments, valueStack } from "@/lib/content";
import { IMAGE_BLUR } from "@/lib/imageBlur";

export const metadata: Metadata = {
  title: "Services & Treatments — Colonnade Dental",
  description:
    "Cleanings, cosmetic veneers, teeth whitening, dental implants, crowns, root canals, Invisalign, dentures, periodontal care, and emergency dentistry — gentle, microscope-precision care from Dr. Vincent How in Mississauga.",
  alternates: { canonical: "https://colonnadedental.com/services" },
};

export default function ServicesPage() {
  return (
    <main id="main" className="relative bg-[#fbf8f3] text-[#1a1a1a]">
      <FloatingNav phone={CLINIC.phone} />
      <StickyMobileCTA phone={CLINIC.phone} phoneDisplay={CLINIC.phoneDisplay} />

      {/* Header band */}
      <section className="relative bg-[#fbf8f3] overflow-hidden">
        <div aria-hidden className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#0e6e7d] opacity-[0.09] blur-[120px]" />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#0e6e7d] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Services &amp; Treatments
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              Gentle, modern dentistry for the{" "}
              <span className="text-[#0e6e7d] italic">whole family.</span>
            </h1>
            <p className="mt-5 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              From a child&apos;s first cleaning to grandparents&apos; full-arch
              implants — every plan at Colonnade is built around your mouth,
              your goals, and your comfort. Below is what we treat.
            </p>
            <div className="mt-7">
              <Link
                href="/#book"
                className="inline-flex items-center gap-2 rounded-full bg-[#0e6e7d] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#08515c] transition-colors shadow-md shadow-[#0e6e7d]/20"
              >
                <Calendar size={16} />
                Claim Free New Patient Exam
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
              <p className="text-[#0e6e7d] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                What We Treat
              </p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-black leading-tight tracking-tight">
                Every smile zone, <span className="text-[#0e6e7d] italic">one trusted team</span>.
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15.5px] leading-relaxed">
                Whether it&apos;s a routine cleaning, a chipped front tooth, a
                deep-decay molar, or gum disease — every concern gets the same
                gentle, microscope-precise approach.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  { area: "Front teeth", note: "Veneers, whitening, bonding" },
                  { area: "Smile design", note: "Cosmetic & full makeovers" },
                  { area: "Molars", note: "Crowns, fillings, root canals" },
                  { area: "Gums", note: "Cleanings, periodontal care" },
                ].map((it) => (
                  <li
                    key={it.area}
                    className="rounded-2xl bg-[#fbf8f3] ring-1 ring-black/5 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-[#0e6e7d]" strokeWidth={2.5} />
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

      {/* Core services — 3 big cards */}
      <section id="services" className="px-5 py-20 bg-[#fbf8f3]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#0e6e7d] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Our Services
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-[1.05] tracking-tight">
              How we help.
            </h2>
            <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-md mx-auto">
              Three core service lines, all delivered with the same
              patient-first, no-pressure approach.
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
                    className="mt-5 inline-flex items-center gap-1.5 text-[#0e6e7d] font-bold text-sm hover:gap-2 transition-all"
                  >
                    Book a free exam <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Treatments grid */}
      <section
        id="treatments"
        className="px-5 py-20 bg-[#f0e9dc] border-y border-black/5"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#0e6e7d] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Treatments We Offer
            </p>
            <h2 className="font-display text-[34px] sm:text-[40px] font-black leading-[1.05] tracking-tight">
              Common procedures <span className="text-[#0e6e7d] italic">we deliver</span>.
            </h2>
          </Reveal>
        </div>
        <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {treatments.map((t, i) => (
            <Reveal key={t.title} delay={i * 60} as="li">
              <div className="rounded-2xl p-6 bg-white ring-1 ring-black/5 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-[#0e6e7d]" />
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

      {/* What's included in the free exam */}
      <section className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#0e6e7d] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Free for New Patients
              </p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-black leading-tight tracking-tight">
                Inside your <span className="text-[#0e6e7d] italic">free new-patient exam</span>.
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed">
                A full $290 worth of assessment — yours free, with zero
                obligation to continue care.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-3 gap-3">
            {valueStack.map((v, i) => (
              <Reveal key={v.label} delay={i * 100} as="li">
                <div className="rounded-2xl bg-[#fbf8f3] ring-1 ring-black/5 p-5 text-center h-full flex flex-col items-center">
                  <span className="grid place-items-center w-11 h-11 mb-3 rounded-full bg-[#0e6e7d]/10 text-[#0e6e7d]">
                    <Check size={20} strokeWidth={2.5} />
                  </span>
                  <h3 className="font-bold text-[15px] text-[#1a1a1a] leading-snug">
                    {v.label}
                  </h3>
                  <p className="mt-1.5 text-[#2c2c2c] text-[13px]">
                    Normally{" "}
                    <span className="line-through text-[#2c2c2c]/60">
                      {v.value}
                    </span>{" "}
                    · <strong className="text-[#88a59d]">Free</strong>
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={350}>
            <div className="mt-8 text-center">
              <Link
                href="/#book"
                className="inline-flex items-center gap-2 rounded-full bg-[#0e6e7d] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#08515c] transition-colors shadow-lg shadow-[#0e6e7d]/20"
              >
                <Calendar size={16} />
                Claim Your Free Exam
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Insurance */}
      <section
        id="insurance"
        className="px-5 py-20 bg-[#f0e9dc]"
      >
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 text-[#88a59d] text-[11px] tracking-[0.18em] uppercase font-bold mb-3">
                <ShieldCheck size={13} />
                Direct billing available
              </span>
              <h2 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                We accept all major dental insurance — and CDCP.
              </h2>
              <p className="mt-3 text-[#2c2c2c] text-[14.5px] max-w-md mx-auto leading-relaxed">
                We&apos;ll happily verify your benefits before your visit and
                submit claims directly on your behalf. Just call or WhatsApp
                the front desk and we&apos;ll handle the rest.
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
              className="text-[#0e6e7d] font-semibold hover:underline"
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
            Book a free new-patient exam — most new patients are seen within
            the week.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0e6e7d] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#08515c] transition-colors shadow-lg shadow-[#0e6e7d]/20"
            >
              <Calendar size={16} />
              Book Free Exam
            </Link>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] px-7 py-4 font-semibold text-[15px] hover:bg-[#1a1a1a]/5 transition-colors"
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  Phone,
  Sparkles,
  GraduationCap,
  Microscope,
  HeartHandshake,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import AwardBadge from "@/components/AwardBadge";
import { CLINIC } from "@/lib/clinic";
import { awards, affiliations } from "@/lib/content";
import { IMAGE_BLUR, PHOTOS } from "@/lib/imageBlur";

export const metadata: Metadata = {
  title: `About ${CLINIC.doctor.name} & Colonnade Dental`,
  description:
    "Meet Dr. Vincent How (DDS, University of Western Ontario, 1992) — over 20 years of microscope-enhanced family dentistry on Hurontario Street in Mississauga. Member of the Ontario, Canadian, and International dental associations.",
  alternates: { canonical: "https://colonnadedental.com/about" },
};

export default function AboutPage() {
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
              About the Practice
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              <span className="text-[#a67a1f] italic">Family-owned, family-treated.</span>
            </h1>
            <p className="mt-5 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              Colonnade Dental is a family practice in central Mississauga, founded by{" "}
              {CLINIC.doctor.name} ({CLINIC.doctor.credentials}). For over twenty years
              we&apos;ve cared for patients of every age — from a child&apos;s first cleaning to
              cosmetic, implant, orthodontic, and prosthodontic care for adults and seniors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* By the numbers — verified facts only */}
      <section className="relative bg-white border-y border-black/5 px-5 py-10">
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            { value: <>{CLINIC.yearsServing}</>, suffix: "yrs", label: "Family practice in Mississauga" },
            { value: <>{CLINIC.doctor.gradYear}</>, label: `${CLINIC.doctor.short} graduated · UWO` },
            { value: <>12×</>, label: "Microscope magnification" },
            { value: <>{awards.length}</>, label: "Industry awards earned" },
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

      {/* Meet Dr. How */}
      <section id="dr-how" className="px-5 py-20 bg-[#faf6ee]">
        <div className="max-w-3xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-xl">
              <Image
                src={PHOTOS.drHow}
                alt={`${CLINIC.doctor.name}, ${CLINIC.doctor.credentials}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Meet Your Dentist
              </p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-tight tracking-tight">
                {CLINIC.doctor.name}, <span className="text-[#a67a1f] italic">{CLINIC.doctor.credentials}</span>
              </h2>
              <p className="text-[#2c2c2c] text-sm font-semibold mt-1.5">
                {CLINIC.doctor.title} · Founder
              </p>
              <span className="inline-block mt-4 rounded-full bg-[#c89535]/15 text-[#7a5614] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                DDS · {CLINIC.doctor.school.split(",")[0]} · {CLINIC.doctor.gradYear}
              </span>
              <div className="mt-5 space-y-4 text-[#2c2c2c] text-[15.5px] leading-relaxed">
                <p>
                  Dr. How earned his DDS at the {CLINIC.doctor.school} in {CLINIC.doctor.gradYear} and
                  completed a residency at the {CLINIC.doctor.residency}. He has been practising
                  in Mississauga for over twenty years, building Colonnade Dental into a family
                  practice serving patients of every generation.
                </p>
                <p>
                  His approach is calm, gentle, and patient-first. Colonnade Dental is one of the
                  few clinics in Ontario that routinely uses surgical microscopes and laser dentistry.
                  When that technology is combined with extensive clinical experience, it allows for
                  the finest dentistry possible and long-lasting solutions for your oral health.
                </p>
                <blockquote className="rounded-2xl bg-white ring-1 ring-black/5 px-5 py-5 text-[15px] italic text-[#1a1a1a] leading-relaxed font-display border-l-4 border-[#c89535]">
                  &ldquo;I am very much a family-oriented person — and I strive to treat
                  everyone as I would my own family. Respect, dignity, mutual trust and honesty
                  are an integral part of my practice and these values have shaped the philosophy
                  of the Colonnade Dental team.&rdquo;
                  <footer className="mt-3 text-[12.5px] not-italic text-[#4a4a4a] font-sans font-semibold">
                    — {CLINIC.doctor.name}
                  </footer>
                </blockquote>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c89535] text-[#1a1a1a] px-7 py-3.5 font-bold text-sm hover:bg-[#a67a1f] hover:text-white transition-colors shadow-md shadow-[#c89535]/30"
                >
                  <Calendar size={16} />
                  Book with Dr. How
                </Link>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a]/25 text-[#1a1a1a] px-6 py-3.5 font-semibold text-sm hover:bg-[#1a1a1a]/5 transition-colors"
                >
                  <Phone size={16} />
                  {CLINIC.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                What Sets Us Apart
              </p>
              <h2 className="font-display text-[34px] sm:text-[40px] font-black leading-tight tracking-tight">
                Clinical excellence in a <span className="text-[#a67a1f] italic">relaxed, comfortable</span> environment.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: GraduationCap,
                title: "Trained at UWO · 1992",
                body:
                  "DDS from the University of Western Ontario, Faculty of Dentistry, with a residency at the London Hospitals.",
              },
              {
                icon: Microscope,
                title: "Microscope + laser standard",
                body:
                  "One of the few clinics in Ontario routinely using surgical microscopes (12×) and dual laser systems on every patient.",
              },
              {
                icon: HeartHandshake,
                title: "Treated like family",
                body:
                  "Respect, dignity, mutual trust and honesty — the values Dr. How brings to every relationship in the practice.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="rounded-3xl bg-[#faf6ee] ring-1 ring-black/5 p-7 h-full">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#c89535] text-[#1a1a1a] mb-4">
                    <p.icon size={22} />
                  </span>
                  <h3 className="font-display text-[20px] font-black leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[#2c2c2c] text-[14px] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission band */}
      <section className="px-5 py-16 bg-[#1a1a1a] text-white relative overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#c89535] blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-[#c89535] text-[11px] tracking-[0.25em] uppercase font-bold mb-3 inline-flex items-center gap-2">
            <Sparkles size={12} /> Our Mission
          </p>
          <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-tight">
            Your smile is everything to you.<br />
            <span className="text-[#c89535] italic">That means everything to us.</span>
          </h2>
          <p className="mt-5 text-white/85 text-[16px] sm:text-[17px] leading-relaxed">
            We strive to honour the trust you&apos;ve placed in us by providing clinical excellence
            in a relaxed, comfortable environment. Come and see how we can make your beautiful
            smile never go out of style.
          </p>
        </div>
      </section>

      {/* Real awards & affiliations */}
      <section id="awards" className="relative bg-[#f0e6cf] px-5 pt-16 pb-20 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-2">
                Recognition &amp; Memberships
              </p>
              <h2 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                Awards published in <span className="text-[#a67a1f] italic">Dr. How&apos;s real bio.</span>
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] max-w-md mx-auto leading-relaxed">
                We don&apos;t inflate, badge-up, or invent. The awards below are the ones
                {" "}{CLINIC.doctor.short} has earned in his clinical career.
              </p>
            </div>
          </Reveal>

          <div className="flex justify-center flex-wrap gap-4">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <AwardBadge {...a} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 max-w-2xl mx-auto rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7">
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold text-center mb-4">
                Professional Memberships
              </p>
              <ul className="flex flex-wrap justify-center gap-2.5">
                {affiliations.map((m) => (
                  <li
                    key={m}
                    className="rounded-full bg-[#faf6ee] text-[#1a1a1a] px-4 py-2 text-[13px] font-semibold ring-1 ring-[#c89535]/30"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The clinic */}
      <section className="px-5 py-20 bg-[#faf6ee]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#a67a1f] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Find Us
              </p>
              <h2 className="font-display text-[32px] sm:text-[38px] font-black leading-tight tracking-tight">
                Inside <span className="text-[#a67a1f] italic">The Colonnade</span> building.
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] leading-relaxed max-w-lg mx-auto">
                {CLINIC.locationNote} Easy access from all major highways and steps from major
                bus routes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-[28px] overflow-hidden aspect-[16/10] relative ring-1 ring-black/5 shadow-xl">
              <Image
                src={PHOTOS.clinicInterior}
                alt="Inside Colonnade Dental — calm operatory with surgical microscope and laser equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
              />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-[#a67a1f] font-bold text-sm hover:gap-2 transition-all"
              >
                Get directions to the clinic
                <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 bg-white border-t border-black/5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[28px] sm:text-[32px] font-black leading-tight">
            Ready to meet Dr. How?
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

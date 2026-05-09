import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Phone, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import AwardBadge from "@/components/AwardBadge";
import CountUp from "@/components/CountUp";
import { CLINIC } from "@/lib/clinic";
import { awards } from "@/lib/content";
import { IMAGE_BLUR, PHOTOS } from "@/lib/imageBlur";

export const metadata: Metadata = {
  title: "About Dr. Vincent How & Colonnade Dental",
  description:
    "Meet Dr. Vincent How (DDS) and the Colonnade Dental team — a Mississauga family dental practice on Hurontario St since 2003. Surgical microscopes, laser dentistry, and gentle care for every age.",
  alternates: { canonical: "https://colonnadedental.com/about" },
};

export default function AboutPage() {
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
              About the Practice
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              <span className="text-[#0e6e7d] italic">Gentle. Modern. Trusted.</span>
            </h1>
            <p className="mt-5 text-[#2c2c2c] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              Colonnade Dental is a family practice in the heart of Mississauga,
              founded by {CLINIC.doctor.name} ({CLINIC.doctor.credentials}) in {CLINIC.yearFounded}. Our mission is to deliver the
              finest dentistry possible in a calm, comfortable space that
              patients of every age trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* By the numbers */}
      <section className="relative bg-white border-y border-black/5 px-5 py-10">
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            { value: <CountUp to={20000} duration={1400} suffix="+" />, label: "Smiles cared for" },
            { value: <CountUp to={20} duration={900} suffix="+ yrs" />, label: "Serving Mississauga" },
            { value: <CountUp to={CLINIC.rating} duration={1100} decimals={1} />, label: `Google rating · ${CLINIC.reviewCount}+ reviews` },
            { value: awards.length.toString(), label: "Industry awards earned" },
          ].map((stat) => (
            <li key={stat.label} className="flex flex-col items-center px-2">
              <div className="font-display text-[30px] sm:text-[36px] font-black text-[#0e6e7d] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[12px] sm:text-[13px] text-[#2c2c2c] uppercase tracking-wider font-semibold leading-snug max-w-[160px]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Meet Dr. How */}
      <section id="dr-how" className="px-5 py-20 bg-[#fbf8f3]">
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
              <p className="text-[#0e6e7d] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Meet Your Dentist
              </p>
              <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-tight tracking-tight">
                {CLINIC.doctor.name}, <span className="text-[#0e6e7d] italic">{CLINIC.doctor.credentials}</span>
              </h2>
              <p className="text-[#2c2c2c] text-sm font-semibold mt-1.5">
                {CLINIC.doctor.title}
              </p>
              <span className="inline-block mt-4 rounded-full bg-[#0e6e7d]/10 text-[#0e6e7d] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                RCDSO Licensed · Since {CLINIC.yearFounded}
              </span>
              <div className="mt-5 space-y-4 text-[#2c2c2c] text-[15.5px] leading-relaxed">
                <p>
                  Dr. How has been delivering precision, microscope-guided
                  dentistry to the Mississauga community for over two decades.
                  He believes everyone deserves a healthy mouth and a
                  confident smile — and he&apos;s cared for{" "}
                  <strong className="text-[#1a1a1a]">{CLINIC.patientCount} patients</strong>{" "}
                  to prove it.
                </p>
                <p>
                  His approach is calm, gentle, and patient-first. No long
                  lectures, no scare tactics. Just honest answers about your
                  teeth and a treatment plan that actually fits your life —
                  whether you&apos;re a parent bringing kids in for their first
                  cleaning, an adult ready for cosmetic veneers, or a senior
                  who needs implants or dentures.
                </p>
                <p>
                  Colonnade Dental is one of the few clinics in Ontario that
                  routinely uses surgical microscopes and laser dentistry. The
                  result is more accurate diagnosis, less invasive treatment,
                  and longer-lasting results — modern care delivered with
                  old-school attention to detail.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0e6e7d] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#08515c] transition-colors shadow-md shadow-[#0e6e7d]/20"
                >
                  <Calendar size={16} />
                  Book with Dr. How
                </Link>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] px-6 py-3.5 font-semibold text-sm hover:bg-[#1a1a1a]/5 transition-colors"
                >
                  <Phone size={16} />
                  {CLINIC.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission band */}
      <section className="px-5 py-16 bg-[#0e6e7d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-bold mb-3 inline-flex items-center gap-2">
            <Sparkles size={12} /> Our Mission
          </p>
          <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-tight">
            Clinical excellence. Human warmth.
          </h2>
          <p className="mt-5 text-white/90 text-[16px] sm:text-[17px] leading-relaxed">
            We combine surgical microscopes, laser technology, and decades of
            clinical experience with a relaxed, comfortable environment.
            Because your smile is everything to you — and that means
            everything to us.
          </p>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="relative bg-[#f0e9dc] px-5 pt-16 pb-20 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#0e6e7d] text-[11px] tracking-[0.25em] uppercase font-bold mb-2">
                Recognized &amp; Awarded
              </p>
              <h2 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                Mississauga&apos;s most trusted dental practice.
              </h2>
              <p className="mt-4 text-[#2c2c2c] text-[15px] max-w-md mx-auto leading-relaxed">
                Voted by patients across the Peel Region for excellence in
                care, professionalism, and patient outcomes.
              </p>
            </div>
          </Reveal>

          <div className="flex gap-4 overflow-x-auto no-scrollbar md:grid md:grid-cols-4 md:gap-5 pb-2 -mx-5 px-5 md:mx-0 md:px-0">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <AwardBadge {...a} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-12 max-w-4xl mx-auto rounded-[28px] overflow-hidden bg-white ring-1 ring-black/5 shadow-xl grid md:grid-cols-[1.1fr_1fr] items-stretch">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px]">
                <Image
                  src={PHOTOS.award}
                  alt="Dr. Vincent How — Colonnade Dental — recognized for excellence in family dentistry"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                />
              </div>
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <p className="text-[#0e6e7d] text-[10.5px] tracking-[0.28em] uppercase font-bold mb-3">
                  Verified · 2022
                </p>
                <h3 className="font-display text-[26px] md:text-[30px] font-black leading-tight">
                  Top Dentist Award<br />
                  <span className="text-[#0e6e7d]">Mississauga · Family Dentistry</span>
                </h3>
                <p className="mt-4 text-[#2c2c2c] text-[14.5px] leading-relaxed">
                  Voted by patients across Mississauga as the top dental
                  practice for excellence in care, professionalism, and
                  patient outcomes.
                </p>
                <p className="mt-2 text-[#2c2c2c]/70 text-[13px] leading-relaxed">
                  One of {awards.length} regional and provincial awards earned
                  by Colonnade Dental since {CLINIC.yearFounded}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The clinic */}
      <section className="px-5 py-20 bg-[#fbf8f3]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#0e6e7d] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Inside the Clinic
              </p>
              <h2 className="font-display text-[32px] sm:text-[38px] font-black leading-tight tracking-tight">
                A calm, modern space — built for healing.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-[28px] overflow-hidden aspect-[16/10] relative ring-1 ring-black/5 shadow-xl">
              <Image
                src={PHOTOS.clinicInterior}
                alt="Inside Colonnade Dental — modern operatory with advanced equipment"
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
                className="inline-flex items-center gap-1.5 text-[#0e6e7d] font-bold text-sm hover:gap-2 transition-all"
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
            Book a free new-patient exam — most new patients are seen within
            the week.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0e6e7d] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#08515c] transition-colors shadow-lg shadow-[#0e6e7d]/20"
            >
              <Calendar size={16} />
              Claim Free Exam
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

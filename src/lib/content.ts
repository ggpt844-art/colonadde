import {
  Award,
  ShieldCheck,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { FaqItem } from "@/components/FAQ";
import { PHOTOS } from "@/lib/imageBlur";

/**
 * Three high-level service pillars shown as big cards on /services.
 * Pulled from colonnadedental.com/dental-services and the technology pages.
 */
export const services = [
  {
    title: "Preventative & Hygiene",
    blurb:
      "Cleanings, exams, periodontal therapy, and digital x-rays for every age — early detection before small issues turn into big ones.",
    image: PHOTOS.cleaning,
  },
  {
    title: "Cosmetic & Restorative",
    blurb:
      "Veneers, bonding, whitening, crowns, bridges, and full smile makeovers — finished under surgical-microscope precision.",
    image: PHOTOS.smile,
  },
  {
    title: "Implants, Surgery & Specialty",
    blurb:
      "Dental implants, dentures, root canal therapy, extractions, and our scalpel-free Chao Pinhole® gum rejuvenation.",
    image: PHOTOS.exam,
  },
];

/**
 * Detailed treatments grid — the actual 13 services listed on
 * colonnadedental.com/dental-services. Used on /services.
 */
export const treatments = [
  {
    title: "Hygiene",
    blurb:
      "Routine cleanings to remove plaque and calculus, plus oral-cancer screening and periodontal monitoring.",
  },
  {
    title: "Tooth Restoration",
    blurb:
      "Composite resin fillings that restore strength while matching the shade and translucency of natural teeth.",
  },
  {
    title: "Bonding",
    blurb:
      "Tooth-coloured composite to close gaps, repair chips, and cover spots or discolouration in a single visit.",
  },
  {
    title: "Veneers",
    blurb:
      "Ultra-thin porcelain or resin shells (under 1 mm) for teeth that are discoloured, worn, chipped, or misaligned.",
  },
  {
    title: "Tooth Whitening",
    blurb:
      "In-office and take-home whitening that lifts stain from coffee, tea, tobacco, medications, and aging.",
  },
  {
    title: "Crowns & Bridges",
    blurb:
      "Noble-alloy, porcelain, or porcelain-fused-to-metal restorations for fractured or heavily filled teeth.",
  },
  {
    title: "Periodontal Therapy",
    blurb:
      "Treatment for gingivitis and periodontitis — the leading cause of adult tooth loss — with deep cleanings and follow-up.",
  },
  {
    title: "Root Canal Treatment",
    blurb:
      "Microscope- and laser-assisted endodontics that save severely decayed, infected, or broken teeth from extraction.",
  },
  {
    title: "Extractions",
    blurb:
      "Simple and surgical extractions, including impacted wisdom teeth, with calm aftercare guidance.",
  },
  {
    title: "Cosmetic Dentistry",
    blurb:
      "Personalized smile makeovers — see the smile gallery for restoration, cosmetic, orthodontic, and implant cases.",
  },
  {
    title: "Implants",
    blurb:
      "Permanent replacements for one missing tooth or many — keeps neighbouring teeth from drifting and bone from resorbing.",
  },
  {
    title: "Dentures",
    blurb:
      "Complete and partial dentures designed for comfort, function, and a natural look.",
  },
  {
    title: "Gum Rejuvenation (Chao Pinhole®)",
    blurb:
      "Scalpel-free, suture-free, graft-free correction of gum recession through a tiny pinhole — minimal downtime.",
  },
];

export const features: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Award,
    title: "20+ Years in Mississauga",
    blurb:
      "A family practice serving Mississauga and surrounding areas for over two decades — patients of every age, generation after generation.",
  },
  {
    icon: ShieldCheck,
    title: "Surgical Microscopes — at no extra cost",
    blurb:
      "Up to 12× magnification with shadow-free lighting, live video feed, and image capture — included on every visit, not an upgrade.",
  },
  {
    icon: Sparkles,
    title: "Laser Dentistry — at no extra cost",
    blurb:
      "KaVo K.E.Y and Fotona Lightwalker AT-S systems — gentler treatment, less anaesthetic, faster healing, no extra fee.",
  },
  {
    icon: Users,
    title: "Family-Owned, Family-Treated",
    blurb:
      "“I strive to treat everyone as I would my own family — respect, dignity, mutual trust and honesty.” — Dr. Vincent How",
  },
];

/**
 * Smile-gallery categories pulled directly from colonnadedental.com/smile-gallery.
 * Rendered as a strip on the home page in place of fabricated patient quotes.
 */
export const smileGalleryCategories = [
  "Restoration",
  "Cosmetic",
  "Implant",
  "Orthodontic",
  "Hygiene",
  "Gum Rejuvenation",
  "Laser",
  "Amalgam Replacement",
] as const;

/** Hours per the published Colonnade Dental schedule (contact-us page). */
export const hours = [
  { day: "Monday", time: "10:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "10:00 AM – 6:00 PM" },
  { day: "Thursday", time: "10:00 AM – 6:00 PM" },
  { day: "Friday", time: "10:00 AM – 6:00 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
];

/**
 * Real awards & affiliations — verified from colonnadedental.com/meet-the-dentist.
 * Do not invent additional ones; if it's not in Dr. How's published bio, it
 * does not belong here.
 */
export const awards = [
  {
    title: "Quintessence Research Award",
    category: "Research",
    variant: "gold" as const,
  },
  {
    title: "Toronto Academy of Crown & Bridge Study Club Award",
    category: "Restorative",
    variant: "ink" as const,
  },
  {
    title: "Association of Prosthodontics of Ontario Award",
    category: "Prosthodontics",
    variant: "gold" as const,
  },
];

/**
 * Professional memberships — verified from colonnadedental.com/meet-the-dentist.
 */
export const affiliations = [
  "Ontario Dental Association",
  "Canadian Dental Association",
  "International Orthodontic Association",
  "Halton Peel Dental Association",
] as const;

export const faqItems: FaqItem[] = [
  {
    q: "Where is Colonnade Dental located?",
    a: "We're on the ground floor of The Colonnade building at the northwest corner of Hurontario and Dundas streets — 3024 Hurontario Street, Unit G9, Mississauga. Easy access from all major highways and steps from major bus routes.",
  },
  {
    q: "Are you accepting new patients?",
    a: "Yes — we always welcome new patients of every age. Call (905) 276-9991 or email us to book your first appointment.",
  },
  {
    q: "How does billing and insurance work?",
    a: "Our fees follow the current Ontario Dental Association fee guide. We can directly bill your insurance company and submit any co-insurance forms on your behalf at no extra charge. Any portion not covered by insurance is your responsibility.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Visa, MasterCard, Debit, Cash, and personal cheques. A standard $25 charge is applied to NSF cheques.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We kindly ask for 24 hours' notice if you need to change your appointment so we can accommodate other patients in need. A $75 charge may apply for appointments missed without any cancellation notice.",
  },
  {
    q: "What technology do you use?",
    a: "We're one of the few Ontario practices that routinely use surgical microscopes (up to 12× magnification) and laser dentistry — KaVo K.E.Y and Fotona Lightwalker AT-S — on every patient at no additional cost. Greater visibility means more accurate diagnosis, gentler treatment, and longer-lasting results.",
  },
  {
    q: "Can you treat my whole family?",
    a: "Yes. Dr. How and the team have cared for patients of every age for over 20 years — from children's first cleanings through cosmetic, implant, orthodontic, and prosthodontic care for adults and seniors.",
  },
  {
    q: "Do you offer scalpel-free gum treatment?",
    a: "Yes — we offer the Chao Pinhole® Surgical Technique, a scalpel-free, suture-free, graft-free procedure for correcting gum recession through a tiny pinhole made by a needle.",
  },
];

export const firstVisitSteps = [
  {
    title: "Call or Email to Book",
    blurb:
      "Phone (905) 276-9991 or email the office. We'll find a time that works for you, often within the same week.",
  },
  {
    title: "Insurance Pre-Check",
    blurb:
      "Bring your dental benefit booklet on your first visit so our team can verify coverage and arrange direct billing.",
  },
  {
    title: "Comprehensive Exam & X-Rays",
    blurb:
      "Dr. How completes a thorough exam with surgical-microscope assistance and digital imaging — no detail missed.",
  },
  {
    title: "Treatment Plan Walkthrough",
    blurb:
      "We review findings on screen and discuss options, fees (per the ODA fee guide), and timing — no high pressure, no surprises.",
  },
  {
    title: "Begin Your Care",
    blurb:
      "Schedule your hygiene visit or treatment when you're ready. Microscope and laser tech are included on every visit at no extra cost.",
  },
];

export const instagramShots = [
  PHOTOS.insta1,
  PHOTOS.insta2,
  PHOTOS.insta3,
  PHOTOS.insta4,
  PHOTOS.insta5,
  PHOTOS.insta6,
];

export const promiseCards = [
  {
    title: "Fees follow the ODA fee guide",
    body: "Our pricing follows the current Ontario Dental Association fee guide — predictable, transparent, no upsells.",
  },
  {
    title: "Direct billing to insurance",
    body: "We bill your insurance company and submit co-insurance forms on your behalf at no extra charge.",
  },
  {
    title: "Microscope + laser, no upcharge",
    body: "Surgical microscopes (up to 12×) and laser dentistry are part of every visit — never billed as an upgrade.",
  },
];

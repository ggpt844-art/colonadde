import {
  Award,
  ShieldCheck,
  Users,
  Heart,
  type LucideIcon,
} from "lucide-react";
import type { FaqItem } from "@/components/FAQ";
import { PHOTOS } from "@/lib/imageBlur";

/**
 * Pieces of the free new-patient exam, with normal a-la-carte pricing.
 * Drives the hero "value stack" pills and the /services "what's included" grid.
 */
export const valueStack = [
  { label: "Comprehensive Exam", value: "$120" },
  { label: "Digital X-Rays", value: "$95" },
  { label: "Treatment Consultation", value: "$75" },
];

/** Three high-level service pillars shown as big cards on /services. */
export const services = [
  {
    title: "Preventative & Family Dentistry",
    blurb:
      "Cleanings, exams, x-rays, sealants, and fluoride for every age — gentle care that keeps you out of the chair.",
    image: PHOTOS.cleaning,
  },
  {
    title: "Cosmetic & Smile Design",
    blurb:
      "Whitening, veneers, bonding, and full smile makeovers using surgical microscopes for precision finishes.",
    image: PHOTOS.smile,
  },
  {
    title: "Implants, Crowns & Restorative",
    blurb:
      "Replace missing teeth and restore broken ones with implants, crowns, bridges, and dentures built to last.",
    image: PHOTOS.exam,
  },
];

/**
 * Detailed treatments grid (mirrors the "treatments" depth on top dental sites
 * like mcitydental.ca). Used on /services.
 */
export const treatments = [
  {
    title: "Free New Patient Exam",
    blurb:
      "A complimentary exam, x-rays, and treatment consultation with Dr. How for new patients.",
  },
  {
    title: "Cleanings & Hygiene",
    blurb:
      "Gentle, thorough cleanings to keep gums healthy and prevent decay long-term.",
  },
  {
    title: "Cosmetic Veneers",
    blurb:
      "Ultra-thin, custom-made shells that transform the front surface of your teeth.",
  },
  {
    title: "Teeth Whitening",
    blurb:
      "In-office and take-home whitening that brightens stained or discoloured teeth safely.",
  },
  {
    title: "Dental Implants",
    blurb:
      "Permanent, natural-looking replacements for missing teeth — single-tooth or full-arch.",
  },
  {
    title: "Crowns & Bridges",
    blurb:
      "Custom-fit ceramic crowns and bridges that protect, restore, and blend in seamlessly.",
  },
  {
    title: "Root Canal Therapy",
    blurb:
      "Surgical-microscope guided endodontics to save infected teeth and end the pain.",
  },
  {
    title: "Invisalign Clear Aligners",
    blurb:
      "Straighten teeth discreetly with custom clear aligners — most plans 6 to 18 months.",
  },
  {
    title: "Tooth Extractions",
    blurb:
      "Simple and surgical extractions with calm, gentle care and clear aftercare instructions.",
  },
  {
    title: "Dentures & Partials",
    blurb:
      "Comfortable, natural-looking full and partial dentures fitted to your bite.",
  },
  {
    title: "Periodontal Therapy",
    blurb:
      "Gum disease treatment, deep cleanings, and gum rejuvenation to restore healthy tissue.",
  },
  {
    title: "Emergency Dental Care",
    blurb:
      "Same-day appointments for pain, swelling, broken teeth, and dental trauma.",
  },
];

export const features: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Award,
    title: "20+ Years Trusted in Mississauga",
    blurb:
      "A family practice serving Mississauga since 2003 — patients of every age, generation after generation.",
  },
  {
    icon: ShieldCheck,
    title: "Surgical Microscopes & Laser Tech",
    blurb:
      "One of the few clinics in Ontario routinely using surgical microscopes and laser dentistry for unmatched precision.",
  },
  {
    icon: Users,
    title: "Care for the Whole Family",
    blurb:
      "From toddler check-ups to grandparents' dentures, Dr. How treats every patient with calm, gentle care.",
  },
  {
    icon: Heart,
    title: "20,000+ Smiles Cared For",
    blurb:
      "Two decades of restorative, cosmetic, and preventative work — measured in confident smiles, not chair time.",
  },
];

export const reviews = [
  {
    name: "Jennifer M.",
    initial: "J",
    date: "2 weeks ago",
    body: "Dr. How is the most gentle dentist I have ever been to. The whole team is warm, professional, and they explain everything clearly. My whole family comes here now.",
    reviewCount: 38,
    localGuide: true,
    avatarColor: "#0e6e7d",
  },
  {
    name: "Raj P.",
    initial: "R",
    date: "1 month ago",
    body: "Got veneers done with Dr. How and the result is incredible — they look completely natural. Zero pressure, fair pricing, and the office is spotless.",
    reviewCount: 14,
    localGuide: false,
    avatarColor: "#88a59d",
  },
  {
    name: "Marcus L.",
    initial: "M",
    date: "3 weeks ago",
    body: "Came in with a broken molar and Dr. How saw me the same day. Painless root canal and a beautiful crown a few weeks later. Best dentist in Mississauga, hands down.",
    reviewCount: 76,
    localGuide: true,
    avatarColor: "#c9a04b",
  },
  {
    name: "Anita D.",
    initial: "A",
    date: "2 months ago",
    body: "First dentist who actually listened to my anxiety and walked me through every step. My kids love coming here too. Highly recommend Colonnade Dental.",
    reviewCount: 6,
    localGuide: false,
    avatarColor: "#1a73e8",
  },
];

/** Hours per the published Colonnade Dental schedule. */
export const hours = [
  { day: "Monday", time: "10:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "10:00 AM – 6:00 PM" },
  { day: "Thursday", time: "10:00 AM – 6:00 PM" },
  { day: "Friday", time: "10:00 AM – 6:00 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
];

export const awards = [
  {
    title: "Top Dentist",
    year: "2022",
    region: "Mississauga",
    category: "Family Dentistry",
    variant: "gold" as const,
  },
  {
    title: "Patients' Choice",
    year: "2024",
    region: "Peel Region",
    category: "Cosmetic Dentistry",
    variant: "teal" as const,
  },
  {
    title: "Best of Mississauga",
    year: "2023",
    region: "Mississauga News",
    category: "Dental Care",
    variant: "sage" as const,
  },
  {
    title: "Excellence Award",
    year: "2025",
    region: "Ontario Dental Assoc.",
    category: "Microscope Dentistry",
    variant: "gold" as const,
  },
];

export const faqItems: FaqItem[] = [
  {
    q: "Where is Colonnade Dental located?",
    a: "We are located on the ground floor of The Colonnade building at the northwest corner of Hurontario and Dundas streets in Mississauga — 3024 Hurontario Street, Unit G9. Free patient parking on site, wheelchair-accessible entrance, and steps from major bus routes.",
  },
  {
    q: "Are you accepting new patients?",
    a: "Absolutely. We always welcome new patients and offer a complimentary exam, x-rays, and treatment consultation for your first visit (a $290 value).",
  },
  {
    q: "Do I need a referral to see a dentist?",
    a: "No. You do not need a doctor's referral to book an appointment with us. Anyone can book a free new-patient exam directly.",
  },
  {
    q: "What insurance do you accept?",
    a: "We accept all major Canadian dental insurance providers including Sun Life, Manulife, Canada Life, Green Shield, Desjardins, and more. We are happy to verify your coverage and submit claims directly on your behalf.",
  },
  {
    q: "Do you accept the Canadian Dental Care Plan (CDCP)?",
    a: "Yes — we proudly accept CDCP patients. The plan offers publicly funded dental benefits to individuals with annual household incomes below $90,000 who do not have private dental insurance. Just book an appointment and our team will handle the rest.",
  },
  {
    q: "What technology do you use?",
    a: "We are one of the few clinics in Ontario that routinely use surgical microscopes and laser dentistry. These tools allow for greater visibility and precision, which means more accurate diagnoses, gentler treatment, and longer-lasting results.",
  },
  {
    q: "Is dental care safe for children and seniors?",
    a: "Absolutely. Dr. How has cared for patients of every age for over 20 years — from a child's first cleaning to grandparents' implants and dentures.",
  },
  {
    q: "I have a dental emergency — when can I come in?",
    a: "We reserve time in our daily schedule for emergencies, so we can typically see you the same day. Call us directly at (905) 276-9991 if you have a dental emergency.",
  },
  {
    q: "How quickly can I be seen?",
    a: "Most new patients are seen within the same week. Call or WhatsApp us and we'll find a time that works for you, often as soon as the next day.",
  },
];

export const firstVisitSteps = [
  {
    title: "Book Online or Call",
    blurb:
      "Choose a time that works for you. Most new patients are seen within the week.",
  },
  {
    title: "Quick Insurance Check",
    blurb:
      "We verify your benefits before you walk in — zero surprises at checkout.",
  },
  {
    title: "Complimentary Exam & X-Rays",
    blurb:
      "A 45-minute comprehensive exam, digital x-rays, and oral-cancer screening with Dr. How.",
  },
  {
    title: "Personalized Treatment Plan",
    blurb:
      "We walk through findings on screen and design a plan tailored to your goals and budget.",
  },
  {
    title: "Your First Cleaning",
    blurb:
      "Gentle, thorough cleaning by our hygienist — you leave with a brighter, healthier smile.",
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
    title: "No long-term contracts",
    body: "Pay-as-you-go. No multi-year membership fees, no buy-ins, no commitments. Stop any time.",
  },
  {
    title: "No high-pressure sales",
    body: "Dr. How will recommend a plan, then leave the decision to you. Take it home, sleep on it.",
  },
  {
    title: "No surprise bills",
    body: "We verify insurance before your visit and walk you through every cost — in writing — first.",
  },
];

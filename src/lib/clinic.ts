/**
 * Single source of truth for Colonnade Dental clinic info.
 * Edit here and every page (home, /about, /services, footer, schema) updates.
 *
 * All values are verified against colonnadedental.com — no fabricated awards,
 * patient counts, ratings, or promotions live in this file.
 */
export const CLINIC = {
  name: "Colonnade Dental",
  tagline: "A beautiful smile never goes out of style.",
  doctor: {
    name: "Dr. Vincent How",
    short: "Dr. How",
    credentials: "DDS",
    title: "Family Dentist",
    /** Verified from colonnadedental.com/meet-the-dentist */
    school: "University of Western Ontario, Faculty of Dentistry",
    gradYear: 1992,
    residency: "London Hospitals",
  },
  phone: "9052769991",
  phoneDisplay: "(905) 276-9991",
  whatsapp: "19052769991",
  fax: "(905) 896-1902",
  email: "info@colonnadedental.com",
  address: {
    street: "3024 Hurontario Street, Unit G9",
    line1: "3024 Hurontario Street, Unit G9",
    line2: "Mississauga, ON L5B 4M4",
    city: "Mississauga",
    region: "ON",
    postal: "L5B 4M4",
    country: "Canada",
  },
  /** Verified location language from colonnadedental.com/contact-us */
  locationNote:
    "Ground floor of The Colonnade building, NW corner of Hurontario & Dundas.",
  mapsQuery:
    "Colonnade Dental, 3024 Hurontario Street Unit G9, Mississauga, ON L5B 4M4",
  /** "Over 20 years" per colonnadedental.com/meet-the-team — kept generic. */
  yearsServing: "20+",
  social: {
    instagram: "https://www.instagram.com/colonnadedental/",
    facebook: "https://www.facebook.com/colonnadedental/",
    google:
      "https://www.google.com/search?q=Colonnade+Dental+Mississauga+Dr+Vincent+How",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/#technology" },
  { label: "Visit", href: "/#visit" },
  { label: "Contact", href: "/#contact" },
] as const;

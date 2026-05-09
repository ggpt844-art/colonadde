import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SkipLink from "@/components/SkipLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://colonnadedental.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Colonnade Dental | Dr. Vincent How — Dentist in Mississauga, ON",
    template: "%s | Colonnade Dental",
  },
  description:
    "Family dental practice in Mississauga led by Dr. Vincent How. 20+ years of microscope-enhanced, laser-assisted dentistry — cleanings, cosmetic, implants, root canals, and Chao Pinhole® gum rejuvenation. 3024 Hurontario Street.",
  keywords: [
    "dentist Mississauga",
    "Colonnade Dental",
    "Dr. Vincent How",
    "Hurontario dentist",
    "Mississauga dental clinic",
    "dental implants Mississauga",
    "cosmetic dentistry Mississauga",
    "laser dentistry Mississauga",
    "surgical microscope dentist",
    "Chao Pinhole gum rejuvenation",
    "family dentist Mississauga",
  ],
  authors: [{ name: "Colonnade Dental" }],
  creator: "Colonnade Dental",
  publisher: "Colonnade Dental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Colonnade Dental",
    title: "Colonnade Dental | Dr. Vincent How — Dentist in Mississauga, ON",
    description:
      "20+ years of microscope-enhanced, laser-assisted dentistry from Dr. Vincent How. A beautiful smile never goes out of style.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colonnade Dental | Dr. Vincent How — Dentist in Mississauga, ON",
    description:
      "20+ years of microscope-enhanced, laser-assisted dentistry from Dr. Vincent How. A beautiful smile never goes out of style.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#c89535",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "Dentist"],
  "@id": `${SITE_URL}/#clinic`,
  name: "Colonnade Dental",
  alternateName: "Dr. Vincent How — Colonnade Dental",
  description:
    "Family dental clinic in Mississauga led by Dr. Vincent How. Preventative, cosmetic, implant, and prosthodontic care using surgical microscopes (up to 12×) and KaVo K.E.Y / Fotona Lightwalker AT-S laser dentistry — included on every visit at no additional cost. Serving Mississauga and surrounding areas for over 20 years.",
  slogan: "A beautiful smile never goes out of style.",
  url: SITE_URL,
  telephone: "+1-905-276-9991",
  faxNumber: "+1-905-896-1902",
  email: "info@colonnadedental.com",
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/icon`,
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
  paymentAccepted: "Visa, MasterCard, Debit, Cash, Cheque",
  currenciesAccepted: "CAD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3024 Hurontario Street, Unit G9",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5B 4M4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5879,
    longitude: -79.6441,
  },
  hasMap:
    "https://maps.google.com/?q=3024+Hurontario+Street+Unit+G9%2C+Mississauga%2C+ON+L5B+4M4",
  areaServed: [
    { "@type": "City", name: "Mississauga" },
    { "@type": "AdministrativeArea", name: "Peel Region" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "18:00" },
  ],
  // Real awards published on colonnadedental.com/meet-the-dentist.
  // No fabricated rankings, "best of" badges, or aggregate ratings.
  award: [
    "Quintessence Research Award",
    "Toronto Academy Crown & Bridge Study Club Award",
    "Association of Prosthodontics of Ontario Award",
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Vincent How",
    honorificPrefix: "Dr.",
    honorificSuffix: "DDS",
    jobTitle: "Doctor of Dental Surgery",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Western Ontario, Faculty of Dentistry",
    },
    memberOf: [
      { "@type": "Organization", name: "Ontario Dental Association" },
      { "@type": "Organization", name: "Canadian Dental Association" },
      { "@type": "Organization", name: "International Orthodontic Association" },
      { "@type": "Organization", name: "Halton Peel Dental Association" },
    ],
  },
  sameAs: [
    "https://www.instagram.com/colonnadedental/",
    "https://www.facebook.com/colonnadedental/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Colonnade Dental",
  inLanguage: "en-CA",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#faf6ee] text-[#1a1a1a] min-h-screen font-sans"
        suppressHydrationWarning
      >
        <SkipLink />
        {children}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}

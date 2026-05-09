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
    default: "Colonnade Dental | Trusted Dentist in Mississauga, ON",
    template: "%s | Colonnade Dental",
  },
  description:
    "Family-owned dental practice in Mississauga since 2003. Dr. Vincent How offers gentle, modern dentistry — cleanings, cosmetic, implants, Invisalign, and more. Free new-patient exam.",
  keywords: [
    "dentist Mississauga",
    "Colonnade Dental",
    "Dr. Vincent How",
    "Hurontario dentist",
    "Mississauga dental clinic",
    "dental implants Mississauga",
    "cosmetic dentistry Mississauga",
    "Invisalign Mississauga",
    "teeth whitening Mississauga",
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
    title: "Colonnade Dental | Trusted Dentist in Mississauga, ON",
    description:
      "Family-owned dental practice in Mississauga since 2003 — gentle, modern dentistry from Dr. Vincent How.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colonnade Dental | Trusted Dentist in Mississauga, ON",
    description:
      "Family-owned dental practice in Mississauga since 2003 — gentle, modern dentistry from Dr. Vincent How.",
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
  themeColor: "#0e6e7d",
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
    "Family dental clinic in Mississauga led by Dr. Vincent How. Preventative, cosmetic, implant, and orthodontic care using surgical microscopes and laser dentistry. Serving Mississauga and the Peel Region since 2003.",
  url: SITE_URL,
  telephone: "+1-905-276-9991",
  faxNumber: "+1-905-896-1902",
  email: "info@colonnadedental.com",
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/icon`,
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "180",
    bestRating: "5",
    worstRating: "1",
  },
  award: [
    "Top Dentist 2022 — Mississauga — Family Dentistry",
    "Patients' Choice 2024 — Peel Region — Cosmetic Dentistry",
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Vincent How",
    honorificPrefix: "Dr.",
    honorificSuffix: "DDS",
    jobTitle: "Doctor of Dental Surgery",
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="bg-[#fbf8f3] text-[#1a1a1a] min-h-screen font-sans">
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

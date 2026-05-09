/**
 * Tiny cream-tinted SVG used as a blurDataURL for next/image.
 * Matches the warm cream of the Colonnade Dental brand palette so images
 * fade in without a colour pop.
 */
export const IMAGE_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmMGU2Y2YiLz48L3N2Zz4=";

/**
 * Centralized image URLs. Dr. How uses self-hosted photography from
 * /public/images. Remaining entries use Unsplash until replaced.
 */
export const PHOTOS = {
  /** Official portrait — served from /public/images */
  drHow: "/images/dr-vincent-how.png",
  clinicInterior:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
  exam:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
  cleaning:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80",
  smile:
    "https://images.unsplash.com/photo-1559131397-f94da358f7ca?auto=format&fit=crop&w=1400&q=80",
  microscope:
    "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1400&q=80",
  laser:
    "https://images.unsplash.com/photo-1606811957098-6c4d56cea816?auto=format&fit=crop&w=1400&q=80",
  family:
    "https://images.unsplash.com/photo-1581585099522-f6ac2efe6217?auto=format&fit=crop&w=1400&q=80",
  award:
    "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1400&q=80",
  insta1:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
  insta2:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  insta3:
    "https://images.unsplash.com/photo-1606811951341-1d9b4a0e7b4f?auto=format&fit=crop&w=600&q=80",
  insta4:
    "https://images.unsplash.com/photo-1559131397-f94da358f7ca?auto=format&fit=crop&w=600&q=80",
  insta5:
    "https://images.unsplash.com/photo-1581585099522-f6ac2efe6217?auto=format&fit=crop&w=600&q=80",
  insta6:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
  heroVideoPoster:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
} as const;

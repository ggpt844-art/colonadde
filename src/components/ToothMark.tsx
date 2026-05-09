type Props = {
  size?: number;
  className?: string;
  withWordmark?: boolean;
  inverted?: boolean;
};

/**
 * Colonnade Dental brand mark — an inline-rendered tooth + arch glyph.
 * Pure SVG so no /public asset is needed and the mark scales crisply.
 */
export default function ToothMark({
  size = 36,
  className = "",
  withWordmark = false,
  inverted = false,
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative shrink-0 inline-grid place-items-center"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          className="block"
          fill="none"
        >
          {/* Coin / seal background */}
          <circle cx="32" cy="32" r="30" fill="#0e6e7d" />
          <circle
            cx="32"
            cy="32"
            r="27"
            fill="none"
            stroke="#c9a04b"
            strokeWidth="1.2"
            opacity="0.55"
          />
          {/* Tooth body */}
          <path
            d="M32 14
               C 24 14, 19 18, 19 25
               C 19 31, 22 35, 23.5 41
               C 24.5 45, 25 50, 27 50
               C 28.6 50, 29 46, 30.2 43
               C 30.8 41.4, 31.3 41, 32 41
               C 32.7 41, 33.2 41.4, 33.8 43
               C 35 46, 35.4 50, 37 50
               C 39 50, 39.5 45, 40.5 41
               C 42 35, 45 31, 45 25
               C 45 18, 40 14, 32 14 Z"
            fill="#fbf8f3"
          />
          {/* Sparkle */}
          <path
            d="M40 20 l1.5 3 l3 1.5 l-3 1.5 l-1.5 3 l-1.5 -3 l-3 -1.5 l3 -1.5 z"
            fill="#c9a04b"
            opacity="0.95"
          />
        </svg>
      </span>
      {withWordmark && (
        <span className="leading-[0.95] tracking-tight">
          <span
            className={`block font-black text-[14px] ${
              inverted ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            COLONNADE
          </span>
          <span className="block text-[#0e6e7d] text-[8.5px] font-bold tracking-[0.32em]">
            DENTAL
          </span>
        </span>
      )}
    </span>
  );
}

type Props = {
  size?: number;
  className?: string;
  withWordmark?: boolean;
  inverted?: boolean;
};

/**
 * Colonnade Dental brand mark — two classical columns + arch/entablature
 * (the literal "colonnade" the practice is named after) rendered in pure SVG.
 * Mirrors the existing logo motif on colonnadedental.com: black columns on a
 * warm-gold seal. Stays crisp at favicon size.
 */
export default function ColonnadeMark({
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
          {/* Gold seal */}
          <circle cx="32" cy="32" r="30" fill="#c89535" />
          <circle
            cx="32"
            cy="32"
            r="27"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.8"
            opacity="0.35"
          />

          {/* Pediment arch above the columns */}
          <path
            d="M13 22 Q 32 7, 51 22"
            stroke="#1a1a1a"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Entablature beam */}
          <rect x="12" y="22" width="40" height="3.4" rx="0.6" fill="#1a1a1a" />

          {/* Capitals */}
          <rect x="16" y="25.4" width="9" height="2.4" fill="#1a1a1a" />
          <rect x="39" y="25.4" width="9" height="2.4" fill="#1a1a1a" />

          {/* Column shafts */}
          <rect x="18.5" y="27.8" width="4" height="20" fill="#1a1a1a" />
          <rect x="41.5" y="27.8" width="4" height="20" fill="#1a1a1a" />

          {/* Subtle vertical fluting */}
          <line
            x1="20.5"
            y1="29"
            x2="20.5"
            y2="46.5"
            stroke="#c89535"
            strokeWidth="0.45"
            opacity="0.6"
          />
          <line
            x1="43.5"
            y1="29"
            x2="43.5"
            y2="46.5"
            stroke="#c89535"
            strokeWidth="0.45"
            opacity="0.6"
          />

          {/* Bases */}
          <rect x="16" y="47.8" width="9" height="2.4" fill="#1a1a1a" />
          <rect x="39" y="47.8" width="9" height="2.4" fill="#1a1a1a" />

          {/* Plinth */}
          <rect x="12" y="50.2" width="40" height="3.4" rx="0.6" fill="#1a1a1a" />
        </svg>
      </span>
      {withWordmark && (
        <span className="leading-[0.95] tracking-tight">
          <span
            className={`block font-display italic text-[16px] ${
              inverted ? "text-white" : "text-[#1a1a1a]"
            }`}
            style={{ letterSpacing: "0.01em" }}
          >
            Colonnade
          </span>
          <span
            className={`block text-[8.5px] font-bold tracking-[0.34em] ${
              inverted ? "text-[#f3deaa]" : "text-[#a67a1f]"
            }`}
          >
            DENTAL
          </span>
        </span>
      )}
    </span>
  );
}

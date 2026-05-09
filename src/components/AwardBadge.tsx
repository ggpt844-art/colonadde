type Props = {
  title: string;
  year?: string;
  region?: string;
  category: string;
  variant?: "gold" | "ink" | "sage";
};

const palettes = {
  gold: { ring: "#c89535", bg: "#fbf2d8", ink: "#7a5614", accent: "#a67a1f" },
  ink: { ring: "#1a1a1a", bg: "#f3eed8", ink: "#1a1a1a", accent: "#3a3a3a" },
  sage: { ring: "#6f8a7f", bg: "#eef3f0", ink: "#3f5e54", accent: "#52776c" },
};

/**
 * Original ribbon-seal award badge. Describes the award factually without
 * reproducing any official trademarked badge artwork.
 *
 * Long professional titles (e.g. "Toronto Academy Crown & Bridge Study Club
 * Award") are split across multiple lines with a smaller font and a wider seal
 * so nothing overlaps the ribbon ornament beneath.
 */
export default function AwardBadge({
  title,
  year = "",
  region = "",
  category,
  variant = "gold",
}: Props) {
  const p = palettes[variant];

  // Adapt typography to title length so multi-word professional honours
  // (which can run 30-50 characters) do not collide with the ribbon swatches.
  let titleClass: string;
  if (title.length > 40) {
    titleClass = "text-[9px] font-black uppercase mt-1 leading-[1.1]";
  } else if (title.length > 22) {
    titleClass = "text-[10.5px] font-black uppercase mt-1 leading-[1.1]";
  } else {
    titleClass = "text-[12.5px] font-black uppercase mt-1 leading-tight";
  }

  return (
    <div
      className="award-shimmer group relative shrink-0 w-[200px] h-[220px] grid place-items-center rounded-2xl ring-1 ring-black/5 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
      role="img"
      aria-label={`${title}${year ? ` ${year}` : ""}${region ? ` — ${region}` : ""} — ${category}`}
    >
      <div
        className="relative w-[176px] h-[196px] grid place-items-center"
        style={{ color: p.accent }}
      >
        <svg
          viewBox="0 0 176 196"
          className="absolute inset-0"
          aria-hidden
          fill="none"
        >
          <defs>
            <radialGradient id={`g-${variant}`} cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor={p.bg} />
              <stop offset="100%" stopColor="white" />
            </radialGradient>
          </defs>
          <g transform="translate(88 80)">
            {Array.from({ length: 32 }).map((_, i) => {
              const a = (i / 32) * Math.PI * 2;
              const r = i % 2 === 0 ? 64 : 56;
              const x = Math.cos(a) * r;
              const y = Math.sin(a) * r;
              return i === 0 ? (
                <path
                  key={i}
                  d={`M${x} ${y} ${Array.from({ length: 32 })
                    .map((__, j) => {
                      const aa = ((j + 1) / 32) * Math.PI * 2;
                      const rr = (j + 1) % 2 === 0 ? 64 : 56;
                      return `L${Math.cos(aa) * rr} ${Math.sin(aa) * rr}`;
                    })
                    .join(" ")} Z`}
                  fill={`url(#g-${variant})`}
                  stroke={p.ring}
                  strokeWidth="1.5"
                />
              ) : null;
            })}
            <circle r="48" fill="white" stroke={p.ring} strokeWidth="1" />
          </g>
          {/* Ribbon swatches sit below the seal; pushed lower so the title can
              breathe inside the medallion. */}
          <path
            d="M64 158 L52 192 L76 180 L88 192 L88 164 Z"
            fill={p.ring}
          />
          <path
            d="M112 158 L124 192 L100 180 L88 192 L88 164 Z"
            fill={p.accent}
          />
        </svg>
        <div className="relative z-10 text-center px-3 leading-tight max-w-[120px] -mt-3">
          <div
            className="text-[8px] tracking-[0.18em] font-bold uppercase"
            style={{ color: p.ink }}
          >
            {category}
          </div>
          <div
            className={titleClass}
            style={{ color: p.accent }}
          >
            {title}
          </div>
          {year && (
            <div
              className="mt-1.5 text-[10px] font-bold tracking-wider"
              style={{ color: p.ink }}
            >
              {year}
            </div>
          )}
          {region && (
            <div
              className="text-[7.5px] font-semibold tracking-wider uppercase opacity-80"
              style={{ color: p.ink }}
            >
              {region}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

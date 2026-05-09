/**
 * Plain, large-label smile diagram for the Services page.
 * Designed to be readable for an audience that includes older patients:
 *  - big sans-serif labels
 *  - high contrast
 *  - no fiddly anatomical detail
 *  - decorative only (semantic title + role="img")
 */

type Spot = {
  cy: number;
  side: "left" | "right";
  label: string;
  sub: string;
};

const spots: Spot[] = [
  { cy: 240, side: "left", label: "Front teeth", sub: "Veneers, whitening, bonding" },
  { cy: 240, side: "right", label: "Smile design", sub: "Cosmetic & full makeovers" },
  { cy: 420, side: "left", label: "Molars", sub: "Crowns, fillings, root canals" },
  { cy: 420, side: "right", label: "Gums", sub: "Cleanings & periodontal care" },
];

export default function SmileDiagram({ className = "" }: { className?: string }) {
  // 14 tooth shapes arched along the smile line
  const teeth = Array.from({ length: 14 }).map((_, i) => {
    const t = i / 13;
    const angle = Math.PI * (0.15 + t * 0.7);
    const x = 600 - Math.cos(angle) * 150;
    const y = 320 - Math.sin(angle) * 80;
    return { x, y };
  });

  return (
    <svg
      viewBox="0 0 1200 560"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-labelledby="smile-title smile-desc"
    >
      <title id="smile-title">
        Areas of the mouth Colonnade Dental treats
      </title>
      <desc id="smile-desc">
        A simple line drawing of an upper dental arch with four labels: front
        teeth, smile design, molars, and gums.
      </desc>

      {/* Arch */}
      <path
        d="M420 330 Q 600 90, 780 330"
        stroke="#0e6e7d"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Tooth shapes along the arch */}
      {teeth.map((d, i) => (
        <rect
          key={i}
          x={d.x - 11}
          y={d.y - 14}
          width={22}
          height={28}
          rx={9}
          fill="#fbf8f3"
          stroke="#0e6e7d"
          strokeWidth={2.2}
        />
      ))}

      {/* Labels */}
      {spots.map((s) => {
        const archLeft = 420;
        const archRight = 780;
        const startX = s.side === "right" ? archRight + 10 : archLeft - 10;
        const endX = s.side === "right" ? 940 : 260;
        const textX = s.side === "right" ? endX + 10 : endX - 10;
        const anchor = s.side === "right" ? "start" : "end";
        return (
          <g key={s.label}>
            <line
              x1={startX}
              y1={s.cy}
              x2={endX}
              y2={s.cy}
              stroke="#1a1a1a"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle cx={endX} cy={s.cy} r="4" fill="#0e6e7d" />
            <text
              x={textX}
              y={s.cy - 4}
              textAnchor={anchor}
              fill="#1a1a1a"
              fontSize="28"
              fontWeight={800}
              fontFamily="var(--font-fraunces), Georgia, serif"
            >
              {s.label}
            </text>
            <text
              x={textX}
              y={s.cy + 24}
              textAnchor={anchor}
              fill="#2c2c2c"
              fontSize="16"
              fontWeight={500}
            >
              {s.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

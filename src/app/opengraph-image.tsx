import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Colonnade Dental — Dr. Vincent How, Dentist in Mississauga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          background: "#1a1a1a",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              background: "#c89535",
              color: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 900,
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <div
              style={{
                fontSize: 30,
                fontWeight: 900,
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                letterSpacing: "-0.01em",
              }}
            >
              Colonnade
            </div>
            <div style={{ fontSize: 14, color: "#c89535", fontWeight: 700, letterSpacing: "0.34em", marginTop: 6 }}>
              DENTAL
            </div>
          </div>
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 26,
              color: "#c89535",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            DR. VINCENT HOW · MISSISSAUGA · 20+ YEARS
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "white",
              fontFamily: "Georgia, serif",
            }}
          >
            A beautiful smile{" "}
            <span style={{ color: "#c89535", fontStyle: "italic" }}>
              never goes out of style.
            </span>
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.78)", lineHeight: 1.3, maxWidth: 980 }}>
            Microscope-enhanced, laser-assisted dentistry on Hurontario Street —
            included on every visit at no additional cost.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "#c89535",
            opacity: 0.35,
            filter: "blur(90px)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

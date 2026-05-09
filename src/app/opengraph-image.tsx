import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Colonnade Dental — Trusted Dentist in Mississauga";
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#0e6e7d",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 900,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.04em" }}>
              COLONNADE
            </div>
            <div style={{ fontSize: 13, color: "#c9a04b", fontWeight: 700, letterSpacing: "0.32em", marginTop: 4 }}>
              DENTAL
            </div>
          </div>
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              color: "#c9a04b",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            TRUSTED MISSISSAUGA DENTIST · SINCE 2003
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "white",
            }}
          >
            Your smile.{" "}
            <span style={{ color: "#c9a04b" }}>Our craft.</span>
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.75)", lineHeight: 1.3, maxWidth: 950 }}>
            Free new-patient exam with Dr. Vincent How — gentle, modern dentistry on Hurontario St.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 380,
            height: 380,
            borderRadius: 999,
            background: "#0e6e7d",
            opacity: 0.4,
            filter: "blur(80px)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

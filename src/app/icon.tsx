import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Tab-bar / favicon for Colonnade Dental.
 * Mirrors the site mark: black columns silhouette on a warm-gold seal.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#c89535",
          color: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 900,
          fontStyle: "italic",
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "-0.02em",
          borderRadius: 8,
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}

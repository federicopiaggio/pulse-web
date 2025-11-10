import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Pulse Bariloche - Team Building Through Rhythm";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function OgImage() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "linear-gradient(135deg, #0066cc 0%, #0099ff 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Pulse Bariloche
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Team Building Through Rhythm
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 30,
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          Unite your team through musical experiences in Bariloche
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}

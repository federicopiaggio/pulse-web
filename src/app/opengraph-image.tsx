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
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://pulsebariloche.com.ar"
      : "http://localhost:3000";

  const [avenirBlack, avenirRegular] = await Promise.all([
    fetch(new URL("../../public/fonts/Avenir-black.ttf", import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(
      new URL("../../public/fonts/Avenir-regular.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        color: "white",
        fontFamily: "Avenir Regular",
        overflow: "hidden",
      }}
    >
      <img
        src={`${baseUrl}/assets/gente-4.png`}
        alt="Pulse Bariloche team session"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 42%",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(9, 13, 30, 0.86) 0%, rgba(9, 13, 30, 0.58) 44%, rgba(9, 13, 30, 0.28) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <img
            src={`${baseUrl}/assets/icon.svg`}
            alt="Pulse Bariloche logo"
            style={{
              width: 108,
              height: 36,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.05,
            }}
          >
            <span
              style={{
                fontSize: 30,
                fontFamily: "Avenir Black",
              }}
            >
              Pulse Bariloche
            </span>
            <span
              style={{
                fontSize: 16,
                opacity: 0.86,
              }}
            >
              Team Building Through Rhythm
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 720,
            lineHeight: 1.08,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontFamily: "Avenir Black",
              marginBottom: 10,
            }}
          >
            Unite your team
          </span>
          <span
            style={{
              fontSize: 38,
              opacity: 0.95,
            }}
          >
            through rhythm in Bariloche
          </span>
        </div>

        <div
          style={{
            fontSize: 22,
            opacity: 0.9,
            letterSpacing: 0.2,
          }}
        >
          Rhythmic Sign Language experiences for companies and groups
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Avenir Black",
          data: avenirBlack,
          style: "normal",
          weight: 700,
        },
        {
          name: "Avenir Regular",
          data: avenirRegular,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}

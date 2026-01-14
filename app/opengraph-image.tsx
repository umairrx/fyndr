import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Fyndr - Connect, Collaborate, Create";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#0c0c0c",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Abstract background shapes */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(195, 245, 60, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(233, 32, 38, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />

        {/* Logo and brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "30px",
            zIndex: 10,
          }}
        >
          {/* Inline SVG Logo */}
          <div
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 375 375"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clip0">
                  <path d="M 64 0 L 303 0 L 303 374.921875 L 64 374.921875 Z" />
                </clipPath>
              </defs>
              <g clipPath="url(#clip0)">
                <path
                  fill="#e92026"
                  d="M 186.699219 -0.0273438 C 185.613281 -0.0546875 184.492188 -0.0664062 183.375 -0.0664062 C 182.265625 -0.0664062 181.15625 -0.0546875 180.046875 -0.0273438 C 92.046875 2.210938 37.671875 97.246094 78.582031 175.191406 L 110.035156 235.144531 L 183.375 374.921875 L 209.171875 325.742188 C 198.628906 306.152344 188.054688 286.5625 177.496094 266.96875 C 161.363281 237.042969 145.234375 207.113281 129.101562 177.210938 C 120.90625 162.015625 113.09375 146.519531 110.957031 129.140625 C 105.800781 87.226562 141.546875 49.910156 183.085938 49.75 C 223.820312 49.589844 256.871094 82.535156 256.871094 123.210938 C 256.871094 163.789062 223.953125 196.675781 183.375 196.675781 C 182.035156 196.675781 180.710938 196.640625 179.382812 196.574219 L 228.292969 289.339844 L 256.734375 235.144531 L 288.160156 175.191406 C 329.078125 97.246094 274.703125 2.210938 186.695312 -0.0273438 Z"
                />
              </g>
            </svg>
          </div>
          <span
            style={{
              fontWeight: 800,
              fontSize: 80,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            fyndr
          </span>
        </div>

        {/* User avatars decoration */}
        <div
          style={{
            display: "flex",
            marginTop: 20,
            marginBottom: 40,
            zIndex: 10,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: `#${["C3F53C", "e92026", "ffffff", "333333"][i]}`,
                border: "4px solid #0c0c0c",
                marginLeft: i === 0 ? 0 : -20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: "bold",
                color: "#0c0c0c",
              }}
            >
              {i === 2 && "+"}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
            color: "#888888",
            zIndex: 10,
          }}
        >
          Find your perfect creative partner
        </div>

        {/* Domain footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#444444",
            letterSpacing: "0.05em",
            zIndex: 10,
            display: "flex",
          }}
        >
          fyndr.umairrx.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

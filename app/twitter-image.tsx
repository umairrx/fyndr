import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Fynder - Find Your Startup Pitch";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Fetch the logo SVG
  const logoSvg = await fetch(
    new URL("../public/Logo.svg", import.meta.url)
  ).then((res) => res.text());

  // Convert to base64 data URI
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(
    logoSvg
  ).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#111111",
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
        {/* Yellow accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(213, 255, 47, 0.1) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Decorative dots pattern */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {[0, 1, 2].map((row) => (
            <div key={row} style={{ display: "flex", gap: 12 }}>
              {[0, 1, 2].map((col) => (
                <div
                  key={col}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background:
                      row === 1 && col === 1
                        ? "#d5ff2f"
                        : "rgba(255,255,255,0.15)",
                    display: "flex",
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Logo and brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* Actual logo */}
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(213, 255, 47, 0.4)",
                overflow: "hidden",
              }}
            >
              <img src={logoDataUri} width={70} height={70} alt="Fynder Logo" />
            </div>
            <span
              style={{
                fontWeight: 900,
                letterSpacing: "-0.03em",
                fontSize: 80,
              }}
            >
              Fynder
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 30,
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
              color: "#d5d5d5",
            }}
          >
            Find Your Startup Pitch
          </div>

          {/* Feature highlight */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 32,
            }}
          >
            <div
              style={{
                width: 40,
                height: 2,
                background: "#d5ff2f",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 16,
                color: "#a2a2a2",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Connect • Discover • Invest
            </span>
            <div
              style={{
                width: 40,
                height: 2,
                background: "#d5ff2f",
                display: "flex",
              }}
            />
          </div>
        </div>

        {/* Decorative corner element */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            display: "flex",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 60,
              height: 4,
              background: "#d5ff2f",
              borderRadius: 2,
              display: "flex",
            }}
          />
          <div
            style={{
              width: 20,
              height: 4,
              background: "rgba(213, 255, 47, 0.4)",
              borderRadius: 2,
              display: "flex",
            }}
          />
        </div>

        {/* Domain footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.3)",
            letterSpacing: "0.05em",
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

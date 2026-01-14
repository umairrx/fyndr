import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@uiw/react-md-editor/markdown-editor.css";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fyndr.umairrx.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Fynder - Find your startup pitch",
    template: "%s | Fynder",
  },
  description:
    "Browse and discover startup pitches, connect with entrepreneurs, and find your next big opportunity.",
  keywords: [
    "startup",
    "pitch",
    "entrepreneurship",
    "business",
    "innovation",
    "Fynder",
    "investors",
    "funding",
  ],
  openGraph: {
    title: "Fynder - Find your startup pitch",
    description:
      "Browse and discover startup pitches, connect with entrepreneurs, and find your next big opportunity with Fynder.",
    url: "https://fyndr.umairrx.dev",
    siteName: "Fynder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fynder - Find your startup pitch",
    description:
      "Browse and discover startup pitches, connect with entrepreneurs, and find your next big opportunity with Fynder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} ${workSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

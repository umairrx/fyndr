import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

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
  title: "Fynder | Find and Perfect Your Startup Pitch",
  description: "Create, refine, and perfect your startup pitch with Fynder. Get expert feedback and connect with investors to take your startup to the next level.",
  keywords: "startup pitch, pitch deck, startup funding, investor pitch, pitch optimization",
  openGraph: {
    title: "Fynder | Find and Perfect Your Startup Pitch",
    description: "Create, refine, and perfect your startup pitch with Fynder. Get expert feedback and connect with investors.",
    type: "website",
    locale: "en_US",
    siteName: "Fynder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fynder | Find and Perfect Your Startup Pitch",
    description: "Create, refine, and perfect your startup pitch with Fynder. Get expert feedback and connect with investors.",
  },
  robots: {
    index: true,
    follow: true,
  },
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

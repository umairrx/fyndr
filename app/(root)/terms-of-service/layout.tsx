"use client";
import React from "react";
import FadeContent from "@/components/blocks/Animations/FadeContent/FadeContent";

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background-black text-primary-color min-h-screen">
      <FadeContent duration={1000} className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {children}
      </FadeContent>
    </div>
  );
}

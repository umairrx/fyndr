"use server";
import React from 'react';
import { StartupSection } from '@/components/sections/StartupSection';

export default async function StartupPage() {

  return (
    <div className="px-6 py-3 md:py-6 flex flex-col bg-background-black text-primary-color">
      <StartupSection />
    </div>
  )
}
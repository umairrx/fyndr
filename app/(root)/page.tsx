"use server";
import ContactUs from '@/components/sections/ContactUs'
import Faq from '@/components/sections/Faq'
import HeroSection from '@/components/sections/HeroSection'
import WhyUs from '@/components/sections/WhyUs'
import { SanityLive } from '@/sanity/lib/live'
import { StartupSection } from '@/components/sections/StartupSection'
import React from 'react'

export default async function page() {
  return (
    <>
      <HeroSection />
      <div className="px-6 py-3 md:py-6 flex flex-col bg-background-black text-primary-color">
        <StartupSection />
      </div>
      <WhyUs />
      <Faq />
      <ContactUs />
      <SanityLive />
    </>
  )
}
